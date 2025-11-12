// components/Map.tsx
export default function Map() {
    return (
      <div className="rounded-2xl overflow-hidden shadow-soft border border-black/5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.475959862665!2d-46.681432924687!3d-23.5581785788071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57a4a3bc5d5d%3A0x5b5d43d71c14e52!2sRua%20Professor%20Filadelfo%20Azevedo%2C%20200%20-%20Vila%20Nova%20Concei%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004512-000!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full aspect-square"
        />
      </div>
    );
  }