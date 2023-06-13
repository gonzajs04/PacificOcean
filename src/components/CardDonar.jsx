import { useState } from "react"
import {useTranslation} from 'react-i18next';

export default function CardDonar({data}) {
    const[t] = useTranslation("global")


    const [activeElement, setActiveElement] = useState(false);
    // const [tocoOtro,setTocoOtro] = useState(false)

    const economics=[
        {id:1, label: `$${data.minCash}`},
        {id:2,label: `$${data.maxCash/2}`},
        {id:3,label: `$${data.maxCash}`}
    ]

    function handleClickEconomy(id){
        setActiveElement(id === activeElement ? null : id)

    }



    return (
        <>
            <div className="card-donar">

                <div className="donar-img">
                    <picture><img src={data.img} alt="imagen data" loading="lazy" /></picture>

                </div>
                <div className="donar-text">
                    <p>{data.text}</p>
                    <h2>{data.titleText}</h2>

                </div>
                <div className="donar-input">

                    <form action="#">

                        <div className="container-economic">

                            {data.type!="Difund" ? economics.map(economy =>(
                                
                                <p key={economy.id} className={activeElement === economy.id ? 'marcar' : ''} onClick={()=>{handleClickEconomy(economy.id)}}>{economy.label} </p>
                            )) : (
                                <p>{data.url}</p>
                            )}


                        </div>


                        <div className="container-btn-donate">
                            {data.type!="Difund" ? (
                                  <input type="submit" value={t("donate.btndonate")} />
                            ):
                            (
                                <a href="">{t("donate.btndifund")}</a>
                            )
                            }
                          
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
