import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import DUMMY_Properties from "../utils/data";

const NearbyProperty = () => {
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [selectedProperty, setSelectedProperty] = useState(null);

	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyD_o7i_ZZqrqZO7G9NC-WG3Xsm46ng9Wws',
		libraries: ['places'],
	});

	React.useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(response) => {
				setLatitude(response.coords.latitude);
				setLongitude(response.coords.longitude);
			},
			(error) => {
				alert(error.message);
				setLatitude(41.3275);
				setLongitude(19.8187);
			}
		);
	}, []);

	const viewMoreButtonHandler = (property) => {
		console.log('VIEW', property);
	};

	if (loadError) {
		return <div>Error loading maps</div>;
	}

	if (!isLoaded || latitude === null || longitude === null) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<br />
			<div className="d-flex justify-content-center">
				<Link to="/properties">
					<button type="button" className="btn btn-outline-light fw-bold">
						Show Properties List
					</button>
				</Link>
			</div>
			<br />
			<div className="container-fluid">
				<div style={{ width: '80vw', height: '80vh' }}>
					<GoogleMap
						center={{ lat: latitude, lng: longitude }}
						zoom={8}
						mapContainerStyle={{ width: '100%', height: '100%' }}
					>
						{DUMMY_Properties.map((property) => (
							<Marker
								key={property.id}
								position={{ lat: property.latitude, lng: property.longitude }}
								onClick={() => setSelectedProperty(property)}
							/>
						))}

						{selectedProperty && (
							<InfoWindow
								position={{
									lat: selectedProperty.latitude,
									lng: selectedProperty.longitude,
								}}
								onCloseClick={() => setSelectedProperty(null)}
							>
								<div>
									<img
										src={selectedProperty.image}
										className="card-img-top"
										height="200px"
										style={{ objectFit: 'cover' }}
										alt="Property"
									/>
									<p className="fw-bold fs-4">{selectedProperty.name}</p>
									<p>
										{selectedProperty.address}, {selectedProperty.city}
									</p>
									<div className="d-flex justify-content-center">
										{selectedProperty && (
											<ReactStars
												count={5}
												size={20}
												value={parseFloat(selectedProperty.review)}
												activeColor="#ffd700"
											/>
										)}
									</div>
									<button
										className="btn btn-outline-primary"
										onClick={() => viewMoreButtonHandler(selectedProperty)}
									>
										View further information
									</button>
								</div>
							</InfoWindow>
						)}
					</GoogleMap>
				</div>
			</div>
		</div>
	);
};

export default NearbyProperty;
