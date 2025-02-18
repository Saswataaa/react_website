import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage =()=>{

    const error = useRouteError()
    return(
<div>

    <h1>Error: Please refer below</h1>
    {error && <p>{error.data}</p>}
    <NavLink to={"/"}>
    <button>
    Go home!
    </button>
    </NavLink>
</div>
    )
    
}