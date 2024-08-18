import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Project from "../components/Projects";
import Competences from "../components/Competences";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import projectsData from "../data/projectsData.json";
import competencesData from "../data/competencesData.json";


function Home() {
  return (
    <div>
      <header>
        <Nav />
        <Banner />
      </header>
      <main>
        <Project projects={projectsData} />
        <Competences competences={competencesData}  />
      </main>
      <footer>
        <ContactForm />
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
