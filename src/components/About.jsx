import { useState } from "react"
import pez from "/pez.png"

export default function About() {

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
                        <img src={pez} loading="lazy" alt="imagen pez" />
                    </div>

                </div>


                <div className={`about-text`}>
                    <h2>Sobre nosotros</h2>
                    <p className={`about-desc ${isVer ? 'mh100' : ''}`}>¡Descubre nuestra organización: protegiendo los océanos y sus habitantes desde 2000!

                        En un mundo donde la vida marina enfrenta numerosas amenazas, nuestra organización ha estado trabajando arduamente desde el 6 de octubre de 2000 para proteger y preservar a los animales del océano. Nos enorgullece ser una voz para aquellos seres maravillosos que no pueden hablar por sí mismos.

                        Nuestra misión principal es evitar la caza indiscriminada y proteger a las especies marinas en peligro de extinción. Nos preocupamos profundamente por la conservación y la sostenibilidad de los océanos, reconociendo que son fundamentales para el equilibrio de nuestro planeta y para el bienestar de las generaciones futuras.

                        Nuestro fundador, Gonzalo Hernández, un apasionado conservacionista proveniente de Argentina, ha sido un pilar fundamental en el establecimiento y crecimiento de nuestra organización. Su dedicación incansable y su profundo amor por los océanos han sido la inspiración detrás de nuestros esfuerzos para proteger a los animales marinos.

                        A lo largo de los años, hemos llevado a cabo numerosos proyectos y campañas para concienciar sobre la importancia de la conservación marina. Trabajamos en colaboración con científicos, expertos en vida marina y otras organizaciones afines para llevar a cabo investigaciones, realizar rescates y promover políticas que protejan a los animales y sus hábitats.

                        En nuestra página web, encontrarás información detallada sobre nuestras actividades, logros y formas de involucrarte. Te invitamos a unirte a nuestra causa, ya sea a través de donaciones, voluntariado o simplemente difundiendo nuestro mensaje. Juntos, podemos marcar la diferencia y garantizar un futuro más seguro y próspero para los animales del océano.

                        ¡Gracias por tu apoyo y por unirte a nuestra lucha para proteger a los animales marinos!</p>

           
                </div>
                <p className="ver-mas isVisible" onClick={handleVerMas}>{isVer ? 'Ver menos' : 'Ver mas'}</p>
            </div>
        </>
    )
}