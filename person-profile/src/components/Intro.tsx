import React from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { BsDownload } from "react-icons/bs";

const Intro: React.FC = () => {
  const fadeIn = useScrollFadeIn();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      className="container text-center"
    >
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3 p-5" {...fadeIn}>
          <h1 className="display-5 text-primary poppins-medium">
            Hi, I'm Allan{" "}
          </h1>
          <p className="lead poppins-light ">
            I'm a Full-Stack Developer passionate about clean code and beautiful
            UI. Currently studying data modeling, OOP and Docker — aiming for a
            future in Cybersecurity.
          </p>
          <div className="d-flex gap-3">
            <a
              href="./curriculo.pdf"
              download
              className="btn btn-outline-light w-100 poppins-light d-flex align-items-center justify-content-center gap-2"
            >
              Get My Resume
              <BsDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
