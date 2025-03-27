import countryFacts from "../api/countryData.json";

function About() {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        We're proud of
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((i) => {
          return (
            <div className="card" key={i.id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{i.countryName}</p>
                <p>
                  <span className="card-description">Capital: </span>
                  {i.capital}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {i.population}
                </p>
                <p>
                  <span className="card-description">Interesting Facts: </span>
                  {i.interestingFact}
                </p>
              </div>
            </div>
          );
        })}
        {/* <div className="card">
          <div className="container-card bg-blue-box">
            <p className="card-title">India</p>
            <p>
              <span className="card-description">Capital:</span>
              Delhi
            </p>
            <p>
              <span className="card-description">Population:</span>
              456
            </p>
            <p>
              <span className="card-description">Interesting Facts:</span>
              India
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
