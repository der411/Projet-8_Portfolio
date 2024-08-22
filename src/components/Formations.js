
function Formations({ formations }) {
  return (
    <section
      id="formations"
      className="p-5 m-5 mb-20 bg-card dark:bg-custom-gray border dark:dark:border-border-card rounded-lg"
    >
      <h2 className="text-center text-black dark:text-white text-2xl mb-10">
      <i className="fa-solid fa-school-circle-check mr-2 text-black dark:text-white" />
        Mes Formations</h2>
      <div className="flex flex-wrap justify-around">
        {formations.map((formation) => (
          <div key={formation.id} className="m-2 flex flex-col items-center">
            <div className="m-5 w-64 flex flex-col items-start text-2xs md:text-xs">
              <h3 className="text-lg font-bold">{formation.titre}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {formation.etablissement} - {formation.dates.debut} à {formation.dates.fin}
              </p>
              <p className="text-sm">{formation.description}</p>
              <p className={`text-sm mt-2 font-bold ${formation.status === "En cours" ? "text-yellow-700 dark:text-yellow-500": "text-green-700 dark:text-green-500"}`}>
                {formation.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Formations;
