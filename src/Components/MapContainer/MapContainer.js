import React from "react";
import styles from "./MapContainer.module.scss"

const MapContainer = () => {

  return (
    <div className={styles.mapContainer}>
      <h1>Atendimento</h1>
        <iframe title="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.1630389320862!2d-44.161114685633066!3d-19.959644544384957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c176b5494d79%3A0x30d911a9158a12!2sR.%20S%C3%A3o%20Geraldo%2C%20128%20-%20Dom%20Bosco%2C%20Betim%20-%20MG%2C%2032670-534!5e0!3m2!1spt-BR!2sbr!4v1620420580351!5m2!1spt-BR!2sbr" width="600" height="450" ></iframe>
    </div>
  );
};

export default MapContainer;
