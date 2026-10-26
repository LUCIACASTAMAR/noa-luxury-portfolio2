/* Cookie consent manager for Noa's portfolio.
 * Stores the visitor's preferences. Optional analytics/marketing scripts must
 * be separately gated on these preferences before they are loaded.
 */
(() => {
  const KEY = 'noa-cookie-preferences-v1';
  // Add the GA4 Measurement ID here after creating the web data stream.
  const GA4_MEASUREMENT_ID = '';
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  const settings = document.getElementById('cookieSettings');
  const analytics = document.getElementById('cookieAnalytics');
  const marketing = document.getElementById('cookieMarketing');
  const configure = document.getElementById('cookieConfigure');
  const manageLink = document.getElementById('cookieManageLink');

  const copy = {
    en: {
      eyebrow:'Your privacy', title:'A considered approach to privacy.',
      description:'This website uses essential storage to work properly. With your permission, optional analytics or marketing technologies may be enabled.',
      reject:'Reject optional', configure:'Configure', accept:'Accept all',
      settingsTitle:'Cookie preferences', essential:'Essential storage',
      essentialDesc:'Required for basic site functionality and remembering your choice.',
      analytics:'Analytics', analyticsDesc:'Helps understand how visitors use the website. Not enabled unless you consent.',
      marketing:'Marketing', marketingDesc:'Allows marketing or advertising technologies. Not enabled unless you consent.',
      save:'Save preferences', footer:'You can change your choice at any time.', manage:'Cookie settings'
    },
    es: {
      eyebrow:'Tu privacidad', title:'Tu privacidad, con cuidado.',
      description:'Esta web utiliza almacenamiento esencial para funcionar. Con tu permiso, se podrán activar tecnologías opcionales de análisis o marketing.',
      reject:'Rechazar opcionales', configure:'Configurar', accept:'Aceptar todas',
      settingsTitle:'Preferencias de cookies', essential:'Almacenamiento esencial',
      essentialDesc:'Necesario para el funcionamiento básico y para recordar tu elección.',
      analytics:'Analítica', analyticsDesc:'Ayuda a comprender cómo se utiliza la web. No se activa sin tu consentimiento.',
      marketing:'Marketing', marketingDesc:'Permite tecnologías de marketing o publicidad. No se activa sin tu consentimiento.',
      save:'Guardar preferencias', footer:'Puedes cambiar tu elección cuando quieras.', manage:'Configurar cookies'
    },
    fr: {
      eyebrow:'Votre confidentialité', title:'Votre vie privée mérite attention.',
      description:'Ce site utilise un stockage essentiel à son fonctionnement. Avec votre accord, des technologies facultatives d’analyse ou de marketing peuvent être activées.',
      reject:'Tout refuser sauf essentiel', configure:'Configurer', accept:'Tout accepter',
      settingsTitle:'Préférences de cookies', essential:'Stockage essentiel',
      essentialDesc:'Nécessaire au fonctionnement de base et à la mémorisation de votre choix.',
      analytics:'Analyse', analyticsDesc:'Aide à comprendre l’utilisation du site. Désactivée sans votre accord.',
      marketing:'Marketing', marketingDesc:'Autorise les technologies publicitaires. Désactivées sans votre accord.',
      save:'Enregistrer mes choix', footer:'Vous pouvez modifier votre choix à tout moment.', manage:'Paramètres des cookies'
    },
    it: {
      eyebrow:'La tua privacy', title:'La tua privacy, con attenzione.',
      description:'Questo sito usa archiviazione essenziale per funzionare. Con il tuo consenso possono essere attivate tecnologie facoltative di analisi o marketing.',
      reject:'Rifiuta opzionali', configure:'Configura', accept:'Accetta tutti',
      settingsTitle:'Preferenze cookie', essential:'Archiviazione essenziale',
      essentialDesc:'Necessaria per il funzionamento di base e per ricordare la tua scelta.',
      analytics:'Analisi', analyticsDesc:'Aiuta a capire come viene usato il sito. Non attiva senza consenso.',
      marketing:'Marketing', marketingDesc:'Consente tecnologie di marketing o pubblicità. Non attiva senza consenso.',
      save:'Salva preferenze', footer:'Puoi cambiare scelta in qualsiasi momento.', manage:'Impostazioni cookie'
    },
    de: {
      eyebrow:'Deine Privatsphäre', title:'Deine Privatsphäre ist uns wichtig.',
      description:'Diese Website verwendet notwendige Speicherung für grundlegende Funktionen. Mit deiner Zustimmung können optionale Analyse- oder Marketingtechnologien aktiviert werden.',
      reject:'Optionale ablehnen', configure:'Einstellungen', accept:'Alle akzeptieren',
      settingsTitle:'Cookie-Einstellungen', essential:'Notwendige Speicherung',
      essentialDesc:'Erforderlich für grundlegende Funktionen und zum Speichern deiner Auswahl.',
      analytics:'Analyse', analyticsDesc:'Hilft zu verstehen, wie die Website genutzt wird. Ohne Zustimmung deaktiviert.',
      marketing:'Marketing', marketingDesc:'Erlaubt Marketing- oder Werbetechnologien. Ohne Zustimmung deaktiviert.',
      save:'Auswahl speichern', footer:'Du kannst deine Auswahl jederzeit ändern.', manage:'Cookie-Einstellungen'
    },
    nl: {
      eyebrow:'Je privacy', title:'Zorgvuldig omgaan met je privacy.',
      description:'Deze website gebruikt noodzakelijke opslag om goed te werken. Met jouw toestemming kunnen optionele analyse- of marketingtechnologieën worden ingeschakeld.',
      reject:'Optionele weigeren', configure:'Instellen', accept:'Alles accepteren',
      settingsTitle:'Cookievoorkeuren', essential:'Noodzakelijke opslag',
      essentialDesc:'Nodig voor basisfuncties en om je keuze te onthouden.',
      analytics:'Analyse', analyticsDesc:'Helpt te begrijpen hoe bezoekers de website gebruiken. Uitgeschakeld zonder toestemming.',
      marketing:'Marketing', marketingDesc:'Staat marketing- of advertentietechnologie toe. Uitgeschakeld zonder toestemming.',
      save:'Voorkeuren opslaan', footer:'Je kunt je keuze op elk moment wijzigen.', manage:'Cookie-instellingen'
    }
  };

  function language() {
    const lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    return copy[lang] ? lang : 'en';
  }
  function applyLanguage() {
    const strings = copy[language()];
    banner.querySelectorAll('[data-cookie]').forEach(el => {
      const key = el.getAttribute('data-cookie');
      if (strings[key]) el.textContent = strings[key];
    });
    manageLink.textContent = strings.manage;
  }
  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) { return null; }
  }
  let analyticsLoaded = false;
  function applyAnalyticsConsent(preferences) {
    if (!preferences || !preferences.analytics || !GA4_MEASUREMENT_ID || analyticsLoaded) return;
    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      ad_user_data: preferences.marketing ? 'granted' : 'denied',
      ad_personalization: preferences.marketing ? 'granted' : 'denied'
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_MEASUREMENT_ID);
    document.head.appendChild(tag);
    gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true });
  }
  function store(value) {
    const preferences = {
      necessary: true,
      analytics: !!value.analytics,
      marketing: !!value.marketing,
      updatedAt: new Date().toISOString()
    };
    try { localStorage.setItem(KEY, JSON.stringify(preferences)); } catch (_) {}
    banner.hidden = true;
    manageLink.hidden = false;
    document.dispatchEvent(new CustomEvent('noa:cookie-consent', { detail: preferences }));
    applyAnalyticsConsent(preferences);
  }
  function openPreferences() {
    const saved = read();
    analytics.checked = !!(saved && saved.analytics);
    marketing.checked = !!(saved && saved.marketing);
    banner.hidden = false;
    settings.hidden = false;
    configure.setAttribute('aria-expanded', 'true');
    manageLink.hidden = true;
    banner.querySelector('#cookieTitle').focus?.();
  }
  function showInitial() {
    const saved = read();
    if (saved) {
      banner.hidden = true;
      manageLink.hidden = false;
      document.dispatchEvent(new CustomEvent('noa:cookie-consent', { detail: saved }));
      applyAnalyticsConsent(saved);
    } else {
      banner.hidden = false;
      manageLink.hidden = true;
    }
  }

  document.getElementById('cookieAccept').addEventListener('click', () => {
    store({ analytics: true, marketing: true });
  });
  document.getElementById('cookieReject').addEventListener('click', () => {
    store({ analytics: false, marketing: false });
  });
  configure.addEventListener('click', () => {
    const opening = settings.hidden;
    settings.hidden = !opening;
    configure.setAttribute('aria-expanded', String(opening));
    if (opening) {
      const saved = read();
      analytics.checked = !!(saved && saved.analytics);
      marketing.checked = !!(saved && saved.marketing);
    }
  });
  document.getElementById('cookieSave').addEventListener('click', () => {
    store({ analytics: analytics.checked, marketing: marketing.checked });
  });
  document.getElementById('cookieFooterManage').addEventListener('click', openPreferences);
  manageLink.addEventListener('click', openPreferences);

  applyLanguage();
  showInitial();
  new MutationObserver(applyLanguage).observe(document.documentElement, {
    attributes: true, attributeFilter: ['lang']
  });
})();
