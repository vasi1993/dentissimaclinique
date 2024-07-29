import React from 'react'
import './About.css'
import TitleItem from '../TitleItem/TitleItem'
import hero1 from '../Assets/hero1.jpg'
import hero2 from '../Assets/hero2.jpg'
import hero3 from '../Assets/hero3.jpg'
import hero4 from '../Assets/hero4.jpg'
import hero5 from '../Assets/hero5.jpg'
import ImageSlider from '../ImageSlider/ImageSlider'

const SLIDES = [hero1, hero2, hero3, hero4, hero5]

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
            <ImageSlider slides={SLIDES}/>
        </div>
        <div className="about-us-description">
            <h1 className='about-us-description-title'>Un pacient fericit este cea mai bună recompensă pentru munca noastră.</h1>
            <p className='first-paragraph'>Fiecare membru al echipei își tratează pacientul ca pe un bun prieten. Centrul Stomatologic AVADENT are misiunea profesională de a oferi pacienților servicii specializate cu cele mai înalte standarde de calitate și profesionalism. </p>
            <p className='second-paragraph'>Știm cat de mult contează să vă simțiți confortabil cînd sunteți în vizită la stomatolog, de aceea am creat clinica noastră drept un loc armonios, unde puteți să vă simțiți relaxat în timp ce o echipă profesionistă de medici stomatologi se ocupă de tratamentul dentar și au grijă de zâmbetul dumneavoastra.</p>
            <div className="signature">
                <h3>Dr. Adi Andra</h3>
                <p>Stomatologie Generala</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About
