import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Project from "../components/Projects";
import Competences from "../components/Competences";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <div>
      <header>
        <Nav />
        <Banner />
      </header>
      <main>
        <Project />
        <Competences />
      </main>
      <footer>
        <ContactForm />
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
