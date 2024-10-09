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
          title="Vă punem la dispoziție cele mai moderne tehnologii și materiale dentare."
          description="Vă oferim o abordare complexă, multidisciplinară a tratamentului stomatologic.

Astfel, clinica noastră vă pune la dispoziție o gamă largă de servicii stomatologice, de la profilaxie până la estetica dentară și implantologie, toate prestate la cel mai înalt nivel, de către echipa noastra, cu multă dedicație, implicare și drag pentru sanatatea dintilor dumneavoastra."
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
