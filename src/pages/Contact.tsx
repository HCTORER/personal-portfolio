function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">İletişim</h2>

          <p className="text-muted">
            Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="contact-card p-4 bg-white shadow-sm rounded-4 text-center h-100">
              <h5 className="fw-bold">Email</h5>

              <p className="text-muted mb-3">
                Bana doğrudan email gönderebilirsiniz
              </p>

              <a href="mailto:hasanctdev@outlook.com" className="btn btn-dark">
                Email Gönder
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card p-4 bg-white shadow-sm rounded-4 text-center h-100">
              <h5 className="fw-bold">GitHub</h5>

              <p className="text-muted mb-3">
                Tüm projelerimi GitHub üzerinden inceleyebilirsiniz
              </p>

              <a
                href="https://github.com/HCTORER/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                GitHub Profilim
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card p-4 bg-white shadow-sm rounded-4 text-center h-100">
              <h5 className="fw-bold">LinkedIn</h5>

              <p className="text-muted mb-3">
                Profesyonel profilime LinkedIn üzerinden ulaşabilirsiniz
              </p>

              <a
                href="https://www.linkedin.com/in/hasan-cebrail-t%C3%B6rer-4218123b2/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                LinkedIn Profilim
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
