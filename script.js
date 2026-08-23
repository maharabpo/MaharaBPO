document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const quoteForm = document.getElementById("quoteForm");
  const formMessage = document.getElementById("quoteFormMessage");
  const whatsappQuoteBtn = document.getElementById("whatsappQuoteBtn");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const collectQuoteData = () => {
    if (!quoteForm) return null;

    const formData = new FormData(quoteForm);
    const servicesRequired = formData.getAll("servicesRequired").map((value) => value.toString());

    return {
      fullName: formData.get("fullName")?.toString().trim() || "Not provided",
      companyName: formData.get("companyName")?.toString().trim() || "Not provided",
      country: formData.get("country")?.toString().trim() || "Not provided",
      businessEmail: formData.get("businessEmail")?.toString().trim() || "Not provided",
      phone: formData.get("phone")?.toString().trim() || "Not provided",
      industry: formData.get("industry")?.toString().trim() || "Not provided",
      agentsRequired: formData.get("agentsRequired")?.toString().trim() || "Not provided",
      languagesRequired: formData.get("languagesRequired")?.toString().trim() || "Not provided",
      workingHours: formData.get("workingHours")?.toString().trim() || "Not provided",
      additionalInfo: formData.get("additionalInfo")?.toString().trim() || "Not provided",
      servicesRequired
    };
  };

  if (quoteForm) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = collectQuoteData();
      if (!data) return;

      const subject = "New BPO Inquiry - MAHARA BPO";
      const emailBody = [
        `Full Name: ${data.fullName}`,
        `Company Name: ${data.companyName}`,
        `Country: ${data.country}`,
        `Business Email: ${data.businessEmail}`,
        `Phone / WhatsApp: ${data.phone}`,
        `Industry: ${data.industry}`,
        `Number of Agents: ${data.agentsRequired}`,
        `Required Languages: ${data.languagesRequired}`,
        `Services Required: ${data.servicesRequired.length ? data.servicesRequired.join(", ") : "Not provided"}`,
        `Working Hours: ${data.workingHours}`,
        `Additional Information: ${data.additionalInfo}`
      ].join("\n");

      window.location.href = `mailto:Info@MaharaBPO.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

      if (formMessage) {
        formMessage.textContent = "Your email application will open so you can send the inquiry to Info@MaharaBPO.com.";
      }
    });
  }

  if (whatsappQuoteBtn && quoteForm) {
    whatsappQuoteBtn.addEventListener("click", () => {
      const data = collectQuoteData();
      if (!data) return;

      const messageLines = [
        "Hello MAHARA BPO, I would like to request information about your BPO services.",
        `Full Name: ${data.fullName}`,
        `Company Name: ${data.companyName}`,
        `Country: ${data.country}`,
        `Business Email: ${data.businessEmail}`,
        `Phone / WhatsApp: ${data.phone}`,
        `Industry: ${data.industry}`,
        `Number of Agents: ${data.agentsRequired}`,
        `Required Languages: ${data.languagesRequired}`,
        `Services Required: ${data.servicesRequired.length ? data.servicesRequired.join(", ") : "Not provided"}`,
        `Working Hours: ${data.workingHours}`,
        `Additional Information: ${data.additionalInfo}`
      ];

      const whatsappUrl = `https://wa.me/923471417357?text=${encodeURIComponent(messageLines.join("\n"))}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      if (formMessage) {
        formMessage.textContent = "Your WhatsApp message is ready to open with your inquiry details.";
      }
    });
  }
});
