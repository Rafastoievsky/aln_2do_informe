
import { pagina01 } from "./assets";
import { Header } from "./components/Header"
import { Revista } from "./components/Revista"
import { Helmet } from 'react-helmet';
function App() {


  return (
    <>
    <Helmet>
      <title>ALN - Informe de Trabajo</title>‍
      <meta name="description" content="Visita el sitio web de informe de trabajo de la diputada Alejandra López Noriega y mantente informado sobre las últimas actividades y logros en el estado de Sonora, México. Descubre los proyectos, iniciativas y propuestas que están ayudando a transformar la región. Obtén acceso a informes detallados, noticias y actualizaciones en tiempo real de la labor legislativa y social de la diputada. ¡Únete a la comunidad que está construyendo un mejor futuro para Sonora!" />              
      <meta property="og:title" content="ALN - Informe de Trabajo" />        
      <meta property="og:description" content="Visita el sitio web de informe de trabajo de la diputada Alejandra López Noriega y mantente informado sobre las últimas actividades y logros en el estado de Sonora, México. Descubre los proyectos, iniciativas y propuestas que están ayudando a transformar la región. Obtén acceso a informes detallados, noticias y actualizaciones en tiempo real de la labor legislativa y social de la diputada. ¡Únete a la comunidad que está construyendo un mejor futuro para Sonora!" />        
      <meta property="og:image" content={pagina01} />
      <meta property="og:site_name" content="ALN - Informe de Trabajo" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:type" content="article" />

    </Helmet>
    <Header />
    <div className="mt-12 grid place-items-center">
          <div className="bg-teal-100 w-1/2 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
          <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
          <div>
            <p className="font-bold">Revista Digital</p>
            <p className="text-sm">Esta es una revista digital que puedes hojear usando el puntero del mouse o, en el caso de que la estés viendo en un celular o iPad, con tu dedo. La experiencia es similar a la de hojear un libro o una revista física.</p>
          </div>
        </div>
        </div>
      </div>  
       
    <div className="mt-8 flex justify-center items-center">


      <Revista />

    </div>
    </>
  )
}

export default App
