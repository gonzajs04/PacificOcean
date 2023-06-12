import {Link} from  'react-scroll'; 

export default function Ayuda(){
    return(
    
        <section className="ayuda">
            <div className="containerg-ayuda">
                <div className="container-ayuda">
                    <div className="container-ayuda-img">

                    </div>

                    <div className="container-ayuda-text">
                        <h2>Actúa</h2>
                        <div className="ayuda-desc">
                            <p>Los animales te necesitan, participa, alza tu mano y ayuda a quienes mas te necesitan. Hazte voluntario o donante y otorga a cada animal una oportunidad de vida mas justa</p>
                        </div>
                        <div className="ayuda-donar">
                            <p> <Link activeClass="active" to="donar" spy={true} smooth={true} offset={50} duration={500}>Dona ahora</Link></p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}