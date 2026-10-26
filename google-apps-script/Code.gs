/**
 * Noa portfolio meeting requests — Google Apps Script web app.
 *
 * Setup:
 * 1. Create a new Apps Script project while signed into Noa's Google account.
 * 2. Paste this file into Code.gs.
 * 3. In Project Settings, set timezone to Europe/Madrid.
 * 4. Deploy > New deployment > Web app.
 *    Execute as: Me. Who has access: Anyone.
 * 5. Authorize Calendar and Mail permissions when prompted.
 * 6. Copy the deployed /exec URL into the portfolio's MEETING_API_URL setting.
 *
 * Requests are emailed to Noa for manual approval. Events are only created
 * after Noa clicks Approve. Do not paste secret credentials into the website.
 */
const CONFIG = {
  notificationEmail: 'noa.younes.regidor@outlook.com',
  timezone: 'Europe/Madrid',
  daysAhead: 14,
  slots: ['10:00', '11:30', '13:00', '15:00', '16:30'],
  meetingMinutes: 60,
  tokenPrefix: 'NOA_MEETING_'
};

function doGet(e) {
  const params = (e && e.parameter) || {};
  if (params.action === 'availability') {
    const result = getAvailability_(params.from || '', Number(params.days || CONFIG.daysAhead));
    return output_(result, params.callback);
  }
  if (params.action === 'decision') {
    return decision_(String(params.token || ''), String(params.choice || ''));
  }
  return output_({ ok: true, service: 'Noa meeting requests', actions: ['availability', 'decision'] }, params.callback);
}

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const name = clean_(p.name, 120);
    const email = clean_(p.email, 200);
    const message = clean_(p.message, 2000);
    const date = clean_(p.date, 10);
    const time = clean_(p.time, 5);
    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return output_({ ok: false, error: 'Please provide a name and valid email.' });
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || CONFIG.slots.indexOf(time) < 0) {
      return output_({ ok: false, error: 'Please choose a valid date and time.' });
    }
    const start = makeDate_(date, time);
    if (start <= new Date() || start.getDay() === 0 || start.getDay() === 6) {
      return output_({ ok: false, error: 'That date or time is no longer available.' });
    }
    if (hasConflict_(start)) {
      return output_({ ok: false, error: 'That time is no longer available. Please choose another.' });
    }

    const token = Utilities.getUuid();
    const request = { token: token, name: name, email: email, message: message, date: date, time: time, created: new Date().toISOString(), status: 'pending' };
    PropertiesService.getScriptProperties().setProperty(CONFIG.tokenPrefix + token, JSON.stringify(request));
    const base = ScriptApp.getService().getUrl();
    const when = Utilities.formatDate(start, CONFIG.timezone, 'EEEE, d MMMM yyyy HH:mm');
    const approveUrl = base + '?action=decision&choice=approve&token=' + encodeURIComponent(token);
    const declineUrl = base + '?action=decision&choice=decline&token=' + encodeURIComponent(token);
    const subject = 'Meeting request — ' + name + ' — ' + when;
    const body = 'A new meeting request is waiting for your approval.\n\n' +
      'Name: ' + name + '\nEmail: ' + email + '\nPreferred time: ' + when + ' (Madrid)\n\nMessage:\n' + (message || '—') +
      '\n\nApprove and add to Google Calendar:\n' + approveUrl +
      '\n\nDecline request:\n' + declineUrl +
      '\n\nNo calendar event has been created yet.';
    MailApp.sendEmail(CONFIG.notificationEmail, subject, body, { replyTo: email, name: 'Noa Portfolio' });
    return output_({ ok: true, status: 'pending' });
  } catch (err) {
    return output_({ ok: false, error: 'Unable to submit the request. Please try again later.' });
  }
}

function getAvailability_(from, days) {
  const now = new Date();
  const startDate = from && /^\d{4}-\d{2}-\d{2}$/.test(from) ? new Date(from + 'T12:00:00') : now;
  const count = Math.max(1, Math.min(Number(days) || CONFIG.daysAhead, 21));
  const results = [];
  for (let i = 1; i <= count; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    if (d.getDay() === 0 || d.getDay() === 6) continue;
    const date = Utilities.formatDate(d, CONFIG.timezone, 'yyyy-MM-dd');
    const times = CONFIG.slots.filter(t => {
      const slot = makeDate_(date, t);
      return slot > new Date() && !hasConflict_(slot);
    });
    if (times.length) results.push({ date: date, times: times });
  }
  return { ok: true, days: results };
}

function decision_(token, choice) {
  const props = PropertiesService.getScriptProperties();
  const key = CONFIG.tokenPrefix + token;
  const raw = props.getProperty(key);
  if (!raw || (choice !== 'approve' && choice !== 'decline')) {
    return HtmlService.createHtmlOutput('<main style="font:16px Arial;padding:40px">This request link is invalid or has already been used.</main>');
  }
  const request = JSON.parse(raw);
  if (request.status !== 'pending') {
    return HtmlService.createHtmlOutput('<main style="font:16px Arial;padding:40px">This request has already been processed.</main>');
  }
  const start = makeDate_(request.date, request.time);
  const when = Utilities.formatDate(start, CONFIG.timezone, 'EEEE, d MMMM yyyy HH:mm');
  if (choice === 'approve') {
    if (hasConflict_(start)) {
      request.status = 'conflict';
      props.setProperty(key, JSON.stringify(request));
      MailApp.sendEmail(CONFIG.notificationEmail, 'Meeting not added — time conflict', 'The requested time is no longer free: ' + when + '. Please contact ' + request.email + ' to arrange another time.');
      return HtmlService.createHtmlOutput('<main style="font:16px Arial;padding:40px"><h2>Time conflict</h2><p>This slot is no longer available. No event was created.</p></main>');
    }
    const end = new Date(start.getTime() + CONFIG.meetingMinutes * 60000);
    const event = CalendarApp.getDefaultCalendar().createEvent('Meeting with ' + request.name, start, end, {
      description: 'Meeting requested via Noa Younes Regidor’s portfolio.\n\nContact: ' + request.email + '\nMessage: ' + (request.message || '—'),
      guests: request.email,
      sendInvites: true
    });
    request.status = 'approved';
    request.eventId = event.getId();
    props.setProperty(key, JSON.stringify(request));
    MailApp.sendEmail(request.email, 'Meeting confirmed with Noa Younes Regidor', 'Your meeting request has been approved.\n\nDate and time: ' + when + ' (Madrid time)\nAn invitation has been sent to your calendar.\n\nIf you need to make changes, reply to this email.');
    return HtmlService.createHtmlOutput('<main style="font:16px Arial;padding:40px;color:#541f2a"><h2>Meeting approved</h2><p>The event was added to Google Calendar and the guest was invited.</p></main>');
  }
  request.status = 'declined';
  props.setProperty(key, JSON.stringify(request));
  MailApp.sendEmail(request.email, 'Update on your meeting request', 'Thank you for your interest in meeting with Noa Younes Regidor. Unfortunately, the requested time is not available. Please reply to this email to discuss alternatives.');
  return HtmlService.createHtmlOutput('<main style="font:16px Arial;padding:40px"><h2>Request declined</h2><p>The requester has been notified.</p></main>');
}

function hasConflict_(start) {
  const end = new Date(start.getTime() + CONFIG.meetingMinutes * 60000);
  return CalendarApp.getDefaultCalendar().getEvents(start, end).length > 0;
}

function makeDate_(date, time) {
  const parts = date.split('-').map(Number);
  const hm = time.split(':').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2], hm[0], hm[1], 0, 0);
}

function clean_(value, max) {
  return String(value || '').replace(/[<>]/g, '').trim().slice(0, max);
}

function output_(data, callback) {
  const json = JSON.stringify(data);
  if (callback && /^[A-Za-z_$][\w.$]*$/.test(callback)) {
    return ContentService.createTextOutput(callback + '(' + json + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
