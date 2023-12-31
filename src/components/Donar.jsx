import { lazy } from 'react';
const CardDonar = lazy(() => import('./CardDonar'))

import blueheart from '../imagenes/blueheart.png';
import redheart from '../imagenes/redheart.png';

import blueheartw from '../imagenes/compressed/blueheartw.webp';
import redheartw from '../imagenes/compressed/redheartw.webp';
import handdonar from '../imagenes/hand-donar.png'
import handdonarw from '../imagenes/compressed/hand-donarw.webp'

import { useTranslation } from 'react-i18next';
export default function Donar() {
    const [t] = useTranslation("global")

    const donateData = [
        { id: 1, type: "Basic", titleText: t("donate.basic"), text: ' $5 - $1000', img: blueheart, minCash: 10, maxCash: 1000, compressedImage:blueheartw },
        { id: 2, type: 'Difund', titleText: t("donate.difund.title"), text: t("donate.difund.difunddesc"), img: blueheart, minCash: 0, maxCash: 0, url: "https/pacificocean/difund/com.org", compressedImage:blueheartw },
        { id: 3, type: 'Premium', titleText: t("donate.premium"), text: '$1000 - $2000', img: redheart, minCash: 1000, maxCash: 5000,compressedImage:redheartw }
    ];
    return (
        <section className="donar">
            <div className="container-hands">
                <div className="hand hand1">
                    <picture>
                        <source srcSet={handdonarw} type='image/webp' />
                        <img src={handdonar} alt="Imagen mano donar" loading='lazy' />
                    </picture>
                </div>
                <div className="hand hand2">
                    <picture>

                    <source srcSet={handdonarw} type='image/webp' />
                        <img src={handdonar} alt="Imagen mano donar" loading='lazy' />
                    </picture>
                </div>
                <div className="hand hand3">
                    <picture>

                    <source srcSet={handdonarw} type='image/webp' />
                        <img src={handdonar} alt="Imagen mano donar" loading='lazy' />

                    </picture>
                </div>
                <div className="hand hand4">
                    <picture>

                    <source srcSet={handdonarw} type='image/webp' />
                        <img src={handdonar} alt="Imagen mano donar" loading='lazy' />

                    </picture>
                </div>
            </div>
            <div className="container-donar">
                {Object.keys(donateData).length > 0 && donateData.map((data, index) => (
                    <CardDonar

                        key={index}
                        data={data}

                    />
                ))}
            </div>
        </section>
    )

}