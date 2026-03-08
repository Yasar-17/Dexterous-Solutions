import React from 'react';

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50">
      <a
        href="https://wa.me/919994106234"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/40 transition-transform duration-200 animate-bounce-subtle"
        aria-label="Chat with us on WhatsApp"
      >
        {/* WHATSAPP FLOAT: This button appears on all pages. Change number in href if needed */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7"
        >
          <path
            fill="currentColor"
            d="M16.04 5C10.53 5 6.04 9.49 6.04 15c0 2.01.59 3.88 1.63 5.46L6 27l6.7-1.62A9.87 9.87 0 0 0 16.04 25C21.55 25 26 20.51 26 15S21.55 5 16.04 5Zm0 17.9c-1.62 0-3.15-.44-4.5-1.27l-.32-.19-3.98 1 1.06-3.88-.21-.4A8.1 8.1 0 0 1 7.9 15c0-4.49 3.66-8.15 8.14-8.15 4.49 0 8.15 3.66 8.15 8.15c0 4.48-3.66 8.14-8.15 8.14Zm4.47-6.1c-.24-.12-1.43-.7-1.65-.77-.22-.08-.38-.12-.54.11c-.16.24-.62.77-.76.93c-.14.16-.28.18-.52.06c-.24-.12-1.01-.37-1.93-1.18c-.71-.63-1.19-1.41-1.33-1.65c-.14-.24-.01-.38.1-.5c.1-.1.24-.28.36-.42c.12-.14.16-.24.24-.4c.08-.16.03-.3-.02-.42c-.06-.12-.54-1.3-.74-1.78c-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3c-.22.24-.85.83-.85 2.02c0 1.19.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.55c.58.23 1.03.37 1.38.47c.58.18 1.11.16 1.53.1c.47-.07 1.43-.58 1.63-1.14c.2-.56.2-1.04.14-1.14c-.06-.1-.22-.16-.46-.28Z"
          />
        </svg>
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs text-white shadow-lg group-hover:inline-block">
          Chat with us!
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;

