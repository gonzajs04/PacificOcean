import { useState } from 'react'
import delfin from '../../public/delfin.png'
import Card from './Card';
export default function Labor({visibleCard,setVisibleCard}) {

    const [isClicked,setIsClicked] = useState(false)


    return (
        <>

            <section className="labor">
                <div className="container-labor">
                    <div className="labor-text-card">
                        <div className="labor-text">
                            <h2>Nuestra labor</h2>
                            <p>Seguridad de la infancia a través de la protección y la inclusión
                            </p>

                        </div>

                        <div className="info-labor">

                            <div className={`labor-delfin ${isClicked ? 'clicked' : ''}`} onClick={()=>{isClicked ? setIsClicked    (false) : setIsClicked(true); visibleCard ? setVisibleCard(false) : setVisibleCard(true)}}>
                                <picture><img src={delfin} alt="imagen desplegable delfin" /></picture>
                            </div>

                            {visibleCard ? (
                                <Card 
                                    title="¡Protegiendo a los animales juntos!"
                                    desc="En nuestra organización, nos dedicamos a preservar y cuidar a los animales en todas sus formas. Luchamos contra la caza furtiva, promovemos la adopción responsable y trabajamos en la conservación de especies en peligro. Únete a nosotros en esta noble causa para crear un mundo donde los animales sean tratados con amor y respeto. ¡Explora nuestra página y únete a nuestra misión de proteger a los animales!
                                    "
                                    visibleCard={visibleCard}
                                />) : ''
                            }


                        </div>
                    </div>

                </div>
                <div className="img-labor">


                </div>

            </section>




        </>


    )
}