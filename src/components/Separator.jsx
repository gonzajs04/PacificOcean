import { lazy } from 'react'
 import About from './About'
export default function Separator({imagePaths}) {
    return(

        <section className="c-skewed">
            
         <div className="skewed">
 
            <About
                imagePaths={imagePaths}
            />
               
         </div>
     </section>
    )
  
}