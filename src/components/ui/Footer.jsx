import footerData from '../../api/FooterData.json'
import {MapPin} from '@phosphor-icons/react'
import { Phone } from '@phosphor-icons/react'
import { EnvelopeSimple } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export const Footer = ()=>{

    const icons = {
        MapPin:<MapPin size={32} />,
        Phone:<Phone size={32} />,
        EnvelopeSimple:<EnvelopeSimple size={32} />
    }
    return (
        <footer className='footer-section'>
            <div className='container grid grid-three-cols'>
                {
                    footerData.map((data,index)=>{
                        return (
                            <div className='footer-contact' key={index}>
                                <div className='icon'>{icons[data.icon]}</div>
                                <div className='footer-contact-text'>
                                    <p>{data.title}</p>
                                    <p>{data.details}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='copyright-area'>
                <div className='container'>
                    <div className='grid grid-two-cols'>
                        <div className='copyright-text'> 
                            <p>
                                Copyright & copy; 2025, All Rights Reserved
                                <NavLink to={"https://fastidious-cranachan-5245b3.netlify.app/"} target='_blank'>
                                    Hi fam! 
                                </NavLink>
                            </p>
                        </div>
                        <div className='footer-menu'>
                            <ul>
                                <li>
                                    <NavLink to={"/"} target='_blank'>
                                     Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"https://github.com/Saswataaa"} target='_blank'>
                                        Social
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"https://github.com/Saswataaa/react_website"} target='_blank'>
                                        Source Code
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"} target='_blank'>
                                        Contact
                                    </NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}