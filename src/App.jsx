import { useEffect, useState } from 'react'
import './scss/_index.scss';
import Header from './components/Header';
import Separator from './components/Separator';
import Labor from './components/Labor'
import Noticias from './components/Noticias';
import Ayuda from './components/Ayuda';
import Donar from './components/Donar'
import Contact from './components/Contact'
import Footer from './components/Footer';
/*controlar si los input cumplen con los rangos para pago, 5-1000 y 1000-5000*/
/*FRENAR EN EL LUGAR CUANDO TOQUE LA FLECHA DE NOTICIAS Y QUE QUEDE EN ESA POSICION*/
/*BUSCAR COMO MIMIFICAR LAS IMAGENES, ES DECIR REDUCIR SU TAMAÑO, RENDERIZAR DIFERENTES TIPOS DE FORMATOS DE  IMAGENES DEPENDIENDO DEL NAVEGADOR */
/*HACER FOOTER*/ 



function App() {
  const apiKey = "e521e96cc2724f5ca4635818fa30b046";
  const [showHeader, setShowHeader] = useState(false);
  const [visibleCard, setVisibleCard] = useState(false);
  const [dataNews, setDataNews] = useState({});
  const[dataPersons,setDataPersons] = useState({


  })

  useEffect(()=>{
    fetchApi();
  },[])

  async function fetchApi(){

   try{
    const response =  await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`);
    const data = await response.json();
    setDataNews(data.articles);
   }
   catch(err){
      console.log(err);
   }
  }



  return (
    <>
      <Header setShowHeader={setShowHeader}
      showHeader={showHeader}/>

      <Separator about={true}/>

      <Labor
        visibleCard = {visibleCard}
        setVisibleCard = {setVisibleCard}
      />

    <Noticias
      dataNews={dataNews}
    />

    <Ayuda/>

    <Donar/>

    <Contact
      dataPersons = {dataPersons}
      setDataPersons = {setDataPersons}
    />


    <Footer/>


    </>
  )



 

}

export default App
