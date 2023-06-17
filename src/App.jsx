import { useEffect, useState, lazy } from 'react' //IMPORTO LAZY
import { Suspense } from 'react'; //IMPORTO SUSPENSE PARA EJECUTAR COMPONENTE DE CARGA
import Carga from './components/Carga'
import Header from './components/Header'
import Labor from './components/Labor'
const Separator = lazy(() => import('./components/Separator'))//IMPORTAR COMPONENTE CON LAZY LOAD
const Noticias = lazy(() => import('./components/Noticias')); //IMPORTAR COMPONENTE CON LAZY LOAD
const Ayuda = lazy(() => import('./components/Ayuda')); //IMPORTAR COMPONENTE CON LAZY LOAD
const Donar = lazy(() => import('./components/Donar')); //IMPORTAR COMPONENTE CON LAZY LOAD
const Contact = lazy(() => import('./components/Contact')); //IMPORTAR COMPONENTE CON LAZY LOAD
const Footer = lazy(() => import('./components/Footer')); //IMPORTAR COMPONENTE CON LAZY LOAD
import './scss/_index.scss';

// import Noticias from './components/Noticias';
// import Ayuda from './components/Ayuda';
// import Donar from './components/Donar'
// import Contact from './components/Contact'
// import Footer from './components/Footer';
/*controlar si los input cumplen con los rangos para pago, 5-1000 y 1000-5000*/
/*BUSCAR COMO MIMIFICAR LAS IMAGENES, ES DECIR REDUCIR SU TAMAÑO, RENDERIZAR DIFERENTES TIPOS DE FORMATOS DE  IMAGENES DEPENDIENDO DEL NAVEGADOR */
/*PONER FUENTE*/
/*APRENDER GULP PARA MIMIFICAR IMAGENMES, ARCHIVOS ETC...*/

function App() {

  const apiKey = "e521e96cc2724f5ca4635818fa30b046";
  const [dataNews, setDataNews] = useState({});
  const [dataPersons, setDataPersons] = useState([])



  useEffect(() => {
    fetchApi();

  }, [])

  async function fetchApi() {
    
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`);
      const data = await response.json();
      setDataNews(data.articles);
    }
    catch (err) {
      console.log(err);
    }
  }


  return (

    <Suspense fallback={<Carga />} > {/*SUSPENSE ES UN COMPONENTE DE REACT, QUE APARECE, SOLAMENTE CUANDO LA PAGINA NO CARGO COMPLETAMENTE, SE DEBE MEZCLAR CON LAZY LOADING */}
      
      <Header />

      <Separator 
  
       
      />

      <Labor
      
    
      />
{/* 
      <Noticias
        dataNews={dataNews}
      /> */}

      <Ayuda />

      <Donar 
   
      />

      <Contact
        dataPersons={dataPersons}
        setDataPersons={setDataPersons}
      />


      <Footer />

    </Suspense>

  )





}

export default App
