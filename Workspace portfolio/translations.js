/**
 * GIULIA DE FAZIO PORTFOLIO — I18N TRANSLATION ENGINE
 * Supports Italian (IT) and English (EN) with persistent selection in localStorage.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio_lang';

  const TRANSLATIONS = {
    it: {
      // NAVIGATION & GLOBAL
      'nav.about': 'Chi Sono',
      'nav.illustrations': 'Illustrazioni',
      'nav.projects': 'Progetti',
      'nav.contact': 'Contatti',
      'nav.contact_btn': 'Scrivimi',
      'footer.stay_in_touch': 'Restiamo in contatto',
      'footer.location': 'Torino, Italia',
      'project.prev': '← Progetto precedente',
      'project.next': 'Prossimo progetto →',

      // HERO SLIDER (index.html)
      'hero.featured': 'In evidenza',
      'hero.view_project': 'Vedi progetto',
      'hero.view_illustration': 'Vedi illustrazione',
      'hero.slide0.title': 'Flow State',
      'hero.slide0.desc': 'Capsule collection di acqua premium pensata come rituale quotidiano per rilassarsi e gestire lo stress.',
      'hero.slide1.title': 'Trama',
      'hero.slide1.desc': 'Esperienza teatrale immersiva che esplora le sfumature della manipolazione psicologica e del gaslighting.',
      'hero.slide2.title': 'Nomen',
      'hero.slide2.desc': 'Cortometraggio mystery ambientato nella Torino esoterica, tra tarocchi, coincidenze inquietanti e una parola misteriosa.',
      'hero.slide3.title': 'Copertina "Il compagno di sbronze"',
      'hero.slide3.desc': 'Copertina illustrata di "Compagno di sbronze" di Charles Bukowski, realizzata per la collana Narratori di Feltrinelli.',
      'hero.slide4.title': 'Locandina "Il Re Leone"',
      'hero.slide4.desc': 'Locandina del film Il Re Leone, realizzata in digitale con Procreate per un progetto universitario, disponibile a colori e in monocromatico.',
      'hero.slide5.title': "L'inganno della donna del bosco",
      'hero.slide5.desc': 'Illustrazione sulla duplice natura della Huldra, spirito del folklore scandinavo: bellezza luminosa in superficie e natura animale riflessa.',

      // HOME: CHI SONO SECTION
      'home.intro.label': 'Chi Sono · Digital Communication Designer',
      'home.intro.quote': 'Do forma a idee che <span class="serif-highlight">coinvolgono</span> le persone.',
      'home.intro.p1': 'Sono <strong>Giulia De Fazio</strong>, <strong>Digital Communication Designer</strong> di Torino.',
      'home.intro.p2': 'Progetto <strong>esperienze</strong> e <strong>sistemi di comunicazione</strong> che prendono forma attraverso <span class="serif-accent">installazioni immersive, identità visive, contenuti, video, motion e campagne</span>.',
      'home.intro.p3': "Ogni progetto nasce dall'<strong>ascolto</strong>, dalla <strong>ricerca</strong> e dalla volontà di creare <strong>connessioni autentiche</strong> tra persone e brand.",
      'home.intro.btn_more': 'Scopri di più su di me',
      'home.intro.btn_cv': 'Scarica CV',

      // HOME: SELECTED PROJECTS
      'home.projects.label': 'Progetti Selezionati',
      'home.projects.cat_branding': 'Branding & Packaging',
      'home.projects.cat_immersive': 'Esperienza Immersiva',
      'home.projects.cat_video': 'Video & Motion',
      'home.projects.btn_all': 'Scopri tutti i progetti',

      // HOME: SKETCHBOOK TEASER
      'home.sketch.label': 'Illustrazioni',
      'home.sketch.title': 'Un album di disegni.',
      'home.sketch.desc': 'Quello che mi piace illustrare, tra tablet e matita.',
      'home.sketch.link': 'Scopri di più &rarr;',
      'home.sketch.hint_open': 'Clicca per aprire',
      'home.sketch.hint_turn': 'Gira la pagina',
      'home.sketch.hint_flip': 'Clicca per sfogliare',
      'home.sketch.cover_subtitle': 'Album di Giulia',
      'home.sketch.cover_title': 'Illustrazioni',
      'home.sketch.plate1_tag': 'Tavola 01 · Digitale · 2024',
      'home.sketch.plate1_title': 'Copertina "Il compagno di sbronze"',
      'home.sketch.plate1_desc': 'Copertina illustrata di "Compagno di sbronze" di Charles Bukowski, realizzata per un progetto universitario di progettazione editoriale per la collana Narratori di Feltrinelli.',
      'home.sketch.plate2_tag': 'Tavola 02 · Digitale · 2024',
      'home.sketch.plate2_title': 'Locandina "Il Re Leone"',
      'home.sketch.plate2_desc': 'Locandina del film Il Re Leone, realizzata in digitale con Procreate per un progetto universitario, disponibile in una versione a colori e una monocromatica.',
      'home.sketch.plate3_tag': 'Tavola 03 · Digitale · 2025',
      'home.sketch.plate3_title': "L'inganno della donna del bosco",
      'home.sketch.plate3_desc': "L'illustrazione rappresenta la duplice natura della Huldra, spirito femminile del folklore scandinavo: la bellezza luminosa in superficie cela una natura oscura e animale riflessa nelle acque.",
      'home.sketch.plate4_tag': 'Tavola 04 · Carta · 2026',
      'home.sketch.plate4_title': 'Gothic Girl',
      'home.sketch.plate4_desc': 'Ritratto in stile gotico horror: occhi enormi, cuciture ai lati della bocca, orecchini a croce e un girocollo nero.',
      'home.sketch.end_title': "C'è altro da vedere.",
      'home.sketch.end_desc': 'Una raccolta più ampia di poster, personaggi e sperimentazioni visive realizzate tra carta e digitale.',
      'home.sketch.cta_plate_title': 'Tutte le Tavole',
      'home.sketch.cta_plate_btn': 'Vedi tutte le illustrazioni',
      'home.sketch.cta_plate_hint': 'oppure clicca per richiudere',

      // HOME & CONTATTI: CONTACT SECTION
      'contact.label': 'Mettiamoci in contatto',
      'contact.title': 'Scrivimi :)',
      'contact.page_title': 'Hai un’idea o un progetto da sviluppare insieme?',
      'contact.desc': 'Hai un’idea, una collaborazione o un progetto da sviluppare insieme?',
      'contact.action_write': 'Scrivimi',
      'contact.action_profile': 'Profilo',
      'contact.action_follow': 'Segui',
      'contact.action_portfolio': 'Portfolio',

      // ABOUT PAGE (about.html)
      'about.hero_title': 'Ciao, sono <span class="serif-highlight">Giulia.</span>',
      'about.hero_desc': 'Digital Communication Designer di Torino.<br>Progetto esperienze che uniscono strategia, sensibilità visiva e narrazione.',
      'about.tag_visual': 'Identità Visiva',
      'about.tag_crossmedia': 'Campagne Crossmediali',
      'about.tag_video': 'Video & Motion',
      'about.tag_immersive': 'Immersive Experience',
      'about.tag_illustration': 'Illustrazione',
      'about.bio_p1': 'Sono una designer della comunicazione digitale e progetto esperienze e sistemi di comunicazione che prendono forma attraverso <strong>installazioni immersive, identità visive, contenuti, video, motion e campagne</strong>.',
      'about.bio_p2': "Il mio approccio parte dall'<strong>ascolto</strong>, dalla <strong>ricerca</strong> e dall'<strong>analisi</strong> dei bisogni, cercando il giusto equilibrio tra strategia, sensibilità visiva e attenzione ai dettagli.",
      'about.bio_p3': 'Inoltre sono una <strong>illustratrice</strong> e disegno tutto ciò che mi piace e mi passa per la testa.',
      'about.bio_p4': 'Sono una persona <strong>curiosa, proattiva</strong> e credo nel design come strumento per <strong>attivare, connettere persone e dare forma a valori condivisi</strong>.',
      'about.cv_badge': 'Curriculum',
      'about.cv_title': 'Esplora il mio percorso.',
      'about.cv_btn': 'Scarica CV',
      'about.method_label': 'Metodo',
      'about.method_title': 'Come lavoro',
      'about.step1_title': 'Ascolto',
      'about.step1_desc': 'Immergersi nel contesto, comprendere gli obiettivi e ascoltare i bisogni reali delle persone e dei brand.',
      'about.step2_title': 'Ricerca',
      'about.step2_desc': 'Esplorare linguaggi visivi, analizzare scenari e raccogliere spunti per costruire una base solida.',
      'about.step3_title': 'Concept',
      'about.step3_desc': "Definire l'idea chiave, il tono di voce e l'identità visiva che daranno forma e direzione al progetto.",
      'about.step4_title': 'Cura',
      'about.step4_desc': 'Sviluppare i contenuti, curare la resa tecnica e i dettagli per una realizzazione coerente ed efficace.',
      'about.toolkit_label': 'Toolkit',
      'about.toolkit_title': 'Strumenti',
      'about.toolkit_intro': 'Cosa utilizzo nel mio lavoro:',

      // PROGETTI PAGE (progetti.html)
      'projects.hero_title': 'Tutti i <span class="serif-highlight">Progetti</span>',
      'projects.tag_branding': 'Brand Identity & Packaging',
      'projects.tag_immersive': 'Esperienza Immersiva',
      'projects.tag_video': 'Video & Motion',
      'projects.tag_crossmedia': 'Campagna Crossmediale',
      'projects.tag_social': 'Campagna Sociale',
      'projects.card_explore': 'Esplora ↗',
      'projects.card1_desc': 'Capsule collection di acqua premium pensata come rituale quotidiano per rilassarsi e gestire lo stress.',
      'projects.card2_desc': 'Un’installazione urbana sui difetti che nascondiamo e su come cambiano quando li guardiamo attraverso gli occhi di uno sconosciuto.',
      'projects.card3_desc': "Una casa che da fuori sembra normale. Dentro, un'esperienza VR che fa vivere la violenza di genere in prima persona.",
      'projects.card4_desc': 'Cortometraggio mystery ambientato nella Torino esoterica, tra tarocchi, coincidenze inquietanti e una parola misteriosa.',
      'projects.card5_desc': 'Campagna per SUSTAINera che presenta i ricambi rigenerati come prodotti affidabili, performanti e sostenibili.',
      'projects.card6_desc': 'Campagna partecipativa che racconta la forza come responsabilità, protezione e azione collettiva.',

      // ILLUSTRAZIONI PAGE (illustrazioni.html)
      'illus.hero_title': 'Le mie <span class="serif-highlight">Illustrazioni</span>',
      'illus.hero_desc': 'Illustro ciò che mi piace, in digitale e su carta. Un lato più libero del mio lavoro, che a volte si intreccia con i progetti di comunicazione.',
      'illus.filter_all': 'Tutte',
      'illus.filter_digital': 'Digitale',
      'illus.filter_paper': 'Carta',
      'illus.badge_paper': 'Carta',
      'illus.badge_digital': 'Digitale',
      'illus.lb_close': 'Chiudi',
      'illus.lb_prev': 'Precedente',
      'illus.lb_next': 'Successiva',

      // CARDS & LIGHTBOX DETAILS (10 ITEMS)
      'illus.card1.title': 'Gothic Girl',
      'illus.card1.tech': 'Matita su carta · 2026',
      'illus.card1.desc': 'Ritratto in stile gotico horror: occhi enormi, cuciture ai lati della bocca, orecchini a croce e un girocollo nero.',

      'illus.card2.title': 'Bimbo nel bosco',
      'illus.card2.tech': 'Matita su carta · 2026',
      'illus.card2.desc': "Un bimbo dagli occhi grandi rivolti verso l'alto, in mezzo ai tronchi di un bosco, con un'espressione tra il preoccupato e lo smarrito.",

      'illus.card3.title': "L'inganno della donna del bosco",
      'illus.card3.tech': 'Procreate · Folklore & Simbolismo · 2025',
      'illus.card3.desc': "L'illustrazione rappresenta la duplice natura della Huldra, spirito femminile del folklore scandinavo. La sua apparente bellezza e luminosità si contrappongono al riflesso nell'acqua, che ne rivela la natura oscura e animale, esplorando il tema dell'inganno e della dualità della natura. Realizzato in digitale con Procreate.",

      'illus.card4.title': 'Locandina "Il Re Leone"',
      'illus.card4.tech': 'Procreate · Progetto universitario · 2024',
      'illus.card4.desc': 'Locandina del film Il Re Leone, realizzata in digitale con Procreate per un progetto universitario, disponibile in una versione a colori e una monocromatica.',

      'illus.card5.title': 'N°4 (Klaus) - Umbrella Academy',
      'illus.card5.tech': 'Procreate · Progetto universitario · 2024',
      'illus.card5.desc': "Klaus è il caotico e amato membro di The Umbrella Academy che usa l'ironia e gli eccessi per fuggire dal terrificante potere di parlare con i morti e dai traumi del suo passato. Realizzato in digitale con Procreate per un progetto universitario.",

      'illus.card6.title': 'Il gatto francese',
      'illus.card6.tech': 'Procreate · Illustrazione digitale · 2024',
      'illus.card6.desc': 'Illustrazione piatta di un gatto in stile francese che beve un caffè, realizzato in digitale con Procreate.',

      'illus.card7.title': 'Copertina "Il compagno di sbronze"',
      'illus.card7.tech': 'Procreate · Progetto universitario · 2024',
      'illus.card7.desc': 'Copertina illustrata di "Compagno di sbronze" di Charles Bukowski, realizzata per un progetto universitario di progettazione editoriale per la collana Narratori di Feltrinelli. Realizzato in digitale con Procreate.',

      'illus.card8.title': 'Caos',
      'illus.card8.tech': 'Matita su carta · 2024',
      'illus.card8.desc': 'Disegnato nel 2024 in un momento di tristezza e rabbia: una figura rannicchiata che nasconde il viso tra le braccia incrociate.',

      'illus.card9.title': 'Due metà',
      'illus.card9.tech': 'Inchiostro su carta · 2018',
      'illus.card9.desc': "Un cuore diviso a metà: da un lato un angelo bianco su fondo nero, dall'altro un diavolo nero su fondo bianco, che si sfiorano in un bacio. Ispirato ai concept di arte simmetrica come 'Love, heaven or hell'.",

      'illus.card10.title': 'Pikachu',
      'illus.card10.tech': 'Matita su carta · 2012',
      'illus.card10.desc': 'Pikachu, disegnato nel 2012, quando ero ancora una bambina. È uno dei primi disegni che conservo: la matita sfumata dà volume al corpo, le punte delle orecchie sono riempite di nero e il nome, in lettere a bolla scritte a mano, chiude la composizione in basso.',

      // PROJECT: CARD 6 & COMMON
      'projects.card6_title': 'La Forza è Cura',

      // PROJECT: FLOW STATE (flowstate.html)
      'fs.hero_eyebrow': 'Branding &amp; Digital Marketing — Progetto universitario',
      'fs.claim': '"Dove la tensione svanisce."',
      'fs.brief_label': 'Il brief',
      'fs.brief_title': 'Il brief',
      'fs.brief_text': 'In un mercato delle acque premium e funzionali in crescita ma saturo, <strong>Juli</strong> si distingue attraverso artification e capsule collection. Nasce così <strong>Flow State</strong>, un’acqua funzionale con funghi nootropi, pensata per chi vive sotto stress e cerca un breve momento di sollievo e concentrazione.',
      'fs.concept_label': 'Il concept',
      'fs.concept_title': 'Shibari: la costrizione come via al rilascio.',
      'fs.concept_text': 'Ispirato allo <strong>shibari</strong>, <strong>Flow State</strong> racconta il passaggio dalla tensione alla quiete. Le bottiglie in terracotta, lavorate e legate a mano, trasformano un gesto quotidiano in un rituale che invita a rallentare e lasciare fluire la mente.',
      'fs.variants_label': 'Le cinque varianti',
      'fs.variants_intro': 'Ogni variante prende un <strong>nome giapponese</strong> ed è associata a un diverso <strong>fungo nootropo</strong>, raccontando con un tono ironico e diretto i piccoli momenti di stress della quotidianità.',
      'fs.nagi_fungo': 'Fungo Reishi',
      'fs.nagi_copy': '"Per chi ha bisogno di calmarsi prima di rispondere a quella email."',
      'fs.nagi_benefit': 'Abbassa il cortisolo',
      'fs.hikari_fungo': "Fungo Lion's Mane",
      'fs.hikari_copy': '"Per chi rilegge la stessa riga tre volte e capisce ancora meno."',
      'fs.hikari_benefit': 'Aumenta la memoria',
      'fs.ki_fungo': 'Fungo Cordyceps',
      'fs.ki_copy': '"I monaci tibetani lo usavano per scalare montagne. Tu devi solo sopravvivere al lunedì."',
      'fs.ki_benefit': "Aumenta l'energia",
      'fs.mori_fungo': 'Fungo Chaga',
      'fs.mori_copy': '"Ispirata al Shinrin-yoku per ritrovare la connessione con la natura in città."',
      'fs.mori_benefit': 'Radicamento &amp; Armonia',
      'fs.wa_fungo': 'Fungo Maitake',
      'fs.wa_copy': '"Equilibrio ormonale e benessere per accompagnare i rituali di cura personali."',
      'fs.wa_benefit': 'Rigenerazione',
      'fs.visual_label': 'Sistema Visivo',
      'fs.visual_text': 'La palette in <strong>nero, rosso e bianco</strong> evoca la carta giapponese e le corde <strong>shibari</strong>. Il packaging diventa il primo racconto del brand: ogni bottiglia legata a mano si trasforma in un piccolo oggetto editoriale.',
      'fs.campaign_label': 'La campagna digitale',
      'fs.campaign_intro': "L'obiettivo dei contenuti social è quello di creare curiosità tramite un <strong>mood elitario e misterioso</strong>.",
      'fs.teaser_tag': 'Teaser',
      'fs.teaser_title': 'Teaser pre lancio',
      'fs.teaser_text': "Quattro post nei giorni precedenti al lancio, senza prodotto: solo corde, terracotta, fungo e l'ombra di una bottiglia. Bastano a costruire curiosità.",
      'fs.quiz_tag': 'Social · Carosello interattivo',
      'fs.quiz_title': '"Quale variante Flow State sei?"',
      'fs.quiz_text': 'Un quiz-carosello che transforma la scelta del prodotto in un piccolo test di personalità, pensato per essere condiviso e salvato.',
      'fs.event_tag': 'Esperienza immersiva',
      'fs.event_title': 'Evento privato',
      'fs.event_text': 'La narrazione di Juli si completa con un’esperienza di degustazione immersiva fatta di luci, suoni, immagini e un percorso sensoriale attraverso le <strong>cinque varianti</strong> del brand.',
      'fs.ritual_tag': 'Altri sviluppi',
      'fs.ritual_title': 'Rituali &amp; Lancio',
      'fs.ritual_text': 'Juli trasforma l’acquisto in un rito: <strong>bottiglia in terracotta</strong>, <strong>refill</strong> e nel Set Completo i <strong>due bicchierini</strong> stile giapponese. Il lancio continua tra <strong>installazioni</strong> e <strong>inviti personalizzati</strong>.',

      // PROJECT: TRAMA (trama.html)
      'trama.hero_eyebrow': 'Esperienza Immersiva — Progetto universitario',
      'trama.claim': '"Un difetto, letto insieme agli altri, diventa umano."',
      'trama.exp_label': "L'esperienza",
      'trama.exp_lead': "Trama è un'<strong>installazione urbana</strong> che il visitatore incontra camminando per strada. Il percorso si costruisce in <strong>quattro momenti</strong>, dal primo sguardo alla domanda fino al ritorno, giorni dopo, nella vita di tutti i giorni.",
      'trama.step1_num': '01 — Incontro',
      'trama.step1_title': 'La struttura appare nello spazio urbano',
      'trama.step1_desc': "Una struttura inaspettata interrompe la quotidianità della piazza. Una luce calda filtra dall’ingresso e invita ad avvicinarsi, lasciando intuire un’esperienza ancora da scoprire.",
      'trama.step2_num': '02 — La domanda',
      'trama.step2_title': '“Qual è una parte di te che hai smesso di guardare?”',
      'trama.step2_desc': "All’interno, uno schermo ti illumina e ti pone una domanda. Scansionando un QR code, puoi continuare dal tuo telefono, in uno spazio privato e anonimo.",
      'trama.step3_num': '03 — La risposta',
      'trama.step3_title': 'Una risposta personale e anonima',
      'trama.step3_desc': "Attraverso il telefono puoi scegliere uno spunto o condividere liberamente un pensiero, un limite o un’insicurezza che solitamente tieni nascosta. Al termine ricevi un codice personale che ti accompagnerà nel percorso.",
      'trama.step4_num': '04 — Il corridoio',
      'trama.step4_title': 'Le parole degli altri',
      'trama.step4_desc': "Proseguendo nel corridoio, incontri frasi anonime di sconosciuti che rivelano pensieri intimi e comuni, mostrando come esperienze apparentemente personali possano essere condivise da molti.",
      'trama.step5_num': '05 — Lo specchio',
      'trama.step5_title': 'Guardarsi attraverso altri occhi',
      'trama.step5_desc': "Alla fine del corridoio, uno specchio ti permette di ritrovare il tuo pensiero attraverso un codice personale, insieme alle riflessioni anonime degli altri partecipanti.",
      'trama.step6_num': '06 — Lo scambio continua',
      'trama.step6_title': 'Dall’altra parte',
      'trama.step6_desc': "Nei giorni successivi ricevi riflessioni anonime di altre persone e condividi il tuo punto di vista su di esse, contribuendo a un archivio di pensieri che potrà raggiungere nuovi sconosciuti.",
      'trama.exp_note': 'Nota: Le immagini in questa sezione sono illustrazioni fittizie generate tramite Intelligenza Artificiale a scopo dimostrativo.',
      'trama.concept_label': 'Punto di partenza e concept',
      'trama.concept_p1': "Trama nasce dall'osservazione delle gallerie scavate dagli insetti nel legno, segni di deterioramento che rivelano invece pattern nascosti e complessi. <strong>Da qui nasce l’idea di leggere il difetto, invece di cancellarlo.</strong>",
      'trama.concept_p2': "Il nome indica, oltre alla trama del legno, il <strong>legame</strong> che si crea tra <strong>sconosciuti</strong> quando condividono esperienze insieme. Il progetto mette in discussione la <strong>perfezione</strong>, mostrando che ciò che percepiamo come un <strong>limite</strong> può apparire agli altri come un dettaglio <strong>unico</strong>.",
      'trama.visual_label': 'Identità visiva',
      'trama.swatch_black': '<strong>Nero</strong><span>Lo spazio, il corridoio, i pannelli, il fuori</span>',
      'trama.swatch_paper': '<strong>Bianco carta</strong><span>Il testo, la luce degli schermi, i materiali stampati</span>',
      'trama.swatch_grey': '<strong>Grigio fumo</strong><span>Transizioni, elementi secondari, istruzioni</span>',
      'trama.swatch_amber': "<strong>Ambra</strong><span>L'ingresso e lo specchio, quando il visitatore si vede</span>",
      'trama.tov': "<strong>Tone of voice:</strong> <strong>Osservativo e radicalmente onesto</strong>, usa parole precise e dirette. Non offre risposte, ma pone domande lasciando al visitatore la libertà di trovare il proprio significato.",
      'trama.risk_label': 'Rischi e soluzioni',
      'trama.risk1_badge': 'Rischio 1',
      'trama.risk1_p': "Qualcuno potrebbe inserire <strong>insulti o frasi volgari</strong>, rompendo l'atmosfera dell'esperienza.",
      'trama.sol1_badge': 'Soluzione',
      'trama.sol1_p': "Un <strong>micro-algoritmo</strong> scarta automaticamente gli output offensivi prima che entrino nell'archivio, affiancato da un <strong>controllo umano</strong>.",
      'trama.risk2_badge': 'Rischio 2',
      'trama.risk2_p': "L'<strong>ansia da prestazione</strong> può portare a risposte banali o vuote, impoverendo l'archivio nel tempo.",
      'trama.sol2_badge': 'Soluzione',
      'trama.sol2_p': "<strong>Tre suggerimenti</strong> sotto la domanda principale guidano verso risposte specifiche e autentiche, <strong>riducendo il blocco</strong>.",
      'trama.app_label': 'Applicazioni',
      'trama.app1_title': "Musei d'arte contemporanea",
      'trama.app1_desc': "Come <strong>installazione permanente o temporanea</strong>, in dialogo con temi di <strong>identità e percezione</strong>.",
      'trama.app2_title': 'Spazi urbani pubblici',
      'trama.app2_desc': "Piazze e aree pedonali dove la <strong>pressione estetica è alta</strong> e il traffico garantisce <strong>visibilità</strong>.",
      'trama.app3_title': 'Scuole e licei artistici',
      'trama.app3_desc': 'Workshop su <strong>body image</strong>, <strong>media literacy</strong> e identità.',
      'trama.research_label': 'Analisi e ricerca',
      'trama.res1_num': 'Psicologica',
      'trama.res1_title': "Il motore dell'errore",
      'trama.res1_desc': "Il cervello apprende grazie alla <strong>differenza tra ciò che si aspetta e ciò che accade realmente</strong>. L’errore è quindi essenziale: non va evitato, perché permette di imparare, sviluppare empatia e costruire fiducia.",
      'trama.res2_num': 'Sociologica',
      'trama.res2_title': "La norma dell'imperfezione",
      'trama.res2_desc': "Il difetto non è un dato oggettivo, ma un'etichetta creata da <strong>standard arbitrari di normalità</strong>. Eliminarlo del tutto produrrebbe una <strong>società più escludente e omologata</strong>.",
      'trama.res3_num': 'Concettuale',
      'trama.res3_title': 'Il limite umano',
      'trama.res3_desc': "Da Heidegger al Wabi-Sabi: la finitudine non è un difetto ma la <strong>struttura stessa dell'esistenza</strong>. Come nel <strong>kintsugi</strong>, le crepe si mostrano, non si nascondono.",
      'trama.res4_num': 'Del futuro',
      'trama.res4_title': 'Un lusso emotivo',
      'trama.res4_desc': "In un futuro dominato da <strong>filtri e intelligenza artificiale</strong>, la <strong>vulnerabilità umana</strong> diventerà un valore raro e una forma di autenticità e resistenza.",

      // PROJECT: GABBIA (gabbia.html)
      'gabbia.hero_eyebrow': 'Esperienza Immersiva — Progetto universitario',
      'gabbia.claim': '"Il cambiamento inizia con te. Non lasciare che il silenzio sia complice."',
      'gabbia.exp_label': "L'esperienza VR",
      'gabbia.exp_lead': "<strong>Gabbia</strong> è un’<strong>esperienza</strong> immersiva in <strong>realtà virtuale</strong> che racconta la <strong>spirale della violenza di genere</strong> attraverso un percorso in <strong>cinque stanze</strong>, corrispondenti alle diverse fasi del ciclo della violenza.",
      'gabbia.exp_note': 'Nota: Le immagini in questa sezione sono illustrazioni fittizie generate tramite Intelligenza Artificiale a scopo dimostrativo.',
      'gabbia.s1_num': '01 — La casa',
      'gabbia.s1_title': 'Prima di entrare',
      'gabbia.s1_desc': "Davanti a te c’è una casa comune, silenziosa e apparentemente innocua. Avvicinandoti, senti passi e suoni distorti. La porta si apre e una voce ti invita a osservare con attenzione: <b>la violenza spesso si nasconde proprio negli spazi più normali.</b>",
      'gabbia.s2_num': '02 — Stanza 1',
      'gabbia.s2_title': 'Micro-aggressioni',
      'gabbia.s2_desc': "Al centro della stanza c’è uno specchio integro. Intorno compaiono figure che pronunciano battute sessiste e commenti sul tuo corpo. A ogni frase, una nuova crepa attraversa il riflesso, fino a renderlo irriconoscibile. Una voce ti chiede <b>quante volte hai ignorato situazioni simili.</b>",
      'gabbia.s3_num': '03 — Stanza 2',
      'gabbia.s3_title': 'Controllo e Manipolazione',
      'gabbia.s3_desc': "Frecce luminose e messaggi premurosi ti guidano dentro un labirinto. Poco alla volta, però, le indicazioni diventano ordini e i corridoi si restringono. Obbedire porta sollievo, ma riduce la libertà. <b>L’uscita appare solo quando smetti di seguire il percorso imposto.</b>",
      'gabbia.s4_num': '04 — Stanza 3',
      'gabbia.s4_title': 'Violenza Psicologica',
      'gabbia.s4_desc': "La stanza sembra accogliente e al centro trovi un diario. Le frasi inizialmente affettuose diventano insulti e accuse. Intorno a te, luci, oggetti e pareti si deteriorano. Anche senza ferite visibili, percepisci <b>il peso della violenza psicologica.</b>",
      'gabbia.s5_num': '05 — Stanza 4',
      'gabbia.s5_title': 'Violenza Fisica',
      'gabbia.s5_desc': "Ombre minacciose ti inseguono in uno spazio buio, mentre oggetti si rompono e i colpi risuonano intorno a te. Non esiste una vera via di fuga. Alla fine, il silenzio rivela un letto e un cuscino macchiato di rosso e bagnato dalle lacrime di <b>chi ha sofferto.</b>",
      'gabbia.s6_num': '06 — Stanza 5',
      'gabbia.s6_title': 'Femminicidio',
      'gabbia.s6_desc': "Dopo un crescendo di urla e rumori, entri in una stanza bianca e silenziosa. A terra restano fotografie e oggetti personali che raccontano una vita interrotta. Davanti a uno specchio compare una domanda: <b>vuoi restare osservatore o diventare alleato?</b>",
      'gabbia.s7_num': '07 — L’uscita',
      'gabbia.s7_title': 'L’uscita',
      'gabbia.s7_desc': "La porta finale conduce in uno spazio luminoso. Compaiono testimonianze, informazioni e strumenti per riconoscere e contrastare la violenza. La casa è ancora alle tue spalle, ma ora sai che il silenzio può diventare complicità. <b>Il cambiamento inizia con te. Non lasciare che il silenzio sia complice.</b>",
      'gabbia.concept_label': 'Ispirazione e concept',
      'gabbia.concept_quote': '"Gabbia è un\'estensione digitale della ricerca di Ana Mendieta: trasformare lo spettatore da osservatore passivo a partecipante attivo nella comprensione e nel contrasto della violenza di genere."',
      'gabbia.concept_p1': "Gabbia nasce dall’eredità di <strong>Ana Mendieta</strong>, artista cubana che ha usato il proprio corpo per affrontare temi di violenza di genere e identità, e dal linguaggio immersivo di <strong>Carne y Arena</strong>, trasformando la denuncia della violenza di genere in un’esperienza da vivere in prima persona.",
      'gabbia.concept_p2': "La <strong>spirale della violenza</strong> prende forma in uno spazio che si restringe: un corridoio e cinque stanze in cui simboli, suoni e interazioni rendono visibile ciò che spesso rimane nascosto.",
      'gabbia.tech_label': 'Tecnologie e metodi',
      'gabbia.f1_num': 'Interattività',
      'gabbia.f1_title': 'Motion tracking',
      'gabbia.f1_desc': "L’utente vive l’esperienza in prima persona attraverso <strong>oggetti simbolici</strong>, percorsi e <strong>stimoli sensoriali</strong> che rendono percepibile la violenza.",
      'gabbia.f2_num': 'Ambiente',
      'gabbia.f2_title': 'Spazi multisensoriali',
      'gabbia.f2_desc': "Suoni immersivi, vibrazioni e variazioni di luce e temperatura intensificano progressivamente l’<strong>atmosfera claustrofobica</strong> dell’esperienza.",
      'gabbia.f3_num': 'Collaborazioni',
      'gabbia.f3_title': 'Accuratezza e rispetto',
      'gabbia.f3_desc': "Il progetto coinvolge <strong>associazioni, psicologi e attivisti</strong> per garantire un racconto accurato e rispettoso sul tema.",
      'gabbia.f4_num': 'Accessibilità',
      'gabbia.f4_title': 'Dentro e fuori dal museo',
      'gabbia.f4_desc': "L'esperienza è pensata per essere fruibile sia in <strong>spazi fisici</strong> come musei e scuole, sia su <strong>piattaforme VR domestiche</strong>.",

      // PROJECT: NOMEN (nomen.html)
      'nomen.hero_eyebrow': 'Video &amp; Motion — Progetto universitario',
      'nomen.claim': 'Un cortometraggio thriller sospeso tra i tarocchi e il destino nella Torino esoterica.',
      'nomen.concept_label': 'Il concept',
      'nomen.concept_title': 'Quando il destino chiama per nome',
      'nomen.concept_text': '<strong>NOMEN</strong> è un <strong>cortometraggio thriller</strong> ambientato nella <strong>Torino esoterica</strong>. Una studentessa fuorisede trova un antico mazzo di <strong>tarocchi</strong> appartenuto a Gustavo Rol, dando inizio a una serie di coincidenze inquietanti che mettono in dubbio il confine tra realtà e soprannaturale. Il progetto esplora il rapporto tra <strong>destino, caso e identità</strong> attraverso i simboli dei tarocchi e l’immaginario occulto della città.',
      'nomen.project_label': 'Il progetto',
      'nomen.caption_title': 'Nomen — video integrale',
      'nomen.p1': 'La <strong>direzione visiva</strong> accompagna la progressiva perdita di controllo della protagonista: dalla <strong>calma apparente</strong> delle prime scene, caratterizzate da luce morbida e tonalità naturali, si passa a una sensazione di <strong>ansia</strong> data spazi più scuri, ombre profonde e contrasti marcati.',
      'nomen.p2': 'La <strong>luce</strong>, spesso proveniente da fonti interne alla scena, e la <strong>variazione cromatica</strong> tra toni caldi e freddi costruiscono un’atmosfera intima e inquietante.',
      'nomen.p3': 'Il <strong>montaggio</strong> accelera gradualmente, mentre immagini, <strong>suono</strong> e <strong>colore</strong> suggeriscono una presenza soprannaturale senza mostrarla mai del tutto.',

      // PROJECT: WELCOME BACK, CHAMPION (welcome-back-champion.html)
      'wbc.hero_eyebrow': 'Campagna crossmediale — Progetto universitario',
      'wbc.claim': '"Sustainera is the place that says to champions: welcome back."',
      'wbc.brief_label': 'Il brand e il brief',
      'wbc.brief_title': "Non solo un sub-brand, ma un'evoluzione sostenibile.",
      'wbc.brief_p1': '<strong>Sustainera</strong> è la business unit di Stellantis dedicata alla rigenerazione, riparazione, riutilizzo e riciclo di veicoli e componenti per ridurre sprechi e impatto ambientale.',
      'wbc.brief_p2': 'Il progetto comunica i servizi <strong>4R</strong> attraverso una strategia <strong>disruptive e sostenibile</strong>, con concept creativo, touchpoint digitali e piano media volti a superare i pregiudizi sulla filiera circolare.',
      'wbc.challenges_label': 'Le tre sfide',
      'wbc.c1_title': 'Brand awareness',
      'wbc.c1_desc': 'Dalle interviste ai meccanici e dai sondaggi sui consumatori è emerso che <strong>Sustainera</strong> è ancora <strong>poco conosciuta</strong>.',
      'wbc.c2_title': 'Costruire fiducia',
      'wbc.c2_desc': 'La <strong>sostenibilità</strong> va comunicata come <strong>valore aggiunto</strong> tramite dati concreti, standard originali, certificazione Stellantis.',
      'wbc.c3_title': 'Cambiare percezione',
      'wbc.c3_desc': 'I pezzi Sustainera non sono il <strong>ripiego</strong> di chi non può permettersi il nuovo, ma la <strong>scelta intelligente e ovvia</strong>.',
      'wbc.concept_label': 'Il concept',
      'wbc.concept_title': 'Welcome back, Champion',
      'wbc.concept_p1': '<strong>Welcome back, Champion</strong> trasforma la rigenerazione in un comeback: un componente recuperato e riqualificato torna in gioco come un <strong>campione</strong>, esprimendo nuovamente valore, prestazioni e affidabilità.',
      'wbc.concept_p2': 'Sustainera valorizza ciò che esiste già, riducendo l’impatto ambientale e creando un vantaggio concreto.',
      'wbc.champions_label': "L'ecosistema: The Champions",
      'wbc.champions_title': 'Ogni R ha una storia.',
      'wbc.champions_desc': 'Per rendere le 4R più immediate e memorabili, abbiamo costruito un <strong>personaggio per ogni R</strong>, creando una <strong>squadra di campioni</strong>.',
      'wbc.r1_title': 'Il campione ferito',
      'wbc.r1_desc': 'Si rompe nel momento migliore della carriera. Un lavoro tecnico preciso lo rimette in condizione di tornare a vincere.',
      'wbc.r2_title': 'Il campione ricostruito',
      'wbc.r2_desc': 'Una leggenda smontata, ricondizionata, ricertificata e rimessa in gara non come copia, ma come originale al suo standard.',
      'wbc.r3_title': 'Il veterano',
      'wbc.r3_desc': 'Cambia squadra ma non ha perso valore. In un nuovo contesto torna decisivo: non un ripiego, una scelta intelligente.',
      'wbc.r4_title': 'La leggenda che cambia forma',
      'wbc.r4_desc': "Chiude un ciclo, ma la sua materia ed energia diventano qualcos'altro di forte, utile e contemporaneo.",
      'wbc.wof_tag': 'Social · Serie di post',
      'wbc.wof_title': 'The Wall of Fame',
      'wbc.wof_desc': "Quattro post social in cui ogni R viene presentata come un atleta leggendario sulla propria placca celebrativa, collegando l'affidabilità dei componenti alla gloria tipica dello sport.",
      'wbc.brochure_tag': 'Materiale fisico · Officine e fiere',
      'wbc.brochure_title': 'Sustainera Brochure',
      'wbc.brochure_desc': 'Materiale informativo pensato per presentare il programma Sustainera, il modello delle 4R e le opportunità offerte ai meccanici che scelgono di entrare nel network.',
      'wbc.coach_label': "L'ecosistema: MechCoach",
      'wbc.coach_title': 'Se i pezzi sono i campioni, qualcuno li deve allenare.',
      'wbc.coach_lead': 'Nasce così <strong>MechCoach</strong>, brand ambassador di Sustainera: una voce tecnica e affidabile, ispirata al mondo dello sport, attorno a cui si sviluppano diversi format.',
      'wbc.coach_jersey': 'Il <strong>MechCoach</strong> indosserà una <strong>maglietta personalizzata</strong>, pensata e realizzata come una vera e propria <strong>divisa tecnica sportiva</strong>.',
      'wbc.f1_desc': 'Video in cui risponde alle domande che tutti si fanno sulla propria auto. Linguaggio semplice, ironico e diretto.',
      'wbc.f2_desc': 'Domande reali degli utenti prese direttamente dai thread di Reddit.',
      'wbc.f3_desc': 'MechCoach commenta riparazioni discutibili e consigli sbagliati di altri creator, posizionandosi come voce autorevole del settore.',
      'wbc.f4_desc': 'Umanizzare il personaggio del MechCoach, trasformandolo da una figura istituzionale a qualcuno con cui le persone possano creare un legame affettivo.',
      'wbc.event_label': "L'ecosistema: evento",
      'wbc.arena1_title': 'Pre-fiera',
      'wbc.arena1_desc': "<strong>Hype.</strong> MechCoach annuncia la presenza di Sustainera con un countdown giornaliero; storie di backstage mostrano l'allestimento dello stand.",
      'wbc.arena2_title': 'Durante la fiera',
      'wbc.arena2_desc': '<strong>Test the Champion:</strong> sfide dirette tra componenti rigenerati, usati e nuovi. <strong>MechCoach Talk:</strong> commento a fine giornata in stile conferenza stampa post-partita.',
      'wbc.arena3_title': 'Post-fiera',
      'wbc.arena3_desc': '<strong>Rielaborazione.</strong> Highlights delle gare, interviste ironiche ai partecipanti, annuncio dei vincitori per mantenere viva la community.',
      'wbc.cup_desc': 'Format hero: <strong style="color:var(--color-onyx);">The Sustainera Cup</strong>, su YouTube &gt; squadre di meccanici si sfidano su prove pratiche (es. riparare un cambio in 2 ore) con imprevisti ogni 30 minuti, generando contenuti lunghi e coinvolgenti.',
      'wbc.network_label': "L'ecosistema: il network",
      'wbc.network_title': 'Espandere la rete di officine e meccanici.',
      'wbc.network_desc': '<strong>Una landing page</strong> dedicata ai <strong>meccanici</strong> presenta i vantaggi del network Sustainera, la politica 4R e i livelli di affiliazione. Allo stesso tempo permette ai consumatori di trovare un’<strong>officina certificata</strong>.',
      'wbc.feat_leaderboard': '<strong>Leaderboard</strong> Una classifica premia le officine più attive per pezzi installati e missioni completate.',
      'wbc.feat_levels': '<strong>Choose your level</strong> Tre livelli di affiliazione: Certified Player, Champion, Legend. Ognuno con requisiti e benefit chiari.',
      'wbc.feat_explains': '<strong>MechCoach Explains</strong> Tutorial e consigli tecnici del brand ambassador Sustainera per vendere e installare componenti rigenerati.',
      'wbc.proto_title': 'Esplora la Landing Page di Sustainera Network',
      'wbc.proto_btn': 'SCOPRI IL PROTOTIPO',
      'wbc.proto_link': 'Apri la landing page live ↗',
      'wbc.kit_title': 'Welcome Kit',
      'wbc.kit_desc': 'Poster, lettera di benvenuto, medaglia "Certified Partner", cappellino e flyer con QR code per sconti riservati.',

      // PROJECT: LA FORZA E CURA (la-forza-e-cura.html)
      'lfc.hero_eyebrow': 'Campagna culturale — progetto universitario',
      'lfc.title': 'La Forza è Cura',
      'lfc.claim': '"La forza non è dominare. È prendersi cura del futuro."',
      'lfc.idea_label': "L'idea di partenza",
      'lfc.idea_title': 'Analisi',
      'lfc.idea_text': 'Nell’immaginario contemporaneo, la forza viene spesso associata al dominio, alla guerra e al controllo. Il progetto propone invece una <strong>visione alternativa</strong> attraverso <strong>Leia Organa</strong>, che incarna una forza etica e relazionale.',
      'lfc.concept_label': 'Il concept',
      'lfc.concept_title': 'Concept',
      'lfc.concept_text': 'La campagna trasforma <strong>Leia Organa</strong> da icona narrativa a <strong>simbolo</strong> di una <strong>forza etica e collettiva</strong>, fondata su responsabilità, cura e capacità di costruire il futuro. Una visione alternativa all’eroismo individuale e alla violenza come soluzione, raccontata attraverso un <strong>tono lucido, politico e inclusivo</strong>: calmo, ma fermo e determinato.',
      'lfc.visual_label': 'Il sistema visivo',
      'lfc.visual_title': 'Direzione visiva',
      'lfc.visual_text': 'Il sistema visivo adotta un linguaggio <strong>essenziale e simbolico</strong>, basato su equilibrio, <strong>spazio negativo</strong> e sottrazione, evitando riferimenti diretti al franchise e ogni estetica nostalgica o spettacolare.',
      'lfc.color_nightblue': 'Blu notte',
      'lfc.color_anthracite': 'Antracite',
      'lfc.color_deepgrey': 'Grigio profondo',
      'lfc.color_warmivory': 'Avorio caldo',
      'lfc.color_warmgrey': 'Grigio caldo',
      'lfc.color_rebelred': 'Rosso ribellione',
      'lfc.story_label': 'Lo storytelling della campagna',
      'lfc.s1_title': 'Il presente',
      'lfc.s1_desc': 'Oggi la forza è associata a potere, scontro, violenza e produce frustrazione e impotenza.',
      'lfc.s2_title': 'Rottura',
      'lfc.s2_desc': 'Entra Leia, non come personaggio ma come linguaggio culturale: possiede potere, ma non lo usa come dominio.',
      'lfc.s3_title': 'Ridefinizione',
      'lfc.s3_desc': 'La forza diventa cura, scelta, collettività. Non lo si spiega: lo si fa vedere, dal verbale al visivo.',
      'lfc.s4_title': 'Apertura',
      'lfc.s4_desc': 'Il protagonista non è più Leia, ma il pubblico. La campagna non chiude il senso: invita a riconoscersi.',
      'lfc.channels_label': 'I canali',
      'lfc.c1_title': 'Volantini',
      'lfc.c1_desc': 'Volantini diffusi in città, università, eventi e mostre a tema.',
      'lfc.c2_title': 'Installazione',
      'lfc.c2_desc': 'Un muro partecipativo nello spazio pubblico raccoglie azioni e pensieri delle persone, trasformandosi nel tempo in un archivio collettivo della forza come responsabilità condivisa.',
      'lfc.c3_title': 'Guerrilla',
      'lfc.c3_desc': 'Un filo rosso attraversa lo spazio pubblico coinvolgendo progressivamente le persone, creando una linea condivisa che rende visibili connessione, responsabilità e continuità collettiva.',
      'lfc.social_desc': '<strong>I social</strong> diventano uno spazio di connessione e confronto, dove il pubblico riflette sul significato di forza, responsabilità e speranza attraverso la condivisione di piccoli gesti quotidiani.'
    },

    en: {
      // NAVIGATION & GLOBAL
      'nav.about': 'About',
      'nav.illustrations': 'Illustrations',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.contact_btn': 'Get in touch',
      'footer.stay_in_touch': "Let's stay in touch",
      'footer.location': 'Turin, Italy',
      'project.prev': '← Previous project',
      'project.next': 'Next project →',

      // HERO SLIDER (index.html)
      'hero.featured': 'Featured',
      'hero.view_project': 'View project',
      'hero.view_illustration': 'View illustration',
      'hero.slide0.title': 'Flow State',
      'hero.slide0.desc': 'A premium water capsule collection designed as a daily ritual to unwind and manage stress.',
      'hero.slide1.title': 'Trama',
      'hero.slide1.desc': 'An immersive theatrical experience exploring the subtle nuances of psychological manipulation and gaslighting.',
      'hero.slide2.title': 'Nomen',
      'hero.slide2.desc': 'A mystery short film set in esoteric Turin, blending tarot symbolism, eerie coincidences, and an enigmatic word.',
      'hero.slide3.title': 'Cover "Compagno di sbronze"',
      'hero.slide3.desc': 'Illustrated cover for Charles Bukowski\'s "Compagno di sbronze", designed for Feltrinelli\'s Narratori book series.',
      'hero.slide4.title': 'Poster "The Lion King"',
      'hero.slide4.desc': 'Poster for The Lion King, digitally illustrated in Procreate for a university project, featured in full color and monochrome.',
      'hero.slide5.title': "The Forest Woman's Deceit",
      'hero.slide5.desc': 'Illustration exploring the dual nature of the Huldra, a Scandinavian folklore spirit: luminous surface beauty hiding primal animal reflection.',

      // HOME: CHI SONO SECTION
      'home.intro.label': 'About · Digital Communication Designer',
      'home.intro.quote': 'I shape ideas that <span class="serif-highlight">engage</span> people.',
      'home.intro.p1': 'I am <strong>Giulia De Fazio</strong>, a <strong>Digital Communication Designer</strong> based in Turin.',
      'home.intro.p2': 'I design <strong>experiences</strong> and <strong>communication systems</strong> brought to life through <span class="serif-accent">immersive installations, visual identities, content, video, motion, and campaigns</span>.',
      'home.intro.p3': 'Every project stems from <strong>listening</strong>, <strong>research</strong>, and a drive to build <strong>genuine connections</strong> between people and brands.',
      'home.intro.btn_more': 'More about me',
      'home.intro.btn_cv': 'Download CV',

      // HOME: SELECTED PROJECTS
      'home.projects.label': 'Selected Projects',
      'home.projects.cat_branding': 'Branding & Packaging',
      'home.projects.cat_immersive': 'Immersive Experience',
      'home.projects.cat_video': 'Video & Motion',
      'home.projects.btn_all': 'Explore all projects',

      // HOME: SKETCHBOOK TEASER
      'home.sketch.label': 'Illustrations',
      'home.sketch.title': 'A sketchbook of drawings.',
      'home.sketch.desc': 'What I love illustrating, between tablet and pencil.',
      'home.sketch.link': 'Explore more &rarr;',
      'home.sketch.hint_open': 'Click to open',
      'home.sketch.hint_turn': 'Turn page',
      'home.sketch.hint_flip': 'Click to flip',
      'home.sketch.cover_subtitle': "Giulia's Sketchbook",
      'home.sketch.cover_title': 'Illustrations',
      'home.sketch.plate1_tag': 'Plate 01 · Digital · 2024',
      'home.sketch.plate1_title': 'Cover "Compagno di sbronze"',
      'home.sketch.plate1_desc': 'Illustrated cover for Charles Bukowski\'s "Compagno di sbronze", created for a university editorial design project for Feltrinelli\'s Narratori series.',
      'home.sketch.plate2_tag': 'Plate 02 · Digital · 2024',
      'home.sketch.plate2_title': 'Poster "The Lion King"',
      'home.sketch.plate2_desc': 'Poster for The Lion King, digitally created with Procreate for a university project, available in full color and monochrome.',
      'home.sketch.plate3_tag': 'Plate 03 · Digital · 2025',
      'home.sketch.plate3_title': "The Forest Woman's Deceit",
      'home.sketch.plate3_desc': 'The illustration portrays the dual nature of the Huldra, a female spirit from Scandinavian folklore: radiant surface beauty concealing a dark, animal essence reflected in the water.',
      'home.sketch.plate4_tag': 'Plate 04 · Paper · 2026',
      'home.sketch.plate4_title': 'Gothic Girl',
      'home.sketch.plate4_desc': 'Gothic horror portrait: oversized eyes, stitches framing the mouth, cross earrings, and a black choker.',
      'home.sketch.end_title': "There's more to explore.",
      'home.sketch.end_desc': 'A wider collection of posters, characters, and visual explorations crafted between paper and digital.',
      'home.sketch.cta_plate_title': 'All Plates',
      'home.sketch.cta_plate_btn': 'View all illustrations',
      'home.sketch.cta_plate_hint': 'or click to close',

      // HOME & CONTATTI: CONTACT SECTION
      'contact.label': "Let's get in touch",
      'contact.title': 'Drop me a line :)',
      'contact.page_title': 'Have an idea or a project to develop together?',
      'contact.desc': 'Have an idea, a collaboration, or a project to develop together?',
      'contact.action_write': 'Email me',
      'contact.action_profile': 'Profile',
      'contact.action_follow': 'Follow',
      'contact.action_portfolio': 'Portfolio',

      // ABOUT PAGE (about.html)
      'about.hero_title': 'Hi, I’m <span class="serif-highlight">Giulia.</span>',
      'about.hero_desc': 'Digital Communication Designer based in Turin.<br>I craft experiences merging strategy, visual sensibility, and narrative.',
      'about.tag_visual': 'Visual Identity',
      'about.tag_crossmedia': 'Crossmedia Campaigns',
      'about.tag_video': 'Video & Motion',
      'about.tag_immersive': 'Immersive Experience',
      'about.tag_illustration': 'Illustration',
      'about.bio_p1': 'I am a digital communication designer creating experiences and communication systems brought to life through <strong>immersive installations, visual identities, content, video, motion, and campaigns</strong>.',
      'about.bio_p2': 'My approach is grounded in <strong>listening</strong>, <strong>research</strong>, and <strong>needs analysis</strong>, seeking the right harmony between strategy, visual sensibility, and attention to detail.',
      'about.bio_p3': 'I am also an <strong>illustrator</strong>, drawing whatever sparks my curiosity and imagination.',
      'about.bio_p4': 'I am a <strong>curious, proactive</strong> person and believe in design as a medium to <strong>activate, connect people, and give shape to shared values</strong>.',
      'about.cv_badge': 'Resume',
      'about.cv_title': 'Explore my background.',
      'about.cv_btn': 'Download CV',
      'about.method_label': 'Method',
      'about.method_title': 'How I work',
      'about.step1_title': 'Listen',
      'about.step1_desc': 'Immersing in context, understanding objectives, and listening to the genuine needs of people and brands.',
      'about.step2_title': 'Research',
      'about.step2_desc': 'Exploring visual languages, analyzing scenarios, and gathering insights to establish a solid foundation.',
      'about.step3_title': 'Concept',
      'about.step3_desc': 'Defining the key idea, tone of voice, and visual identity that steer and shape the project.',
      'about.step4_title': 'Craft',
      'about.step4_desc': 'Developing content, refining technical delivery, and polishing details for a cohesive and impactful execution.',
      'about.toolkit_label': 'Toolkit',
      'about.toolkit_title': 'Tools',
      'about.toolkit_intro': 'What I work with:',

      // PROGETTI PAGE (progetti.html)
      'projects.hero_title': 'All <span class="serif-highlight">Projects</span>',
      'projects.tag_branding': 'Brand Identity & Packaging',
      'projects.tag_immersive': 'Immersive Experience',
      'projects.tag_video': 'Video & Motion',
      'projects.tag_crossmedia': 'Crossmedia Campaign',
      'projects.tag_social': 'Social Campaign',
      'projects.card_explore': 'Explore ↗',
      'projects.card1_desc': 'A premium water capsule collection designed as a daily ritual to unwind and manage stress.',
      'projects.card2_desc': 'An urban installation exploring the flaws we hide and how they shift when perceived through a stranger\'s eyes.',
      'projects.card3_desc': 'A home that looks ordinary from the outside. Inside, a VR experience conveying gender-based violence firsthand.',
      'projects.card4_desc': 'A mystery short film set in esoteric Turin, blending tarot symbolism, eerie coincidences, and an enigmatic word.',
      'projects.card5_desc': 'A campaign for SUSTAINera presenting remanufactured parts as reliable, high-performing, and sustainable.',
      'projects.card6_desc': 'A participatory campaign framing strength as responsibility, protection, and collective action.',

      // ILLUSTRAZIONI PAGE (illustrazioni.html)
      'illus.hero_title': 'My <span class="serif-highlight">Illustrations</span>',
      'illus.hero_desc': 'I illustrate what I love, across digital and paper. A freer side of my work, occasionally intertwining with communication projects.',
      'illus.filter_all': 'All',
      'illus.filter_digital': 'Digital',
      'illus.filter_paper': 'Paper',
      'illus.badge_paper': 'Paper',
      'illus.badge_digital': 'Digital',
      'illus.lb_close': 'Close',
      'illus.lb_prev': 'Previous',
      'illus.lb_next': 'Next',

      // CARDS & LIGHTBOX DETAILS (10 ITEMS)
      'illus.card1.title': 'Gothic Girl',
      'illus.card1.tech': 'Pencil on paper · 2026',
      'illus.card1.desc': 'Gothic horror portrait: oversized eyes, stitches framing the mouth, cross earrings, and a black choker.',

      'illus.card2.title': 'Child in the Woods',
      'illus.card2.tech': 'Pencil on paper · 2026',
      'illus.card2.desc': 'A child with wide eyes gazing upward amidst the tree trunks of a forest, caught between concern and wonder.',

      'illus.card3.title': "The Forest Woman's Deceit",
      'illus.card3.tech': 'Procreate · Folklore & Symbolism · 2025',
      'illus.card3.desc': 'The illustration portrays the dual nature of the Huldra, a female spirit from Scandinavian folklore: radiant surface beauty concealing a dark, animal essence reflected in the water. Digitally created with Procreate.',

      'illus.card4.title': 'Poster "The Lion King"',
      'illus.card4.tech': 'Procreate · University project · 2024',
      'illus.card4.desc': 'Poster for The Lion King, digitally created with Procreate for a university project, available in full color and monochrome.',

      'illus.card5.title': 'N°4 (Klaus) - Umbrella Academy',
      'illus.card5.tech': 'Procreate · University project · 2024',
      'illus.card5.desc': 'Klaus is the chaotic and beloved member of The Umbrella Academy who uses irony and excess to escape his terrifying power to speak with the dead and the traumas of his past. Digitally illustrated with Procreate for a university project.',

      'illus.card6.title': 'The French Cat',
      'illus.card6.tech': 'Procreate · Digital illustration · 2024',
      'illus.card6.desc': 'Flat-style illustration of a French cat sipping coffee, digitally crafted in Procreate.',

      'illus.card7.title': 'Cover "Compagno di sbronze"',
      'illus.card7.tech': 'Procreate · University project · 2024',
      'illus.card7.desc': 'Illustrated cover for Charles Bukowski\'s "Compagno di sbronze", created for a university editorial design project for Feltrinelli\'s Narratori series. Digitally created with Procreate.',

      'illus.card8.title': 'Chaos',
      'illus.card8.tech': 'Pencil on paper · 2024',
      'illus.card8.desc': 'Drawn in 2024 in a moment of sorrow and anger: a curled-up figure hiding their face in folded arms.',

      'illus.card9.title': 'Two Halves',
      'illus.card9.tech': 'Ink on paper · 2018',
      'illus.card9.desc': 'A heart split in two: a white angel on a black background touching lips in a kiss with a black devil on a white background. Inspired by symmetrical art concepts like \'Love, heaven or hell\'.',

      'illus.card10.title': 'Pikachu',
      'illus.card10.tech': 'Pencil on paper · 2012',
      'illus.card10.desc': 'Pikachu, drawn in 2012 when I was still a child. One of my earliest preserved drawings: soft pencil shading gives volume, ear tips filled in black, and handcrafted bubble lettering at the base.',

      // PROJECT: CARD 6 & COMMON
      'projects.card6_title': 'Strength as Care',

      // PROJECT: FLOW STATE (flowstate.html)
      'fs.hero_eyebrow': 'Branding &amp; Digital Marketing — University project',
      'fs.claim': '"Where tension fades away."',
      'fs.brief_label': 'The brief',
      'fs.brief_title': 'The brief',
      'fs.brief_text': 'In a booming yet saturated market of premium and functional waters, <strong>Juli</strong> sets itself apart through artification and capsule collections. Thus was born <strong>Flow State</strong>, a functional water infused with nootropic mushrooms, designed for those living under stress seeking a brief moment of relief and focus.',
      'fs.concept_label': 'The concept',
      'fs.concept_title': 'Shibari: constriction as the path to release.',
      'fs.concept_text': 'Inspired by <strong>shibari</strong>, <strong>Flow State</strong> narrates the journey from tension to stillness. The terracotta bottles, handcrafted and tied by hand, turn an everyday gesture into a ritual inviting one to slow down and let the mind flow.',
      'fs.variants_label': 'The five variants',
      'fs.variants_intro': 'Each variant carries a <strong>Japanese name</strong> paired with a specific <strong>nootropic mushroom</strong>, capturing the subtle stressful moments of everyday life with an ironic, candid tone.',
      'fs.nagi_fungo': 'Reishi Mushroom',
      'fs.nagi_copy': '"For those who need to calm down before replying to that email."',
      'fs.nagi_benefit': 'Lowers cortisol',
      'fs.hikari_fungo': "Lion's Mane Mushroom",
      'fs.hikari_copy': '"For those who reread the same sentence three times and understand even less."',
      'fs.hikari_benefit': 'Enhances memory',
      'fs.ki_fungo': 'Cordyceps Mushroom',
      'fs.ki_copy': '"Tibetan monks used it to climb mountains. You just have to survive Monday."',
      'fs.ki_benefit': 'Boosts energy',
      'fs.mori_fungo': 'Chaga Mushroom',
      'fs.mori_copy': '"Inspired by Shinrin-yoku to reconnect with nature within the city."',
      'fs.mori_benefit': 'Grounding &amp; Harmony',
      'fs.wa_fungo': 'Maitake Mushroom',
      'fs.wa_copy': '"Hormonal balance and wellness to nurture self-care rituals."',
      'fs.wa_benefit': 'Regeneration',
      'fs.visual_label': 'Visual System',
      'fs.visual_text': 'The color palette in <strong>black, red, and white</strong> evokes Japanese washi paper and <strong>shibari</strong> ropes. Packaging serves as the initial brand narrative: each hand-tied bottle turns into a delicate editorial art piece.',
      'fs.campaign_label': 'The digital campaign',
      'fs.campaign_intro': 'The social media content aims to spark curiosity through an <strong>exclusive, mysterious aesthetic</strong>.',
      'fs.teaser_tag': 'Teaser',
      'fs.teaser_title': 'Pre-launch teaser',
      'fs.teaser_text': 'Four pre-launch posts with no product revealed: just ropes, terracotta, mushrooms, and the silhouette of a bottle. Enough to build intrigue.',
      'fs.quiz_tag': 'Social · Interactive carousel',
      'fs.quiz_title': '"Which Flow State variant are you?"',
      'fs.quiz_text': 'A carousel quiz transforming product choice into a lighthearted personality test, crafted to be saved and shared.',
      'fs.event_tag': 'Immersive experience',
      'fs.event_title': 'Private event',
      'fs.event_text': 'Juli’s narrative culminates in an immersive tasting experience featuring lights, soundscapes, visuals, and a sensory journey through the brand’s <strong>five variants</strong>.',
      'fs.ritual_tag': 'Further developments',
      'fs.ritual_title': 'Rituals &amp; Launch',
      'fs.ritual_text': 'Juli transforms the purchase into a ritual: <strong>terracotta bottle</strong>, <strong>refill pack</strong>, and in the Complete Set, <strong>two Japanese-style cups</strong>. The launch extends across <strong>installations</strong> and <strong>custom invitations</strong>.',

      // PROJECT: TRAMA (trama.html)
      'trama.hero_eyebrow': 'Immersive Experience — University project',
      'trama.claim': '"A flaw, read alongside others, becomes human."',
      'trama.exp_label': 'The experience',
      'trama.exp_lead': 'Trama is an <strong>urban installation</strong> that passersby encounter along the street. The journey unfolds across <strong>four key stages</strong>, from the initial glance and prompt to the return days later in everyday life.',
      'trama.step1_num': '01 — Encounter',
      'trama.step1_title': 'The structure emerges in urban space',
      'trama.step1_desc': 'An unexpected pavilion interrupts the daily rhythm of the square. A warm glow filters through the entrance, inviting people in to discover the experience within.',
      'trama.step2_num': '02 — The question',
      'trama.step2_title': '“What is a part of yourself that you stopped looking at?”',
      'trama.step2_desc': 'Inside, an illuminated screen faces you with a question. By scanning a QR code, visitors continue on their smartphone in a private, anonymous space.',
      'trama.step3_num': '03 — The response',
      'trama.step3_title': 'A personal and anonymous response',
      'trama.step3_desc': 'Via their smartphone, visitors can choose a prompt or openly share a thought, boundary, or vulnerability they usually hide. Upon completing it, they receive a personal code for the rest of the journey.',
      'trama.step4_num': '04 — The corridor',
      'trama.step4_title': 'The words of others',
      'trama.step4_desc': 'Walking down the corridor, visitors read anonymous confessions from strangers revealing intimate yet common reflections, showing how personal struggles are shared by many.',
      'trama.step5_num': '05 — The mirror',
      'trama.step5_title': 'Seeing oneself through other eyes',
      'trama.step5_desc': 'At the corridor’s end, a mirror reflects the visitor’s thought accessed via their personal code, alongside anonymous responses from fellow participants.',
      'trama.step6_num': '06 — The exchange continues',
      'trama.step6_title': 'On the other side',
      'trama.step6_desc': 'In subsequent days, participants receive anonymous reflections from others and share their perspectives, nurturing a collective repository that reaches new strangers.',
      'trama.exp_note': 'Note: Images in this section are illustrative mockups generated via Artificial Intelligence for demonstration purposes.',
      'trama.concept_label': 'Starting point & concept',
      'trama.concept_p1': "Trama began from observing beetle-bored pathways inside timber—signs of decay that reveal intricate, hidden patterns. <strong>This sparked the idea of reading flaws instead of erasing them.</strong>",
      'trama.concept_p2': "The name signifies both the wood grain ('trama') and the <strong>bond</strong> woven between <strong>strangers</strong> sharing an experience. The project challenges ideals of <strong>perfection</strong>, demonstrating how perceived <strong>flaws</strong> can be appreciated by others as uniquely <strong>authentic</strong>.",
      'trama.visual_label': 'Visual identity',
      'trama.swatch_black': '<strong>Black</strong><span>The space, the corridor, panels, the exterior</span>',
      'trama.swatch_paper': '<strong>Paper white</strong><span>Text, screen glow, printed collateral</span>',
      'trama.swatch_grey': '<strong>Smoke grey</strong><span>Transitions, secondary cues, instructions</span>',
      'trama.swatch_amber': '<strong>Amber</strong><span>Entrance and mirror reflection, when the visitor sees themselves</span>',
      'trama.tov': '<strong>Tone of voice:</strong> <strong>Observant and radically honest</strong>, using sharp and candid words. It doesn\'t offer easy answers, but asks questions leaving visitors room to find their own meaning.',
      'trama.risk_label': 'Risks & solutions',
      'trama.risk1_badge': 'Risk 1',
      'trama.risk1_p': 'Someone might submit <strong>vulgar or abusive comments</strong>, disrupting the atmospheric tone.',
      'trama.sol1_badge': 'Solution',
      'trama.sol1_p': 'A <strong>lightweight filter</strong> screens offensive words before submission to the database, paired with <strong>human curation</strong>.',
      'trama.risk2_badge': 'Risk 2',
      'trama.risk2_p': '<strong>Performance anxiety</strong> could yield generic or empty answers, diluting the archive.',
      'trama.sol2_badge': 'Solution',
      'trama.sol2_p': '<strong>Three intuitive cues</strong> under the main prompt guide authentic, nuanced answers, <strong>lowering cognitive friction</strong>.',
      'trama.app_label': 'Applications',
      'trama.app1_title': 'Contemporary art museums',
      'trama.app1_desc': 'As a <strong>permanent or temporary pavilion</strong> exploring themes of <strong>identity and perception</strong>.',
      'trama.app2_title': 'Public urban spaces',
      'trama.app2_desc': 'Plazas and pedestrian hubs where <strong>aesthetic pressures run high</strong> and footfall guarantees <strong>visibility</strong>.',
      'trama.app3_title': 'Art academies & schools',
      'trama.app3_desc': 'Educational workshops addressing <strong>body image</strong>, <strong>media literacy</strong>, and personal identity.',
      'trama.research_label': 'Analysis & research',
      'trama.res1_num': 'Psychological',
      'trama.res1_title': 'The engine of error',
      'trama.res1_desc': 'The brain learns through the <strong>gap between expectations and reality</strong>. Flaws and errors are essential: far from being avoided, they cultivate empathy, resilience, and trust.',
      'trama.res2_num': 'Sociological',
      'trama.res2_title': 'The norm of imperfection',
      'trama.res2_desc': 'Flaws are not objective defects, but labels shaped by <strong>arbitrary standards of normalcy</strong>. Eliminating them entirely breeds a <strong>homogenized and exclusionary society</strong>.',
      'trama.res3_num': 'Conceptual',
      'trama.res3_title': 'Human limitation',
      'trama.res3_desc': 'From Heidegger to Wabi-Sabi: finiteness is not a failure, but the <strong>foundation of existence</strong>. As in <strong>kintsugi</strong>, fractures are illuminated, never disguised.',
      'trama.res4_num': 'Future outlook',
      'trama.res4_title': 'An emotional luxury',
      'trama.res4_desc': 'In a future saturated by <strong>filters and artificial intelligence</strong>, <strong>human vulnerability</strong> stands out as a rare asset of resistance and authenticity.',

      // PROJECT: GABBIA (gabbia.html)
      'gabbia.hero_eyebrow': 'Immersive Experience — University project',
      'gabbia.claim': '"Change starts with you. Do not let silence become complicity."',
      'gabbia.exp_label': 'The VR experience',
      'gabbia.exp_lead': '<strong>Gabbia</strong> is an immersive <strong>virtual reality experience</strong> that reveals the <strong>spiral of gender-based violence</strong> through a journey across <strong>five rooms</strong> reflecting the cycles of abuse.',
      'gabbia.exp_note': 'Note: Images in this section are illustrative mockups generated via Artificial Intelligence for demonstration purposes.',
      'gabbia.s1_num': '01 — The house',
      'gabbia.s1_title': 'Before entering',
      'gabbia.s1_desc': 'Before you lies a typical home, quiet and seemingly peaceful. Moving closer, distorted footsteps and whispers echo. The door opens and a voice invites you to look closely: <b>violence often hides inside the most commonplace settings.</b>',
      'gabbia.s2_num': '02 — Room 1',
      'gabbia.s2_title': 'Micro-aggressions',
      'gabbia.s2_desc': 'In the center stands an intact mirror. Surrounding figures mutter sexist remarks and body judgments. With each comment, a crack splinters the reflection until it becomes fractured. A voice asks: <b>how many times have you looked away from similar moments?</b>',
      'gabbia.s3_num': '03 — Room 2',
      'gabbia.s3_title': 'Control and Manipulation',
      'gabbia.s3_desc': 'Luminescent arrows and protective messages guide you through a maze. Gradually, affectionate advice hardens into demands as walls close in. Obeying brings momentary relief, but strips away agency. <b>The exit only reveals itself once you refuse the enforced path.</b>',
      'gabbia.s4_num': '04 — Room 3',
      'gabbia.s4_title': 'Psychological Violence',
      'gabbia.s4_desc': 'The room seems cozy; at its center lies a journal. Tender phrases turn into blame and verbal degradation. Around you, lighting dims and walls decay. Even without physical wounds, you feel <b>the crushing gravity of psychological abuse.</b>',
      'gabbia.s5_num': '05 — Room 4',
      'gabbia.s5_title': 'Physical Violence',
      'gabbia.s5_desc': 'Menacing shadows pursue you across a darkened space as shattered objects and heavy blows echo around you. There is nowhere to flee. In the aftermath, heavy silence reveals a bed and a pillow marked with crimson and wet with tears of <b>those who suffered.</b>',
      'gabbia.s6_num': '06 — Room 5',
      'gabbia.s6_title': 'Femicide',
      'gabbia.s6_desc': 'Following a crescendo of shouts and chaos, you step into a mute white space. Scattered photographs and keepsakes commemorate an abruptly ended life. Before a mirror, one question appears: <b>will you remain a bystander or become an ally?</b>',
      'gabbia.s7_num': '07 — The exit',
      'gabbia.s7_title': 'The exit',
      'gabbia.s7_desc': 'The final door opens into a sunlit room. Testimonies, support contacts, and educational tools on recognizing abuse appear. The house stands behind you, but now you understand how silence breeds complicity. <b>Change begins with you. Do not let silence be complicit.</b>',
      'gabbia.concept_label': 'Inspiration & concept',
      'gabbia.concept_quote': '"Gabbia serves as a digital continuation of Ana Mendieta’s artistic inquiry: transitioning the viewer from a passive observer into an active participant in understanding and challenging gender-based violence."',
      'gabbia.concept_p1': 'Gabbia draws from the legacy of Cuban artist <strong>Ana Mendieta</strong>, who explored gender violence and identity through visceral bodily art, fused with the immersive spatial storytelling of <strong>Carne y Arena</strong> to translate the fight against abuse into a first-person experience.',
      'gabbia.concept_p2': 'The <strong>cycle of abuse</strong> physically narrows across five rooms and a closing corridor, where symbolic artifacts, 3D soundscapes, and sensory interactions expose what is typically concealed behind closed doors.',
      'gabbia.tech_label': 'Technologies & methods',
      'gabbia.f1_num': 'Interactivity',
      'gabbia.f1_title': 'Motion tracking',
      'gabbia.f1_desc': 'Visitors navigate the installation first-hand using <strong>symbolic tangible objects</strong>, spatial movements, and <strong>tactile feedback</strong>.',
      'gabbia.f2_num': 'Environment',
      'gabbia.f2_title': 'Multisensory spaces',
      'gabbia.f2_desc': 'Binaural sound design, haptics, and gradual shifts in ambient temperature reinforce the <strong>claustrophobic psychological atmosphere</strong>.',
      'gabbia.f3_num': 'Collaborations',
      'gabbia.f3_title': 'Accuracy & respect',
      'gabbia.f3_desc': 'Developed in dialogue with <strong>anti-violence centers, psychologists, and activists</strong> to uphold respectful, nuanced storytelling.',
      'gabbia.f4_num': 'Accessibility',
      'gabbia.f4_title': 'Within and beyond museums',
      'gabbia.f4_desc': 'Engineered for deployment across <strong>cultural venues</strong> and classrooms, as well as standalone headsets for remote distribution.',

      // PROJECT: NOMEN (nomen.html)
      'nomen.hero_eyebrow': 'Video &amp; Motion — University project',
      'nomen.claim': 'A mystery thriller short film exploring tarot and destiny across esoteric Turin.',
      'nomen.concept_label': 'The concept',
      'nomen.concept_title': 'When destiny calls by name',
      'nomen.concept_text': '<strong>NOMEN</strong> is a <strong>thriller short film</strong> set across the <strong>esoteric enclaves of Turin</strong>. An off-campus student discovers an antique deck of <strong>tarot cards</strong> attributed to psychic Gustavo Rol, triggering uncanny coincidences that blur reality and the supernatural. The project interrogates <strong>fate, chance, and identity</strong> through esoteric symbolism and urban myth.',
      'nomen.project_label': 'The project',
      'nomen.caption_title': 'Nomen — full film',
      'nomen.p1': 'The <strong>visual direction</strong> mirrors the protagonist’s unraveling perception: early serene scenes with diffused daylight shift gradually into claustrophobic shadows, sharp contrast, and deep chiaroscuro.',
      'nomen.p2': 'Practical interior lighting sources and deliberate <strong>chromatic shifts</strong> between amber and cold blues evoke an eerie, suspenseful intimacy.',
      'nomen.p3': 'The <strong>editing tempo</strong> tightens relentlessly, using layered sound design and tonal discord to suggest an occult presence without ever relying on direct exposition.',

      // PROJECT: WELCOME BACK, CHAMPION (welcome-back-champion.html)
      'wbc.hero_eyebrow': 'Crossmedia campaign — University project',
      'wbc.claim': '"Sustainera is the place that says to champions: welcome back."',
      'wbc.brief_label': 'The brand & the brief',
      'wbc.brief_title': 'Not merely a sub-brand, but a sustainable evolution.',
      'wbc.brief_p1': '<strong>Sustainera</strong> is Stellantis’s circular business unit dedicated to remanufacturing, repairing, reusing, and recycling automotive components to curtail environmental impact.',
      'wbc.brief_p2': 'The campaign communicates the <strong>4R</strong> framework through a <strong>disruptive and sustainable</strong> creative strategy, crafting digital touchpoints and activations to debunk stigmas around remanufactured parts.',
      'wbc.challenges_label': 'The three challenges',
      'wbc.c1_title': 'Brand awareness',
      'wbc.c1_desc': 'Interviews with automotive mechanics and consumer surveys revealed that <strong>Sustainera</strong> still suffered from low brand recognition.',
      'wbc.c2_title': 'Building trust',
      'wbc.c2_desc': '<strong>Sustainability</strong> had to be communicated as an authentic performance asset backed by certified Stellantis benchmarks.',
      'wbc.c3_title': 'Shifting perception',
      'wbc.c3_desc': 'Remanufactured parts are not a cheap substitute, but the smart, forward-thinking choice.',
      'wbc.concept_label': 'The concept',
      'wbc.concept_title': 'Welcome back, Champion',
      'wbc.concept_p1': '<strong>Welcome back, Champion</strong> reinterprets circular engineering as a comeback narrative: a restored, certified component returns to the arena like an undisputed champion delivering peak performance.',
      'wbc.concept_p2': 'Sustainera leverages existing value, cutting environmental footprint while delivering tangible utility.',
      'wbc.champions_label': 'The ecosystem: The Champions',
      'wbc.champions_title': 'Every R has a story.',
      'wbc.champions_desc': 'To make the 4R methodology memorable and human, we created a distinct athlete persona for each R, forming an all-star roster.',
      'wbc.r1_title': 'The injured champion',
      'wbc.r1_desc': 'Suffers an injury at peak performance. Meticulous precision restores them to championship form.',
      'wbc.r2_title': 'The rebuilt champion',
      'wbc.r2_desc': 'A legend disassembled, remanufactured, certified, and fielded not as a replica, but up to OEM standards.',
      'wbc.r3_title': 'The seasoned veteran',
      'wbc.r3_desc': 'Transfers to a new squad without losing value. In a fresh arena they prove decisive: a tactical asset.',
      'wbc.r4_title': 'The shapeshifting legend',
      'wbc.r4_desc': 'Concludes a cycle, yet raw essence is reborn into something bold, useful, and future-ready.',
      'wbc.wof_tag': 'Social · Post series',
      'wbc.wof_title': 'The Wall of Fame',
      'wbc.wof_desc': 'A four-part social campaign framing each R as an iconic athlete honored on an athletic plaque, tying mechanical excellence to sporting prestige.',
      'wbc.brochure_tag': 'Print collateral · Garages & expos',
      'wbc.brochure_title': 'Sustainera Brochure',
      'wbc.brochure_desc': 'Sales collateral detailing the Sustainera ecosystem, circular 4R model, and partnership benefits for mechanics entering the network.',
      'wbc.coach_label': 'The ecosystem: MechCoach',
      'wbc.coach_title': 'If parts are the champions, someone has to coach them.',
      'wbc.coach_lead': 'Enter <strong>MechCoach</strong>, Sustainera’s charismatic brand ambassador: an authentic technical authority coaching auto enthusiasts across varied media formats.',
      'wbc.coach_jersey': 'The <strong>MechCoach</strong> dons a <strong>custom technical jersey</strong> styled after elite sports kits.',
      'wbc.f1_desc': 'Short-form videos answering common automotive dilemmas in plain, witty, and relatable terms.',
      'wbc.f2_desc': 'Authentic automotive troubleshooting answering community queries directly from Reddit threads.',
      'wbc.f3_desc': 'MechCoach reacts to questionable DIY garage tutorials, establishing authoritative professional standards with humor.',
      'wbc.f4_desc': 'Humanizing MechCoach into a beloved personality rather than a corporate mouthpiece.',
      'wbc.event_label': 'The ecosystem: Live event',
      'wbc.arena1_title': 'Pre-expo',
      'wbc.arena1_desc': '<strong>Hype.</strong> MechCoach announces the event with daily countdowns and behind-the-scenes glimpses of booth setup.',
      'wbc.arena2_title': 'During the expo',
      'wbc.arena2_desc': '<strong>Test the Champion:</strong> side-by-side challenges between remanufactured and OEM parts. <strong>MechCoach Talk:</strong> daily recaps framed as post-match press briefings.',
      'wbc.arena3_title': 'Post-expo',
      'wbc.arena3_desc': '<strong>Debrief.</strong> Competitive match highlights, witty garage interviews, and prize reveals keeping the community energized.',
      'wbc.cup_desc': 'Hero series: <strong style="color:var(--color-onyx);">The Sustainera Cup</strong> on YouTube &gt; teams of mechanics compete in timed challenges (e.g. rebuild a gearbox in 2h) with surprise twists every 30 minutes.',
      'wbc.network_label': 'The ecosystem: The network',
      'wbc.network_title': 'Expanding the network of certified garages.',
      'wbc.network_desc': '<strong>A dedicated digital portal</strong> showcases partnership advantages, 4R circular programs, and membership tiers for independent mechanics, while directing motorists to verified garages.',
      'wbc.feat_leaderboard': '<strong>Leaderboard</strong> A gamified ranking system celebrates high-performing workshops based on installed parts and fulfilled sustainability goals.',
      'wbc.feat_levels': '<strong>Choose your level</strong> Three structured partnership tiers: Certified Player, Champion, and Legend with transparent benefits.',
      'wbc.feat_explains': '<strong>MechCoach Explains</strong> Masterclasses and technical guides from our ambassador on selling and installing remanufactured components.',
      'wbc.proto_title': 'Explore the Sustainera Network Landing Page',
      'wbc.proto_btn': 'EXPLORE THE PROTOTYPE',
      'wbc.proto_link': 'Open live landing page ↗',
      'wbc.kit_title': 'Welcome Kit',
      'wbc.kit_desc': 'Commemorative poster, welcome letter, "Certified Partner" medal, cap, and branded flyers offering exclusive discounts.',

      // PROJECT: LA FORZA E CURA (la-forza-e-cura.html)
      'lfc.hero_eyebrow': 'Cultural campaign — University project',
      'lfc.title': 'Strength as Care',
      'lfc.claim': '"Strength is not domination. It is taking care of the future."',
      'lfc.idea_label': 'The premise',
      'lfc.idea_title': 'Analysis',
      'lfc.idea_text': 'In popular culture, strength is frequently conflated with dominion, warfare, and control. This project posits an <strong>alternative perspective</strong> through <strong>Leia Organa</strong>, who exemplifies ethical and relational fortitude.',
      'lfc.concept_label': 'The concept',
      'lfc.concept_title': 'Concept',
      'lfc.concept_text': 'The campaign reframes <strong>Leia Organa</strong> from a fictional hero into a <strong>symbol</strong> of <strong>collective ethical strength</strong> rooted in care, responsibility, and civic duty. A counter-narrative to hyper-individualism and brute force, voiced in a <strong>clear, political, and inclusive tone</strong>: serene yet unyielding.',
      'lfc.visual_label': 'The visual system',
      'lfc.visual_title': 'Visual direction',
      'lfc.visual_text': 'The graphic system embraces an <strong>essential and symbolic vernacular</strong> grounded in balance, <strong>negative space</strong>, and reduction—deliberately eschewing nostalgic pop-culture tropes.',
      'lfc.color_nightblue': 'Midnight blue',
      'lfc.color_anthracite': 'Anthracite',
      'lfc.color_deepgrey': 'Deep grey',
      'lfc.color_warmivory': 'Warm ivory',
      'lfc.color_warmgrey': 'Warm grey',
      'lfc.color_rebelred': 'Rebel red',
      'lfc.story_label': 'Campaign storytelling',
      'lfc.s1_title': 'The present',
      'lfc.s1_desc': 'Strength today is equated with dominance, confrontation, and hostility, breeding widespread alienation.',
      'lfc.s2_title': 'Disruption',
      'lfc.s2_desc': 'Leia enters not as mere lore, but as a cultural archetype: she wields authority without ever seeking dominance.',
      'lfc.s3_title': 'Redefinition',
      'lfc.s3_desc': 'Strength transforms into care, agency, and community. Rather than preaching it, the campaign embodies it visually.',
      'lfc.s4_title': 'Opening',
      'lfc.s4_desc': 'The focus shifts from Leia to the audience. The narrative remains open-ended, inviting personal identification.',
      'lfc.channels_label': 'Touchpoints',
      'lfc.c1_title': 'Flyers',
      'lfc.c1_desc': 'Flyers distributed across urban centers, university campuses, and cultural exhibitions.',
      'lfc.c2_title': 'Installation',
      'lfc.c2_desc': 'An interactive public installation collects public notes and reflections, evolving over time into an ongoing archive of shared responsibility.',
      'lfc.c3_title': 'Guerrilla',
      'lfc.c3_desc': 'A continuous red cord travels through public squares engaging pedestrians, symbolizing collective connection and resilience.',
      'lfc.social_desc': '<strong>Social channels</strong> serve as spaces of exchange, where audiences reflect on civic courage and hope through everyday stories.'
    }
  };

  // HERO DATA BY LANGUAGE (for main.js slider)
  window.HERO_TRANSLATIONS = {
    it: [
      {
        title: "Flow State",
        desc: "Capsule collection di acqua premium pensata come rituale quotidiano per rilassarsi e gestire lo stress.",
        link: "flowstate.html",
        btnText: "Vedi progetto"
      },
      {
        title: "Trama",
        desc: "Esperienza teatrale immersiva che esplora le sfumature della manipolazione psicologica e del gaslighting.",
        link: "trama.html",
        btnText: "Vedi progetto"
      },
      {
        title: "Nomen",
        desc: "Cortometraggio mystery ambientato nella Torino esoterica, tra tarocchi, coincidenze inquietanti e una parola misteriosa.",
        link: "nomen.html",
        btnText: "Vedi progetto"
      },
      {
        title: 'Copertina "Il compagno di sbronze"',
        desc: 'Copertina illustrata di "Compagno di sbronze" di Charles Bukowski, realizzata per la collana Narratori di Feltrinelli.',
        link: "illustrazioni.html#charles",
        btnText: "Vedi illustrazione"
      },
      {
        title: 'Locandina "Il Re Leone"',
        desc: 'Locandina del film Il Re Leone, realizzata in digitale con Procreate per un progetto universitario, disponibile a colori e in monocromatico.',
        link: "illustrazioni.html#re-leone",
        btnText: "Vedi illustrazione"
      },
      {
        title: "L'inganno della donna del bosco",
        desc: "Illustrazione sulla duplice natura della Huldra, spirito del folklore scandinavo: bellezza luminosa in superficie e natura animale riflessa.",
        link: "illustrazioni.html#linganno",
        btnText: "Vedi illustrazione"
      }
    ],
    en: [
      {
        title: "Flow State",
        desc: "A premium water capsule collection designed as a daily ritual to unwind and manage stress.",
        link: "flowstate.html",
        btnText: "View project"
      },
      {
        title: "Trama",
        desc: "An immersive theatrical experience exploring the subtle nuances of psychological manipulation and gaslighting.",
        link: "trama.html",
        btnText: "View project"
      },
      {
        title: "Nomen",
        desc: "A mystery short film set in esoteric Turin, blending tarot symbolism, eerie coincidences, and an enigmatic word.",
        link: "nomen.html",
        btnText: "View project"
      },
      {
        title: 'Cover "Compagno di sbronze"',
        desc: 'Illustrated cover for Charles Bukowski\'s "Compagno di sbronze", designed for Feltrinelli\'s Narratori book series.',
        link: "illustrazioni.html#charles",
        btnText: "View illustration"
      },
      {
        title: 'Poster "The Lion King"',
        desc: 'Poster for The Lion King, digitally illustrated in Procreate for a university project, featured in full color and monochrome.',
        link: "illustrazioni.html#re-leone",
        btnText: "View illustration"
      },
      {
        title: "The Forest Woman's Deceit",
        desc: "Illustration exploring the dual nature of the Huldra, a Scandinavian folklore spirit: luminous surface beauty hiding primal animal reflection.",
        link: "illustrazioni.html#linganno",
        btnText: "View illustration"
      }
    ]
  };

  let currentLang = 'it';

  function getStoredLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'it' || saved === 'en') return saved;
    } catch (e) {}
    return 'it';
  }

  function setLanguage(lang, persist = true) {
    if (lang !== 'it' && lang !== 'en') lang = 'it';
    currentLang = lang;

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {}
    }

    document.documentElement.lang = lang;

    // Update active classes on language buttons
    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('is-active', btnLang === lang);
      btn.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
    });

    // Update text content / HTML of elements with data-i18n
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.it;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (dict[key].includes('<') && dict[key].includes('>')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update attributes (e.g. aria-label, title, placeholder)
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) el.setAttribute('aria-label', dict[key]);
    });

    // Dispatch global event for custom scripts (hero, sketchbook, etc.)
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  // Bind click events on all language switcher buttons
  function bindSwitchers() {
    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      if (btn.__boundLang) return;
      btn.__boundLang = true;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== currentLang) {
          setLanguage(targetLang);
        }
      });
    });
  }

  // Public API
  window.portfolioI18n = {
    setLanguage: setLanguage,
    getLanguage: () => currentLang,
    t: (key) => (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      bindSwitchers();
      setLanguage(getStoredLanguage(), false);
    });
  } else {
    bindSwitchers();
    setLanguage(getStoredLanguage(), false);
  }

})();
