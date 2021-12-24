import React, { Component, Fragment } from "react";
import './Login.css';

const Login = () => 
{

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
        fetch(
		"https://webapplicationapi20211224003442.azurewebsites.net/api/Cats")
					.then((res) => res.json())
					.then((json) => {
						
						console.log(json[0]);
					})

					
    }
	return (
	  <Fragment>
		  <div className="container">
				<div className="row">
					<div className="col-sm-3 returnHome">
						<a to="/" className="link"><i className="fas fa-backspace"></i> Return Home</a>
					</div>
				</div>

				<div className="row">
					<div className="col-10 offset-1 text-center loginText">
						<h3>Log In Below</h3>
						<p>Don't have an account? <a to="/register" className="link">Register</a></p>
					</div>
				</div>

				<div className="row">
					<div className="col-10 offset-1 text-center">
						<form  onSubmit={() => onSubmit()}>
							{/* Email */}
							<div className="col-8 offset-2">
								<label htmlFor="email">Email:</label>
								<span className="text-danger"></span>
								<input
									type="email"
									onChange={() => onChange()}
									
									
									id="email"
									className="form-control"
									placeholder="Enter your email..."
								/>
							</div>

							{/* Password */}
							<div className="col-8 offset-2">
								<label htmlFor="password">Password:</label>
								<span className="text-danger"></span>
								<input
									type="password"
									onChange={() => onChange()}
								
									
									id="password"
									className="form-control"
									placeholder="Enter your password..."
								/>
							</div>

							{/* Submit button */}
							<div className="col-8 offset-2">
								<button className="btn loginbtn" type="submit">
									Log In
			 	  				</button>
								   <button className="btn" onClick={()=> ComponentDidMount()} >
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
