function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-700 mb-8">
          ¿Te gustaría trabajar conmigo? ¡Enviame un mensaje!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:agusmalugani97@gmail.com"
            className="text-white bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Enviar Email
          </a>
          <a
            href="https://wa.me/543413857748"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
