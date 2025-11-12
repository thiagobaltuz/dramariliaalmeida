export default function WhatsappFab() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 h-14 w-14 rounded-full bg-green-500 text-white grid place-items-center shadow-hard"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M20 3.5A10 10 0 1 0 3.4 20.1L2 22l1.9-.4A10 10 0 1 0 20 3.5ZM7.5 8.2c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4l.6 1.4c.1.2.1.4 0 .5l-.3.6c-.1.2 0 .4.1.6.4.6 1 1.3 1.7 1.7.2.1.4.1.6 0l.6-.3c.2-.1.4-.1.5 0l1.4.6c.4.2.4.4.4.6v.5c0 .2 0 .4-.5.6-1 .5-2 .5-3.1 0-1.5-.7-3.3-2.5-4-4-.4-.8-.4-1.7 0-2.7Z"/>
      </svg>
    </a>
  );
}
