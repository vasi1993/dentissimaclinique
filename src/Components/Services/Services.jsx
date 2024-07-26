import React from 'react'
import './Services.css'
import TitleItem from '../TitleItem/TitleItem'
import ServiceCard from '../ServiceCard/ServiceCard'
import data_service from '../Assets/data'


const Services = () => {
  return (
    <div className='services' id='service'>

      <div className="services-title">
        <TitleItem 
        subtitle="SERVICII OFERITE"
        title= "Vă punem la dispoziție cele mai moderne tehnologii și materiale dentare."
        description="Vă oferim o abordare complexă, multidisciplinară a tratamentului stomatologic.

Astfel, clinica noastră vă pune la dispoziție o gamă largă de servicii stomatologice, de la profilaxie până la estetica dentară și implantologie, toate prestate la cel mai înalt nivel, de către echipa noastra, cu multă dedicație, implicare și drag pentru sanatatea dintilor dumneavoastra."
        />

</div>

      
      <div className="services-card">
       {data_service.map((item, i) => {
        return <ServiceCard key = {i}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  description= {item.description}
                  />
       })}
        </div>
      
    </div>
  )
}

export default Services
