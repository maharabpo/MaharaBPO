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

  if (quoteForm) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(quoteForm);
      const fullName = formData.get("fullName")?.toString().trim() || "Not provided";
      const companyName = formData.get("companyName")?.toString().trim() || "Not provided";
      const country = formData.get("country")?.toString().trim() || "Not provided";
      const businessEmail = formData.get("businessEmail")?.toString().trim() || "Not provided";
      const phone = formData.get("phone")?.toString().trim() || "Not provided";
      const industry = formData.get("industry")?.toString().trim() || "Not provided";
      const agentsRequired = formData.get("agentsRequired")?.toString().trim() || "Not provided";
      const languagesRequired = formData.get("languagesRequired")?.toString().trim() || "Not provided";
      const workingHours = formData.get("workingHours")?.toString().trim() || "Not provided";
      const additionalInfo = formData.get("additionalInfo")?.toString().trim() || "Not provided";
      const servicesRequired = formData.getAll("servicesRequired").map((value) => value.toString());

      const subject = "New BPO Inquiry - MAHARA BPO";
      const emailBody = [
        `Full Name: ${fullName}`,
        `Company Name: ${companyName}`,
        `Country: ${country}`,
        `Business Email: ${businessEmail}`,
        `Phone / WhatsApp: ${phone}`,
        `Industry: ${industry}`,
        `Number of Agents: ${agentsRequired}`,
        `Required Languages: ${languagesRequired}`,
        `Services Required: ${servicesRequired.length ? servicesRequired.join(", ") : "Not provided"}`,
        `Working Hours: ${workingHours}`,
        `Additional Information: ${additionalInfo}`
      ].join("\n");

      const mailtoUrl = `mailto:info@maharabpo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;

      if (formMessage) {
        formMessage.textContent = "Your email application will open so you can send the inquiry to info@maharabpo.com.";
      }
    });
  }

  if (whatsappQuoteBtn) {
    whatsappQuoteBtn.addEventListener("click", () => {
      const formData = new FormData(quoteForm);
      const fullName = formData.get("fullName")?.toString().trim() || "Not provided";
      const companyName = formData.get("companyName")?.toString().trim() || "Not provided";
      const country = formData.get("country")?.toString().trim() || "Not provided";
      const businessEmail = formData.get("businessEmail")?.toString().trim() || "Not provided";
      const phone = formData.get("phone")?.toString().trim() || "Not provided";
      const industry = formData.get("industry")?.toString().trim() || "Not provided";
      const agentsRequired = formData.get("agentsRequired")?.toString().trim() || "Not provided";
      const languagesRequired = formData.get("languagesRequired")?.toString().trim() || "Not provided";
      const workingHours = formData.get("workingHours")?.toString().trim() || "Not provided";
      const additionalInfo = formData.get("additionalInfo")?.toString().trim() || "Not provided";
      const servicesRequired = formData.getAll("servicesRequired").map((value) => value.toString());

      const messageLines = [
        "Hello MAHARA BPO, I would like to request information about your BPO services.",
        `Full Name: ${fullName}`,
        `Company Name: ${companyName}`,
        `Country: ${country}`,
        `Business Email: ${businessEmail}`,
        `Phone / WhatsApp: ${phone}`,
        `Industry: ${industry}`,
        `Number of Agents: ${agentsRequired}`,
        `Required Languages: ${languagesRequired}`,
        `Services Required: ${servicesRequired.length ? servicesRequired.join(", ") : "Not provided"}`,
        `Working Hours: ${workingHours}`,
        `Additional Information: ${additionalInfo}`
      ];

      const whatsappUrl = `https://wa.me/923471417357?text=${encodeURIComponent(messageLines.join("\n"))}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      if (formMessage) {
        formMessage.textContent = "Your WhatsApp message is ready to open with your inquiry details.";
      }
    });
  }
});
