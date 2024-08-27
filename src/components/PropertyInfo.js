import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import DUMMY_Properties from "../utils/data";

const PropertyInfo = () => {
	const [selectedProperty, setSelectedProperty] = useState({});
	const [newComments, setNewComments] = useState("");

	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyD_o7i_ZZqrqZO7G9NC-WG3Xsm46ng9Wws',
		libraries: ['places'],
	});

	const fetchData = () => {
		const foundProperty = DUMMY_Properties.find((property) => property.id.toString() === 'VIEW');
		setSelectedProperty(foundProperty);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const comments = () => {
		if (Object.entries(selectedProperty).length === 0) {
			return null;
		}
		return selectedProperty.comments.map((result, index) => (
			<ul key={index} className="list-group">
				<li className="list-group-item active">
					{result.comment}
				</li>
				<br />
			</ul>
		));
	};

	if (loadError) {
		return <div>Error loading maps</div>;
	}

	if (!isLoaded || !selectedProperty.latitude || !selectedProperty.longitude) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<br />
			<div className="container min-vh-100 rounded bg-light" style={{ width: "1400px" }}>
				<div className="d-flex">
					<div style={{ textAlign: "start" }}>
						<br />
						<h1>{selectedProperty && selectedProperty.name}</h1>
						<i className="bi bi-star-fill"> Review: </i>
						{selectedProperty && selectedProperty.review}
						<p>{selectedProperty && selectedProperty.address}, {selectedProperty && selectedProperty.city}</p>
					</div>
				</div>
				<hr />
				<div className="container">
					<div className="row justify-content-between">
						<div className="col">
							<img src={selectedProperty && selectedProperty.image} className="h-100 w-100" alt="Property" />
						</div>
						<div className="col h-75 w-75" style={{ width: "20vw", height: "10vh" }}>
							<GoogleMap
								center={{
									lat: selectedProperty.latitude,
									lng: selectedProperty.longitude,
								}}
								zoom={15}
								mapContainerStyle={{ height: "400px", width: "100%" }}
							>
								<Marker
									position={{
										lat: selectedProperty.latitude,
										lng: selectedProperty.longitude,
									}}
								/>
							</GoogleMap>
						</div>
					</div>
				</div>
				<hr />
				<div className="container justify-content-between">
					<div className="row">
						<div className="col" style={{ textAlign: "start" }}>
							<p className="fw-bold">
								<i className="bi bi-building"> Type: </i>{selectedProperty && selectedProperty.type}
							</p>
							<p className="fw-bold">
								<i className="bi bi-reception-4"> Floors: </i>{selectedProperty && selectedProperty.floors}
							</p>
							<p className="fw-bold">
								<i className="bi bi-house-door-fill"> Entries: </i>{selectedProperty && selectedProperty.entries}
							</p>
							<p className="fw-bold">
								<i className="bi bi-door-open-fill"> Rooms: </i>{selectedProperty && selectedProperty.rooms}
							</p>
							<p className="fw-bold">
								<i className="bi bi-textarea"> Area: </i>{selectedProperty && selectedProperty.area}m²
							</p>
							<p className="fw-bold">
								<i className="bi bi-calendar-check-fill"> Year: </i>{selectedProperty && selectedProperty.year}
							</p>
							<p className="fw-bold">
								<i className="bi bi-hammer"> Manufacturer: </i>{selectedProperty && selectedProperty.manufacturer}
							</p>
							<p className="fw-bold">
								<i className="bi bi-compass-fill"> Latitude: </i>{selectedProperty && selectedProperty.latitude}
							</p>
							<p className="fw-bold">
								<i className="bi bi-compass-fill"> Longitude: </i>{selectedProperty && selectedProperty.longitude}
							</p>
						</div>
						<div className="col">
							<h3>Comments</h3>
							<br />
							<div>
								{comments()}
							</div>
							<br />
							<div className="form-floating">
                <textarea
									className="form-control"
									placeholder="Leave a comment here"
									id="floatingTextarea"
									value={newComments}
									onChange={(e) => setNewComments(e.target.value)}
								/>
								<label htmlFor="floatingTextarea">Add a Comment</label>
							</div>
							<br />
							<button className="btn btn-outline-primary">Click to comment</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyInfo;
