import { useState } from "react"

export default function CardDonar({ data}) {

    const [activeElement, setActiveElement] = useState(false);
    const [tocoOtro,setTocoOtro] = useState(false)

    const economics=[
        {key:1, label: `$${data.minCash}`},
        {key:2,label: `$${data.maxCash/2}`},
        {key:3,label: `$${data.maxCash}`}
    ]

    function handleClickEconomy(key){
        setActiveElement(key === activeElement ? null : key)

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
                                
                                <p className={activeElement === economy.key ? 'marcar' : ''} onClick={()=>{handleClickEconomy(economy.key)}}>{economy.label} </p>
                            )) : (
                                <p>{data.url}</p>
                            )}


                        </div>


                         



                        <div className="container-btn-donate">
                            {data.type!="Difund" ? (
                                  <input type="submit" value="Donar" />
                            ):
                            (
                                <a href="">Difundir</a>
                            )
                            }
                          
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
