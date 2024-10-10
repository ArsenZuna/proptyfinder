import React, {useState} from "react";
import RegistrationModal from "./RegistrationModal";

const PropertyForm = () => {
   const [name, setName] = useState("");
   const [type, setType] = useState("");
   const [city, setCity] = useState("");
   const [address, setAddress] = useState("");
   const [longitude, setLongitude] = useState("");
   const [latitude, setLatitude] = useState("");
   const [manufacturer, setManufacturer] = useState("");
   const [year, setYear] = useState("YYYY-MM-DD");
   const [area, setArea] = useState(null);
   const [floors, setFloors] = useState(null);
   const [entries, setEntries] = useState(null);
   const [rooms, setRooms] = useState(null);
   const [error, setError] = useState();
   const [modalIsOpen, setModalIsOpen] = useState(false);

   const isEmptyString = (string) => string.trim() === "";

   const submitHandler  = () => {
      if (isEmptyString(name) || isEmptyString(type) || isEmptyString(city) || isEmptyString(address) || isEmptyString(longitude)
        || isEmptyString(latitude) || isEmptyString(manufacturer)) {
         setError("Invalid Input");
         return;
      }
      setError(null);
      setModalIsOpen(true);
   };

   return (
     <div className="align-content-center">
        <div className="w-100 p-5 my-5 text-dark align-self-center">
           <div className="form-floating row g-2">
              <div className="form-floating col-md-6 mb-3">
                 <input
                   type="text"
                   className={`form-control ${error && !name ? "is-invalid" : ''}`}
                   id="floatingInputName"
                   onChange={event => setName(event.target.value)}
                   value={name}
                   placeholder="name"
                 />
                 <label htmlFor="floatingInputName">Name</label>
              </div>
              <div className="form-floating col-md-6 mb-3">
                 <input
                   type="text"
                   className={`form-control ${error && !type ? "is-invalid" : ''}`}
                   id="floatingInputType"
                   onChange={event => setType(event.target.value)}
                   value={type}
                   placeholder="type"
                 />
                 <label htmlFor="floatingInputType">Type</label>
              </div>
           </div>
           <div className="form-floating row g-2">
              <div className="form-floating col-md-6 mb-3">
                 <input
                   type="text"
                   className={`form-control ${error && !city ? "is-invalid" : ''}`}
                   id="floatingInputCity"
                   onChange={event => setCity(event.target.value)}
                   value={city}
                   placeholder="city"
                 />
                 <label htmlFor="floatingInputCity">City</label>
              </div>
              <div className="form-floating col-md-6 mb-3">
                 <input
                   type="number"
                   className={`form-control ${error && !area ? "is-invalid" : ''}`}
                   id="floatingInputArea"
                   onChange={event => setArea(event.target.value)}
                   value={area}
                   placeholder="area"
                   min="0"
                 />
                 <label htmlFor="floatingInputArea">Area</label>
              </div>
           </div>
           <div className="form-floating row g-2">
              <div className="form-floating col-md-6 mb-3">
                 <input
                   type="text"
                   className={`form-control ${error && !longitude ? "is-invalid" : ''}`}
                   id="floatingInputLongitude"
                   onChange={event => setLongitude(event.target.value)}
                   value={longitude}
                   placeholder="longitude"
                 />
                 <label htmlFor="floatingInputLongitude">Longitude</label>
              </div>
              <div className="form-floating col-md-6 mb-3">
                 <input
                   type="text"
                   className={`form-control ${error && !latitude ? "is-invalid" : ''}`}
                   id="floatingInputLatitude"
                   onChange={event => setLatitude(event.target.value)}
                   value={latitude}
                   placeholder="latitude"
                 />
                 <label htmlFor="floatingInputLatitude">Latitude</label>
              </div>
           </div>
           <div className="form-floating row g-2">
              <div className="form-floating col-md-6 mb-3">
                 <input
                   type="text"
                   className={`form-control ${error && !manufacturer ? "is-invalid" : ''}`}
                   id="floatingInputManufacturer"
                   onChange={event => setManufacturer(event.target.value)}
                   value={manufacturer}
                   placeholder="manufacturer"
                 />
                 <label htmlFor="floatingInputManufacturer">Manufacturer</label>
              </div>
              <div className="form-floating col-md-6 mb-3">
                 <input
                   type="date"
                   className="form-control"
                   id="floatingInputYear"
                   onChange={event => setYear(event.target.value)}
                   value={year}
                   placeholder="year"
                 />
                 <label htmlFor="floatingInputYear">Year</label>
              </div>
           </div>
           <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${error && !address ? "is-invalid" : ''}`}
                id="floatingInputAddress"
                onChange={event => setAddress(event.target.value)}
                value={address}
                placeholder="address"
              />
              <label htmlFor="floatingInputAddress">Address</label>
           </div>
           <div className="form-floating row g-2">
              <div className="form-floating col-md-4 mb-3">
                 <input
                   type="number"
                   className={`form-control ${error && !floors ? "is-invalid" : ''}`}
                   id="floatingInputFloors"
                   onChange={event => setFloors(event.target.value)}
                   value={floors}
                   placeholder="floors"
                   min="0"
                 />
                 <label htmlFor="floatingInputFloors">Number of floors</label>
              </div>
              <div className="form-floating col-md-4 mb-3">
                 <input
                   type="number"
                   className={`form-control ${error && !entries ? "is-invalid" : ''}`}
                   id="floatingInputEntries"
                   onChange={event => setEntries(event.target.value)}
                   value={entries}
                   placeholder="entries"
                   min="0"
                 />
                 <label htmlFor="exampleInputEntry">Number of entries</label>
              </div>
              <div className="form-floating col-md-4 mb-3">
                 <input
                   type="number"
                   className={`form-control ${error && !rooms ? "is-invalid" : ''}`}
                   id="floatingInputRooms"
                   onChange={event => setRooms(event.target.value)}
                   value={rooms}
                   placeholder="rooms"
                   min="0"
                 />
                 <label htmlFor="floatingInputRooms">Number of rooms</label>
              </div>
           </div>
           <div className="form-actions mb-2">
              <input
                type="file"
                className={`form-control ${error ? "is-invalid" : ''}`}
                id="customFileMultiple"
                placeholder="Choose Image"
                multiple
              />
           </div>
           <div className="d-flex flex-row-reverse mb-2">
              <button onClick={submitHandler} type="submit" className="btn btn-primary">Submit</button>
           </div>
           <RegistrationModal isOpen={[modalIsOpen, setModalIsOpen]}/>
           {error && (
             <div className="text-center fst-italic fw-bold">Please complete the fields!</div>
           )}
        </div>
     </div>
   )
};

export default PropertyForm;