import React from 'react'
import './Medic.css'
import TitleItem from '../TitleItem/TitleItem'
import MedicCard from '../MedicCard/MedicCard'
import data_medici from '../Assets/data-medici'

const Medic = () => {
  return (
    <div className='medic' id='medic'>
        <div className="medic-title">
            <TitleItem
            subtitle='SPECIALISTI DENTISSIMA CLINIQUE'
            title='Descopera echipa Dentissima'
            />
        </div>
        <div className="medic-description">
            {data_medici.map((item, i) => {
                return < MedicCard key= {i}
                            id={item.id}
                            image = {item.image}
                            name= {item.name}
                            profession = {item.profession}

                
                />
            })}
        </div>
      
    </div>
  )
}

export default Medic
