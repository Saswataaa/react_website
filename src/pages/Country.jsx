import { useState, useTransition } from "react"
import { useEffect } from "react"
import { getCountries } from "../api/PostApi"
import { Loader } from "../components/ui/Loader"
import { CountryCard } from "../components/ui/CountryCard"
import { SearchFilter } from "../components/ui/SearchFilter"

export const Country = ()=>{
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState('all')


useEffect(()=>{
    startTransition(async()=>{

        const response = await getCountries()
        setCountries(response.data)
    })
},[])

const searchCountry = (country)=>{
if(search)
    return country.name.common.toLowerCase().includes(search.toLowerCase())
return country
}

const searchRegion = (country)=>{
    if(filter==='all') return country
    return (country.region===filter)
}

const filterCountries = countries.filter((x)=>searchCountry(x) && searchRegion(x))

if(isPending)
    return <Loader/>

    return (
        <section className="country-section">

            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((currentCountry,index)=>{
                        return <CountryCard currentCountry={currentCountry} key={index}/>
                    })
                }
            </ul>
        </section>
    )
}