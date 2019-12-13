import React from 'react';
import NavBar from '../components/Navbar';

function Layout(props){
    //const children = props.children; //prop que nos ayudará a que los componentes mandados sean hijos de layout y aparezcan debajo
    return(
        <React.Fragment>
            <NavBar/>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;