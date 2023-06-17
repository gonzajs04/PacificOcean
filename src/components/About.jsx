import { useState } from "react"
import { useTranslation } from "react-i18next";
import pez from '../imagenes/compressed/pezw.webp';
import pezw from '../imagenes/pez.png'

import aboutimgw from '../imagenes/compressed/aboutimgw.webp' ;
import aboutimg from '../imagenes/aboutimg.jpg';

export default function About() {
    const[t] = useTranslation("global") //ESPECIFICO NOMBRE DEL FICHERO
    const [isVer,setIsVer] = useState(false)
    function handleVerMas(e){
        !isVer ? setIsVer(true) : setIsVer(false);
    }

    return (
        <>
            <div className="container-about">
                <div className="container-img-about">
                    <div className="burbuja burbuja1"></div>
                    <div className="burbuja burbuja2"></div>
                    <div className="burbuja burbuja3"></div>
                    <div className="burbuja burbuja4"></div>
                    <div className="burbuja burbuja6"></div>
                    <div className="burbuja burbuja7"></div>
                    <div className="burbuja burbuja8"></div>
                    <div className="burbuja burbuja9"></div>
                    <div className="burbuja burbuja10"></div>
                    <div className="burbuja burbuja11"></div>
                    <div className="burbuja burbuja12"></div>
                    <div className="burbuja burbuja13"></div>
                    <div className="container-pez">
                        <picture>

                            <source srcSet={pezw} type="image/webp" />
                            <img src={pez} loading="lazy" alt="imagen pez" />

                        </picture>
                    </div>

                    <div className="img-about">
                            <picture>
                                    <source srcSet={aboutimgw} type="image/webp"/>
                                    <img src={aboutimg} loading="lazy" alt="imagen about"/>
                            </picture>
                    </div>

                </div>


                <div className={`about-text`}>
                    <h2>{t("aboutus.abouttitle")}</h2>
                    <p className={`about-desc ${isVer ? 'mh100' : ''}`}>{t("aboutus.abouttext")}</p>

           
                </div>
                <p className="ver-mas isVisible" onClick={handleVerMas}>{isVer ? 'Ver menos' : 'Ver mas'}</p>
            </div>
        </>
    )
}