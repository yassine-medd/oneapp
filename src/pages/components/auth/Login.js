import React, { Component, Fragment , useState} from "react";
import './Login.css';
const data = [{"ID Client":220,"ID Compte":504,"Nom":"Meryame","Prenom":"Meryame",
"Email":"meryame@outlook.fr","Date_Naissance":"1992-04-09T00:00:00","Pays":"Maroc","Ville":"Oujda","Code_Postal":"60000"}];

const Login = ({etat}) => 
{
    
	const [values, SetValues] = useState({password : "", user : ""  });

	const handleChange = (event) => {
		

		if(event.target.id == "user")
		  SetValues({password : values.password, user : event.target.value })
		else 
			SetValues({password : event.target.value, user : values.user })
	  }
	const componentDidMount =()=> {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		// if (this.props.auth.isAuthenticated) {
		// 	this.props.history.push("/dashboard");
		// }
	}

	const componentWillReceiveProps = (nextProps) =>{
		// if (nextProps.auth.isAuthenticated) {
		// 	// Push user to dashboard when they login
		// 	this.props.history.push("/dashboard");
		// }
		// if (nextProps.errors) {
		// 	this.setState({
		// 		errors: nextProps.errors
		// 	});
		// }
	}

	const onChange = e => {
		// this.setState({ [e.target.id]: e.target.value });
	};
	const onSubmit = e => {
		// e.preventDefault();
		// const userData = {
		// 	email: this.state.email,
		// 	password: this.state.password
		// };
	}
    // http://localhost:5033/WeatherForecast
	// https://jsonplaceholder.typicode.com/users
	const ComponentDidMount = () => {
		const requestOptions  ={
			method: 'GET',
			headers: {
			  "user": values.user ,
			  "password": values.password,
			}};

        fetch("https://webapplicationapi20220513000535.azurewebsites.net/api/compte",requestOptions   )
			.then((res) => res.json())
					.then((json) => {
						 data = json ;
						console.log(json);
					}).catch(console.log("Probléme de connexion au lien "))
				};
	return (
	  <Fragment>
		  <div className="container">
		 
								   <button className="button " onClick={etat} >
									Accueil
			 	  				</button>
				<div className="row">
					<div className="col-10 offset-1 text-center loginText">
						
						<p><a to="/register" className="link art-degrade titre">Register</a></p>
					</div>
				</div>

				<div className="row">
					<div className="divLogin">
						<form  onSubmit={() => onSubmit()}>
							{/* Email */}
							<div className="col-8 offset-2">
								<label htmlFor="User">User:</label>
								<span className="text-danger"></span>
								<input
									type="text"
									onChange={(e) => handleChange(e)}
									
									value = {values.user}
									id="user"
									className="form-control"
									placeholder="Enter your username..."
								/>
							</div>

							{/* Password */}
							<div className="col-8 offset-2">
								<label htmlFor="password">Password:</label>
								<span className="text-danger"></span>
								<input
									type="password"
									onChange={(e) => handleChange(e)}
								
									value = {values.password}
									id="password"
									className="form-control"
									placeholder="Enter your password..."
								/>
							</div>

							{/* Submit button */}
							<div className="col-8 offset-2">
								<button className="button buttonLogin" type="submit">
									Log In
			 	  				</button>
								   <button className="button " onClick={()=> ComponentDidMount()} >
									Fetch
			 	  				</button>
							</div>
						</form>
					</div>
				</div>
			</div>
	  </Fragment>
	);
};
export default Login;
