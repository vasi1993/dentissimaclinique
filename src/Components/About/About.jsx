import React from 'react'
import './About.css'
import TitleItem from '../TitleItem/TitleItem'


import Carousel from '../Carousel/Carousel'
import slides from '../Assets/carouselData.js'


const About = () => {


  return (
    <div className='about' id='about'>
      
        <TitleItem
          subtitle="BUN VENIT LA DENTISSIMA CLINIQUE!"
            title= "Despre noi"
            description="Cabinetul stomatologic Dentissima Clinique dispune de o echipă de profesionişti care caută în permanenţă să fie la curent cu ultimele cercetări şi metode moderne de tratament stomatologic, participând la cursuri şi congrese de specialitate."
               />
      
      <div className="about-us">
        <div className="about-img">
          
          <Carousel picture={slides}/>
        </div>
        <div className="about-us-description">
            <h1 className='about-us-description-title'>Un pacient fericit este cea mai bună recompensă pentru munca noastră.</h1>
            <p className='first-paragraph'>Fiecare membru al echipei își tratează pacientul ca pe un bun prieten. Cabinetul Stomatologic Dentissima are misiunea profesională de a oferi pacienților servicii specializate cu cele mai înalte standarde de calitate și profesionalism. </p>
            <p className='second-paragraph'>Știm cât de mult contează să vă simțiți confortabil când sunteți în vizită la stomatolog, de aceea am creat clinica noastră drept un loc armonios, unde puteți să vă simțiți relaxat în timp ce o echipă profesionistă de medici stomatologi se ocupă de tratamentul dentar și au grijă de zâmbetul dumneavoastra.</p>
            <div className="signature">
                <h3>Dr. Adi Andra</h3>
                <p>Stomatologie Generală</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About
