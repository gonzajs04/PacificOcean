import { useEffect, useState } from "react";
import {useTranslation} from 'react-i18next';

export default function Noticias({ dataNews }) {
    const [t] = useTranslation("global");

    // const [isMouseHover, setMouseHover] = useState(false)
    // const [containerHeight, setContainerHeight] = useState("auto");


    // function handleHover(){
    //     if(isMouseHover){
    //         setMouseHover(false);
    //         setContainerHeight(`{${dataNews.length}`);
    //         console.log(containerHeight)

    //     }else{
    //         setMouseHover(true)

    //         setContainerHeight(`${dataNews.length * 50}px`); // Ajusta el valor según tus necesidades
    //         console.log(containerHeight)

    //     }


    // }
    return (


        <section className="noticias">
            <div className="container-noticias">
                <h2 className="title-notc">{t("news.newstitle")}</h2>{/*${isMouseHover ? 'mouse-hover' : ''} */}
                <div className={`noticias-donar `}
                > {/* */}

                    {Object.keys(dataNews).length > 0 && dataNews.map((data, i) => (


                        <div className="card-noticia" key={i}>
                            <a href={data.url}>
                                <div className="noticia-img">
                                    <picture><img src={data.urlToImage} alt="imagen noticia" loading="lazy" /></picture>
                                </div>
                                <div className="titulo-noticia">
                                    <h2>{data.title}</h2>
                                </div>
                            </a>
                        </div>


                    ))}


                </div>

                {/* <div className="container-arrow" onClick={handleHover} >


                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </div> */}
            </div>



        </section>
    )

}