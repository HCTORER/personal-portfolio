function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Hakkımda</h2>
          <p className="text-muted">Yazılım yolculuğum ve hedeflerim</p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">
              Yazılım geliştirici olma yolundayım
            </h4>

            <p className="text-muted">
              Yazılım alanında kendimi sürekli geliştiriyor, modern web
              teknolojileri ile projeler üretiyorum. Özellikle React, TypeScript
              ve ASP.NET Core kullanarak full stack uygulamalar geliştirmeye
              odaklanıyorum.
            </p>

            <p className="text-muted">
              Amacım güçlü projeler geliştirerek GitHub portföyümü büyütmek ve
              profesyonel bir full stack developer olarak kariyerime başlamak.
            </p>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <div className="row g-3">
              <div className="col-6">
                <div className="p-4 shadow-sm rounded bg-light text-center">
                  <h5 className="fw-bold">Frontend</h5>
                  <p className="mb-0 small">React, TypeScript, Bootstrap</p>
                </div>
              </div>

              <div className="col-6">
                <div className="p-4 shadow-sm rounded bg-light text-center">
                  <h5 className="fw-bold">Backend</h5>
                  <p className="mb-0 small">ASP.NET Core, Web API</p>
                </div>
              </div>

              <div className="col-6">
                <div className="p-4 shadow-sm rounded bg-light text-center">
                  <h5 className="fw-bold">Database</h5>
                  <p className="mb-0 small">SQL, Entity Framework</p>
                </div>
              </div>

              <div className="col-6">
                <div className="p-4 shadow-sm rounded bg-light text-center">
                  <h5 className="fw-bold">Hedef</h5>
                  <p className="mb-0 small">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
