import React, { useState } from "react";
import "./Services.css";
import TitleItem from "../TitleItem/TitleItem";
import ServiceCard from "../ServiceCard/ServiceCard";
import data_service from "../Assets/data";

const Services = (props) => {
  const [serviceCard] = useState(data_service);

  return (
    <div className="services" id="service">
      <div className="services-title">
        <TitleItem
          subtitle="SERVICII OFERITE"
          title="Ne dedicăm sănătății zâmbetului tău oferind o gamă completă de servicii stomatologice"
          description="Fie că este vorba de prevenție, tratamente complexe sau reabilitarea dentară, la noi găsești tot ce ai nevoie pentru a-ți menține sănătatea orală și a-ți reda încrederea în zâmbetul tău. Alege Dentissima Clinique pentru o îngrijire dentară de calitate, într-un mediu confortabil și prietenos!"
        />
      </div>

      <div className="services-card">
        {serviceCard.map((item) => {
          return (
            <ServiceCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              modalimage={item.modalimage}
              modaldescription={item.modaldescription}
              phone={item.modalphone}
              modalprogramare={item.modalprogramare}
              modaldoctor={item.modaldoctor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
