import Banner from "../components/Banner";
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
        <Banner />
      </header>
      <main>
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
