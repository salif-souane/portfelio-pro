import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // ⚡️ Envoi au propriétaire (toi)
    emailjs
      .sendForm(
        "service_n20jgn5",   // 👉 remplace par ton service_id
        "template_ychdg1q", // 👉 remplace par ton template_id admin
        form,
        "jP9kHgJ5umEUtyK5R"  // 👉 remplace par ta clé publique
      )
      .then(
        () => {
          console.log("Mail envoyé à l’admin ✅");
        },
        (error) => {
          console.error("Erreur admin ❌", error);
        }
      );

    // ⚡️ Envoi de confirmation au visiteur
    emailjs
      .sendForm(
        "service_n20jgn5",    // même service
        "template_tpbex9b",  // 👉 remplace par ton template_id user
        form,
        "jP9kHgJ5umEUtyK5R"
      )
      .then(
        () => {
          alert("Merci ! Votre message a été envoyé ✅");
        },
        (error) => {
          console.error("Erreur confirmation ❌", error);
          alert("Une erreur est survenue, veuillez réessayer.");
        }
      );

    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden pt-16">
      {/* Contact Section */}
      <section className="relative z-10 w-full py-20 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contactez-moi
            </h2>
            <p className="text-xl text-gray-300">
              Prêt à donner vie à votre projet ? Discutons-en !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Nom</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              > 
                <Send size={20} />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
