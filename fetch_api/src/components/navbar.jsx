



import React  from 'react'
import { BrowserRouter as Router,
Switch,
Route,
NavLink
 } from 'react-router-dom'
import Info from './info'
import Me from './me'
import index from '../index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Inicio from './inicio'
import User from './users'
import { Exfire } from './exfire'


//const Navbar = () => {

  class Navbar extends React.Component{

getNavLinkClass = (path) =>{
  return this.props.location.pathname === path ? 'active' : '';
}
 

   render(){
     return ( 
                 
  <Router>
            <div className="container">
              <nav className="nav">
              <div className="logo">
                        My app
              </div>
                        <ul>
                                  <li id="li">
                                            <NavLink to="/">Inicio</NavLink>
                                  </li>
                                  <li>
                                            <NavLink to="/info">Info</NavLink>
                                  </li>
                                  <li>
                                            <NavLink to="/me">Me</NavLink>
                                  </li>
                        </ul>
              </nav>
            </div>

            {/*Aqui van las rutas que definen los links*/}
            <Switch>
                  
                      <Route path="/info">
                                <Info />
                      </Route>
                      <Route path="/me">
                                <Me />
                      </Route>
                      <Route path="/" exact>
                            <Inicio/>
                  </Route>
                  <Route path="/users/:id">
                    <User/>
                  </Route>
                  <Route>
                    <Exfire/>
                  </Route>
            </Switch>
  </Router>

              
           );
   }
         
}
 
export default Navbar;
