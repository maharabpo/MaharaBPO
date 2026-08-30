/* =========================================================
   MAHARA BPO
   PREMIUM MODERN CONTACT CENTER
   MASTER JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   CONFIGURATION
   ========================================================= */

const MAHARA_CONFIG = {
  whatsappNumber: "923471417357",

  whatsappMessage: {
    en: "Hello Mahara BPO, I would like to know more about your services.",
    ar: "مرحباً مهارة BPO، أود معرفة المزيد عن خدماتكم."
  },

  defaultLanguage: "en",

  storageKey: "mahara-language"
};


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initLanguage();
  initMobileNavigation();
  initSmoothScrolling();
  initWhatsApp();
  initQuoteForm();
  initRevealAnimations();
  initHeaderScroll();
  initCurrentYear();
  initExternalLinks();
  initKeyboardAccessibility();

});


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

function initLanguage() {

  const savedLanguage =
    localStorage.getItem(MAHARA_CONFIG.storageKey);

  const browserLanguage =
    navigator.language ||
    navigator.userLanguage ||
    "en";

  let language =
    savedLanguage ||
    (
      browserLanguage
        .toLowerCase()
        .startsWith("ar")
        ? "ar"
        : MAHARA_CONFIG.defaultLanguage
    );

  if (language !== "ar" && language !== "en") {
    language = MAHARA_CONFIG.defaultLanguage;
  }

  setLanguage(language, false);

  document.querySelectorAll(".lang-option").forEach(button => {

    button.addEventListener("click", () => {

      const selectedLanguage =
        button.dataset.lang;

      if (
        selectedLanguage === "ar" ||
        selectedLanguage === "en"
      ) {
        setLanguage(selectedLanguage, true);
      }

    });

  });

}


/* =========================================================
   SET LANGUAGE
   ========================================================= */

function setLanguage(language, save = true) {

  const isArabic =
    language === "ar";

  const html =
    document.documentElement;

  /* Page direction is controlled ONLY here */
  html.setAttribute(
    "dir",
    isArabic ? "rtl" : "ltr"
  );

  html.setAttribute(
    "lang",
    isArabic ? "ar" : "en"
  );

  if (save) {
    localStorage.setItem(
      MAHARA_CONFIG.storageKey,
      language
    );
  }

  updateLanguageButtons(language);
  updateTranslatedContent(language);
  updateWhatsAppLanguage(language);
  updateDocumentMeta(language);
  updateFormDirection();
}


/* =========================================================
   LANGUAGE BUTTONS
   ========================================================= */

function updateLanguageButtons(language) {

  document.querySelectorAll(".lang-option").forEach(button => {

    const active =
      button.dataset.lang === language;

    button.classList.toggle(
      "active",
      active
    );

    button.setAttribute(
      "aria-pressed",
      active ? "true" : "false"
    );

  });

}


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  en: {

    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.technology": "Technology",
    "nav.contact": "Contact",

    "nav.cta": "Get a Quote",

    "hero.eyebrow": "CUSTOMER SERVICE OUTSOURCING",

    "hero.title1": "YOUR CUSTOMER",
    "hero.title2": "SERVICE PARTNER",

    "hero.description":
      "Helping businesses across the Gulf outsource customer service to dedicated, professionally managed teams.",

    "hero.primary":
      "GET A QUOTE",

    "hero.secondary":
      "OUR SERVICES",

    "hero.trust1":
      "Professional Teams",

    "hero.trust2":
      "Gulf-Focused",

    "hero.trust3":
      "24/7 Support",

    "hero.card.label":
      "MAHARA BPO",

    "hero.card.title":
      "Service built around your customers.",

    "hero.card.text":
      "Reliable outsourcing solutions designed to improve customer experience, operational efficiency and business growth.",


    "about.eyebrow":
      "WHY MAHARA",

    "about.title":
      "A smarter way to manage customer service.",

    "about.description":
      "We combine professionally managed teams, modern technology and a customer-first approach to deliver dependable outsourcing solutions for businesses across the Gulf.",


    "services.eyebrow":
      "WHAT WE DO",

    "services.title":
      "Customer service solutions designed to perform.",

    "services.description":
      "From customer support to back-office operations, Mahara BPO provides flexible solutions built around your business needs.",


    "service1.title":
      "Customer Support",

    "service1.text":
      "Professional customer support teams handling customer inquiries, requests and day-to-day interactions.",

    "service2.title":
      "Call Center",

    "service2.text":
      "Dedicated inbound and outbound call center teams focused on quality, responsiveness and customer satisfaction.",

    "service3.title":
      "Back Office",

    "service3.text":
      "Reliable administrative and operational support that helps your internal teams focus on higher-value work.",

    "service4.title":
      "Technical Support",

    "service4.text":
      "Professionally managed support teams helping customers resolve technical questions quickly and efficiently.",

    "service5.title":
      "Lead Generation",

    "service5.text":
      "Structured customer engagement and lead-generation support designed to help businesses build their pipeline.",

    "service6.title":
      "Quality Assurance",

    "service6.text":
      "Quality monitoring and performance management designed to maintain consistent service standards.",


    "trust.eyebrow":
      "BUILT FOR PERFORMANCE",

    "trust.title":
      "Reliable service. Measurable results.",

    "stat1":
      "Professional Service",

    "stat2":
      "Customer Focus",

    "stat3":
      "Gulf Region",

    "stat4":
      "Support Availability",


    "process.eyebrow":
      "OUR PROCESS",

    "process.title":
      "Simple to start. Built to scale.",

    "process1.title":
      "Discover",

    "process1.text":
      "We understand your business, customers and operational requirements.",

    "process2.title":
      "Design",

    "process2.text":
      "We build a customized outsourcing solution around your goals.",

    "process3.title":
      "Launch",

    "process3.text":
      "Our team prepares the people, processes and technology required for launch.",

    "process4.title":
      "Optimize",

    "process4.text":
      "We continuously monitor performance and improve the customer experience.",


    "technology.eyebrow":
      "TECHNOLOGY",

    "technology.title":
      "Technology that supports better conversations.",

    "technology.text":
      "Our operations are designed around modern communication tools, structured workflows and performance monitoring.",

    "technology.link":
      "LEARN MORE",

    "technology1.title":
      "CRM Integration",

    "technology1.text":
      "Structured customer information and workflows help teams deliver consistent service.",

    "technology2.title":
      "Performance Monitoring",

    "technology2.text":
      "Clear performance visibility helps identify opportunities for improvement.",

    "technology3.title":
      "Omnichannel Support",

    "technology3.text":
      "Connect customers through the channels they prefer.",

    "technology4.title":
      "Data & Reporting",

    "technology4.text":
      "Actionable reporting helps businesses understand performance and customer needs.",


    "why.eyebrow":
      "WHY MAHARA",

    "why.title":
      "More than an outsourcing provider.",

    "why1.title":
      "Professionally Managed Teams",

    "why1.text":
      "Dedicated teams managed around your service standards and customer expectations.",

    "why2.title":
      "Gulf Market Understanding",

    "why2.text":
      "Solutions designed with the Gulf business environment and customer expectations in mind.",

    "why3.title":
      "Flexible Operations",

    "why3.text":
      "Scale your support capacity as your business grows.",

    "why4.title":
      "Quality Focus",

    "why4.text":
      "Consistent monitoring and continuous improvement help maintain service quality.",


    "experience.eyebrow":
      "THE MAHARA EXPERIENCE",

    "experience.title":
      "Give your customers the experience they deserve.",

    "experience.text":
      "Let your team focus on growing the business while Mahara manages the customer experience with professionalism, consistency and care.",

    "experience.button":
      "TALK TO US",


    "testimonial.eyebrow":
      "OUR APPROACH",

    "testimonial.title":
      "Customer experience comes first.",

    "testimonial.text":
      "Every interaction is an opportunity to strengthen your relationship with your customers. Our teams are built around that principle.",

    "testimonial.label":
      "MAHARA BPO APPROACH",


    "cta.eyebrow":
      "READY TO START?",

    "cta.title":
      "Let's build a better customer experience.",

    "cta.text":
      "Tell us what your business needs and we'll help you design the right outsourcing solution.",

    "cta.button":
      "GET STARTED",


    "quote.eyebrow":
      "REQUEST A QUOTE",

    "quote.title":
      "Let's discuss your requirements.",

    "quote.text":
      "Complete the form and our team will get back to you to discuss your customer service requirements.",

    "quote.point1":
      "Customized outsourcing solutions",

    "quote.point2":
      "Professionally managed teams",

    "quote.point3":
      "Flexible operational support",

    "quote.point4":
      "Gulf-focused customer experience",


    "form.name":
      "Full Name",

    "form.name.placeholder":
      "Your name",

    "form.company":
      "Company",

    "form.company.placeholder":
      "Company name",

    "form.email":
      "Email",

    "form.email.placeholder":
      "you@company.com",

    "form.phone":
      "Phone / WhatsApp",

    "form.phone.placeholder":
      "+92...",

    "form.service":
      "Service",

    "form.service.placeholder":
      "Select a service",

    "form.service.customer":
      "Customer Support",

    "form.service.call":
      "Call Center",

    "form.service.backoffice":
      "Back Office",

    "form.service.technical":
      "Technical Support",

    "form.service.leads":
      "Lead Generation",

    "form.service.other":
      "Other",

    "form.message":
      "Tell us about your requirements",

    "form.message.placeholder":
      "How can we help?",

    "form.submit":
      "SEND REQUEST",

    "form.whatsapp":
      "CONTACT VIA WHATSAPP",

    "form.success":
      "Thank you. Your request has been received.",

    "form.error":
      "Please complete the required fields.",


    "contact.eyebrow":
      "CONTACT",

    "contact.title":
      "Let's connect.",

    "contact.email":
      "Email",

    "contact.phone":
      "Phone",

    "contact.whatsapp":
      "WhatsApp",

    "contact.website":
      "Website",


    "footer.description":
      "Professional customer service outsourcing solutions for businesses across the Gulf region.",

    "footer.company":
      "Company",

    "footer.services":
      "Services",

    "footer.contact":
      "Contact",

    "footer.about":
      "About Us",

    "footer.privacy":
      "Privacy Policy",

    "footer.terms":
      "Terms & Conditions",

    "footer.copyright":
      "© 2026 Mahara BPO. All rights reserved.",

    "whatsapp.tooltip":
      "Chat with us on WhatsApp"

  },


  ar: {

    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.process": "آلية العمل",
    "nav.technology": "التقنية",
    "nav.contact": "تواصل معنا",

    "nav.cta": "اطلب عرضاً",

    "hero.eyebrow":
      "حلول التعهيد لخدمة العملاء",

    "hero.title1":
      "شريكك في",

    "hero.title2":
      "خدمة العملاء",

    "hero.description":
      "نساعد الشركات في الخليج على تطوير خدمة العملاء من خلال فرق متخصصة ومدارة باحترافية.",

    "hero.primary":
      "اطلب عرضاً",

    "hero.secondary":
      "خدماتنا",

    "hero.trust1":
      "فرق احترافية",

    "hero.trust2":
      "خبرة في الخليج",

    "hero.trust3":
      "دعم 24/7",

    "hero.card.label":
      "مهارة BPO",

    "hero.card.title":
      "خدمة مصممة حول عملائك.",

    "hero.card.text":
      "حلول تعهيد موثوقة مصممة لتحسين تجربة العملاء والكفاءة التشغيلية ودعم نمو أعمالك.",


    "about.eyebrow":
      "لماذا مهارة",

    "about.title":
      "طريقة أكثر ذكاءً لإدارة خدمة العملاء.",

    "about.description":
      "نجمع بين الفرق المدارة باحترافية والتقنيات الحديثة والتركيز على العميل لتقديم حلول تعهيد موثوقة للشركات في الخليج.",


    "services.eyebrow":
      "ماذا نقدم",

    "services.title":
      "حلول خدمة عملاء مصممة لتحقيق النتائج.",

    "services.description":
      "من دعم العملاء إلى العمليات الخلفية، تقدم مهارة BPO حلولاً مرنة مصممة وفق احتياجات عملك.",


    "service1.title":
      "دعم العملاء",

    "service1.text":
      "فرق متخصصة لخدمة العملاء تتولى الاستفسارات والطلبات والتواصل اليومي مع العملاء.",

    "service2.title":
      "مركز الاتصال",

    "service2.text":
      "فرق متخصصة للمكالمات الواردة والصادرة تركز على الجودة وسرعة الاستجابة ورضا العملاء.",

    "service3.title":
      "خدمات المكتب الخلفي",

    "service3.text":
      "دعم إداري وتشغيلي موثوق يساعد فرقك الداخلية على التركيز على الأعمال ذات القيمة الأعلى.",

    "service4.title":
      "الدعم الفني",

    "service4.text":
      "فرق دعم متخصصة تساعد العملاء على حل الاستفسارات والمشكلات التقنية بسرعة وكفاءة.",

    "service5.title":
      "توليد العملاء المحتملين",

    "service5.text":
      "دعم منظم للتواصل مع العملاء وتوليد الفرص يساعد الشركات على تنمية قاعدة عملائها.",

    "service6.title":
      "ضمان الجودة",

    "service6.text":
      "مراقبة الجودة وإدارة الأداء للحفاظ على مستويات خدمة متسقة.",


    "trust.eyebrow":
      "مصمم لتحقيق الأداء",

    "trust.title":
      "خدمة موثوقة. نتائج قابلة للقياس.",

    "stat1":
      "خدمة احترافية",

    "stat2":
      "تركيز على العملاء",

    "stat3":
      "منطقة الخليج",

    "stat4":
      "دعم متاح",


    "process.eyebrow":
      "آلية عملنا",

    "process.title":
      "بداية بسيطة. ونمو قابل للتوسع.",

    "process1.title":
      "الاكتشاف",

    "process1.text":
      "نفهم أعمالك وعملاءك واحتياجاتك التشغيلية.",

    "process2.title":
      "التصميم",

    "process2.text":
      "نبني حلاً مخصصاً للتعهيد يتناسب مع أهدافك.",

    "process3.title":
      "الإطلاق",

    "process3.text":
      "نجهز الأشخاص والعمليات والتقنيات اللازمة لبدء الخدمة.",

    "process4.title":
      "التحسين",

    "process4.text":
      "نراقب الأداء باستمرار ونعمل على تطوير تجربة العملاء.",


    "technology.eyebrow":
      "التقنية",

    "technology.title":
      "تقنية تدعم محادثات أفضل.",

    "technology.text":
      "تعتمد عملياتنا على أدوات اتصال حديثة وسير عمل منظم ومتابعة مستمرة للأداء.",

    "technology.link":
      "اكتشف المزيد",

    "technology1.title":
      "تكامل أنظمة CRM",

    "technology1.text":
      "تنظيم معلومات العملاء وسير العمل يساعد الفرق على تقديم خدمة متسقة.",

    "technology2.title":
      "مراقبة الأداء",

    "technology2.text":
      "رؤية واضحة للأداء تساعد على تحديد فرص التحسين.",

    "technology3.title":
      "دعم متعدد القنوات",

    "technology3.text":
      "التواصل مع العملاء عبر القنوات التي يفضلونها.",

    "technology4.title":
      "البيانات والتقارير",

    "technology4.text":
      "تقارير واضحة تساعد الشركات على فهم الأداء واحتياجات العملاء.",


    "why.eyebrow":
      "لماذا مهارة",

    "why.title":
      "أكثر من مجرد مزود لخدمات التعهيد.",

    "why1.title":
      "فرق مدارة باحترافية",

    "why1.text":
      "فرق متخصصة تتم إدارتها وفق معايير الخدمة وتوقعات العملاء.",

    "why2.title":
      "فهم للسوق الخليجي",

    "why2.text":
      "حلول مصممة مع فهم بيئة الأعمال وتوقعات العملاء في الخليج.",

    "why3.title":
      "عمليات مرنة",

    "why3.text":
      "إمكانية توسيع قدرات الدعم مع نمو أعمالك.",

    "why4.title":
      "تركيز على الجودة",

    "why4.text":
      "المراقبة المستمرة والتحسين المتواصل يساعدان على الحفاظ على جودة الخدمة.",


    "experience.eyebrow":
      "تجربة مهارة",

    "experience.title":
      "امنح عملاءك التجربة التي يستحقونها.",

    "experience.text":
      "دع فريقك يركز على تنمية أعمالك بينما تتولى مهارة إدارة تجربة العملاء باحترافية واتساق واهتمام.",

    "experience.button":
      "تواصل معنا",


    "testimonial.eyebrow":
      "نهجنا",

    "testimonial.title":
      "تجربة العميل تأتي أولاً.",

    "testimonial.text":
      "كل تفاعل يمثل فرصة لتعزيز علاقتك بعملائك. ولهذا المبدأ نبني فرقنا.",

    "testimonial.label":
      "نهج مهارة BPO",


    "cta.eyebrow":
      "هل أنت مستعد للبدء؟",

    "cta.title":
      "لنصنع تجربة أفضل لعملائك.",

    "cta.text":
      "أخبرنا باحتياجات عملك وسنساعدك في تصميم حل التعهيد المناسب.",

    "cta.button":
      "ابدأ الآن",


    "quote.eyebrow":
      "اطلب عرضاً",

    "quote.title":
      "لنتحدث عن احتياجاتك.",

    "quote.text":
      "أكمل النموذج وسيتواصل معك فريقنا لمناقشة متطلبات خدمة العملاء الخاصة بك.",

    "quote.point1":
      "حلول تعهيد مخصصة",

    "quote.point2":
      "فرق مدارة باحترافية",

    "quote.point3":
      "دعم تشغيلي مرن",

    "quote.point4":
      "تركيز على تجربة العملاء في الخليج",


    "form.name":
      "الاسم الكامل",

    "form.name.placeholder":
      "اكتب اسمك",

    "form.company":
      "الشركة",

    "form.company.placeholder":
      "اسم الشركة",

    "form.email":
      "البريد الإلكتروني",

    "form.email.placeholder":
      "you@company.com",

    "form.phone":
      "الهاتف / WhatsApp",

    "form.phone.placeholder":
      "+92...",

    "form.service":
      "الخدمة",

    "form.service.placeholder":
      "اختر الخدمة",

    "form.service.customer":
      "دعم العملاء",

    "form.service.call":
      "مركز الاتصال",

    "form.service.backoffice":
      "خدمات المكتب الخلفي",

    "form.service.technical":
      "الدعم الفني",

    "form.service.leads":
      "توليد العملاء المحتملين",

    "form.service.other":
      "أخرى",

    "form.message":
      "أخبرنا عن احتياجاتك",

    "form.message.placeholder":
      "كيف يمكننا مساعدتك؟",

    "form.submit":
      "إرسال الطلب",

    "form.whatsapp":
      "تواصل عبر WhatsApp",

    "form.success":
      "شكراً لك. تم استلام طلبك.",

    "form.error":
      "يرجى إكمال الحقول المطلوبة.",


    "contact.eyebrow":
      "تواصل معنا",

    "contact.title":
      "يسعدنا التواصل معك.",

    "contact.email":
      "البريد الإلكتروني",

    "contact.phone":
      "الهاتف",

    "contact.whatsapp":
      "WhatsApp",

    "contact.website":
      "الموقع الإلكتروني",


    "footer.description":
      "حلول احترافية لتعهيد خدمة العملاء للشركات في منطقة الخليج.",

    "footer.company":
      "الشركة",

    "footer.services":
      "الخدمات",

    "footer.contact":
      "تواصل معنا",

    "footer.about":
      "من نحن",

    "footer.privacy":
      "سياسة الخصوصية",

    "footer.terms":
      "الشروط والأحكام",

    "footer.copyright":
      "© 2026 Mahara BPO. جميع الحقوق محفوظة.",

    "whatsapp.tooltip":
      "تواصل معنا عبر WhatsApp"

  }

};


/* =========================================================
   UPDATE TRANSLATED CONTENT
   ========================================================= */

function updateTranslatedContent(language) {

  const dictionary =
    translations[language];

  if (!dictionary) return;

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      if (
        dictionary[key] !== undefined
      ) {
        element.textContent =
          dictionary[key];
      }

    });


  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach(element => {

      const key =
        element.dataset.i18nPlaceholder;

      if (
        dictionary[key] !== undefined
      ) {
        element.placeholder =
          dictionary[key];
      }

    });


  document
    .querySelectorAll("[data-i18n-title]")
    .forEach(element => {

      const key =
        element.dataset.i18nTitle;

      if (
        dictionary[key] !== undefined
      ) {
        element.title =
          dictionary[key];
      }

    });


  document
    .querySelectorAll("[data-i18n-aria-label]")
    .forEach(element => {

      const key =
        element.dataset.i18nAriaLabel;

      if (
        dictionary[key] !== undefined
      ) {
        element.setAttribute(
          "aria-label",
          dictionary[key]
        );
      }

    });

}


/* =========================================================
   DOCUMENT META
   ========================================================= */

function updateDocumentMeta(language) {

  const isArabic =
    language === "ar";

  document.title =
    isArabic
      ? "مهارة BPO | شريكك في خدمة العملاء"
      : "Mahara BPO | Your Customer Service Partner";

  const description =
    document.querySelector(
      'meta[name="description"]'
    );

  if (description) {

    description.setAttribute(
      "content",
      isArabic
        ? "مهارة BPO تقدم حلولاً احترافية لتعهيد خدمة العملاء للشركات في منطقة الخليج."
        : "Mahara BPO provides professional customer service outsourcing solutions for businesses across the Gulf region."
    );

  }

}


/* =========================================================
   FORM DIRECTION
   ========================================================= */

function updateFormDirection() {

  const isArabic =
    document.documentElement.dir === "rtl";

  document
    .querySelectorAll(
      'input[type="email"], input[type="tel"], input[name="phone"], input[name="whatsapp"]'
    )
    .forEach(input => {

      /*
       * These fields MUST remain LTR.
       * Email, phone and WhatsApp numbers should
       * never be reversed in Arabic.
       */

      input.style.direction = "ltr";
      input.style.textAlign = "left";

    });


  document
    .querySelectorAll(
      '[data-ltr]'
    )
    .forEach(element => {

      element.style.direction =
        "ltr";

      element.style.unicodeBidi =
        "plaintext";

    });

}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function initMobileNavigation() {

  const toggle =
    document.querySelector(".nav-toggle");

  const menu =
    document.querySelector(".nav-menu");

  if (!toggle || !menu) return;


  toggle.setAttribute(
    "aria-expanded",
    "false"
  );

  toggle.setAttribute(
    "aria-controls",
    "main-navigation"
  );

  menu.id =
    menu.id ||
    "main-navigation";


  toggle.addEventListener(
    "click",
    () => {

      const isOpen =
        menu.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      document.body.classList.toggle(
        "nav-open",
        isOpen
      );

    }
  );


  menu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => closeMobileMenu()
      );

    });


  document.addEventListener(
    "click",
    event => {

      if (
        !menu.contains(event.target) &&
        !toggle.contains(event.target)
      ) {

        closeMobileMenu();

      }

    }
  );


  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 900) {
        closeMobileMenu();
      }

    }
  );

}


function closeMobileMenu() {

  const menu =
    document.querySelector(".nav-menu");

  const toggle =
    document.querySelector(".nav-toggle");

  if (!menu) return;

  menu.classList.remove("open");

  document.body.classList.remove(
    "nav-open"
  );

  if (toggle) {

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

  }

}


/* =========================================================
   SMOOTH SCROLLING
   ========================================================= */

function initSmoothScrolling() {

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const href =
            link.getAttribute("href");

          if (
            !href ||
            href === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(href);

          if (!target) return;

          event.preventDefault();

          const header =
            document.querySelector(
              ".site-header"
            );

          const headerHeight =
            header
              ? header.offsetHeight
              : 0;

          const top =
            target.getBoundingClientRect()
              .top +
            window.scrollY -
            headerHeight;

          window.scrollTo({
            top,
            behavior: "smooth"
          });

        }
      );

    });

}


/* =========================================================
   WHATSAPP
   ========================================================= */

function getWhatsAppURL(language) {

  const message =
    MAHARA_CONFIG.whatsappMessage[
      language
    ] ||
    MAHARA_CONFIG.whatsappMessage.en;

  return (
    "https://wa.me/" +
    MAHARA_CONFIG.whatsappNumber +
    "?text=" +
    encodeURIComponent(message)
  );

}


function initWhatsApp() {

  const language =
    document.documentElement.lang === "ar"
      ? "ar"
      : "en";

  document
    .querySelectorAll(
      "[data-whatsapp]"
    )
    .forEach(element => {

      element.href =
        getWhatsAppURL(language);

      element.target =
        "_blank";

      element.rel =
        "noopener noreferrer";

    });


  updateWhatsAppLanguage(language);

}


function updateWhatsAppLanguage(language) {

  const url =
    getWhatsAppURL(language);

  document
    .querySelectorAll(
      "[data-whatsapp]"
    )
    .forEach(element => {

      element.href =
        url;

      element.target =
        "_blank";

      element.rel =
        "noopener noreferrer";

    });


  const floating =
    document.querySelector(
      ".floating-whatsapp"
    );

  if (floating) {

    const tooltip =
      translations[language]?.[
        "whatsapp.tooltip"
      ];

    if (tooltip) {

      floating.dataset.tooltip =
        tooltip;

    }

  }

}


/* =========================================================
   QUOTE FORM
   ========================================================= */

function initQuoteForm() {

  const form =
    document.querySelector(
      ".quote-form"
    );

  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      clearFormErrors(form);


      const name =
        form.querySelector(
          '[name="name"]'
        );

      const email =
        form.querySelector(
          '[name="email"]'
        );

      const phone =
        form.querySelector(
          '[name="phone"], [name="whatsapp"]'
        );

      const service =
        form.querySelector(
          '[name="service"]'
        );


      let valid = true;


      if (
        name &&
        name.value.trim().length < 2
      ) {

        markError(name);

        valid = false;

      }


      if (
        email &&
        !isValidEmail(email.value)
      ) {

        markError(email);

        valid = false;

      }


      if (
        phone &&
        !isValidPhone(phone.value)
      ) {

        markError(phone);

        valid = false;

      }


      if (
        service &&
        !service.value
      ) {

        markError(service);

        valid = false;

      }


      if (!valid) {

        showFormMessage(
          form,
          getTranslation(
            "form.error"
          )
        );

        return;

      }


      const language =
        document.documentElement.lang === "ar"
          ? "ar"
          : "en";


      const successMessage =
        getTranslation(
          "form.success"
        );


      showFormMessage(
        form,
        successMessage
      );


      /*
       * If a real backend is connected later,
       * replace this section with fetch().
       *
       * For now, the form creates a WhatsApp
       * message so no server is required.
       */

      const data =
        new FormData(form);

      const nameValue =
        data.get("name") || "";

      const companyValue =
        data.get("company") || "";

      const emailValue =
        data.get("email") || "";

      const phoneValue =
        data.get("phone") ||
        data.get("whatsapp") ||
        "";

      const serviceValue =
        data.get("service") || "";

      const messageValue =
        data.get("message") || "";


      const whatsappText =
        language === "ar"

          ? [
              "مرحباً مهارة BPO،",
              "",
              "أرغب في طلب عرض لخدماتكم.",
              "",
              `الاسم: ${nameValue}`,
              `الشركة: ${companyValue}`,
              `البريد الإلكتروني: ${emailValue}`,
              `الهاتف: ${phoneValue}`,
              `الخدمة: ${serviceValue}`,
              `التفاصيل: ${messageValue}`
            ].join("\n")

          : [
              "Hello Mahara BPO,",
              "",
              "I would like to request a quote.",
              "",
              `Name: ${nameValue}`,
              `Company: ${companyValue}`,
              `Email: ${emailValue}`,
              `Phone: ${phoneValue}`,
              `Service: ${serviceValue}`,
              `Details: ${messageValue}`
            ].join("\n");


      const whatsappURL =
        "https://wa.me/" +
        MAHARA_CONFIG.whatsappNumber +
        "?text=" +
        encodeURIComponent(
          whatsappText
        );


      /*
       * Open WhatsApp after validation.
       */

      setTimeout(() => {

        window.open(
          whatsappURL,
          "_blank",
          "noopener,noreferrer"
        );

      }, 500);

    });

}


/* =========================================================
   FORM VALIDATION
   ========================================================= */

function isValidEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(
      String(email).trim()
    );

}


function isValidPhone(phone) {

  const cleaned =
    String(phone)
      .replace(/[^\d+]/g, "");

  return cleaned.length >= 7;

}


function markError(element) {

  element.classList.add(
    "input-error"
  );

  element.setAttribute(
    "aria-invalid",
    "true"
  );

}


function clearFormErrors(form) {

  form
    .querySelectorAll(
      ".input-error"
    )
    .forEach(element => {

      element.classList.remove(
        "input-error"
      );

      element.removeAttribute(
        "aria-invalid"
      );

    });

}


function showFormMessage(
  form,
  message
) {

  let messageElement =
    form.querySelector(
      ".form-message"
    );

  if (!messageElement) {

    messageElement =
      document.createElement("div");

    messageElement.className =
      "form-message";

    form.appendChild(
      messageElement
    );

  }

  messageElement.textContent =
    message;

}


/* =========================================================
   FORM LIVE ERROR REMOVAL
   ========================================================= */

document.addEventListener(
  "input",
  event => {

    const target =
      event.target;

    if (
      target.classList &&
      target.classList.contains(
        "input-error"
      )
    ) {

      target.classList.remove(
        "input-error"
      );

      target.removeAttribute(
        "aria-invalid"
      );

    }

  }
);


/* =========================================================
   GET TRANSLATION
   ========================================================= */

function getTranslation(key) {

  const language =
    document.documentElement.lang === "ar"
      ? "ar"
      : "en";

  return (
    translations[language]?.[key] ||
    translations.en[key] ||
    key
  );

}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function initRevealAnimations() {

  /*
   * Do not require CSS animation classes.
   * This works safely even if the CSS is missing.
   */

  const elements =
    document.querySelectorAll(
      [
        ".value-card",
        ".service-card",
        ".process-card",
        ".technology-card",
        ".why-item",
        ".contact-card",
        ".testimonial-message",
        ".quote-form"
      ].join(",")
    );


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element => {
        element.classList.add(
          "is-visible"
        );
      }
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  elements.forEach(
    element => {

      observer.observe(
        element
      );

    }
  );

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

function initHeaderScroll() {

  const header =
    document.querySelector(
      ".site-header"
    );

  if (!header) return;


  const updateHeader =
    () => {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 20
      );

    };


  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

function initCurrentYear() {

  document
    .querySelectorAll(
      "[data-current-year]"
    )
    .forEach(element => {

      element.textContent =
        new Date().getFullYear();

    });

}


/* =========================================================
   EXTERNAL LINKS
   ========================================================= */

function initExternalLinks() {

  document
    .querySelectorAll(
      'a[href^="http"]'
    )
    .forEach(link => {

      /*
       * WhatsApp links and links explicitly marked
       * as internal/external are handled safely.
       */

      if (
        link.hostname !==
        window.location.hostname
      ) {

        link.target =
          "_blank";

        link.rel =
          "noopener noreferrer";

      }

    });

}


/* =========================================================
   KEYBOARD ACCESSIBILITY
   ========================================================= */

function initKeyboardAccessibility() {

  document.addEventListener(
    "keydown",
    event => {

      /*
       * ESC closes mobile navigation.
       */

      if (
        event.key === "Escape"
      ) {

        closeMobileMenu();

      }

    }
  );

}


/* =========================================================
   PHONE / EMAIL / DOMAIN LTR PROTECTION
   ========================================================= */

/*
 * Automatically protect important technical content
 * from RTL reversal.
 */

function protectLTRContent() {

  const selectors = [

    'a[href^="mailto:"]',
    'a[href^="tel:"]',
    'a[href*="wa.me"]',
    '[data-ltr]',
    '[data-email]',
    '[data-phone]',
    '[data-whatsapp-number]',
    '[data-domain]'

  ];


  document
    .querySelectorAll(
      selectors.join(",")
    )
    .forEach(element => {

      element.style.direction =
        "ltr";

      element.style.unicodeBidi =
        "plaintext";

    });

}


document.addEventListener(
  "DOMContentLoaded",
  protectLTRContent
);


/* =========================================================
   PREVENT ACCIDENTAL RTL REVERSAL
   ========================================================= */

function enforceTechnicalLTR() {

  document
    .querySelectorAll(
      [
        'a[href^="mailto:"]',
        'a[href^="tel:"]',
        'a[href*="wa.me"]',
        'input[type="email"]',
        'input[type="tel"]',
        '[data-ltr]',
        '[data-email]',
        '[data-phone]',
        '[data-whatsapp-number]',
        '[data-domain]'
      ].join(",")
    )
    .forEach(element => {

      element.setAttribute(
        "dir",
        "ltr"
      );

    });

}


/* =========================================================
   INITIALIZE LTR PROTECTION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    enforceTechnicalLTR();

  }
);


/* =========================================================
   WHATSAPP SVG ICON
   ========================================================= */

function createWhatsAppSVG() {

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.1 1.57 5.89L.15 24l6.43-1.64a11.78 11.78 0 0 0 5.5 1.36h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.4-8.41ZM12.09 21.7h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.82.98 1.02-3.72-.23-.38a9.8 9.8 0 1 1 8.39 4.7Zm5.37-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.19 2.02 3.08 4.9 4.32.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z"/>
    </svg>
  `;

}


/* =========================================================
   REPLACE WHATSAPP TEXT ICONS
   ========================================================= */

function replaceWhatsAppIcons() {

  document
    .querySelectorAll(
      "[data-whatsapp-icon]"
    )
    .forEach(element => {

      element.innerHTML =
        createWhatsAppSVG();

      element.setAttribute(
        "aria-hidden",
        "true"
      );

    });

}


/* =========================================================
   CONTACT SVG ICONS
   ========================================================= */

function createIcon(type) {

  const icons = {

    whatsapp: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.1 1.57 5.89L.15 24l6.43-1.64a11.78 11.78 0 0 0 5.5 1.36h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.4-8.41ZM12.09 21.7h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.82.98 1.02-3.72-.23-.38a9.8 9.8 0 1 1 8.39 4.7Zm5.37-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.19 2.02 3.08 4.9 4.32.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z"/>
      </svg>
    `,

    phone: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>
      </svg>
    `,

    email: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="m3 7 9 6 9-6"/>
      </svg>
    `,

    website: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9"/>
        <path d="M3 12h18"/>
        <path d="M12 3a14 14 0 0 1 0 18"/>
        <path d="M12 3a14 14 0 0 0 0 18"/>
      </svg>
    `

  };

  return icons[type] || "";

}


/* =========================================================
   INITIALIZE CONTACT ICONS
   ========================================================= */

function initContactIcons() {

  document
    .querySelectorAll(
      "[data-icon]"
    )
    .forEach(element => {

      const type =
        element.dataset.icon;

      const svg =
        createIcon(type);

      if (svg) {

        element.innerHTML =
          svg;

      }

    });

}


document.addEventListener(
  "DOMContentLoaded",
  initContactIcons
);


/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

function initImageFallbacks() {

  document
    .querySelectorAll("img")
    .forEach(image => {

      image.addEventListener(
        "error",
        () => {

          image.classList.add(
            "image-error"
          );

        }
      );

    });

}


document.addEventListener(
  "DOMContentLoaded",
  initImageFallbacks
);


/* =========================================================
   CONSOLE BRANDING
   ========================================================= */

console.log(
  "%cMAHARA BPO",
  "font-size:22px;font-weight:800;color:#c9a96e;"
);

console.log(
  "%cYour Customer Service Partner",
  "font-size:13px;color:#aeb7c1;"
);
