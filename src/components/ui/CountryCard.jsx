import { NavLink } from "react-router-dom"

/* eslint-disable react/prop-types */
export const CountryCard =({currentCountry})=>{
return (
    <li className="country-card card" key={currentCountry.id}>
        <div className="container-card bg-white-box">
            <img src={currentCountry.flags.svg} alt={currentCountry.flags.alt} />
            <div className="countryInfo">
                <p className="card-title">{currentCountry.name.common.length>10?currentCountry.name.common.slice(0,10)+"...":currentCountry.name.common}</p>
                <p >Population:
                    <span className="card-description">
                    {currentCountry.population.toLocaleString()}
                    </span>
                </p>
                <p >Region:
                    <span className="card-description">
                    {currentCountry.region}
                    </span>
                </p>
                <p >Capital: 
                    <span className="card-description">
                    {currentCountry.capital[0]}
                    </span>
                </p>
                <NavLink to={`/country/${currentCountry.name.common}`}>
                    <button>Read More</button>
                </NavLink>
            </div>
        </div>
        </li>
)
}