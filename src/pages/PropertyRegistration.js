import React from "react";
import PropertyForm from "../components/PropertyForm";
import Background from "../assets/background.jpg";

const PropertyRegistration = () => {
   return (
     <div className="container-fluid">
        <div className="row min-vh-100">
           <div className="col d-flex flex-column justify-content-center col-md-6" style={{backgroundImage: `url(${Background})`}}>
              <div className="text-center">
                 <h1 className="text-center display-1 text-light pt-4 font-monospace">
                    ProptyFinder.
                 </h1>
                 <h3 className="text-light">Property Information Form.</h3>
                 <p className="text-light">Please enter property values.</p>
              </div>
           </div>
           <div className="col align-self-center">
              <PropertyForm/>
           </div>
        </div>
     </div>
   );
}

export default PropertyRegistration;




