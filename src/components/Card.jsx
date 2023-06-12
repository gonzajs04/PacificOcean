import { useEffect, useState } from "react"

export default function Card({ title, desc,visibleCard }) {

    const [animar,setAnimar] = useState(false)
    const [verMas,setVerMas] = useState(false)

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

                    <p className="ver-mas" onClick={handleVerMas}>{verMas ? 'ver menos' : 'ver mas'}</p>
                </div>

            </div>
        </>
    )
}