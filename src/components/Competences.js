import RatingStars from './RatingStars';

function Competences( { competences } ) {
  return (
    <section
      id="competences"
      className="p-5 m-5 mb-20 bg-card dark:bg-custom-gray border dark:dark:border-border-card rounded-b-lg"
    >
      <h2 className="text-center text-black dark:text-white text-2xl mb-5">Mes compétences</h2>
      <div className="text-center text-black dark:text-white my-12 leading-7 bg-vscode">
        <i className="fa fa-laptop-code text-5xl mb-4"></i>
        <p>Développement d'applications web front-end et back-end.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {competences.map((competence) => (
          <div key={competence.id} className="m-2 text-center">
            <img
              src={competence.icon}
              alt={`${competence.name} icon`}
              className="m-5 w-12 h-12 object-contain"
            />
            <RatingStars rating={competence.rating} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;
