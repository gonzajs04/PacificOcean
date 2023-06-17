import { useEffect, useState } from "react"
import {useTranslation} from 'react-i18next'

export default function Card({ title, desc,visibleCard }) {

    const [animar,setAnimar] = useState(false)
    const [verMas,setVerMas] = useState(false);
    const[t ] = useTranslation("global");

    function handleAnimar(){
    
        if(visibleCard){
            setTimeout(()=>{
                setAnimar(true)

            },100)
        }else{
            setAnimar(false)
        }
    }

    function handleVerMas(e){
        e.preventDefault()
        verMas ? setVerMas(false) : setVerMas(true);
    }
    useEffect(()=>{
            handleAnimar()
    },[visibleCard])
    
    return (
        <>

        <div className={`card ${animar ? 'visible' : ''}`}>
                <div className="text-card">
                    <div className="title-card">
                        <h2>{title}</h2>
                    </div>
                    <div className={`desc-card ${verMas ? 'full-vermas' : ''}`}>
                        <p>{desc}</p>
                    </div>

                    <p className="ver-mas" onClick={handleVerMas}>{verMas ? t("ourjob.jobcardless") : t("ourjob.jobcardmore")}</p>
                </div>

            </div>
        </>
    )
}