import { GiTooth } from "react-icons/gi"; 
import { TbDental } from "react-icons/tb"; 
import { TbDentalOff } from "react-icons/tb"; 
import { TbDentalBroken } from "react-icons/tb"; 
import { FaTooth } from 'react-icons/fa'

let data_service = [
    {
        id:1,
        image:  <FaTooth />,
        name: "Estetica Dentară",
        description: "Estetica dentară are ca scop redobandirea sau îmbunătățirea aspectului natural al dinților.",


    },
    {
        id:2,
        image: <GiTooth />,
        name: "Ortodonție",
        description: "Ortodonția se ocupă cu îndreptarea și corectarea poziției dinților și reglarea ocluziei." ,

    },
    {
        id:3,
        image: <FaTooth />,
        name: "Implantologie",
        description: "Implanturile dentare sunt cea mai eficientă şi predictibilă metodă de înlocuire a dinţilor lipsă.",

    },
    {
        id:4,
        image: <TbDental />,
        name: "Chirurgie Orala",
        description: "Chirurgia orala include toate tratamentele chirurgicale limitate la nivelul cavității orale.",

    },
    {
        id:5,
        image: <TbDentalBroken />,
        name: "Tratamente Endodontice",
        description: "Tratamentele endodontice au ca scop eliminarea infecţiei de la nivelul pulpei dentare." ,

    },
    {
        id:6,
        image:<TbDentalOff />,
        name: "Protetică Dentară",
        description: "Refacerea spațiului edentat (dinții absenți) în vederea restabilirii rolului funcțional și estetic." ,

    },
];

export default data_service;