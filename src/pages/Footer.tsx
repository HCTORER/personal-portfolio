function Footer() {
  return (
    <footer className="py-4 bg-dark text-light text-center">
      <div className="container">
        <p className="mb-1 fw-semibold">Hasan Cebrail Törer</p>

        <p className="mb-0 small">
          © {new Date().getFullYear()} Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
