function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Now</h2>

          <p className="text-muted">
            You can use the following channels to contact me.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="contact-card p-4 bg-white shadow-sm rounded-4 text-center h-100">
              <h5 className="fw-bold">Email</h5>

              <p className="text-muted mb-3">You can email me directly</p>

              <a href="mailto:hasanctdev@outlook.com" className="btn btn-dark">
                Send Email
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card p-4 bg-white shadow-sm rounded-4 text-center h-100">
              <h5 className="fw-bold">GitHub</h5>

              <p className="text-muted mb-3">
                You can check out all my projects on GitHub
              </p>

              <a
                href="https://github.com/HCTORER/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                My GitHub Profile
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card p-4 bg-white shadow-sm rounded-4 text-center h-100">
              <h5 className="fw-bold">LinkedIn</h5>

              <p className="text-muted mb-3">
                You can find my professional profile on LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/hasan-cebrail-t%C3%B6rer-4218123b2/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
