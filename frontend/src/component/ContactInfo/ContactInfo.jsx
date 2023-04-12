import React from "react";

const ContactInfo = () => {


  return (
    <div className="contact__info">
      <h3 className="contact__title">Contact information</h3>
      <div className="contact__data-info">
        <p className="contact__text">
          A man is born he's a man of means. Then along come two they got
          nothin' but their jeans. They were four men living all together yet
          they were all alone. Come and play. Everything's. Friendly neighbors
          there that's where we meet.
        </p>
        <p className="contact__text">
          The first mate and his Skipper too will do their very best to make the
          others comfortable in their tropic island nest. Sunny Days sweepin'
          the clouds away.
        </p>
      </div>
      
      <div className="contact__stack">

        <div className="contact__data">
            <span className="icon">ico-location</span>
            <p>09 Downtown, Store Main St,Victoria, Australia</p>
        </div>

        <div className="contact__data">
            <span className="icon">ico-map</span>
            <p>09 Downtown, Store Main St,Victoria, Australia</p>
        </div>

        <div className="contact__data">
            <span className="icon">ico-mail</span>
            <p>
              <a href="mailto:info@ourdomain.com" title="Info@ourdomain.com">
                Info@ourdomain.com
              </a>
            </p>
            <p>
              <a href="mailto:Support@ourdomain.com" title="Support@ourdomain.com">
                Support@ourdomain.com
              </a>
            </p>
        </div>

        <div className="contact__data">
            <span className="icon">ico-info</span>
            <p>Free standard shipping on all orders</p>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
