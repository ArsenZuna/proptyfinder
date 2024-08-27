import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import DUMMY_Properties from "../utils/data";
import PropertyModal from "./PropertyModal";

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const propertyPerPage = 9;
  const pagesVisited = pageNumber * propertyPerPage;

  const filteredResults = DUMMY_Properties.filter(result => {
    return result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.city.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const viewMoreButtonHandler = (property) => {
    setSelectedProperty(property);
    setModalIsOpen(true);
  };

  const displayProperty = filteredResults
    .slice(pagesVisited, pagesVisited + propertyPerPage)
    .map(property => (
      <div className="card shadow col-3 m-3 px-0 border-0" key={property.id}>
        <img src={property.image} className="card-img-top" height="225px" style={{ objectFit: 'cover' }} alt="Property" />
        <div className="card-title">
          <div className="fw-bold fs-4">{property.name}</div>
          <div className="card-body fs-5">
            {property.address}, {property.city}
          </div>
          <div className='d-flex justify-content-center'>
            <ReactStars
              count={5}
              size={30}
              value={parseFloat(property.review)}
              activeColor="#ffd700"
            />
          </div>
          <div className="pb-2">
            <button className='btn btn-outline-primary' onClick={() => viewMoreButtonHandler(property)}>
              View further information
            </button>
          </div>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(filteredResults.length / propertyPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    setPageNumber(0);
  };

  return (
    <div className="w-100">
      <div className="d-flex justify-content-around">
        <div className="m-3 w-25">
          <div className="input-group m-1">
            <span className="input-group-text fw-bold" id="basic-addon1">Search</span>
            <input
              type="search"
              className="form-control"
              placeholder="Search based on name or address"
              aria-label="Search"
              aria-describedby="search-addon1"
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className="m-3 w-25">
          <Link to="/nearby">
            <button type="button" className="btn btn-outline-light fw-bold">
              Show Map
            </button>
          </Link>
        </div>
      </div>
      <div className="m-3 d-flex justify-content-center">
        {filteredResults.length ? (
          <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <div className="row d-flex justify-content-around w-100">
              {displayProperty}
            </div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination justify-content-end"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
              disabledClassName={"disabled"}
            />
          </div>
        ) : <h3>No data found</h3>}
      </div>
      {selectedProperty && (
        <PropertyModal
          selectedProperty={selectedProperty}
          isOpen={[modalIsOpen, setModalIsOpen]}
        />
      )}
    </div>
  );
};

export default PropertiesPage;
