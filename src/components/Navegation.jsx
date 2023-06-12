import {Link} from  'react-scroll'; 
export default function Navegation() {
    return (

        <div className="containerg-navegation">
                <div className="container-navegation">
            <nav className="nav">
              
              <ul>
                <li><Link activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={500} >Inicio</Link> </li>
                <li><Link activeClass="active" to="container-about" spy={true} smooth={true} offset={50} duration={500} >Sobre nosotros</Link></li>
                <li><Link activeClass="active" to="labor" spy={true} smooth={true} offset={50} duration={500} >Nuestra labor</Link></li>
                <li><Link activeClass="active" to="noticias" spy={true} smooth={true} offset={50} duration={500} >Ultimas noticias</Link></li>
                <li><Link activeClass="active" to="ayuda" spy={true} smooth={true} offset={50} duration={500}>Como ayudar</Link></li>
                <li><Link activeClass="active" to="donar" spy={true} smooth={true} offset={50} duration={500}>Dona ahora</Link></li>
              </ul>

            </nav>
        </div>
        </div>
        

    )
}