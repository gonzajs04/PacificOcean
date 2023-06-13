import Navegation from "./Navegation";
import header_img from "/header_img2.jpg"
export default function Header() {
    return (
        <header className="header">
            <div className="containerg-header-img">
                <div className="containerg-header">

                <Navegation />
                    <div className="container-header">
                        <div className="container-title">
                            <h1><span>Pacific</span> <span>Ocean</span></h1>
                        </div>
                 


                    </div>

                </div>
           

                    <div className="container-img-header">
                        <picture><img src={header_img} alt="" loading="lazy" /></picture>
                    </div>



       


            </div>
        </header>
    )

}