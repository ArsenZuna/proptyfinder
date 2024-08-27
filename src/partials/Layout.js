import React from "react";
import Header from "./Header";
import Background from "../assets/background.jpg";

const Layout = ({children}) => {
	return (
		<div>
			<div className="d-flex flex-column justify-content-between min-vh-100" style={{backgroundImage: `url(${Background})`}}>
				<Header/>
				<div className="d-flex justify-content-center align-items-center">
					{children}
				</div>
				<br/>
			</div>
		</div>
	);
};

export default Layout;