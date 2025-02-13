import { Container } from "fhf-react";
import React, { useState } from "react";
import Expe from "./components/Expe";
import cpgIcon from "../../assets/CPG_logo.webp";
import telecomIcon from "../../assets/tunisie-telecom.webp";

function Experience() {
  const [expNumber, setExpNumber] = useState(0);
  return (
    <section id="experience">
      <Container>
        <Expe
          expNumber={expNumber}
          setExpNumber={setExpNumber}
          iconUrl={cpgIcon}
          jobTitle="intern fullstack developer"
          fromWhat="jan 2023"
          toWhat="fev 2023"
          jobDescription={
            "My CPG internship wasn't just a job; it was a crash course in consumer goods. I witnessed the fascinating journey of products, from spotting trends to seeing them on shelves.  This hands-on experience exposed me to various departments, ignited my passion for the industry, and equipped me with valuable skills to launch a successful CPG intern career."
          }
        />
        <br />
        <br />
        <br />
        <Expe
          expNumber={expNumber}
          setExpNumber={setExpNumber}
          iconUrl={telecomIcon}
          jobTitle="intern fullstack developer"
          fromWhat="jan 2025"
          toWhat="fev 2025"
          jobDescription={
            "During my internship at Tunisie Telecom, I worked as a full-stack developer, building an HPSM ticketing website. This experience allowed me to dive deep into both frontend and backend development, optimizing workflows and enhancing user experience. I gained valuable insights into telecom operations, problem-solving in real-world scenarios, and developing scalable solutions. It was a hands-on journey that strengthened my technical expertise and adaptability in a fast-paced industry."
          }
        />
      </Container>
    </section>
  );
}

export default Experience;
