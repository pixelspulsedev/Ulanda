import React from 'react';

const WHATSAPP_PHONE_E164 = '447904336031';
const WHATSAPP_MESSAGE = 'Hi ULANDA, I would like to ask about booking a consultation.';

export default function FloatingWhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ULANDA on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="sr-only">Open WhatsApp chat</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.149-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.205-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.874 1.213 3.072.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.119.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.448 4.436-9.884 9.888-9.884 2.64.001 5.12 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.993c-.003 5.45-4.437 9.885-9.885 9.885M20.517 3.463A11.82 11.82 0 0 0 12.06 0C5.495 0 .155 5.34.153 11.905c-.001 2.1.548 4.15 1.595 5.957L0 24l6.272-1.647a11.93 11.93 0 0 0 5.775 1.47h.005c6.566 0 11.906-5.34 11.908-11.906a11.86 11.86 0 0 0-3.443-8.454"
        />
      </svg>
    </a>
  );
}