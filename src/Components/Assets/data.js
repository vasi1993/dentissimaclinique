import { GiTooth } from "react-icons/gi"; 
import { TbDental } from "react-icons/tb"; 
import { TbDentalOff } from "react-icons/tb"; 
import { TbDentalBroken } from "react-icons/tb"; 
import { FaTooth } from 'react-icons/fa'
import razvan_img from './dr-razvan.png'
import andra_img from './dr-andra.jpg'
import laura_img from './dr-laura.jpg'
import roxana_img from './dr-roxana.jpg'


let data_service = [
    {
        id:1,
        image:  <FaTooth />,
        name: "Estetica Dentară",
        description: "Estetica dentară are ca scop redobandirea sau îmbunătățirea aspectului natural al dinților.",
        modalimage: andra_img,
        modaldescription: "La Dentissima Clinique, zâmbetul tău este prioritatea noastră. Estetica dentară îmbină știința și arta pentru a îmbunătăți aspectul dinților și al zâmbetului tău, oferindu-ți o încredere sporită și un zâmbet de invidiat. Fie că dorești să corectezi imperfecțiuni minore sau să-ți transformi complet zâmbetul, echipa noastră de specialiști te va ghida pas cu pas.",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modaldoctor: "Dr. Adi Andra",
        modalphone: "0364566554" ,

    },
    {
        id:2,
        image: <GiTooth />,
        name: "Ortodonție",
        description: "Ortodonția se ocupă cu îndreptarea și corectarea poziției dinților și reglarea ocluziei." ,
        modalimage: roxana_img,
        modaldescription: "lorem",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Dr. Adi Andra",

    },
    {
        id:3,
        image: <FaTooth />,
        name: "Implantologie",
        description: "Implanturile dentare sunt cea mai eficientă şi predictibilă metodă de înlocuire a dinţilor lipsă.",
        modalimage: razvan_img,
        modaldescription: "lorem",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Adi Andra",
    },
    {
        id:4,
        image: <TbDental />,
        name: "Chirurgie Orala",
        description: "Chirurgia orala include toate tratamentele chirurgicale limitate la nivelul cavității orale.",
        modalimage: razvan_img,
        modaldescription: "lorem",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Adi Andra",
    },
    {
        id:5,
        image: <TbDentalBroken />,
        name: "Tratamente Endodontice",
        description: "Tratamentele endodontice au ca scop eliminarea infecţiei de la nivelul pulpei dentare." ,
        modalimage: razvan_img,
        modaldescription: "lorem",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Adi Andra",
    },
    {
        id:6,
        image:<TbDentalOff />,
        name: "Protetică Dentară",
        description: "Refacerea spațiului edentat (dinții absenți) în vederea restabilirii rolului funcțional și estetic." ,
        modalimage: laura_img ,
        modaldescription: "lorem",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Adi Andra",
    },
];

export default data_service;