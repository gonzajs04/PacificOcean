import {Link} from  'react-scroll'; 
import {useTranslation} from 'react-i18next';
import {lazy} from 'react';

import turtle_donate from '../imagenes/turtle-donate.jpg';
import turtle_donatew from '../imagenes/compressed/turtle-donatew.webp';

export default function Ayuda(){
    const[t] = useTranslation("global")
    return(
    
        <section className="ayuda">
            <div className="containerg-ayuda">
                <div className="container-ayuda">
                    <div className="container-ayuda-img">
                        <source srcSet={turtle_donate} type='image/webp' />
                        <img src={turtle_donatew} alt="Imagen labor" />
                    </div>

                    <div className="container-ayuda-text">
                        <h2>{t("help.helptitle")}</h2>
                        <div className="ayuda-desc">
                            <p>{t("help.helptext")}</p>
                        </div>
                        <div className="ayuda-donar">
                            <p> <Link activeClass="active" to="donar" spy={true} smooth={true} offset={50} duration={500}>{t("donate.btndonate")}</Link></p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}