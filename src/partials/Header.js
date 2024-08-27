import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav className="navbar bg-light p-2">
				<div className="container-fluid">
					<Link to={"/"} className="navbar-brand fw-bold fs-3" style={{color: "mediumblue"}}>
						ProptyFinder.
					</Link>
					<div>
						<ul className="navbar-nav row" style={{display: "-webkit-box"}}>
							<li className="nav-item col-md-auto">
								<a href="//" target="blank" style={{color: "mediumblue"}}>
									<i className="bi bi-facebook"/>
								</a>
							</li>
							<li className="nav-item col-md-auto">
								<a href="//" target="blank" style={{color: "mediumblue"}}>
									<i className="bi bi-instagram"/>
								</a>
							</li>
							<li className="nav-item col-md-auto">
								<a href="//" target="blank" style={{color: "mediumblue"}}>
									<i className="bi bi-linkedin"/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header;