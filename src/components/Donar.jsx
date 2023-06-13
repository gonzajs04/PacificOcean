import CardDonar from "./CardDonar";
import blueheart from '../../public/blueheart.png';
import redheart from '../../public/redheart.png';
import {useTranslation} from 'react-i18next';
export default function Donar(){
    const[t] = useTranslation("global")

    const donateData = [
        {id:1, type: "Basic",titleText: t("donate.basic"), text: ' $5 - $1000',img:blueheart, minCash: 10,maxCash: 1000},
        {id:2,type: 'Difund',titleText: t("donate.difund.title"), text: t("donate.difund.difunddesc"),img:blueheart, minCash: 0,maxCash: 0,url:"https/pacificocean/difund/com.org"},
        {id:3,type: 'Premium', titleText: t("donate.premium"), text: '$1000 - $2000',img:redheart,minCash: 1000,maxCash: 5000}
    ];
    return(
        <section className="donar">
                <div className="container-hands">
                    <div className="hand hand1">
                        <picture><img src="../../public/hand-donar.png" alt="" /></picture>
                    </div>
                    <div className="hand hand2">
                        <picture><img src="../../public/hand-donar.png" alt="" /></picture>
                    </div>
                    <div className="hand hand3">
                        <picture><img src="../../public/hand-donar.png" alt="" /></picture>
                    </div>
                    <div className="hand hand4">
                        <picture><img src="../../public/hand-donar.png" alt="" /></picture>
                    </div>
                </div>
            <div className="container-donar">
                {Object.keys(donateData).length>0 && donateData.map((data,index)=>(
                    <CardDonar
                    
                        key={index}
                        data={data}
                      
                    />
                ))}
            </div>
        </section>
    )

}