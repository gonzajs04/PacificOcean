import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../build/styles.min.css';
import {I18nextProvider} from "react-i18next"; //IMPORTO COMPONENTE PARA ENVOLVER MI APP EN SISTEMA DE TRADUCCIONES
import i18next from 'i18next'; //IMPORTO PARA INIZIALIZAR SISTEMA DE TRADUCCIONES
import global_es from './translations/es/global.json'; //IMPORTo PAQUETES DE TRADUCCIONES PARA ESPECIFICARLAS EN LOS RESOURCES DE I18NEXT
import global_en from './translations/en/global.json';

i18next.init({ //INICIALIZO sistema de traducciones
  interpolation: {escapeValue: false},
  lng:"es", //INICIALIZO LA PAGINA CON RENGUAJE ESPAÑOL
  resources: {
    es:{
      global: global_es
    },
    en:{
      global: global_en
    }
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}> {/*ENVUELVO MI APP CON SISTEMA DE TRADUCCIONES */}

      <App />

    </I18nextProvider>

  
  </React.StrictMode>,
)
