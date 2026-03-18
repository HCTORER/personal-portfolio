function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-muted">My software journey and goals</p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">
              Passionate Software Developer focused on building scalable and
              real-world applications.
            </h4>

            <p className="text-muted">
              I am constantly improving myself in the field of software and
              producing projects with modern web technologies. I focus on
              developing full-stack applications, especially using React,
              TypeScript, and ASP.NET Core.
            </p>

            <p className="text-muted">
              I aim to enhance my GitHub portfolio through the development of
              high-quality, real-world applications and establish myself as a
              professional full-stack developer.
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
                  <h5 className="fw-bold">My Goal</h5>
                  <p className="mb-0 small">
                    Developing scalable, high-quality software solutions
                  </p>
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
