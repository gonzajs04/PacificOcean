import { useState } from 'react'
import delfin from '../../public/delfin.png'
import { useTranslation } from 'react-i18next';
import Card from '../components/Card'
export default function Labor({imagePaths }) {


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

                                    <source srcSet={`${imagePaths.compressedPath}/delfin.webp`} type='image/webp'  loading="lazy"/>
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


                </div>

            </section>




        </>


    )
}