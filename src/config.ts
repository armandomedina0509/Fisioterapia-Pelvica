/**
 * Datos del negocio y puntos de conexión.
 * Edita SOLO este archivo para actualizar contacto, redes o el formulario.
 */
export const site = {
  name: "Fisioterapia Pélvica",
  slogan: "Conecta con tu cuerpo. El bienestar comienza desde adentro.",
  phoneDisplay: "311-343-25-45",
  phoneTel: "+523113432545",
  whatsappNumber: "523113432545",
  whatsappMessage:
    "Hola, me gustaría obtener información sobre fisioterapia de suelo pélvico y agendar una cita.",
  email: "lic.tfr.estefaniacaro@gmail.com",
  hours: "8:00 AM a 8:00 PM",
  location: "Nayarit / Jalisco",

  // Cuando tengas las URLs reales, pégalas aquí y los enlaces se activan solos.
  instagram: { handle: "@fisiot_Estefania", url: "" },
  facebook: { handle: "rehafisio", url: "" },

  // Formulario: si dejas esto vacío, el botón abre WhatsApp con el mensaje ya redactado.
  // Para enviar por correo, crea un formulario en Formspree y pega aquí su URL
  // (por ejemplo "https://formspree.io/f/xxxxxxx").
  formEndpoint: "",
};

export const whatsappLink = (text: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
