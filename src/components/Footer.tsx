function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mon Nom. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/TON_USER" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/TON_USER" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:ton.email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
