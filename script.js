// Language switching functionality
function changeLanguage(lang) {
    // Store the selected language in localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all elements with data-en and data-sk attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    // Update specific elements that might need HTML content
    const elements = {
        'about-text': {
            en: "My name is Jakub Ďurkovič and I'm a 3rd-year student at Faculty of Information Technology, Czech Technical University in Prague, currently on an exchange at NTU Singapore. My portfolio consists of projects written in Java, C++, PHP and some database projects. These projects are a part of my studies and personal interests. I'm always looking for new opportunities to learn and grow in the field of software engineering. In 2026 I will graduate from CTU and I'm looking for a job in the field of software engineering as well as help with my bachelor thesis.",
            sk: "Volám sa Jakub Ďurkovič a som študentom 3. ročníka na Fakulte informačných technológií ČVUT v Prahe, momentálne na výmennom pobyte na NTU v Singapure. Moje portfólio obsahuje projekty napísané v Jave, C++, PHP a databázové projekty. Tieto projekty sú súčasťou môjho štúdia a osobných záujmov. Neustále hľadám nové príležitosti na učenie a rast v oblasti softvérového inžinierstva. V roku 2026 ukončím štúdium na ČVUT a hľadám prácu v oblasti softvérového inžinierstva, ako aj pomoc s bakalárskou prácou."
        },
        'cv-text': {
            en: "If you're interested in learning more about my professional background and qualifications, you can view or download my CV.",
            sk: "Ak máte záujem dozvedieť sa viac o mojich profesionálnych skúsenostiach a kvalifikácii, môžete si pozrieť alebo stiahnuť môj životopis."
        },
        'contact-text': {
            en: "Feel free to reach out through any of these channels:",
            sk: "Neváhajte ma kontaktovať prostredníctvom týchto kanálov:"
        },
        'cs2portal-desc': {
            en: "A Spring Boot web application with REST API, ORM, and Azure database integration. Built during 3rd semester, featuring CRUD operations and custom frontend implementation.",
            sk: "Webová aplikácia Spring Boot s REST API, ORM a integráciou Azure databázy. Vytvorená počas 3. semestra, obsahuje CRUD operácie a vlastnú implementáciu frontendu."
        },
        'notepad-desc': {
            en: "A C++ based notepad application from 2nd semester showcasing OOP principles, polymorphism, and proper class design patterns.",
            sk: "Poznámková aplikácia v C++ z 2. semestra demonštrujúca princípy OOP, polymorfizmus a správne návrhové vzory tried."
        },
        'db-project-desc': {
            en: "A comprehensive database project featuring schema design, test data creation, and 25 SQL queries covering various SQL functions.",
            sk: "Komplexný databázový projekt zahŕňajúci návrh schémy, vytvorenie testovacích dát a 25 SQL dopytov pokrývajúcich rôzne SQL funkcie."
        },
        'advanced-sql-desc': {
            en: "Collection of assignments and exam work focusing on PLSQL and PgPLSQL, including procedures, triggers, packages, and recursion.",
            sk: "Zbierka zadaní a skúškových prác zameraných na PLSQL a PgPLSQL, vrátane procedúr, triggerov, balíkov a rekurzie."
        },
        'ntu-delivery-desc': {
            en: "A team project at NTU Singapore creating a campus canteen delivery service web application. Focus on backend development and database management.",
            sk: "Tímový projekt na NTU Singapore vytvárajúci webovú aplikáciu pre doručovanie jedál z jedální kampusu. Zameranie na backend development a správu databáz."
        },
        'blockchain-desc': {
            en: "A Solidity-based Dutch Auction system for token distribution on the Ethereum blockchain, developed as part of NTU Blockchain Technology course.",
            sk: "Systém holandskej aukcie založený na Solidity pre distribúciu tokenov na blockchaine Ethereum, vyvinutý v rámci kurzu Blockchain Technology na NTU."
        },
        'connect-professionally': {
            en: "Connect Professionally",
            sk: "Profesionálne spojenie"
        },
        'response-message': {
            en: "I'll get back to you as soon as possible!",
            sk: "Odpoviem vám čo najskôr!"
        }
    };

    for (const [id, content] of Object.entries(elements)) {
        document.getElementById(id).textContent = content[lang];
    }

    // Update CV links based on the selected language
    const viewCvLink = document.getElementById('view-cv');
    const downloadCvLink = document.getElementById('download-cv');
    if (lang === 'sk') {
        viewCvLink.setAttribute('href', 'images/slovak_cv.pdf');
        downloadCvLink.setAttribute('href', 'images/slovak_cv.pdf');
    } else {
        viewCvLink.setAttribute('href', 'images/english_cv.pdf');
        downloadCvLink.setAttribute('href', 'images/english_cv.pdf');
    }

    // Update button texts
    const buttonTexts = {
        'view-cv': { en: 'View CV', sk: 'Zobraziť CV' },
        'download-cv': { en: 'Download CV', sk: 'Stiahnuť CV' }
    };

    Object.keys(buttonTexts).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = buttonTexts[id][lang];
        }
    });

    // Add this to update the modal text
    const modalTitle = document.querySelector('#privateProjectModal h2');
    const modalText = document.querySelector('#privateProjectModal p');
    
    if (modalTitle && modalText) {
        modalTitle.textContent = modalTitle.getAttribute(`data-${lang}`);
        modalText.textContent = modalText.getAttribute(`data-${lang}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Set initial language based on localStorage or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);

    // Add this JavaScript code
    const modal = document.getElementById('privateProjectModal');
    const closeButton = modal.querySelector('.close-button');

    // Function to show modal
    function showPrivateProjectModal() {
        modal.style.display = 'flex';
        // Use setTimeout to ensure the transition works
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Function to hide modal
    function hidePrivateProjectModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match this with your CSS transition time
    }

    // Add click event to close button
    closeButton.addEventListener('click', hidePrivateProjectModal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hidePrivateProjectModal();
        }
    });

    // Update the portfolio item click handlers
    document.querySelectorAll('.project-card').forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.dataset.private === 'true') {
                e.preventDefault();
                showPrivateProjectModal();
            }
        });
    });
});
