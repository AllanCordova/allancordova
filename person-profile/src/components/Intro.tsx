import React from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

const Intro: React.FC = () => {
  const fadeIn = useScrollFadeIn();

  return (
    <section className="container py-5">
      <div {...fadeIn}>
        <h1 className="display-5 text-primary">Hi, I'm Allan </h1>
        <p className="lead">
          I'm a Full-Stack Developer passionate about clean code and beautiful
          UI. Currently studying data modeling, OOP and Docker — aiming for a
          future in Cybersecurity.
        </p>
      </div>
    </section>
  );
};

export default Intro;
