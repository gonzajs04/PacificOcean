
export default function Carga({imagePaths}){

    return(

        <div className="containerg-carga">
            <div className="container-carga">
                <picture>
                    <source srcSet={`${imagePaths.compressedPath}/heart.webp`} type="image/webp" />
                    <img src="../../public/heart.png" alt="heart" />
                    
                    </picture>
                <p>...</p>
            </div>
        </div>
    )

}