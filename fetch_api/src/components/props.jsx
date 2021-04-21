import React from 'react'


const Props = () => {
//  message: 'Hola desde mi Props'
  
       const title= 'Soy una constante'
          return ( 
                    <div className="bg-light text-center container">
           <h1>Hola desde el componente de Props <br/>
           <span className="bg-danger text-white p-2">


            {title}

           </span>
            </h1>
                    </div>
           );
}
 
export default Props;