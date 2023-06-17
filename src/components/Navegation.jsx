import {Link} from  'react-scroll'; 
import {useTranslation} from "react-i18next" //IMPORTO FUNCION USE TRANSLATION 
export default function Navegation({navIsOpen}) {
  const[t, i18n] = useTranslation("global");
    return (

        <div className={`containerg-navegation ${!navIsOpen ? 'disnone' : 'disvisible'}`}>
                <div className="container-navegation">
            <nav className="nav">
              
              <ul>
                <li><Link activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={500} >{t("nav.home")}</Link> </li>
                <li><Link activeClass="active" to="container-about" spy={true} smooth={true} offset={50} duration={500} >{t("nav.about")}</Link></li>
                <li><Link activeClass="active" to="labor" spy={true} smooth={true} offset={50} duration={500} >{t("nav.job")}</Link></li>
                <li><Link activeClass="active" to="noticias" spy={true} smooth={true} offset={50} duration={500} >{t("nav.news")}</Link></li>
                <li><Link activeClass="active" to="ayuda" spy={true} smooth={true} offset={50} duration={500}>{t("nav.help")}</Link></li>
                <li><Link activeClass="active" to="donar" spy={true} smooth={true} offset={50} duration={500}>{t("nav.donate")}</Link></li>
              </ul>

              <div className="container-languajes">
              
              <p className='español' onClick={()=>i18n.changeLanguage("es")}>ES</p> {/*CUANDO TOCO ESPAÑOL, LLAMO AL OBJETO i18n y a la funcion cambiar lenguaje y le especifico español. Le pasamos "es" y "EN" ya que hace referencia al resources del main.jsx cuando inicializamos i18next */}
              <p>/</p>
              <p className='english' onClick={()=>i18n.changeLanguage("en")}>EN</p>
          </div>

            </nav>


        
        </div>


       
        </div>
        

    )
}