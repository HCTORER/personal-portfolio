import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* SOL TARAF */}
          <div className="col-lg-6 hero-text">
            <span className="text-primary fw-bold">
              Frontend & Full Stack Developer Adayı
            </span>

            <h1 className="display-4 fw-bold mt-3">
              Merhaba, ben Hasan Cebrail Törer
            </h1>

            <p className="lead text-muted mt-3">
              React, TypeScript, ASP.NET Core ve SQL teknolojileriyle gerçek
              projeler geliştirerek full stack developer olma yolunda
              ilerliyorum.
            </p>

            <div className="mt-4 d-flex gap-3 flex-wrap">
              <a href="#projects" className="btn btn-dark btn-lg">
                Projelerimi Gör
              </a>

              <a href="#contact" className="btn btn-outline-dark btn-lg">
                Bana Ulaş
              </a>
              <a href="/cv.pdf" download className="btn btn-primary btn-lg">
                CV İndir
              </a>
            </div>

            {/* Sosyal linkler */}
            <div className="mt-4 d-flex gap-3 align-items-center">
              <a
                href="https://github.com/HCTORER"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/hasan-cebrail-t%C3%B6rer-4218123b2/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaLinkedin size={28} />
              </a>

              <a href="mailto:hasanctdev@outlook.com" className="social-icon">
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>

          {/* SAĞ TARAF */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0 hero-visual">
            {/* Profil Foto */}
            <img
              src="\profile.jpg"
              alt="Hasan Cebrail Törer"
              className="hero-image mb-4"
            />

            {/* Kariyer Hedefi */}
            <div className="p-4 bg-white shadow rounded-4 text-center">
              <h5 className="fw-bold">Kariyer Hedefim</h5>

              <p className="text-muted mb-0 mt-2">
                Güçlü projeler geliştirip GitHub portföyümü büyüterek
                profesyonel bir full stack developer olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
