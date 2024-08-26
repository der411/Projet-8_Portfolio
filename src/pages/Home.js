import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Competences from "../components/Competences";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import projectsData from "../data/projectsData.json";
import competencesData from "../data/competencesData.json";
import formationsData from "../data/formationsData.json";
import competencesLearning from "../data/competencesLearningData.json";
import Formations from "../components/Formations";


function Home() {
  return (
    <div>
      <header>
        <Nav />
        <Banner />
      </header>
      <main>
        <Projects projects={projectsData} />
        <Competences competences={competencesData} competencesLearning={competencesLearning} />
        <Formations formations={formationsData}/>
      </main>
      <footer>
        <ContactForm />
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
