/* =========================================================
   MAHARA BPO — PREMIUM WEBSITE JAVASCRIPT
   ========================================================= */

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.process": "How It Works",
    "nav.why": "Why Mahara?",
    "nav.contact": "Contact Us",
    "nav.quote": "Get Started",

    "hero.heading": "YOUR<br>CUSTOMER<br>SERVICE<br>PARTNER",
    "hero.description":
      "Helping businesses across the Gulf outsource customer service to dedicated, professionally managed teams.",
    "hero.cta": "Contact Us Today",
    "hero.badge1": "Professional<br>Teams",
    "hero.badge2": "Performance<br>Vision",
    "hero.badge3": "Quality You<br>Can Trust",
    "hero.panelTitle": "Your Customer Experience Partner",
    "hero.panelText":
      "We strengthen your customer experience through specialized, efficient teams that support your business and sustained growth.",

    "about.eyebrow": "About Us",
    "about.heading":
      "We Handle the Conversations, You Focus on Growth.",
    "about.p1":
      "MAHARA BPO helps businesses across the Gulf outsource their customer service operations to dedicated, professionally managed teams.",
    "about.p2":
      "We handle the conversations, so you can focus on growing your business. Our teams are trained to represent your brand with professionalism, empathy and efficiency.",
    "about.feature1": "Dedicated<br>Teams",
    "about.feature2": "Transparent<br>Communication",
    "about.feature3": "Dependable<br>Delivery",

    "services.eyebrow": "Our Services",
    "services.heading":
      "Comprehensive Support for Every Customer Touchpoint",
    "services.card1.title": "Inbound Call Support",
    "services.card1.text":
      "Professional inbound support for every customer call",
    "services.card2.title": "WhatsApp & Chat Support",
    "services.card2.text":
      "Fast, helpful support across WhatsApp and live chat",
    "services.card3.title": "Email Support",
    "services.card3.text":
      "Clear and reliable responses through email",
    "services.card4.title": "Customer Follow-Up",
    "services.card4.text":
      "Consistent follow-up that keeps customers informed",
    "services.card5.title": "Live Agent",
    "services.card5.text":
      "Live agent support for real-time customer needs",
    "services.card6.title": "Book Appointments",
    "services.card6.text":
      "Effortless appointment scheduling and coordination",

    "process.eyebrow": "How It Works",
    "process.heading": "We Follow a Clear, Efficient Process",
    "process.step1.title": "Design",
    "process.step1.text":
      "We build a customer service model around your business requirements and customer journey.",
    "process.step2.title": "Train",
    "process.step2.text":
      "Our teams are trained on your products, scripts, procedures and quality expectations.",
    "process.step3.title": "Launch",
    "process.step3.text":
      "Your support operation begins with structured onboarding, supervision and focus on service quality.",
    "process.step4.title": "Optimize",
    "process.step4.text":
      "We monitor performance and refine support continuously to improve quality and efficiency.",

    "why.eyebrow": "Why Outsource with Mahara?",
    "why.heading": "Professional Support with Measurable Business Value",
    "why.item1": "Your Business Stays in Control",
    "why.item2": "Lower Operating Costs",
    "why.item3": "Dedicated Teams",
    "why.item4": "Flexible Scaling",
    "why.item5": "Professional Management",
    "why.item6": "Performance Visibility",
    "why.badge": "Focus on your customers",

    "benefits.eyebrow": "With Us, You Get",
    "benefits.item1": "Dedicated customer service agents",
    "benefits.item2": "Professional team supervision",
    "benefits.item3": "Phone, WhatsApp, email and chat support",
    "benefits.item4": "Customer inquiry handling",
    "benefits.item5": "Complaint and escalation management",
    "benefits.item6": "Order and booking assistance",
    "benefits.item7": "Customer follow-ups",
    "benefits.item8": "Quality monitoring",

    "quote.eyebrow": "Request a Quote",
    "quote.heading":
      "Let us build the right customer support solution for you.",

    "form.fullName": "Full Name",
    "form.companyName": "Company Name",
    "form.country": "Country",
    "form.businessEmail": "Business Email",
    "form.phone": "Phone / WhatsApp",
    "form.industry": "Industry",
    "form.agentsRequired": "Number of Agents Required",
    "form.languagesRequired": "Required Languages",
    "form.servicesRequired": "Services Required",
    "form.workingHours": "Required Working Hours",
    "form.additionalInfo": "Additional Information",

    "form.fullNamePlaceholder": "Full Name",
    "form.companyNamePlaceholder": "Company Name",
    "form.countryPlaceholder": "Country",
    "form.businessEmailPlaceholder": "Business Email",
    "form.phonePlaceholder": "Phone / WhatsApp",
    "form.industryPlaceholder": "Industry",
    "form.additionalInfoPlaceholder":
      "Tell us about your goals, customer loads and preferred support model.",

    "form.select": "Select",
    "form.optionAgents1": "1-5",
    "form.optionAgents2": "6-10",
    "form.optionAgents3": "11-25",
    "form.optionAgents4": "26-50",
    "form.optionAgents5": "51-100",
    "form.optionAgents6": "100+",

    "form.optionLanguageArabic": "Arabic",
    "form.optionLanguageEnglish": "English",
    "form.optionLanguageUrdu": "Urdu",
    "form.optionLanguageArabicEnglish": "Arabic + English",
    "form.optionLanguageArabicEnglishUrdu":
      "Arabic + English + Urdu",
    "form.optionLanguageOther": "Other",

    "form.optionServiceInbound": "Inbound Call Support",
    "form.optionServiceWhatsApp": "WhatsApp & Chat Support",
    "form.optionServiceEmail": "Email Support",
    "form.optionServiceFollowUp": "Customer Follow-Up",
    "form.optionServiceLiveAgent": "Live Agent",
    "form.optionServiceAppointments": "Book Appointments",
    "form.optionServiceBackOffice": "Back-Office Support",
    "form.optionService24Seven": "24/7 Support",

    "form.optionHoursBusiness": "Business Hours",
    "form.optionHoursExtended": "Extended Hours",
    "form.optionHours24Seven": "24/7",

    "form.submit": "Request a Quote",
    "form.whatsapp": "Send Inquiry on WhatsApp",

    "contact.eyebrow": "Contact Us Today",
    "contact.emailLabel": "Email",
    "contact.websiteLabel": "Website",
    "contact.phoneLabel": "Phone",

    "footer.about":
      "Your trusted outsourced customer service partner for businesses that want to deliver better experiences and grow with confidence.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Our Services",
    "footer.contactInfo": "Contact Info",
    "footer.available": "Available 24/7",
    "footer.copyright": "© 2026 MAHARA BPO. All Rights Reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",

    "form.message.email":
      "Your email application will open so you can send the inquiry to Info@MaharaBPO.com.",
    "form.message.whatsapp":
      "Your WhatsApp message is ready to open with your inquiry details.",

    "service.link.inbound": "Inbound Call Support",
    "service.link.chat": "WhatsApp & Chat Support",
    "service.link.email": "Email Support",
    "service.link.followup": "Customer Follow-Up",
    "service.link.live": "Live Agent",
    "service.link.appointment": "Book Appointments",

    "aria.whatsapp": "Contact MAHARA BPO on WhatsApp"
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.process": "كيف يعمل",
    "nav.why": "لماذا مهارة؟",
    "nav.contact": "اتصل بنا",
    "nav.quote": "ابدأ الآن",

    "hero.heading": "شريكك<br>في<br>خدمة<br>العملاء",
    "hero.description":
      "نساعد الشركات في الخليج على الاستعانة بخدمات العملاء عبر فرق متخصصة ومدارة بشكل احترافي.",
    "hero.cta": "تواصل معنا اليوم",
    "hero.badge1": "فرق<br>احترافية",
    "hero.badge2": "رؤية<br>أداء",
    "hero.badge3": "جودة<br>تستحق الثقة",
    "hero.panelTitle": "شريكك في تجربة العملاء",
    "hero.panelText":
      "نعزز تجربة عملائك من خلال فرق متخصصة وفعالة تدعم أعمالك ونموك المستمر.",

    "about.eyebrow": "من نحن",
    "about.heading": "نحن ندير المحادثات، وأنت تركز على النمو.",
    "about.p1":
      "تساعد MAHARA BPO الشركات عبر الخليج على الاستعانة بخدماتها في مجال خدمة العملاء عبر فرق متخصصة ومدارة بشكل احترافي.",
    "about.p2":
      "نحن ندير المحادثات حتى تتمكن من التركيز على نمو عملك. تم تدريب فرقنا لتمثيل علامتك التجارية باحترافية، وتعاطف، وكفاءة.",
    "about.feature1": "فرق<br>مخصصة",
    "about.feature2": "تواصل<br>شفاف",
    "about.feature3": "تسليم<br>موثوق",

    "services.eyebrow": "خدماتنا",
    "services.heading": "دعم شامل لكل نقطة تفاعل مع العملاء",
    "services.card1.title": "دعم المكالمات الواردة",
    "services.card1.text":
      "خدمة هاتفية احترافية لكل مكالمة من العملاء",
    "services.card2.title": "الدعم عبر الواتساب والدردشة",
    "services.card2.text":
      "دعم سريع وفعّال عبر واتساب والدردشة المباشرة",
    "services.card3.title": "دعم البريد الإلكتروني",
    "services.card3.text":
      "ردود واضحة وموثوقة عبر البريد الإلكتروني",
    "services.card4.title": "المتابعة مع العملاء",
    "services.card4.text":
      "متابعة مستمرة تبقي العملاء على اطلاع",
    "services.card5.title": "وكيل مباشر",
    "services.card5.text":
      "دعم مباشر لتلبية احتياجات العملاء فوراً",
    "services.card6.title": "حجز المواعيد",
    "services.card6.text":
      "تنسيق وحجز المواعيد بسهولة وكفاءة",

    "process.eyebrow": "كيف يعمل",
    "process.heading": "نتبع عملية واضحة وفعالة",
    "process.step1.title": "التصميم",
    "process.step1.text":
      "نقوم ببناء نموذج لخدمة العملاء يتماشى مع متطلبات عملك وتجربة العميل.",
    "process.step2.title": "التدريب",
    "process.step2.text":
      "يتم تدريب فرقنا على منتجاتك وسكربتاتك وإجراءاتك وتوقعات الجودة.",
    "process.step3.title": "الإطلاق",
    "process.step3.text":
      "تبدأ عمليات الدعم مع عملية إطلاق منظمة وإشراف مستمر وتركيز واضح على جودة الخدمة.",
    "process.step4.title": "التحسين",
    "process.step4.text":
      "نراقب الأداء ونحسن الدعم باستمرار لتحسين الجودة والكفاءة.",

    "why.eyebrow": "لماذا الاستعانة بمهارة؟",
    "why.heading": "دعم احترافي بقيمة أعمال قابلة للقياس",
    "why.item1": "يظل عملك تحت السيطرة",
    "why.item2": "تقليل التكاليف التشغيلية",
    "why.item3": "فرق مخصصة",
    "why.item4": "توسعة مرنة",
    "why.item5": "إدارة احترافية",
    "why.item6": "شفافية الأداء",
    "why.badge": "ركز على عملائك",

    "benefits.eyebrow": "معنا تحصل على",
    "benefits.item1": "وكلاء خدمة عملاء مخصصين",
    "benefits.item2": "إشراف احترافي على الفريق",
    "benefits.item3": "دعم الهاتف والواتساب والبريد والدردشة",
    "benefits.item4": "معالجة استفسارات العملاء",
    "benefits.item5": "إدارة الشكاوى والتصعيد",
    "benefits.item6": "مساعدة في الطلبات والحجوزات",
    "benefits.item7": "متابعة العملاء",
    "benefits.item8": "مراقبة الجودة",

    "quote.eyebrow": "اطلب عرض سعر",
    "quote.heading": "دعنا نبني حل خدمة عملاء مناسب لك.",

    "form.fullName": "الاسم الكامل",
    "form.companyName": "اسم الشركة",
    "form.country": "الدولة",
    "form.businessEmail": "البريد الإلكتروني",
    "form.phone": "الهاتف / الواتساب",
    "form.industry": "المجال",
    "form.agentsRequired": "عدد الوكلاء المطلوب",
    "form.languagesRequired": "اللغات المطلوبة",
    "form.servicesRequired": "الخدمات المطلوبة",
    "form.workingHours": "ساعات العمل المطلوبة",
    "form.additionalInfo": "معلومات إضافية",

    "form.fullNamePlaceholder": "الاسم الكامل",
    "form.companyNamePlaceholder": "اسم الشركة",
    "form.countryPlaceholder": "الدولة",
    "form.businessEmailPlaceholder": "البريد الإلكتروني",
    "form.phonePlaceholder": "الهاتف / الواتساب",
    "form.industryPlaceholder": "المجال",
    "form.additionalInfoPlaceholder":
      "أخبرنا عن أهدافك، وحجم العملاء، ونموذج الدعم المفضل.",

    "form.select": "اختر",
    "form.optionAgents1": "1-5",
    "form.optionAgents2": "6-10",
    "form.optionAgents3": "11-25",
    "form.optionAgents4": "26-50",
    "form.optionAgents5": "51-100",
    "form.optionAgents6": "100+",

    "form.optionLanguageArabic": "العربية",
    "form.optionLanguageEnglish": "الإنجليزية",
    "form.optionLanguageUrdu": "الأردية",
    "form.optionLanguageArabicEnglish": "العربية + الإنجليزية",
    "form.optionLanguageArabicEnglishUrdu":
      "العربية + الإنجليزية + الأردية",
    "form.optionLanguageOther": "أخرى",

    "form.optionServiceInbound": "دعم المكالمات الواردة",
    "form.optionServiceWhatsApp": "الدعم عبر الواتساب والدردشة",
    "form.optionServiceEmail": "دعم البريد الإلكتروني",
    "form.optionServiceFollowUp": "المتابعة مع العملاء",
    "form.optionServiceLiveAgent": "وكيل مباشر",
    "form.optionServiceAppointments": "حجز المواعيد",
    "form.optionServiceBackOffice": "دعم المكتب الخلفي",
    "form.optionService24Seven": "دعم على مدار الساعة",

    "form.optionHoursBusiness": "ساعات العمل",
    "form.optionHoursExtended": "ساعات ممتدة",
    "form.optionHours24Seven": "24/7",

    "form.submit": "اطلب عرض سعر",
    "form.whatsapp": "إرسال الاستفسار على واتساب",

    "contact.eyebrow": "تواصل معنا اليوم",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.websiteLabel": "الموقع",
    "contact.phoneLabel": "الهاتف",

    "footer.about":
      "شريكك الموثوق في خدمة العملاء للمؤسسات التي ترغب في تقديم تجارب أفضل والنمو بثقة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "خدماتنا",
    "footer.contactInfo": "معلومات التواصل",
    "footer.available": "متاح 24/7",
    "footer.copyright": "© 2026 MAHARA BPO. جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "الشروط والأحكام",

    "form.message.email":
      "سيتم فتح بريدك الإلكتروني لإرسال الاستفسار إلى Info@MaharaBPO.com.",
    "form.message.whatsapp":
      "سيتم فتح رسالة واتساب مع تفاصيل طلبك.",

    "service.link.inbound": "دعم المكالمات الواردة",
    "service.link.chat": "الدعم عبر الواتساب والدردشة",
    "service.link.email": "دعم البريد الإلكتروني",
    "service.link.followup": "المتابعة مع العملاء",
    "service.link.live": "وكيل مباشر",
    "service.link.appointment": "حجز المواعيد",

    "aria.whatsapp": "تواصل مع MAHARA BPO عبر واتساب"
  }
};


/* =========================================================
   LANGUAGE
   ========================================================= */

function getStoredLanguage() {
  const saved = localStorage.getItem("maharaLanguage");
  return saved === "ar" ? "ar" : "en";
}

function applyTranslation(language) {

  const selectedLanguage =
    translations[language] ? language : "en";

  const currentTranslations =
    translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.documentElement.dir =
    selectedLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (currentTranslations[key]) {
      element.textContent = currentTranslations[key];
    }

  });

  document.querySelectorAll("[data-i18n-html]").forEach(element => {

    const key = element.dataset.i18nHtml;

    if (currentTranslations[key]) {
      element.innerHTML = currentTranslations[key];
    }

  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

    const key = element.dataset.i18nPlaceholder;

    if (currentTranslations[key]) {
      element.placeholder =
        currentTranslations[key];
    }

  });

  document.querySelectorAll(".lang-option").forEach(button => {

    const active =
      button.dataset.lang === selectedLanguage;

    button.classList.toggle("active", active);
    button.setAttribute(
      "aria-pressed",
      String(active)
    );

  });

  const whatsapp =
    document.querySelector(".floating-whatsapp");

  if (whatsapp) {

    whatsapp.setAttribute(
      "aria-label",
      currentTranslations["aria.whatsapp"]
    );

    whatsapp.setAttribute(
      "data-tooltip",
      selectedLanguage === "ar"
        ? "تواصل معنا"
        : "Chat with us"
    );

  }

  localStorage.setItem(
    "maharaLanguage",
    selectedLanguage
  );
}


/* =========================================================
   FORM DATA
   ========================================================= */

function collectQuoteData() {

  const form =
    document.getElementById("quoteForm");

  if (!form) return null;

  const formData =
    new FormData(form);

  return {

    fullName:
      formData.get("fullName")?.trim() ||
      "Not provided",

    companyName:
      formData.get("companyName")?.trim() ||
      "Not provided",

    country:
      formData.get("country")?.trim() ||
      "Not provided",

    businessEmail:
      formData.get("businessEmail")?.trim() ||
      "Not provided",

    phone:
      formData.get("phone")?.trim() ||
      "Not provided",

    industry:
      formData.get("industry")?.trim() ||
      "Not provided",

    agentsRequired:
      formData.get("agentsRequired")?.trim() ||
      "Not provided",

    languagesRequired:
      formData.get("languagesRequired")?.trim() ||
      "Not provided",

    servicesRequired:
      formData.get("servicesRequired")?.trim() ||
      "Not provided",

    workingHours:
      formData.get("workingHours")?.trim() ||
      "Not provided",

    additionalInfo:
      formData.get("additionalInfo")?.trim() ||
      "Not provided"
  };
}


/* =========================================================
   FORM MESSAGE
   ========================================================= */

function updateFormMessage(key) {

  const message =
    document.getElementById("quoteFormMessage");

  const lang =
    document.documentElement.lang || "en";

  if (
    message &&
    translations[lang] &&
    translations[lang][key]
  ) {
    message.textContent =
      translations[lang][key];
  }
}


/* =========================================================
   EMAIL
   ========================================================= */

function sendEmailInquiry() {

  const data =
    collectQuoteData();

  if (!data) return;

  const subject =
    "New BPO Inquiry - MAHARA BPO";

  const body = [
    "MAHARA BPO — New Business Inquiry",
    "",
    `Full Name: ${data.fullName}`,
    `Company Name: ${data.companyName}`,
    `Country: ${data.country}`,
    `Business Email: ${data.businessEmail}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Industry: ${data.industry}`,
    `Number of Agents: ${data.agentsRequired}`,
    `Required Languages: ${data.languagesRequired}`,
    `Services Required: ${data.servicesRequired}`,
    `Working Hours: ${data.workingHours}`,
    "",
    `Additional Information: ${data.additionalInfo}`
  ].join("\n");

  const mailto =
    `mailto:Info@MaharaBPO.com` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;

  updateFormMessage("form.message.email");
}


/* =========================================================
   WHATSAPP
   ========================================================= */

function sendWhatsAppInquiry() {

  const data =
    collectQuoteData();

  if (!data) return;

  const message = [
    "Hello MAHARA BPO,",
    "",
    "I would like to request information about your BPO services.",
    "",
    `Full Name: ${data.fullName}`,
    `Company Name: ${data.companyName}`,
    `Country: ${data.country}`,
    `Business Email: ${data.businessEmail}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Industry: ${data.industry}`,
    `Number of Agents: ${data.agentsRequired}`,
    `Required Languages: ${data.languagesRequired}`,
    `Services Required: ${data.servicesRequired}`,
    `Working Hours: ${data.workingHours}`,
    "",
    `Additional Information: ${data.additionalInfo}`
  ].join("\n");

  const url =
    `https://wa.me/923471417357?text=` +
    encodeURIComponent(message);

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

  updateFormMessage("form.message.whatsapp");
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

  const toggle =
    document.querySelector(".nav-toggle");

  const menu =
    document.getElementById("navMenu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {

    const open =
      menu.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      String(open)
    );

  });

  menu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      menu.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================================
   LANGUAGE BUTTONS
   ========================================================= */

function setupLanguageSwitcher() {

  document
    .querySelectorAll(".lang-option")
    .forEach(button => {

      button.addEventListener("click", () => {

        applyTranslation(
          button.dataset.lang
        );

      });

    });

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

function setupHeader() {

  const header =
    document.querySelector(".site-header");

  if (!header) return;

  const update =
    () => {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );

    };

  update();

  window.addEventListener(
    "scroll",
    update,
    { passive: true }
  );

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupRevealAnimations() {

  const elements = document.querySelectorAll(
    ".about-copy, .about-visual, .service-card, .process-card, .why-item, .why-visual, .benefits-copy, .benefits-visual, .quote-form, .contact-heading, .brand-panel"
  );

  elements.forEach(element => {
    element.classList.add("reveal");
  });

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );

  elements.forEach(element => {
    observer.observe(element);
  });

}


/* =========================================================
   SMOOTH ANCHOR SCROLL
   ========================================================= */

function setupSmoothLinks() {

  document.querySelectorAll(
    'a[href^="#"]'
  ).forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const id =
          link.getAttribute("href");

        if (!id || id === "#") return;

        const target =
          document.querySelector(id);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });

}


/* =========================================================
   QUOTE FORM
   ========================================================= */

function setupQuoteForm() {

  const form =
    document.getElementById("quoteForm");

  const whatsapp =
    document.getElementById(
      "whatsappQuoteBtn"
    );

  if (form) {

    form.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        if (!form.checkValidity()) {

          form.reportValidity();

          return;
        }

        sendEmailInquiry();

      }
    );

  }

  if (whatsapp) {

    whatsapp.addEventListener(
      "click",
      () => {

        if (
          form &&
          !form.checkValidity()
        ) {

          form.reportValidity();

          return;
        }

        sendWhatsAppInquiry();

      }
    );

  }

}


/* =========================================================
   WHATSAPP FLOATING BUTTON
   ========================================================= */

function setupFloatingWhatsApp() {

  const button =
    document.querySelector(
      ".floating-whatsapp"
    );

  if (!button) return;

  button.addEventListener(
    "click",
    () => {

      if (
        typeof gtag === "function"
      ) {

        gtag(
          "event",
          "whatsapp_click",
          {
            event_category: "contact",
            event_label: "Floating WhatsApp"
          }
        );

      }

    }
  );

}


/* =========================================================
   GOOGLE ANALYTICS EVENTS
   ========================================================= */

function setupAnalytics() {

  document.querySelectorAll(
    'a[href^="tel:"], a[href^="mailto:"]'
  ).forEach(link => {

    link.addEventListener(
      "click",
      () => {

        if (
          typeof gtag === "function"
        ) {

          gtag(
            "event",
            "contact_click",
            {
              event_category: "contact",
              event_label:
                link.getAttribute("href")
            }
          );

        }

      }
    );

  });

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    applyTranslation(
      getStoredLanguage()
    );

    setupMobileMenu();

    setupLanguageSwitcher();

    setupHeader();

    setupRevealAnimations();

    setupSmoothLinks();

    setupQuoteForm();

    setupFloatingWhatsApp();

    setupAnalytics();

  }
);
