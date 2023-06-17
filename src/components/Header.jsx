import { lazy, useState} from "react";
// import Navegation from "./Navegation";

const Navegation = lazy(()=> import('./Navegation')) //IMPORTAR COMPONENTE CON LAZY LOAD


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
                    <picture><img src="../../public/menu.png" alt="menu" loading="lazy" /></picture>
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
                        <source srcSet="../../public/compressed/header_img2.webp" type="image/webp" />
                        <img src="../../public/compressed/header_img2.png" alt="imagen header" loading="lazy" />
                    </picture>
                </div>






            </div>
        </header>
    )

}