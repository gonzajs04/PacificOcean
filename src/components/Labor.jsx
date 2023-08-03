import { useState,lazy } from 'react'
import { useTranslation } from 'react-i18next';
import Card from '../components/Card'
import delfinw from '../imagenes/compressed/delfinw.webp'
import delfin from '../imagenes/delfin.png'
import laborimg from '../imagenes/laborimg.jpg'
import laborimgw from '../imagenes/compressed/laborimgw.webp'

export default function Labor() {


const [visibleCard, setVisibleCard] = useState(false);

    const [isClicked, setIsClicked] = useState(false);
    const [t] = useTranslation("global") //NOMBRE DEL FICHERO DE TRADUCCIONES


    function handleCard(e) {
        e.preventDefault();
        if (isClicked) {
            setIsClicked(false);
            setVisibleCard(false);
            return;
        }
        setIsClicked(true);
        setVisibleCard(true);

    }

    return (
        <>

            <section className="labor">
                <div className="container-labor">
                    <div className="labor-text-card">
                        <div className="labor-text">
                            <h2>{t("ourjob.jobtitle")}</h2>
                            <p>{t("ourjob.jobsubtitle")}
                            </p>

                        </div>

                        <div className="info-labor">

                            <div className={`labor-delfin ${isClicked ? 'clicked' : ''}`} onClick={handleCard}>
                                <picture>

                                    <source srcSet={delfinw} type='image/webp'  loading="lazy"/>
                                    <img src={delfin} alt="imagen desplegable delfin loadi" loading='lazy' />

                                </picture>
                            </div>

                            {visibleCard && (
                                <Card
                                    title={t("ourjob.jobcardtitle")}
                                    desc={t("ourjob.jobcardtext")}
                                    visibleCard={visibleCard}
                                />)
                            }


                        </div>
                    </div>

                </div>
                <div className="img-labor">
                    <source srcSet={laborimgw} type='image/webp' />
                    <img src={laborimg} alt="Imagen labor" />

                </div>

            </section>




        </>


    )
}