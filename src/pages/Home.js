import React, { Suspense, lazy } from 'react';
import projectsData from '../data/projectsData.json';
import competencesData from '../data/competencesData.json';
import competencesLearning from '../data/competencesLearningData.json';

// Utilisation de React.lazy pour charger dynamiquement les composants lourds
const Banner = lazy(() => import('../components/Banner'));
const Nav = lazy(() => import('../components/Nav'));
const Project = lazy(() => import('../components/Projects'));
const Competences = lazy(() => import('../components/Competences'));
const Footer = lazy(() => import('../components/Footer'));
const ContactForm = lazy(() => import('../components/ContactForm'));

function Home() {
  return (
    <div>
      <header>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Banner />
        </Suspense>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Project projects={projectsData} />
          <Competences competences={competencesData} competencesLearning={competencesLearning} />
        </Suspense>
      </main>
      <footer>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
          <Footer />
        </Suspense>
      </footer>
    </div>
  );
}

export default Home;