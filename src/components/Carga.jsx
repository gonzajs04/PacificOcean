
import heart from '../imagenes/heart.png'
import heartw from '../imagenes/compressed/heartw.webp'
export default function Carga(){

    return(

        <div className="containerg-carga">
            <div className="container-carga">
                <picture>
                    <source srcSet={heartw} type="image/webp" />
                    <img src={heart} alt="heart" />
                    
                    </picture>
                <p>...</p>
            </div>
        </div>
    )

}