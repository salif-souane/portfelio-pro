function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white px-4">
      <section className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
          />
          <textarea
            placeholder="Votre message"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none resize-none"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
