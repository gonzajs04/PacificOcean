import { useState } from 'react'
import delfin from '../../public/delfin.png'
import Card from './Card';
import {useTranslation} from 'react-i18next';
export default function Labor({visibleCard,setVisibleCard}) {

    const [isClicked,setIsClicked] = useState(false);
    const [t,i18n] = useTranslation("global") //NOMBRE DEL FICHERO DE TRADUCCIONES


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

                            <div className={`labor-delfin ${isClicked ? 'clicked' : ''}`} onClick={()=>{isClicked ? setIsClicked    (false) : setIsClicked(true); visibleCard ? setVisibleCard(false) : setVisibleCard(true)}}>
                                <picture><img src={delfin} alt="imagen desplegable delfin" /></picture>
                            </div>

                            {visibleCard ? (
                                <Card 
                                    title={t("ourjob.jobcardtitle")}
                                    desc={t("ourjob.jobcardtext")}
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