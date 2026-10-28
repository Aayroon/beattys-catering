export const site = {
  name: "Beattys Catering",
  tagline: "Outdoor & event catering across Kenya",
  phoneDisplay: "+254 722 939 017",
  phoneTel: "+254722939017",
  whatsapp: "254722939017",
  email: "beattyscatering@gmail.com", 
  base: "Nairobi, Kenya",
  url: "https://beattyscatering.com",
};

export const whatsappLink = (message = "Hello Beattys Catering, I would like a quote.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;