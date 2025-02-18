import {Header} from '../ui/Header'
import {Footer} from '../ui/Footer'
import { Outlet } from 'react-router-dom'

export const AppLayout = ()=>{
    return (
         <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    )
}