// Show section and hide others
function showSection(id) {
    document.querySelectorAll("section").forEach(section => {
      section.classList.remove("active");
    });
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
  }

document.addEventListener("DOMContentLoaded", () => {
  showSection("services"); // Show default section

  // Handle navigation clicks
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").replace("#", "");
      showSection(sectionId);
    });
  });

  // ✅ Marcar el botón activo al hacer clic
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    // Primero quitamos "active" de todos
    navLinks.forEach(l => l.classList.remove("active"));

    // Después marcamos como "active" el que se clickeó
    this.classList.add("active");
  });
});


    // Language switch logic
    const langBtn = document.getElementById("langToggle");
    let currentLang = "en";
  
    const translations = {
      en: {
        subtitle: "Professional Framing Services",
        servicesTitle: "Our Services",
        services: [
          "Wall Framing",
          "Room Additions",
          "Wood Structures",
          "Custom Remodels",
          "Fence Installation",
          "Deck Construction",
          "Patio Covers & Pergolas",
          "Exterior Wood Repairs",
          "Framing for New Homes",
          "Garage & Carport Framing",
          "Structural Reinforcements"
        ],
        contactTitle: "ESTIMATES IN 24 HOURS OR LESS",
        contactBtn: "Contact",
        contactHelp: "Need Help? Contact Us Directly:",
        about: {
          title: "About Us",
          heading: `
            Herminio’s Framing LLC was founded with a simple mission: bring quality craftsmanship and honest service 
            to every home we touch. It all started on a small job in San Antonio, where Herminio picked up his tools 
            and built more than a structure — he built a reputation. With over a decade of hands-on experience in 
            framing and construction, Herminio realized that what sets great builders apart isn't just the final result — 
            it's the care they put into every detail, every client conversation, and every cut of wood.
            <br><br>
            Driven by this belief, he created Herminio’s Framing LLC — a small company with big standards. 
            We’re committed to being the team that shows up on time, treats your home with respect, and makes your vision our blueprint.
            From our first project to today, referrals and trust have been the foundation of our growth.
            Homeowners across San Antonio continue to call on us not just because we build well — but because we build relationships that last.
            <br><br>
            Whether you're expanding your space, framing a brand-new home, or adding a custom structure, 
            we’re here to deliver with integrity, skill, and care — every single time. 
            We communicate clearly from start to finish. We honor deadlines and budgets.
            We treat your project as if it were our own — because we know how much it means to you.
            <br><br>
            <strong>Let’s build something great together.</strong> Call us at 
            <a href="tel:+12103138239">(210) 313-8239</a> or email 
            <a href="mailto:herminiosframers@gmail.com">herminiosframers@gmail.com</a> 
            to schedule your estimate today.
          `
        }
      },
  
      es: {
        subtitle: "Servicios Profesionales de carpinteria",
        servicesTitle: "Nuestros Servicios",
        services: [
          "Enmarcado de Paredes",
          "Ampliaciones de Habitaciones",
          "Estructuras de Madera",
          "Remodelaciones Personalizadas",
          "Instalación de Cercas",
          "Construcción de Terrazas",
          "Cubiertas y Pérgolas",
          "Reparaciones Exteriores de Madera",
          "Estructura para Casas Nuevas",
          "Cochera y Garaje",
          "Refuerzos Estructurales"
        ],
        contactTitle: "ESTIMADOS EN 24 HORAS O MENOS",
        contactBtn: "Contacto",
        contactHelp: "¿Necesitas ayuda? Contáctanos directamente:",
        about: {
          title: "Sobre Nosotros",
          heading: `
            Herminio’s Framing LLC fue fundada con una misión simple: ofrecer mano de obra de calidad y servicio honesto 
            en cada hogar que tocamos. Todo comenzó en un pequeño trabajo en San Antonio, donde Herminio tomó sus herramientas 
            y construyó más que una estructura — construyó una reputación. Con más de una década de experiencia práctica en 
            enmarcado y construcción, Herminio se dio cuenta de que lo que distingue a los grandes constructores no es solo el resultado final, 
            sino el cuidado que ponen en cada detalle, cada conversación con el cliente y cada corte de madera.
            <br><br>
            Impulsado por esta creencia, creó Herminio’s Framing LLC — una pequeña empresa con grandes estándares. 
            Estamos comprometidos a ser el equipo que llega a tiempo, trata tu hogar con respeto y convierte tu visión en nuestro plano.
            Desde nuestro primer proyecto hasta hoy, las recomendaciones y la confianza han sido la base de nuestro crecimiento.
            Los propietarios de viviendas en San Antonio siguen llamándonos no solo porque construimos bien — sino porque construimos relaciones duraderas.
            <br><br>
            Ya sea que estés ampliando tu espacio, enmarcando una casa nueva o agregando una estructura personalizada, 
            estamos aquí para entregar con integridad, habilidad y cuidado — cada vez. 
            Comunicamos con claridad de principio a fin. Respetamos los plazos y presupuestos.
            Tratamos tu proyecto como si fuera propio — porque sabemos lo importante que es para ti.
            <br><br>
            <strong>Construyamos algo grandioso juntos.</strong> Llámanos al 
            <a href="tel:+12103138239">(210) 313-8239</a> o envíanos un correo a 
            <a href="mailto:herminiosframers@gmail.com">herminiosframers@gmail.com</a> 
            para programar tu estimado hoy.
          `
        }
      }
    };
  
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "es" : "en";
      updateLanguage();
    });
  
    function updateLanguage() {
      const t = translations[currentLang];
  
      // Header
      document.querySelector("header p").textContent = t.subtitle;
  
      // Services section
      document.querySelector("#services h2").textContent = t.servicesTitle;
      const servicesList = document.querySelectorAll("#services ul li");
      servicesList.forEach((li, i) => {
        li.textContent = t.services[i];
      });
  
      // Contact section
      document.querySelector("#Contact h2").textContent = t.contactTitle;
      document.querySelector("#Contact button").textContent = t.contactBtn;
      document.querySelector(".estimate-contact h3").textContent = t.contactHelp;
  
      const aboutTitle = document.getElementById("about-title");
const aboutHeading = document.getElementById("about-heading");

if (aboutTitle) aboutTitle.textContent = t.about.title;
if (aboutHeading) aboutHeading.innerHTML = t.about.heading;
 document.getElementById("langField").value = currentLang;

      // Language button
      langBtn.textContent = currentLang === "en" ? "Español" : "English";
    }

        // ✅ Envío del formulario sin recargar la página
        const form = document.getElementById("contactForm");
        const responseBox = document.getElementById("formResponse");
    
        form.addEventListener("submit", function (e) {
          e.preventDefault();
    
          const formData = new FormData(form);
    
          fetch("save.php", {
            method: "POST",
            body: formData
          })
            .then(res => res.text())
            .then(data => {
              const lang = formData.get("lang");
              const successMsg = lang === "es"
                ? "¡Gracias! Nos pondremos en contacto contigo pronto."
                : "Thanks! We'll contact you shortly.";
    
              responseBox.innerHTML = `<p style="color: green; font-weight: bold;">${successMsg}</p>`;
              form.reset();
            })
            .catch(() => {
              responseBox.innerHTML = `<p style="color: red;">There was an error. Please try again.</p>`;
            });
        });
    
  });