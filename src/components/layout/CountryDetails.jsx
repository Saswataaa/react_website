import { useParams } from "react-router-dom"
import { useState, useTransition } from "react"
import { Loader } from "../../components/ui/Loader"
import { getCountryByName } from "../../api/PostApi"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"

export const CountryDetails =()=>{
    const params = useParams()

     const [isPending, startTransition] = useTransition()
        const [country, setCountries] = useState()
    
    useEffect(()=>{
        startTransition(async()=>{
            const response = await getCountryByName(params.id)
            if(response.status === 200)
            {
                setCountries(response.data[0])
            }
        })
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    if(isPending)
        return <Loader/>
    
    return (
        <section className="card country-detail-card country-details-card">
            <div className="container-card bg-white-box">
                {
                    country &&(

                    <div className="country-image grid grid-two-cols">
                        <img src={country.flags.svg} alt={country.flags.alt} className="flag" />
                        <div className="country-content"> 
                            <p className="card-title">{country.name.official}</p>
                            <div className="infoContainer">
                                <p>
                                    <span className="card-description">Native names:</span>
                                    {
                                        Object.keys(country.name.nativeName).map((key)=>{
                                            return country.name.nativeName[key].common
                                        }).join(',')
                                    }
                                   
                                </p>
                                <p >
                                    <span className="card-description">Population:
                                    </span>
                                        {country.population.toLocaleString()}
                                </p>
                                <p>
                                   <span className="card-description"> Region:</span>
                                   {country.region}
                                </p>
                                 <p>
                                    <span className="card-description"> Sub Region:</span>
                                    {country.subregion}
                                 </p>
                                 <p>
                                    <span className="card-description"> Capital:</span>
                                    {country.capital}
                                 </p>
                                 <p>
                                    <span className="card-description">Top Level Domain:</span>
                                    {country.tld[0]}
                                 </p>
                                 <p>
                                    <span className="card-description"> Currencies: </span>
                                    {Object.keys(country.currencies)
                                        .map((curElem) => country.currencies[curElem].name)
                                        .join(", ")}
                                </p>
                                <p>
                                    <span className="card-description">Languages: </span>
                                    {Object.keys(country.languages)
                                        .map((key) => country.languages[key])
                                        .join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                    )
                }
                <div className="country-card-backBtn">
                    <NavLink to="/country" className="backBtn">
                        <button>Go Back</button>
                    </NavLink>
               </div>
            </div>
        </section>
    )
}