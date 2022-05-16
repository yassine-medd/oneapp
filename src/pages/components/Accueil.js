import React, { Component, Fragment } from "react";


const Accueil = ({etat}) => 
{  

    const ComponentDidMount = () => {
		const requestOptions  ={
			method: 'GET',
			headers: {
			  "user": "Meryame" ,
			  "password": "my1Appweb",
			  "Content-Type": "application/json",
			  "Access-Control-Allow-Origin": "*",
			  "Access-Control-Allow-Headers": "X-Requested-With"
			}};

			fetch("https://webapplicationapi20220513000535.azurewebsites.net/api/compte/",requestOptions )
			.then((res) => {res.json();
				if (res.redirected) {
					alert("Erreur : redirect api " )
				}
			})
			.then((json) => {
					
				console.log(json);
                alert("Erreur : yes api" )
				
			})
			.catch(error => alert("Erreur : catch " + error));

		};

				const test1 = () => {
					
					fetch("https://jsonplaceholder.typicode.com/users")
					.then((res) => res.json)
					.then((text) => {
						
						console.log(text);
					})
					.catch(error => alert("Erreur : " + error));

					};
				
					const test2 = () => {
	
						fetch("https://webapplicationapi20220513000535.azurewebsites.net/api/cats/")
						.then(response => response.json())
						.then(response => alert(JSON.stringify(response)))
						.catch(error => alert("Erreur : " + error));
						};
    return (
        <Fragment>
            <div className="container">

                <h1>Accueil</h1>

                {/* <button  onClick={()=>etat({Accuiel:false, Login : true })}>
                    Login
                </button> */}

<div className="col-8 offset-2">
								<button className="button buttonLogin" type="submit">
									Log In
			 	  				</button>
								<button className="button " onClick={()=> ComponentDidMount()} >
									Fetch
			 	  				</button>
								   <button className="button " onClick={()=> test1()} >
									Compte 2
			 	  				</button>
								   <button className="button " onClick={()=> test2()} >
									Cats
			 	  				</button>
							</div>


            </div>
        </Fragment>

                )
};
export default Accueil;