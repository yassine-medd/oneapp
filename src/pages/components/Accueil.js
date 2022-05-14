import React, { Component, Fragment } from "react";


const Accueil = ({etat}) => 
{
    return (
        <Fragment>
            <div className="container">

                <h1>Accueil</h1>

                <button  onClick={()=>etat({Accuiel:false, Login : true })}>
                    Login
                </button>
            </div>
        </Fragment>

                )
};
export default Accueil;