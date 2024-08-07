import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Project from "../components/Projects";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <div>
      <header>
        <Nav />
        <Header />
      </header>
      <main>
        <About />
        <Project/>
        <Services/>
      </main>
      <footer>
        <ContactForm/>
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;
