import CardDonar from "./CardDonar";
import blueheart from '../../public/blueheart.png';
import redheart from '../../public/redheart.png';
export default function Donar(){

    const donateData = [
        {type: 'Basic',titleText: 'Basic donate', text: ' $5 - $1000',img:blueheart, minCash: 10,maxCash: 1000},
        {type: 'Difund',titleText: 'Difund', text: 'Share in your social-media',img:blueheart, minCash: 0,maxCash: 0,url:"https/pacificocean/difund/com.org"},
        {type: 'Premium', titleText: 'Premium donate', text: '$1000 - $2000',img:redheart,minCash: 1000,maxCash: 5000}
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
                {Object.keys(donateData).length>0 && donateData.map(data=>(
                    <CardDonar

                        data={data}
                      
                    />
                ))}
            </div>
        </section>
    )

}