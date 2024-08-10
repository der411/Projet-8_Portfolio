import RatingStars from './RatingStars';
import competencesData from '../data/competencesData.json';

function Services() {
  return (
    <section id="services" className="p-5 m-5 mb-20 bg-card dark:bg-custom-gray border dark:dark:border-border-card  rounded-b-lg">
      <h2 className="text-center text-white text-2xl mb-5">Mes services</h2>
      <div className="text-center text-white my-12 leading-7">
        <i className="fa fa-laptop-code text-5xl mb-4"></i>
        <p>Développement d'applications web front-end et back-end.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {competencesData.map((service) => (
          <div key={service.id} className="m-2 text-center">
            <img 
              src={service.icon} 
              alt={`${service.name} icon`} 
              className="m-5 w-12 h-12 object-contain"
            />
            <RatingStars rating={service.rating} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
