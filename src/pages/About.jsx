import countryFacts from  "../api/CountryData.json"

export const About = ()=>{
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the interesting facts 
                <br />
                we are proud of
            </h2>
            <div className="gradient-cards">
                    {
                        countryFacts.map((countryobj)=>{
                            return(
                                <>
                                <div className="card " key={countryobj.id}>
                                <div className="container-card bg-blue-box">
                        <p className="card-title">{countryobj.name}</p>
                        <p>
                            <span className="card-description">Capital:</span>
                           {countryobj.capital}
                        </p>
                        <p>
                            <span className="card-description">Population:</span>
                            {countryobj.population}
                        </p>
                        <p>
                            <span className="card-description">Fact:</span>
                            {countryobj.interestingFact}
                        </p>
                    </div>
                    </div >
                                </>
                            )

                        })
                    }
                    
            </div>
        </section>
    )
}