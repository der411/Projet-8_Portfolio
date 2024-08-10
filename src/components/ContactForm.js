import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const apiKey = process.env.REACT_APP_W3F_API_KEY;

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: apiKey,
        ...formData,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setStatus('Succès ! Votre message a été envoyé.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } else {
      setStatus("Oups ! Un problème s'est produit. Veuillez réessayer.");
    }
  };

  return (
    <div id="contact" className="relative">
      {isOpen && (
        <div className="absolute right-5 top-0 transform -translate-y-full mb-2 w-72 bg-footer dark:bg-border-card border rounded-md shadow-lg z-20">
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <label htmlFor="prenom" className="block text-md font-medium dark:text-white text-gray-700">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-white dark:bg-gray-300 border-gray-300 shadow-sm lg:text-lg text-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="nom" className="block text-md font-medium dark:text-white text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-white dark:bg-gray-300 border-gray-300 shadow-sm lg:text-lg text-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium dark:text-white text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-white dark:bg-gray-300 border-gray-300 shadow-sm lg:text-lg text-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-md font-medium dark:text-white text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md bg-white dark:bg-gray-300 border-gray-300 shadow-sm lg:text-lg text-gray-700"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-custom-blue to-custom-blue-dark py-2 px-4 text-white shadow-sm hover:from-custom-blue-dark hover:to-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
              >
              Envoyer
            </button>
            {status && <p className="mt-2 text-center text-sm text-gray-600">{status}</p>}
          </form>
        </div>
      )}

<button
  onClick={toggleMenu}
  className="flex items-center justify-center p-4 rounded-b-lg bg-white font-bold text-black absolute top-0 right-5 z-30"
  aria-label={isOpen ? "Fermer le formulaire de contact" : "Ouvrir le formulaire de contact"}
>
  {isOpen ? (
    <XIcon className="w-6 h-6" />
  ) : (
    <>
      <span className="hidden md:inline"><i className="fas fa-envelope"></i> Contactez-moi !</span>
      <i className="fas fa-envelope md:hidden"></i>
    </>
  )}
</button>
    </div>
  );
}

