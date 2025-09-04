function Contact() {
  return (
    <section className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Votre message"
          className="w-full p-3 border rounded-lg"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
