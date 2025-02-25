// eslint-disable-next-line react/prop-types
export const SearchFilter = ({search, setSearch,filter, setFilter, countries,setCountries})=>{

    const onHandleChange = (event) =>{
        event.preventDefault()
        setSearch(event.target.value)
    }

    const onHandleSelection = (selection) =>{
        selection.preventDefault()
        setFilter(selection.target.value)
    }

    const sortCountries = (mode)=>{
        const sortedCountries = [...countries].sort((a,b)=>{
            return mode === 'asc'?
                a.name.common.localeCompare(b.name.common)
               :b.name.common.localeCompare(a.name.common)
            
        })
        setCountries(sortedCountries)
    }
return (
    <section className="section-searchFilter container">
<input type="text" placeholder="Search" value={search} onChange={onHandleChange} style={{padding:"0.8rem 2.4rem"}} />

<div>
    <button onClick={()=>{sortCountries('asc')}}>Asc</button>
</div>
<div>
    <button onClick={()=>{sortCountries('desc')}}>Desc</button>
</div>

<div>
    <select className="select-section" value={filter} onChange={onHandleSelection}>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
</div>
    </section>
)
}