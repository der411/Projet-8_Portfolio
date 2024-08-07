import React from 'react';

function About() {
  return (
    <section id="about" className="bg-border-card dark:bg-custom-gray border border-border-card rounded-lg p-5 mx-5 my-24 text-white shadow-md flex flex-col items-start max-w-lg">
      <h2 className="mb-2 text-2xl font-semibold">À propos</h2>
      <p className="text-base leading-6">
        <i className="fa-solid fa-quote-left text-orange-600 text-3xl mr-2"></i>
        Je suis un développeur web débutant passionné par la création de contenus web modernes et interactifs depuis un an. Grâce à mes formations, j’ai acquis des compétences solides en HTML, CSS, JavaScript, ainsi qu'une expérience pratique avec des frameworks tels que React, Angular, Express, et Spring Boot. J'aime travailler sur des projets front-end et back-end, en utilisant des méthodologies agiles comme Scrum et Kanban. Mon objectif est de continuer à évoluer dans ce domaine, en contribuant à des projets innovants et en approfondissant mes connaissances en technologies web.
        <i className="fa-solid fa-quote-right text-orange-600 text-3xl ml-2"></i>
      </p>
    </section>
  );
}

export default About;


