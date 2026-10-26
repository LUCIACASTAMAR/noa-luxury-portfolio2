/* NAVIGATION */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* REVEAL ANIMATIONS */

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: .12
        }

    );


    document.querySelectorAll(".reveal").forEach(element => {

        observer.observe(element);

    });

    /* ---------------- MULTI-LANGUAGE WEBSITE ---------------- */

        const LANGUAGE_DATA = {'en': {'lang': 'EN', 'about': 'About', 'work': 'Work', 'experience': 'Experience', 'expertise': 'Expertise', 'contact': 'Contact', 'heroEyebrow': 'Luxury Marketing · Brand Strategy · Fashion', 'heroDesc': 'Marketing professional focused on luxury, fashion, retail and the creation of meaningful brand experiences.', 'explore': 'Explore work', 'get': 'Get in touch', 'madrid': 'Madrid · Spain', 'aboutNum': '01 — About', 'aboutTitle': 'Where strategy meets <em>storytelling.</em>', 'aboutText': 'Marketing professional working at the intersection of luxury, fashion, retail and talent strategy.<br><br>Combines strategic thinking, communication and an understanding of the luxury consumer to create brand experiences that feel relevant, distinctive and memorable.', 'workNum': '02 — Selected Work', 'workTitle': 'Selected work', 'workSub': 'A selection of work across luxury marketing, fashion, retail and brand storytelling.', 'p1cat': 'Editorial · Luxury Retail', 'p1title': 'From Sales Advisor to Brand Ambassador', 'p1desc': 'FashionUnited · France · Benelux · Spain · Mexico', 'p2cat': 'Luxury · Brand Storytelling', 'p2title': 'The Power of Storytelling', 'p2desc': 'Exploring storytelling as a strategic driver of luxury brand value.', 'p3cat': 'Retail · Customer Experience', 'p3title': 'The Future of Luxury Retail', 'p3desc': 'Client experience, talent and brand differentiation.', 'p4cat': 'Brand Strategy', 'p4title': 'Building Meaningful Brands', 'p4desc': 'Strategic thinking around identity, positioning and communication.', 'expNum': '03 — Experience', 'expTitle': 'A career built around <em>luxury.</em>', 'present': 'Present', 'role1': 'Marketing Executive', 'company1': 'LUXE TALENT', 'desc1': 'Development of marketing and communication initiatives in the luxury sector, with a particular focus on employer branding, strategic LinkedIn content, corporate communications and support for professional events. Participation in brand positioning projects, interviews with industry professionals and talent reports, helping strengthen Luxe Talent’s visibility and positioning in international markets.', 'role2': 'Marketing & Luxury Development', 'company2': 'Professional Development', 'desc2': 'Continued development within luxury marketing, fashion and brand strategy.', 'role3': 'Academic Foundation', 'company3': 'Marketing · Communication · Business', 'desc3': 'Academic development complemented by international experiences and professional projects.', 'expertNum': '04 — Expertise', 'expertTitle': 'Areas of expertise', 'e1': 'Luxury Marketing', 'e1d': 'Understanding luxury consumers, positioning and premium brand ecosystems.', 'e2': 'Brand Strategy', 'e2d': 'Brand identity, positioning, storytelling and differentiation.', 'e3': 'Content & Storytelling', 'e3d': 'Turning strategic ideas into compelling editorial and digital narratives.', 'e4': 'Fashion & Retail', 'e4d': 'Luxury retail, customer experience and the evolution of the sales floor.', 'e5': 'Talent Strategy', 'e5d': 'Employer branding, talent positioning and the human side of luxury.', 'e6': 'Communication', 'e6d': 'Strategic communication across digital and professional channels.', 'c1': 'Cambridge Advanced Certificate', 'c1d': 'Cambridge English · C1 · 2024', 'c2': 'INSIDE LVMH', 'c2d': 'LVMH · 2025', 'c3': 'SIMUN — Sorbonne United Nations Model', 'c3d': 'Sorbonne Université · 2024', 'c4': 'Principles of Community Management', 'c4d': 'Adecco', 'credNum': '05 — Credentials', 'credTitle': 'Continuous<br>learning.', 'contactNum': '06 — Contact', 'contactTitle': "Let's create <em>meaning.</em>", 'contactDesc': "Interested in luxury, fashion, retail or brand strategy? Let's start a conversation.", 'footer': 'Luxury Marketing · Madrid'}, 'es': {'lang': 'ES', 'about': 'Sobre mí', 'work': 'Proyectos', 'experience': 'Experiencia', 'expertise': 'Especialización', 'contact': 'Contacto', 'heroEyebrow': 'Marketing de Lujo · Estrategia de Marca · Moda', 'heroDesc': 'Soy una profesional del marketing especializada en lujo, moda, retail y en la creación de experiencias de marca con significado.', 'explore': 'Ver proyectos', 'get': 'Contactar', 'madrid': 'Madrid · España', 'aboutNum': '01 — Sobre mí', 'aboutTitle': 'Donde la estrategia se encuentra con el <em>storytelling.</em>', 'aboutText': 'Soy una profesional del marketing que trabaja en la intersección entre el lujo, la moda, el retail y la estrategia de talento.<br><br>Combino pensamiento estratégico, comunicación y conocimiento del consumidor de lujo para crear experiencias de marca relevantes, distintivas y memorables.', 'workNum': '02 — Proyectos destacados', 'workTitle': 'Proyectos destacados', 'workSub': 'Una selección de proyectos de marketing de lujo, moda, retail y storytelling de marca.', 'p1cat': 'Editorial · Retail de Lujo', 'p1title': 'De Sales Advisor a Brand Ambassador', 'p1desc': 'FashionUnited · Francia · Benelux · España · México', 'p2cat': 'Lujo · Storytelling de Marca', 'p2title': 'El poder del storytelling', 'p2desc': 'El storytelling como motor estratégico del valor de las marcas de lujo.', 'p3cat': 'Retail · Experiencia de Cliente', 'p3title': 'El futuro del retail de lujo', 'p3desc': 'Experiencia de cliente, talento y diferenciación de marca.', 'p4cat': 'Estrategia de Marca', 'p4title': 'Construyendo marcas con significado', 'p4desc': 'Pensamiento estratégico en torno a identidad, posicionamiento y comunicación.', 'expNum': '03 — Experiencia', 'expTitle': 'Una trayectoria construida alrededor del <em>lujo.</em>', 'present': 'Actualidad', 'role1': 'Marketing Executive', 'company1': 'LUXE TALENT', 'desc1': 'Desarrollo de iniciativas de marketing y comunicación en el sector del lujo, con especial foco en employer branding, creación de contenidos estratégicos para LinkedIn, comunicación corporativa y apoyo en la organización de eventos profesionales. Participación en proyectos de posicionamiento de marca, entrevistas a profesionales del sector y elaboración de informes de talento, contribuyendo a reforzar la visibilidad y el posicionamiento de Luxe Talent en el mercado internacional.', 'role2': 'Marketing y Desarrollo del Lujo', 'company2': 'Desarrollo Profesional', 'desc2': 'Desarrollo continuado en marketing de lujo, moda y estrategia de marca.', 'role3': 'Formación Académica', 'company3': 'Marketing · Comunicación · Negocios', 'desc3': 'Formación académica complementada con experiencias internacionales y proyectos profesionales.', 'expertNum': '04 — Especialización', 'expertTitle': 'Áreas de especialización', 'e1': 'Marketing de Lujo', 'e1d': 'Comprensión del consumidor de lujo, posicionamiento y ecosistemas de marcas premium.', 'e2': 'Estrategia de Marca', 'e2d': 'Identidad de marca, posicionamiento, storytelling y diferenciación.', 'e3': 'Contenido y Storytelling', 'e3d': 'Convertir ideas estratégicas en narrativas editoriales y digitales atractivas.', 'e4': 'Moda y Retail', 'e4d': 'Retail de lujo, experiencia de cliente y evolución del punto de venta.', 'e5': 'Estrategia de Talento', 'e5d': 'Employer branding, posicionamiento de talento y dimensión humana del lujo.', 'e6': 'Comunicación', 'e6d': 'Comunicación estratégica a través de canales digitales y profesionales.', 'c1': 'Cambridge Advanced Certificate', 'c1d': 'Cambridge English · C1 · 2024', 'c2': 'INSIDE LVMH', 'c2d': 'LVMH · 2025', 'c3': 'SIMUN — Sorbonne United Nations Model', 'c3d': 'Sorbonne Université · 2024', 'c4': 'Principios de Community Management', 'c4d': 'Adecco', 'credNum': '05 — Credenciales', 'credTitle': 'Aprendizaje<br>continuo.', 'contactNum': '06 — Contacto', 'contactTitle': 'Creemos <em>significado.</em>', 'contactDesc': '¿Te interesa el lujo, la moda, el retail o la estrategia de marca? Hablemos.', 'footer': 'Marketing de Lujo · Madrid'}, 'it': {'lang': 'IT', 'about': 'Profilo', 'work': 'Progetti', 'experience': 'Esperienza', 'expertise': 'Competenze', 'contact': 'Contatti', 'heroEyebrow': 'Luxury Marketing · Brand Strategy · Moda', 'heroDesc': 'Sono una professionista del marketing specializzata in luxury, moda, retail e nella creazione di esperienze di brand significative.', 'explore': 'Scopri i progetti', 'get': 'Contatti', 'madrid': 'Madrid · Spagna', 'aboutNum': '01 — Profilo', 'aboutTitle': 'Dove la strategia incontra lo <em>storytelling.</em>', 'aboutText': 'Sono una professionista del marketing e opero all’intersezione tra luxury, moda, retail e strategia del talento.<br><br>Combino pensiero strategico, comunicazione e conoscenza del consumatore luxury per creare esperienze di brand rilevanti, distintive e memorabili.', 'workNum': '02 — Progetti selezionati', 'workTitle': 'Progetti selezionati', 'workSub': 'Una selezione di progetti di luxury marketing, moda, retail e brand storytelling.', 'p1cat': 'Editoriale · Luxury Retail', 'p1title': 'Da Sales Advisor a Brand Ambassador', 'p1desc': 'FashionUnited · Francia · Benelux · Spagna · Messico', 'p2cat': 'Luxury · Brand Storytelling', 'p2title': 'Il potere dello storytelling', 'p2desc': 'Lo storytelling come leva strategica del valore dei brand luxury.', 'p3cat': 'Retail · Customer Experience', 'p3title': 'Il futuro del Luxury Retail', 'p3desc': 'Customer experience, talento e differenziazione del brand.', 'p4cat': 'Brand Strategy', 'p4title': 'Costruire brand con significato', 'p4desc': 'Pensiero strategico su identità, posizionamento e comunicazione.', 'expNum': '03 — Esperienza', 'expTitle': 'Un percorso costruito intorno al <em>luxury.</em>', 'present': 'Attuale', 'role1': 'Marketing Executive', 'company1': 'LUXE TALENT', 'desc1': 'Sviluppo di iniziative di marketing e comunicazione nel settore del lusso, con particolare attenzione all’employer branding, alla creazione di contenuti strategici per LinkedIn, alla comunicazione aziendale e al supporto nell’organizzazione di eventi professionali. Partecipazione a progetti di posizionamento del brand, interviste a professionisti del settore e redazione di report sui talenti, contribuendo a rafforzare la visibilità e il posizionamento internazionale di Luxe Talent.', 'role2': 'Marketing e Sviluppo Luxury', 'company2': 'Sviluppo Professionale', 'desc2': 'Sviluppo continuo nel luxury marketing, nella moda e nella strategia di brand.', 'role3': 'Formazione Accademica', 'company3': 'Marketing · Comunicazione · Business', 'desc3': 'Formazione accademica arricchita da esperienze internazionali e progetti professionali.', 'expertNum': '04 — Competenze', 'expertTitle': 'Aree di competenza', 'e1': 'Luxury Marketing', 'e1d': 'Comprensione dei consumatori luxury, posizionamento ed ecosistemi dei brand premium.', 'e2': 'Brand Strategy', 'e2d': 'Identità di brand, posizionamento, storytelling e differenziazione.', 'e3': 'Content & Storytelling', 'e3d': 'Trasformare idee strategiche in narrazioni editoriali e digitali coinvolgenti.', 'e4': 'Moda & Retail', 'e4d': 'Luxury retail, customer experience ed evoluzione del punto vendita.', 'e5': 'Talent Strategy', 'e5d': 'Employer branding, posizionamento del talento e dimensione umana del luxury.', 'e6': 'Comunicazione', 'e6d': 'Comunicazione strategica attraverso canali digitali e professionali.', 'c1': 'Cambridge Advanced Certificate', 'c1d': 'Cambridge English · C1 · 2024', 'c2': 'INSIDE LVMH', 'c2d': 'LVMH · 2025', 'c3': 'SIMUN — Sorbonne United Nations Model', 'c3d': 'Sorbonne Université · 2024', 'c4': 'Principi di Community Management', 'c4d': 'Adecco', 'credNum': '05 — Credenziali', 'credTitle': 'Apprendimento<br>continuo.', 'contactNum': '06 — Contatti', 'contactTitle': 'Creiamo <em>significato.</em>', 'contactDesc': 'Ti interessano luxury, moda, retail o brand strategy? Iniziamo una conversazione.', 'footer': 'Luxury Marketing · Madrid'}, 'fr': {'lang': 'FR', 'about': 'À propos', 'work': 'Projets', 'experience': 'Expérience', 'expertise': 'Expertise', 'contact': 'Contact', 'heroEyebrow': 'Marketing du Luxe · Stratégie de Marque · Mode', 'heroDesc': 'Je suis une professionnelle du marketing spécialisée dans le luxe, la mode, le retail et la création d’expériences de marque porteuses de sens.', 'explore': 'Voir les projets', 'get': 'Me contacter', 'madrid': 'Madrid · Espagne', 'aboutNum': '01 — À propos', 'aboutTitle': 'Quand la stratégie rencontre le <em>storytelling.</em>', 'aboutText': 'Je suis une professionnelle du marketing à l’intersection du luxe, de la mode, du retail et de la stratégie des talents.<br><br>J’associe réflexion stratégique, communication et compréhension du consommateur du luxe pour créer des expériences de marque pertinentes, distinctives et mémorables.', 'workNum': '02 — Projets sélectionnés', 'workTitle': 'Projets sélectionnés', 'workSub': 'Une sélection de projets en marketing du luxe, mode, retail et storytelling de marque.', 'p1cat': 'Éditorial · Retail de Luxe', 'p1title': 'De Sales Advisor à Brand Ambassador', 'p1desc': 'FashionUnited · France · Benelux · Espagne · Mexique', 'p2cat': 'Luxe · Storytelling de Marque', 'p2title': 'Le pouvoir du storytelling', 'p2desc': 'Le storytelling comme moteur stratégique de la valeur des marques de luxe.', 'p3cat': 'Retail · Expérience Client', 'p3title': 'L’avenir du retail de luxe', 'p3desc': 'Expérience client, talents et différenciation de marque.', 'p4cat': 'Stratégie de Marque', 'p4title': 'Créer des marques porteuses de sens', 'p4desc': 'Réflexion stratégique autour de l’identité, du positionnement et de la communication.', 'expNum': '03 — Expérience', 'expTitle': 'Un parcours construit autour du <em>luxe.</em>', 'present': 'Aujourd’hui', 'role1': 'Marketing Executive', 'company1': 'LUXE TALENT', 'desc1': 'Développement d’initiatives de marketing et de communication dans le secteur du luxe, avec un accent particulier sur l’employer branding, la création de contenus stratégiques pour LinkedIn, la communication corporate et le soutien à l’organisation d’événements professionnels. Participation à des projets de positionnement de marque, à des entretiens avec des professionnels du secteur et à l’élaboration de rapports sur les talents, contribuant à renforcer la visibilité et le positionnement international de Luxe Talent.', 'role2': 'Marketing & Développement du Luxe', 'company2': 'Développement Professionnel', 'desc2': 'Développement continu en marketing du luxe, mode et stratégie de marque.', 'role3': 'Formation Académique', 'company3': 'Marketing · Communication · Business', 'desc3': 'Formation académique complétée par des expériences internationales et des projets professionnels.', 'expertNum': '04 — Expertise', 'expertTitle': 'Domaines d’expertise', 'e1': 'Marketing du Luxe', 'e1d': 'Compréhension des consommateurs du luxe, positionnement et écosystèmes de marques premium.', 'e2': 'Stratégie de Marque', 'e2d': 'Identité de marque, positionnement, storytelling et différenciation.', 'e3': 'Contenu & Storytelling', 'e3d': 'Transformer des idées stratégiques en récits éditoriaux et digitaux percutants.', 'e4': 'Mode & Retail', 'e4d': 'Retail de luxe, expérience client et évolution du point de vente.', 'e5': 'Stratégie des Talents', 'e5d': 'Employer branding, positionnement des talents et dimension humaine du luxe.', 'e6': 'Communication', 'e6d': 'Communication stratégique sur les canaux digitaux et professionnels.', 'c1': 'Cambridge Advanced Certificate', 'c1d': 'Cambridge English · C1 · 2024', 'c2': 'INSIDE LVMH', 'c2d': 'LVMH · 2025', 'c3': 'SIMUN — Sorbonne United Nations Model', 'c3d': 'Sorbonne Université · 2024', 'c4': 'Principes de Community Management', 'c4d': 'Adecco', 'credNum': '05 — Certifications', 'credTitle': 'Apprentissage<br>continu.', 'contactNum': '06 — Contact', 'contactTitle': 'Créons du <em>sens.</em>', 'contactDesc': 'Le luxe, la mode, le retail ou la stratégie de marque vous intéressent ? Commençons une conversation.', 'footer': 'Marketing du Luxe · Madrid'}, 'de': {'lang': 'DE', 'about': 'Über mich', 'work': 'Projekte', 'experience': 'Erfahrung', 'expertise': 'Expertise', 'contact': 'Kontakt', 'heroEyebrow': 'Luxury Marketing · Markenstrategie · Mode', 'heroDesc': 'Ich bin Marketing-Expertin mit Fokus auf Luxus, Mode, Retail und die Entwicklung bedeutungsvoller Markenerlebnisse.', 'explore': 'Projekte ansehen', 'get': 'Kontakt aufnehmen', 'madrid': 'Madrid · Spanien', 'aboutNum': '01 — Über mich', 'aboutTitle': 'Wo Strategie auf <em>Storytelling</em> trifft.', 'aboutText': 'Ich bin Marketing-Expertin an der Schnittstelle von Luxus, Mode, Retail und Talentstrategie.<br><br>Ich verbinde strategisches Denken, Kommunikation und ein tiefes Verständnis der Luxus-Konsumenten, um relevante, unverwechselbare und einprägsame Markenerlebnisse zu schaffen.', 'workNum': '02 — Ausgewählte Projekte', 'workTitle': 'Ausgewählte Projekte', 'workSub': 'Eine Auswahl von Projekten aus Luxury Marketing, Mode, Retail und Brand Storytelling.', 'p1cat': 'Editorial · Luxury Retail', 'p1title': 'Vom Sales Advisor zum Brand Ambassador', 'p1desc': 'FashionUnited · Frankreich · Benelux · Spanien · Mexiko', 'p2cat': 'Luxury · Brand Storytelling', 'p2title': 'Die Kraft des Storytellings', 'p2desc': 'Storytelling als strategischer Treiber des Markenwerts im Luxussegment.', 'p3cat': 'Retail · Kundenerlebnis', 'p3title': 'Die Zukunft des Luxury Retail', 'p3desc': 'Kundenerlebnis, Talente und Markendifferenzierung.', 'p4cat': 'Markenstrategie', 'p4title': 'Marken mit Bedeutung schaffen', 'p4desc': 'Strategisches Denken rund um Identität, Positionierung und Kommunikation.', 'expNum': '03 — Erfahrung', 'expTitle': 'Eine Karriere rund um den <em>Luxus.</em>', 'present': 'Heute', 'role1': 'Marketing Executive', 'company1': 'LUXE TALENT', 'desc1': 'Entwicklung von Marketing- und Kommunikationsinitiativen im Luxussegment mit besonderem Schwerpunkt auf Employer Branding, strategischen LinkedIn-Inhalten, Unternehmenskommunikation und der Unterstützung professioneller Veranstaltungen. Mitwirkung an Markenpositionierungsprojekten, Interviews mit Branchenfachleuten und Talentberichten zur Stärkung der Sichtbarkeit und internationalen Positionierung von Luxe Talent.', 'role2': 'Marketing & Luxury Development', 'company2': 'Professionelle Entwicklung', 'desc2': 'Kontinuierliche Weiterentwicklung in Luxury Marketing, Mode und Markenstrategie.', 'role3': 'Akademische Ausbildung', 'company3': 'Marketing · Kommunikation · Business', 'desc3': 'Akademische Entwicklung ergänzt durch internationale Erfahrungen und professionelle Projekte.', 'expertNum': '04 — Expertise', 'expertTitle': 'Kompetenzbereiche', 'e1': 'Luxury Marketing', 'e1d': 'Verständnis von Luxus-Konsumenten, Positionierung und Premium-Markenökosystemen.', 'e2': 'Markenstrategie', 'e2d': 'Markenidentität, Positionierung, Storytelling und Differenzierung.', 'e3': 'Content & Storytelling', 'e3d': 'Strategische Ideen in überzeugende redaktionelle und digitale Narrative übersetzen.', 'e4': 'Mode & Retail', 'e4d': 'Luxury Retail, Kundenerlebnis und die Entwicklung der Verkaufsfläche.', 'e5': 'Talentstrategie', 'e5d': 'Employer Branding, Talentpositionierung und die menschliche Seite des Luxus.', 'e6': 'Kommunikation', 'e6d': 'Strategische Kommunikation über digitale und professionelle Kanäle.', 'c1': 'Cambridge Advanced Certificate', 'c1d': 'Cambridge English · C1 · 2024', 'c2': 'INSIDE LVMH', 'c2d': 'LVMH · 2025', 'c3': 'SIMUN — Sorbonne United Nations Model', 'c3d': 'Sorbonne Université · 2024', 'c4': 'Grundlagen des Community Managements', 'c4d': 'Adecco', 'credNum': '05 — Qualifikationen', 'credTitle': 'Kontinuierliches<br>Lernen.', 'contactNum': '06 — Kontakt', 'contactTitle': 'Bedeutung <em>schaffen.</em>', 'contactDesc': 'Interesse an Luxus, Mode, Retail oder Markenstrategie? Lassen Sie uns ins Gespräch kommen.', 'footer': 'Luxury Marketing · Madrid'}, 'nl': {'lang': 'NL', 'about': 'Over mij', 'work': 'Projecten', 'experience': 'Ervaring', 'expertise': 'Expertise', 'contact': 'Contact', 'heroEyebrow': 'Luxury Marketing · Merkstrategie · Mode', 'heroDesc': 'Ik ben een marketingprofessional met een focus op luxury, mode, retail en het creëren van betekenisvolle merkervaringen.', 'explore': 'Bekijk projecten', 'get': 'Neem contact op', 'madrid': 'Madrid · Spanje', 'aboutNum': '01 — Over mij', 'aboutTitle': 'Waar strategie samenkomt met <em>storytelling.</em>', 'aboutText': 'Ik ben een marketingprofessional op het snijvlak van luxury, mode, retail en talentstrategie.<br><br>Ik combineer strategisch denken, communicatie en inzicht in de luxury-consument om relevante, onderscheidende en memorabele merkervaringen te creëren.', 'workNum': '02 — Geselecteerde projecten', 'workTitle': 'Geselecteerde projecten', 'workSub': 'Een selectie van projecten binnen luxury marketing, mode, retail en brand storytelling.', 'p1cat': 'Editorial · Luxury Retail', 'p1title': 'Van Sales Advisor naar Brand Ambassador', 'p1desc': 'FashionUnited · Frankrijk · Benelux · Spanje · Mexico', 'p2cat': 'Luxury · Brand Storytelling', 'p2title': 'De kracht van storytelling', 'p2desc': 'Storytelling als strategische drijver van merkwaarde binnen luxury.', 'p3cat': 'Retail · Customer Experience', 'p3title': 'De toekomst van Luxury Retail', 'p3desc': 'Klantenervaring, talent en merkdifferentiatie.', 'p4cat': 'Merkstrategie', 'p4title': 'Merken met betekenis bouwen', 'p4desc': 'Strategisch denken rond identiteit, positionering en communicatie.', 'expNum': '03 — Ervaring', 'expTitle': 'Een carrière gebouwd rond <em>luxury.</em>', 'present': 'Heden', 'role1': 'Marketing Executive', 'company1': 'LUXE TALENT', 'desc1': 'Ontwikkeling van marketing- en communicatie-initiatieven in de luxesector, met speciale aandacht voor employer branding, strategische LinkedIn-content, bedrijfscommunicatie en ondersteuning bij professionele evenementen. Deelname aan merkpositioneringsprojecten, interviews met professionals uit de sector en talentrapporten, ter versterking van de zichtbaarheid en internationale positionering van Luxe Talent.', 'role2': 'Marketing & Luxury Development', 'company2': 'Professionele ontwikkeling', 'desc2': 'Voortdurende ontwikkeling binnen luxury marketing, mode en merkstrategie.', 'role3': 'Academische basis', 'company3': 'Marketing · Communicatie · Business', 'desc3': 'Academische ontwikkeling aangevuld met internationale ervaringen en professionele projecten.', 'expertNum': '04 — Expertise', 'expertTitle': 'Expertisegebieden', 'e1': 'Luxury Marketing', 'e1d': 'Inzicht in luxury-consumenten, positionering en premium merkeecosystemen.', 'e2': 'Merkstrategie', 'e2d': 'Merkidentiteit, positionering, storytelling en differentiatie.', 'e3': 'Content & Storytelling', 'e3d': 'Strategische ideeën vertalen naar overtuigende redactionele en digitale verhalen.', 'e4': 'Mode & Retail', 'e4d': 'Luxury retail, customer experience en de evolutie van de winkelvloer.', 'e5': 'Talentstrategie', 'e5d': 'Employer branding, talentpositionering en de menselijke kant van luxury.', 'e6': 'Communicatie', 'e6d': 'Strategische communicatie via digitale en professionele kanalen.', 'c1': 'Cambridge Advanced Certificate', 'c1d': 'Cambridge English · C1 · 2024', 'c2': 'INSIDE LVMH', 'c2d': 'LVMH · 2025', 'c3': 'SIMUN — Sorbonne United Nations Model', 'c3d': 'Sorbonne Université · 2024', 'c4': 'Principes van Community Management', 'c4d': 'Adecco', 'credNum': '05 — Certificeringen', 'credTitle': 'Continu<br>leren.', 'contactNum': '06 — Contact', 'contactTitle': 'Laten we <em>betekenis</em> creëren.', 'contactDesc': 'Interesse in luxury, mode, retail of merkstrategie? Laten we kennismaken.', 'footer': 'Luxury Marketing · Madrid', 'aiYou': 'U', 'aiTitle': 'Luxury Intelligence', 'aiSub': 'AI · Luxury Research', 'aiHello': 'Hallo. Ik ben Luxury Intelligence.<br><br>Vraag me naar actueel nieuws, trends en merken in luxury, mode, retail, automotive, horloges, beauty of hospitality.', 'aiPlaceholder': 'Vraag Luxury Intelligence...', 'aiAsk': 'Vraag', 'aiDisclaimer': 'AI-gegenereerde analyse · Actuele informatie maakt gebruik van beschikbare webbronnen.', 'allLuxury': 'Alle luxury', 'fashion': 'Mode', 'automotive': 'Automotive', 'watches': 'Horloges & Sieraden', 'beauty': 'Beauty', 'hospitality': 'Hospitality', 'retail': 'Retail', 's1': 'Laatste modenieuws', 's2': 'Luxury-retailtrends', 's3': 'Luxury automotive'}};

        // Official study titles stay in their original wording in every interface language.
        Object.values(LANGUAGE_DATA).forEach((language) => {
            language.edu1 = "Master’s in Marketing Management";
            language.edu2 = "Master’s in Strategic Management of Luxury Brands";
            language.edu3 = "International Relations Degree";
        });
        const EMAIL_ADDRESS = "noa.younes.regidor@outlook.com";
        document.querySelectorAll('#contact a[href^="mailto:"]').forEach((link) => { link.href = `mailto:${EMAIL_ADDRESS}`; link.textContent = EMAIL_ADDRESS; });

        const EXTRA_TRANSLATIONS = {
          en: { education: 'Education', educationNum: '04 — Education', educationTitle: 'Academic background', previousRole: 'PREVIOUS ROLE', earlierExperience: 'EARLIER EXPERIENCE', edu4: 'Cultural and Political Geography', erasmusInstitution: 'OSTRAVSKÁ UNIVERZITA · CZECH REPUBLIC', expertNum: '05 — Expertise', credNum: '06 — Credentials', contactNum: '07 — Contact' },
          es: { education: 'Educación', educationNum: '04 — Educación', educationTitle: 'Formación académica', previousRole: 'PUESTO ANTERIOR', earlierExperience: 'EXPERIENCIA PREVIA', edu4: 'Geografía Cultural y Política', erasmusInstitution: 'OSTRAVSKÁ UNIVERZITA · REPÚBLICA CHECA', expertNum: '05 — Especialización', credNum: '06 — Credenciales', contactNum: '07 — Contacto' },
          it: { education: 'Formazione', educationNum: '04 — Formazione', educationTitle: 'Formazione accademica', previousRole: 'RUOLO PRECEDENTE', earlierExperience: 'ESPERIENZA PRECEDENTE', edu4: 'Geografia culturale e politica', erasmusInstitution: 'OSTRAVSKÁ UNIVERZITA · REPUBBLICA CECA', expertNum: '05 — Competenze', credNum: '06 — Certificazioni', contactNum: '07 — Contatti' },
          fr: { education: 'Formation', educationNum: '04 — Formation', educationTitle: 'Parcours académique', previousRole: 'POSTE PRÉCÉDENT', earlierExperience: 'EXPÉRIENCE PRÉCÉDENTE', edu4: 'Géographie culturelle et politique', erasmusInstitution: 'OSTRAVSKÁ UNIVERZITA · RÉPUBLIQUE TCHÈQUE', expertNum: '05 — Expertise', credNum: '06 — Certifications', contactNum: '07 — Contact' },
          de: { education: 'Ausbildung', educationNum: '04 — Ausbildung', educationTitle: 'Akademischer Werdegang', previousRole: 'VORHERIGE POSITION', earlierExperience: 'FRÜHERE ERFAHRUNG', edu4: 'Kultur- und politische Geografie', erasmusInstitution: 'OSTRAVSKÁ UNIVERZITA · TSCHECHIEN', expertNum: '05 — Fachgebiete', credNum: '06 — Zertifikate', contactNum: '07 — Kontakt' },
          nl: { education: 'Opleiding', educationNum: '04 — Opleiding', educationTitle: 'Academische achtergrond', previousRole: 'VORIGE FUNCTIE', earlierExperience: 'EERDERE ERVARING', edu4: 'Culturele en politieke geografie', erasmusInstitution: 'OSTRAVSKÁ UNIVERZITA · TSJECHIË', expertNum: '05 — Expertise', credNum: '06 — Certificeringen', contactNum: '07 — Contact' }
        };
        Object.entries(EXTRA_TRANSLATIONS).forEach(([lang, values]) => Object.assign(LANGUAGE_DATA[lang], values));
        Object.entries(EXTRA_TRANSLATIONS).forEach(([lang, values]) => {
            LANGUAGE_DATA[lang].expertise_num = values.expertNum;
            LANGUAGE_DATA[lang].credentials_num = values.credNum;
            LANGUAGE_DATA[lang].contact_num = values.contactNum;
        });

        const languageButton = document.getElementById("languageButton");
        const languageSwitcher = document.querySelector(".language-switcher");
        const languageMenu = document.getElementById("languageMenu");
        const currentLanguage = document.getElementById("currentLanguage");

        const originalHTML = document.documentElement.outerHTML;

        function setContent(selector, key, lang, htmlContent = false) {
            const el = document.querySelector(selector);
            if (!el || LANGUAGE_DATA[lang][key] === undefined) return;
            if (htmlContent) el.innerHTML = LANGUAGE_DATA[lang][key];
            else el.textContent = LANGUAGE_DATA[lang][key];
        }


        function updateDocumentTitle(lang) {
            const titles = {
                en: "Noa Younes Regidor — Luxury Marketing",
                es: "Noa Younes Regidor — Marketing de Lujo",
                it: "Noa Younes Regidor — Luxury Marketing",
                fr: "Noa Younes Regidor — Marketing du Luxe",
                de: "Noa Younes Regidor — Luxury Marketing",
                nl: "Noa Younes Regidor — Luxury Marketing"
            };
            document.title = titles[lang] || titles.en;
        }

        function applyLanguage(lang) {
            const d = LANGUAGE_DATA[lang] || LANGUAGE_DATA.en;
            lang = LANGUAGE_DATA[lang] ? lang : 'en';

            document.documentElement.lang = lang;
            updateDocumentTitle(lang);
            if (currentLanguage) currentLanguage.textContent = d.lang;

            const put = (selector, value, html = false) => {
                const el = document.querySelector(selector);
                if (!el || value === undefined) return;
                if (html) el.innerHTML = value;
                else el.textContent = value;
            };

            // NAVIGATION
            put('.nav-links a[href="#about"]', d.about);
            put('.nav-links a[href="#work"]', d.work);
            put('.nav-links a[href="#experience"]', d.experience);
            put('.nav-links a[href="#education"]', d.education);
            put('.nav-links a[href="#expertise"]', d.expertise);
            put('.nav-links a[href="#contact"]', d.contact);

            // HERO
            put('.eyebrow', d.heroEyebrow);
            put('.hero-description', d.heroDesc);
            put('.hero-buttons .button-dark', d.explore);
            put('.hero-buttons .button-outline', d.get);
            put('.vertical-text', d.madrid);

            // ABOUT
            put('#about .section-number', d.aboutNum);
            put('#about h2', d.aboutTitle, true);
            put('#about .intro-text', d.aboutText, true);

            // WORK
            put('#work .section-number', d.workNum);
            put('#work .section-title', d.workTitle);
            put('#work .section-subtitle', d.workSub);
            const projects = document.querySelectorAll('#work .project');
            const pkeys = [['p1cat','p1title','p1desc'],['p2cat','p2title','p2desc'],['p3cat','p3title','p3desc'],['p4cat','p4title','p4desc']];
            projects.forEach((project, i) => {
                const k = pkeys[i]; if (!k) return;
                put(`#work .project:nth-of-type(${i + 1}) .project-category`, d[k[0]]);
                put(`#work .project:nth-of-type(${i + 1}) .project-title`, d[k[1]]);
                put(`#work .project:nth-of-type(${i + 1}) .project-description`, d[k[2]]);
            });
            // nth-of-type can be affected by structure; also set by NodeList for certainty.
            projects.forEach((project, i) => {
                const k = pkeys[i]; if (!k) return;
                putEl(project.querySelector('.project-category'), d[k[0]]);
                putEl(project.querySelector('.project-title'), d[k[1]]);
                putEl(project.querySelector('.project-description'), d[k[2]]);
            });

            // EXPERIENCE
            put('#experience .section-number', d.expNum);
            put('#experience h2', d.expTitle, true);
            const experience = document.querySelectorAll('#experience .timeline-item');
            const exkeys = [['present','role1','company1','desc1']];
            experience.forEach((item, i) => {
                const k = exkeys[i]; if (!k) return;
                if (k[0]) putEl(item.querySelector('.timeline-date'), d[k[0]]);
                putEl(item.querySelector('.timeline-role'), d[k[1]]);
                putEl(item.querySelector('.timeline-company'), d[k[2]]);
                putEl(item.querySelector('.timeline-description'), d[k[3]]);
            });

            // EDUCATION
            put('#education .section-number', d.education_num);
            put('#education .section-title', d.education_title);
            put('#education .section-number', d.educationNum || d.education_num);
            put('#education .section-title', d.educationTitle || d.education_title);
            const erasmusInstitution = document.querySelector('[data-label="erasmus-institution"]');
            if (erasmusInstitution) erasmusInstitution.textContent = d.erasmusInstitution;

            document.querySelectorAll('#education .education-item h3').forEach((item, i) => {
                putEl(item, d[`edu${i+1}`]);
            });

            // EXPERTISE
            put('#expertise .section-number', d.expertNum);
            put('#expertise .section-title', d.expertTitle);
            document.querySelectorAll('#expertise .expertise-item').forEach((item, i) => {
                const n = i + 1;
                putEl(item.querySelector('h3'), d[`e${n}`]);
                putEl(item.querySelector('p'), d[`e${n}d`]);
            });

            // CREDENTIALS
            put('#credentials .section-number', d.credNum);
            put('#credentials h2', d.credTitle, true);
            document.querySelectorAll('#credentials .credential').forEach((item, i) => {
                putEl(item.querySelector('strong'), d[`c${i+1}`]);
                putEl(item.querySelector('span'), d[`c${i+1}d`]);
            });

            // CONTACT
            put('#contact .section-number', d.contactNum);
            put('#contact h2', d.contactTitle, true);
            put('#contact p', d.contactDesc);
            const footerSpans = document.querySelectorAll('footer span');
            if (footerSpans.length > 1) footerSpans[1].textContent = d.footer;

            

            document.querySelectorAll('.language-menu button').forEach(button => {
                button.classList.toggle('active', button.dataset.lang === lang);
            });
            localStorage.setItem('noaLanguage', lang);
        }

        function putEl(el, value, html = false) {
            if (!el || value === undefined) return;
            if (html) el.innerHTML = value;
            else el.textContent = value;
        }

        function setContentButton(el, value, fromHTML = false) {
            if (!el) return;
            if (fromHTML) el.innerHTML = value;
            else el.textContent = value;
        }

        languageButton.addEventListener("click", (event) => {
            event.stopPropagation();
            languageSwitcher.classList.toggle("open");
        });

        languageMenu.addEventListener("click", (event) => {
            const button = event.target.closest("button[data-lang]");
            if (!button) return;
            applyLanguage(button.dataset.lang);
            languageSwitcher.classList.remove("open");
        });

        document.addEventListener("click", (event) => {
            if (!languageSwitcher.contains(event.target)) {
                languageSwitcher.classList.remove("open");
            }
        });

        const savedLanguage = localStorage.getItem("noaLanguage") || "en";
        applyLanguage(savedLanguage);


    /* SMOOTH ANCHOR NAVIGATION */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });