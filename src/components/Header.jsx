import {  useState} from "react";
import menu from '../imagenes/menu.png'
import header_img2w from '../imagenes/compressed/header_img2w.webp'
import header_img2 from '../imagenes/header_img2.jpg'
// import Navegation from "./Navegation";

import Navegation from './Navegation'


export default function Header() {

    const [navIsOpen, setNavIsOpen] = useState(false)

    function handleNav(){
        navIsOpen ? setNavIsOpen(false) : setNavIsOpen(true);
        return;
    }
    return (
        <header className="header">
            <div className="containerg-header-img">

                <div className="menu" onClick={handleNav}>
                    <picture><img src={menu} alt="menu" loading="lazy" /></picture>
                </div>
                <div className="containerg-header">

                    <Navegation navIsOpen={navIsOpen} />
                    <div className="container-header">
                        <div className="container-title">
                            <h1><span>Pacific</span> <span>Ocean</span></h1>
                        </div>



                    </div>

                </div>


                <div className="container-img-header">
                    <picture>
                        <source srcSet={header_img2w} type="image/webp" />
                        <img src={header_img2} alt="imagen header" loading="lazy" />
                    </picture>
                </div>






            </div>
        </header>
    )

}