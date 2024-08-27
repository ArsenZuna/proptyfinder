import React from "react";
import Modal from "react-modal";
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import ReactStars from "react-rating-stars-component";

const PropertyModal = ({selectedProperty, isOpen}) => {

	Modal.setAppElement('#root');

	const [modalIsOpen, setModalIsOpen] = isOpen;

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const {isLoaded, loadError} = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyD_o7i_ZZqrqZO7G9NC-WG3Xsm46ng9Wws',
		libraries: ['places'],
	});

	if (loadError) {
		return <div>Error loading maps</div>;
	}

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Property Modal"
		>
			<div className="modal-dialog-centered border-white">
				<div className="modal-content border-white">
					<div className="modal-header justify-content-end px-2">
						<button
							type="button"
							className="d-flex btn-close btn-close-dark"
							onClick={closeModal}
						></button>
					</div>
					<div className="modal-body d-flex justify-content-between align-items-center pt-3 px-5">
						<div>
							<h1>{selectedProperty && selectedProperty.name}</h1>
							<ReactStars
								count={5}
								size={20}
								value={parseFloat(selectedProperty?.review || 0)}
								activeColor="#ffd700"
							/>
							<p className="pt-1">Type: <h5 className="d-inline">{selectedProperty.type}</h5></p>
							<p>Address: <h5 className="d-inline">{selectedProperty.address}, {selectedProperty.city}</h5></p>
							<p>Area: <h5 className="d-inline">{selectedProperty.area}</h5>m²</p>
							<p>Rooms: <h5 className="d-inline">{selectedProperty.rooms}</h5></p>
							<p>Floor: <h5 className="d-inline">{selectedProperty.floors}</h5></p>
							<p>Entries: <h5 className="d-inline">{selectedProperty.entries}</h5></p>
							<p>Build Year: <h5 className="d-inline">{selectedProperty.year}</h5></p>
						</div>
						<br/>
						<div style={{height: "600px", width: "800px"}}>
							<GoogleMap
								center={{
									lat: selectedProperty.latitude,
									lng: selectedProperty.longitude,
								}}
								zoom={15}
								mapContainerStyle={{height: "100%", width: "100%"}}
							>
								<Marker
									position={{
										lat: selectedProperty.latitude,
										lng: selectedProperty.longitude,
									}}
								/>
							</GoogleMap>
						</div>
						<br/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default PropertyModal;
