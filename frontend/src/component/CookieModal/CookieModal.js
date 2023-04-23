import React, { useState, useEffect } from "react";

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({ accept: false });

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  //   useEffect(() => {
  //     const userDetailsFromStorage = localStorage.getItem("userDetails");
  //     if (userDetailsFromStorage) {
  //       setUserDetails(JSON.parse(userDetailsFromStorage));
  //     }
  //   }, []);

  function handleAccept() {
    const updatedUserDetails = { ...userDetails, accept: true };
    setUserDetails(updatedUserDetails);
    localStorage.setItem("userDetails", JSON.stringify(updatedUserDetails));

    setShowModal(false);
  }

  function handleDecline() {
    setUserDetails({ ...userDetails, accept: false });
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setShowModal(false);
  }

  return (
    <div
      style={{ display: showModal ? "block" : "none" }}
      className="modal "
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Cookie Modal
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            We use cookies to personalise content and ads, to provide social
            media features and to analyse our traffic, share information about
            your use of our site with our social media.
          </div>
          <div className="modal-footer">
            {/* ACCEPT BUTTON */}
            <button
              onClick={handleAccept}
              type="button"
              className="btn btn-primary"
            >
              Accept All
            </button>
            {/* DECLINE BUTTON */}
            <button
              onClick={handleDecline}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
