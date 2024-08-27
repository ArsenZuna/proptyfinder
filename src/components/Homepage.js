import React from "react";
import {Link} from "react-router-dom";
import AddProperty from "../assets/add_properties.png";
import SearchProperties from "../assets/search_properties.png";

const Homepage = () => {
	return (
		<div className="container">
			<section>
				<h1 className="display-5 fw-bold mb-3 text-light">The Right Place For a Proper Property.</h1>
				<p className="lead fs-4 text-light">
					Welcome to ProptyFinder, we help you discover all kinds of properties...
				</p>
				<div className="d-grid gap-2 d-md-flex justify-content-center">
					<div className="container d-flex justify-content-center w-100">
						<div className="col-4 m-3">
							<div className="card">
								<img src={AddProperty} className="img-fluid" alt="AddProperty"/>
								<div className="card-body">
									<h5 className="card-title">Your Property</h5>
									<p className="card-text">Register a property on your own...</p>
									<Link to="/registration">
										<button className="btn btn-outline-primary">Add Property</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-4 m-3">
							<div className="card">
								<img src={SearchProperties} className="img-fluid" alt="SearchProperty"/>
								<div className="card-body">
									<h5 className="card-title">Search Property</h5>
									<p className="card-text">Look for a Property of your interest...</p>
									<Link to="/properties">
										<button className="btn btn-outline-primary">Search Property</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Homepage;