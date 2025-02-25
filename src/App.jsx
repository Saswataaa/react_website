
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Country} from './pages/Country'
import {Contact} from './pages/Contact'
import { AppLayout  } from './components/layout/AppLayout'
import { ErrorPage } from './components/ui/ErrorPage'
import { CountryDetails } from './components/layout/CountryDetails'
import './App.css'

const App = ()=>{

const router = createBrowserRouter([

  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"country",
        element: <Country/>
      },
      {
        path:"country/:id",
        element: <CountryDetails/>
      },
      {
        path:"Contact",
        element: <Contact/>
      }
    ]
  }
  
])

  return  <RouterProvider router={router}/>
}
export default App
