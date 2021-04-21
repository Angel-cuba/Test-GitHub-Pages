import React from 'react'
import {firebase} from './firebase'

export const Exfire = () => {
const [tareas, setTareas] = React.useState([])
  
     React.useEffect( ()=> {
               
               const obtenerFirebase = async ()=> {
                    const db = firebase.firestore();
             try {
                    
                    const data = await db.collection('tareas').get()
                    const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))  
                    console.log(arrayData); 
                    setTareas(arrayData)  
               }
            catch (error) {
                  console.log(error);
        }
   }
   obtenerFirebase()
       }, [])

          return (
                    <div>
                              <h1>Esta es la parte de firebase</h1>
                              <h2>Hola Firebase</h2>
                              <div className="container mb-2">
    <div className="row">
        <div className="col-md-6">
            <h3>Lista de Tareas</h3>
            <ul className="list-group">
            {
                tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span>{item.name}</span>...........
                  <span>{item.fecha}</span>
                    <button 
                        className="btn btn-danger btn-sm float-right"
                    >
                        Eliminar
                    </button>
                    <button 
                        className="btn btn-warning btn-sm float-right mr-2"
                    >
                        Editar
                    </button>
                </li>
                ))
            }
            </ul>
        </div>
        <div className="col-md-6">
            formulario
        </div>
    </div>
</div>
                    </div>
          )
}
