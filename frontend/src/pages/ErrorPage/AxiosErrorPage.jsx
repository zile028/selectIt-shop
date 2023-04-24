import React from "react";

const AxiosErrorPage = ({ axiosError }) => {
  const { code, message, name } = axiosError;
  return (
    <div className="container">
      <h1>AxiosErrorPage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        illum dignissimos. Suscipit neque error temporibus inventore alias illo
        sed officiis, ad possimus sunt! Vel odit illum molestiae nam libero eius
        eligendi exercitationem necessitatibus reiciendis maxime! Dolore
        accusantium, iure a ut odit beatae labore ex facere excepturi est, vel
        perspiciatis laboriosam.
      </p>
      <h2>{code}</h2>
      <p>{message}</p>
      <p>{name}</p>
    </div>
  );
};

export default AxiosErrorPage;
