(() => {
  "use strict";

  /* =========================================================
     MAHARA BPO — MAIN JAVASCRIPT
     Language switching • Mobile navigation • Forms
     ========================================================= */

  const WHATSAPP_NUMBER = "923471417357";
  const DEFAULT_LANGUAGE = "en";
  const STORAGE_KEY = "mahara-language";

  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About Us",
      navServices: "Services",
      navWhy: "Why Mahara",
      navProcess: "Process",
      navContact: "Contact",
      navQuote: "Get a Quote",

      heroEyebrow: "CUSTOMER EXPERIENCE & BPO SOLUTIONS",
      heroTitle: "YOUR CUSTOMER SERVICE PARTNER",
      heroText:
        "Helping businesses across the Gulf outsource customer service to dedicated, professionally managed teams.",
      heroButton: "Talk to Us",
      heroSecondary: "Explore Our Services",

      aboutEyebrow: "ABOUT US",
      aboutTitle: "Built Around Your Customers",
      aboutText:
        "MAHARA BPO provides professional customer experience and business process outsourcing solutions designed for companies across the Gulf region.",
      aboutButton: "Learn More",

      servicesEyebrow: "OUR SERVICES",
      servicesTitle: "Solutions That Scale With You",

      whyEyebrow: "WHY MAHARA",
      whyTitle: "More Than Outsourcing",

      processEyebrow: "OUR PROCESS",
      processTitle: "Simple. Transparent. Effective.",

      quoteEyebrow: "GET STARTED",
      quoteTitle: "Let's Build Your Customer Experience",
      quoteButton: "Submit Request",

      contactEyebrow: "CONTACT US",
      contactTitle: "Let's Talk",

      formFullName: "Full Name",
      formCompany: "Company Name",
      formCountry: "Country",
      formEmail: "Business Email",
      formPhone: "Phone / WhatsApp",
      formIndustry: "Industry",
      formAgents: "Number of Agents",
      formLanguages: "Required Languages",
      formServices: "Services Required",
      formHours: "Working Hours",
      formAdditional: "Additional Information",

      formRequired: "Please complete the required fields.",
      formSuccess: "Thank you. Your request is ready to send.",
      formError: "Please check the form and try again.",

      whatsappMessage:
        "Hello MAHARA BPO, I would like to request information about your BPO services."
    },

    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navServices: "خدماتنا",
      navWhy: "لماذا مهارة",
      navProcess: "آلية العمل",
      navContact: "تواصل معنا",
      navQuote: "اطلب عرضاً",

      heroEyebrow: "حلول تجربة العملاء وخدمات التعهيد",
      heroTitle: "شريكك في خدمة العملاء",
      heroText:
        "نساعد الشركات في دول الخليج على تعهيد خدمات العملاء إلى فرق متخصصة ومدارة باحتراف.",
      heroButton: "تواصل معنا",
      heroSecondary: "اكتشف خدماتنا",

      aboutEyebrow: "من نحن",
      aboutTitle: "نبني خدماتنا حول عملائك",
      aboutText:
        "تقدم مهارة BPO حلولاً احترافية لتجربة العملاء وخدمات التعهيد مصممة للشركات في منطقة الخليج.",
      aboutButton: "اعرف المزيد",

      servicesEyebrow: "خدماتنا",
      servicesTitle: "حلول تنمو مع أعمالك",

      whyEyebrow: "لماذا مهارة",
      whyTitle: "أكثر من مجرد تعهيد",

      processEyebrow: "آلية العمل",
      processTitle: "بسيطة. واضحة. فعالة.",

      quoteEyebrow: "ابدأ الآن",
      quoteTitle: "لنبنِ تجربة عملاء مميزة",
      quoteButton: "إرسال الطلب",

      contactEyebrow: "تواصل معنا",
      contactTitle: "لنتحدث",

      formFullName: "الاسم الكامل",
      formCompany: "اسم الشركة",
      formCountry: "الدولة",
      formEmail: "البريد الإلكتروني",
      formPhone: "الهاتف / الواتساب",
      formIndustry: "المجال",
      formAgents: "عدد الموظفين المطلوب",
      formLanguages: "اللغات المطلوبة",
      formServices: "الخدمات المطلوبة",
      formHours: "ساعات العمل",
      formAdditional: "معلومات إضافية",

      formRequired: "يرجى تعبئة الحقول المطلوبة.",
      formSuccess: "شكراً لك. طلبك جاهز للإرسال.",
      formError: "يرجى مراجعة النموذج والمحاولة مرة أخرى.",

      whatsappMessage:
        "مرحباً مهارة BPO، أرغب في الحصول على معلومات حول خدمات التعهيد وخدمة العملاء."
    }
  };

  let selectedLanguage = DEFAULT_LANGUAGE;

  /* =========================================================
     HELPERS
     ========================================================= */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Ignore storage errors.
    }
  }

  function getTranslation(language, key) {
    return translations[language]?.[key] ?? translations.en[key] ?? key;
  }

  /* =========================================================
     LANGUAGE
     ========================================================= */

  function setLanguage(language, save = true) {
    if (!translations[language]) {
      language = DEFAULT_LANGUAGE;
    }

    selectedLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.language = language;

    if (save) {
      safeStorageSet(STORAGE_KEY, language);
    }

    updateTranslatedContent();
    updateLanguageControls();
    updateFormPlaceholders();
  }

  function updateTranslatedContent() {
    $$("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");

      if (!key) return;

      const value = getTranslation(selectedLanguage, key);

      if (element.hasAttribute("data-i18n-html")) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    $$("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");

      if (key) {
        element.placeholder = getTranslation(selectedLanguage, key);
      }
    });

    $$("[data-i18n-title]").forEach((element) => {
      const key = element.getAttribute("data-i18n-title");

      if (key) {
        element.title = getTranslation(selectedLanguage, key);
      }
    });
  }

  function updateFormPlaceholders() {
    $$("input, textarea").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");

      if (key) {
        element.placeholder = getTranslation(selectedLanguage, key);
      }
    });
  }

  function updateLanguageControls() {
    $$("[data-language]").forEach((button) => {
      const language = button.getAttribute("data-language");

      const active = language === selectedLanguage;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function initLanguage() {
    const savedLanguage = safeStorageGet(STORAGE_KEY);

    const browserLanguage =
      navigator.language?.toLowerCase().startsWith("ar")
        ? "ar"
        : "en";

    const initialLanguage =
      savedLanguage && translations[savedLanguage]
        ? savedLanguage
        : browserLanguage;

    setLanguage(initialLanguage, false);
  }

  /* =========================================================
     LANGUAGE BUTTONS
     ========================================================= */

  function initLanguageButtons() {
    $$("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        const language = button.getAttribute("data-language");

        setLanguage(language);

        closeMobileMenu();
      });
    });
  }

  /* =========================================================
     MOBILE NAVIGATION
     ========================================================= */

  function openMobileMenu() {
    const menu = $("#navMenu");
    const toggle = $(".nav-toggle");

    if (!menu) return;

    menu.classList.add("open");

    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
    }
  }

  function closeMobileMenu() {
    const menu = $("#navMenu");
    const toggle = $(".nav-toggle");

    if (!menu) return;

    menu.classList.remove("open");

    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  function toggleMobileMenu() {
    const menu = $("#navMenu");

    if (!menu) return;

    if (menu.classList.contains("open")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function initMobileNavigation() {
    const toggle = $(".nav-toggle");
    const menu = $("#navMenu");

    if (!toggle || !menu) return;

    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleMobileMenu();
    });

    $$("a", menu).forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (
        menu.classList.contains("open") &&
        !menu.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) {
        closeMobileMenu();
      }
    });
  }

  /* =========================================================
     SMOOTH SCROLL
     ========================================================= */

  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        history.replaceState(null, "", targetId);
      });
    });
  }

  /* =========================================================
     ACTIVE NAVIGATION
     ========================================================= */

  function initActiveNavigation() {
    const sections = $$("section[id]");
    const links = $$('.nav-menu a[href^="#"]');

    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /* =========================================================
     HEADER SCROLL EFFECT
     ========================================================= */

  function initHeaderScroll() {
    const header =
      $(".site-header") ||
      $(".navbar") ||
      $("header");

    if (!header) return;

    const updateHeader = () => {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );
  }

  /* =========================================================
     FORM DATA
     ========================================================= */

  function getFormData(form) {
    const formData = new FormData(form);

    const services = formData.getAll("servicesRequired");

    return {
      fullName: String(formData.get("fullName") || "").trim(),
      companyName: String(formData.get("companyName") || "").trim(),
      country: String(formData.get("country") || "").trim(),
      businessEmail: String(formData.get("businessEmail") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      industry: String(formData.get("industry") || "").trim(),
      agentsRequired: String(
        formData.get("agentsRequired") || ""
      ).trim(),
      languagesRequired: String(
        formData.get("languagesRequired") || ""
      ).trim(),
      servicesRequired: services
        .map((item) => String(item).trim())
        .filter(Boolean),
      workingHours: String(
        formData.get("workingHours") || ""
      ).trim(),
      additionalInfo: String(
        formData.get("additionalInfo") || ""
      ).trim()
    };
  }

  /* =========================================================
     FORM VALIDATION
     ========================================================= */

  function validateForm(form) {
    let valid = true;

    $$("[required]", form).forEach((field) => {
      field.classList.remove("input-error");

      if (!field.value.trim()) {
        field.classList.add("input-error");
        valid = false;
      }
    });

    const email = $('input[type="email"]', form);

    if (email && email.value.trim()) {
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email.value.trim())) {
        email.classList.add("input-error");
        valid = false;
      }
    }

    return valid;
  }

  /* =========================================================
     EMAIL MESSAGE
     ========================================================= */

  function buildEmailBody(data) {
    if (selectedLanguage === "ar") {
      return [
        `الاسم الكامل: ${data.fullName}`,
        `اسم الشركة: ${data.companyName}`,
        `الدولة: ${data.country}`,
        `البريد الإلكتروني: ${data.businessEmail}`,
        `الهاتف / الواتساب: ${data.phone}`,
        `المجال: ${data.industry}`,
        `عدد الموظفين المطلوب: ${data.agentsRequired}`,
        `اللغات المطلوبة: ${data.languagesRequired}`,
        `الخدمات المطلوبة: ${
          data.servicesRequired.length
            ? data.servicesRequired.join(", ")
            : "غير محدد"
        }`,
        `ساعات العمل: ${data.workingHours}`,
        `معلومات إضافية: ${data.additionalInfo}`
      ].join("\n");
    }

    return [
      `Full Name: ${data.fullName}`,
      `Company Name: ${data.companyName}`,
      `Country: ${data.country}`,
      `Business Email: ${data.businessEmail}`,
      `Phone / WhatsApp: ${data.phone}`,
      `Industry: ${data.industry}`,
      `Number of Agents: ${data.agentsRequired}`,
      `Required Languages: ${data.languagesRequired}`,
      `Services Required: ${
        data.servicesRequired.length
          ? data.servicesRequired.join(", ")
          : "Not provided"
      }`,
      `Working Hours: ${data.workingHours}`,
      `Additional Information: ${data.additionalInfo}`
    ].join("\n");
  }

  /* =========================================================
     WHATSAPP MESSAGE
     ========================================================= */

  function buildWhatsAppMessage(data) {
    const intro =
      selectedLanguage === "ar"
        ? translations.ar.whatsappMessage
        : translations.en.whatsappMessage;

    const details =
      selectedLanguage === "ar"
        ? [
            `الاسم الكامل: ${data.fullName}`,
            `اسم الشركة: ${data.companyName}`,
            `الدولة: ${data.country}`,
            `البريد الإلكتروني: ${data.businessEmail}`,
            `الهاتف / الواتساب: ${data.phone}`,
            `المجال: ${data.industry}`,
            `عدد الموظفين المطلوب: ${data.agentsRequired}`,
            `اللغات المطلوبة: ${data.languagesRequired}`,
            `الخدمات المطلوبة: ${
              data.servicesRequired.length
                ? data.servicesRequired.join(", ")
                : "غير محدد"
            }`,
            `ساعات العمل: ${data.workingHours}`,
            `معلومات إضافية: ${data.additionalInfo}`
          ]
        : [
            `Full Name: ${data.fullName}`,
            `Company Name: ${data.companyName}`,
            `Country: ${data.country}`,
            `Business Email: ${data.businessEmail}`,
            `Phone / WhatsApp: ${data.phone}`,
            `Industry: ${data.industry}`,
            `Number of Agents: ${data.agentsRequired}`,
            `Required Languages: ${data.languagesRequired}`,
            `Services Required: ${
              data.servicesRequired.length
                ? data.servicesRequired.join(", ")
                : "Not provided"
            }`,
            `Working Hours: ${data.workingHours}`,
            `Additional Information: ${data.additionalInfo}`
          ];

    return [intro, "", ...details].join("\n");
  }

  /* =========================================================
     CONTACT FORM
     ========================================================= */

  function initContactForm() {
    const form =
      $("#quoteForm") ||
      $(".quote-form form") ||
      $('form[data-contact-form]');

    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!validateForm(form)) {
        alert(
          getTranslation(
            selectedLanguage,
            "formRequired"
          )
        );
        return;
      }

      const data = getFormData(form);

      const subject =
        selectedLanguage === "ar"
          ? "طلب جديد لخدمات مهارة BPO"
          : "New BPO Inquiry - MAHARA BPO";

      const emailBody = buildEmailBody(data);

      const emailUrl =
        `mailto:Info@MaharaBPO.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(emailBody)}`;

      const whatsappUrl =
        `https://wa.me/${WHATSAPP_NUMBER}` +
        `?text=${encodeURIComponent(
          buildWhatsAppMessage(data)
        )}`;

      /*
       * If your form contains a specific WhatsApp button,
       * use it. Otherwise the normal form submit opens email.
       */
      const submitButton =
        form.querySelector(
          '[type="submit"]'
        );

      const whatsappButton =
        form.querySelector(
          '[data-whatsapp-submit]'
        );

      if (whatsappButton) {
        whatsappButton.onclick = () => {
          window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
          );
        };
      }

      if (submitButton) {
        submitButton.disabled = true;

        setTimeout(() => {
          submitButton.disabled = false;
        }, 1500);
      }

      window.location.href = emailUrl;
    });
  }

  /* =========================================================
     FLOATING WHATSAPP
     ========================================================= */

  function initFloatingWhatsApp() {
    const buttons = $$(
      '.floating-whatsapp, [data-whatsapp]'
    );

    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();

        const url =
          `https://wa.me/${WHATSAPP_NUMBER}` +
          `?text=${encodeURIComponent(
            selectedLanguage === "ar"
              ? translations.ar.whatsappMessage
              : translations.en.whatsappMessage
          )}`;

        window.open(
          url,
          "_blank",
          "noopener,noreferrer"
        );
      });
    });
  }

  /* =========================================================
     IMAGE ERROR HANDLING
     ========================================================= */

  function initImageHandling() {
    $$("img").forEach((image) => {
      image.addEventListener("error", () => {
        image.classList.add("image-error");
      });
    });
  }

  /* =========================================================
     YEAR
     ========================================================= */

  function initCurrentYear() {
    const year = new Date().getFullYear();

    $$("[data-current-year]").forEach((element) => {
      element.textContent = year;
    });
  }

  /* =========================================================
     INITIALIZATION
     ========================================================= */

  function init() {
    initLanguage();
    initLanguageButtons();
    initMobileNavigation();
    initSmoothScroll();
    initActiveNavigation();
    initHeaderScroll();
    initContactForm();
    initFloatingWhatsApp();
    initImageHandling();
    initCurrentYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }
})();
