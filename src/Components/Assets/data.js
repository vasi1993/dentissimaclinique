import { GiTooth } from "react-icons/gi"; 
import { TbDental } from "react-icons/tb"; 
import { TbDentalOff } from "react-icons/tb"; 
import { TbDentalBroken } from "react-icons/tb"; 
import { FaTooth } from 'react-icons/fa'
import razvan_img from './dr-razvan.png'
import andra_img from './dr-andra.jpg'
import laura_img from './dr-laura.jpg'
import roxana_img from './dr-roxana.jpg'
import alexandra_img from './dr-alexandra.jpg'


let data_service = [
    {
        id:1,
        image:  <FaTooth />,
        name: "Odontoterapie",
        description: "Prevenirea, diagnosticarea și tratamentul problemelor dentare, incluzând intervenții care vizează sănătatea dinților și gingiilor.",
        modalimage: andra_img,
        modaldescription: "La Dentissima Clinique, zâmbetul tău este prioritatea noastră. Odontoterapia îmbină știința și arta pentru a îmbunătăți aspectul dinților și al zâmbetului tău, oferindu-ți o încredere sporită și un zâmbet de invidiat. Fie că dorești să corectezi imperfecțiuni minore sau să-ți transformi complet zâmbetul, echipa noastră de specialiști te va ghida pas cu pas.",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modaldoctor: "Dr. Adi Andra",
        modalphone: "0364566554" ,

    },
    {
        id:2,
        image: <GiTooth />,
        name: "Ortodonție",
        description: "Ortodonția se ocupă cu diagnosticarea, prevenirea și corectarea anomaliilor de poziție a dinților și maxilarelor." ,
        modalimage: alexandra_img,
        modaldescription: "La Dentissima Clinique, ne dedicăm corectării alinierii dinților și îmbunătățirii funcției mușcăturii prin tratamente ortodontice moderne. Indiferent de vârstă, ortodonția joacă un rol esențial nu doar în sănătatea dentară, ci și în estetica generală a zâmbetului.",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Dr. Rusu Alexandra",

    },
    {
        id:3,
        image: <FaTooth />,
        name: "Pedondoție",
        description: " Pedodonția, sau stomatologia pediatrică, se ocupă cu prevenția, diagnosticul și tratamentul afecțiunilor dentare la copii.",
        modalimage: roxana_img,
        modaldescription: "La Dentissima Clinique, sănătatea dentară a celor mici este o prioritate. Prin serviciile noastre de pedodonție, oferim îngrijire stomatologică completă și adaptată nevoilor copiilor, asigurându-ne că aceștia beneficiază de o experiență pozitivă și confortabilă la fiecare vizită. Echipa noastră este specializată în tratamentele dentare pentru copii, având o abordare blândă și prietenoasă, care ajută la prevenirea anxietății și la dezvoltarea unor obiceiuri dentare sănătoase încă de la o vârstă fragedă.",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Dr. Țiplea Roxana",
    },
    {
        id:4,
        image: <TbDental />,
        name: "Chirurgie Orală",
        description: "Chirurgia orală cuprinde o gamă largă de proceduri care implică intervenții chirurgicale la nivelul cavității bucale, maxilarului și dinților. ",
        modalimage: razvan_img,
        modaldescription: "La Dentissima Clinique, oferim servicii de chirurgie orală cu ajutorul unei echipe de specialiști bine pregătiți și cu experiență, folosind cele mai moderne tehnici și echipamente pentru a asigura siguranța și confortul pacienților noștri. Chirurgia orală este esențială pentru tratarea unor afecțiuni complexe care nu pot fi rezolvate prin metode stomatologice obișnuite, iar scopul nostru este să îți oferim tratamente eficiente și minim invazive.",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Dr. Ionuțaș Răzvan",
    },
    {
        id:5,
        image: <TbDentalBroken />,
        name: "Endodonție",
        description: "Endodonția este o ramură a stomatologiei care se ocupă cu tratarea afecțiunilor pulpei dentare – nervul și țesutul moale din interiorul dintelui. " ,
        modalimage: andra_img,
        modaldescription: "La Dentissima Clinique, oferim servicii de endodonție avansată pentru a trata afecțiunile interne ale dintelui, protejându-ți sănătatea dentară și prevenind extracțiile inutile. Procedurile endodontice, cunoscute și sub numele de tratamente de canal, sunt esențiale pentru salvarea dinților grav afectați de carii sau infecții.",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Dr. Adi Andra",
    },
    {
        id:6,
        image:<TbDentalOff />,
        name: "Protetică Dentară",
        description: "Restaurarea și înlocuirea dinților pierduți sau deteriorați prin lucrări protetice, cum ar fi coroanele, punțile și protezele dentare. " ,
        modalimage: laura_img ,
        modaldescription: "La Dentissima Clinique, protetica dentară joacă un rol esențial în refacerea funcționalității și esteticii zâmbetului tău. Fie că ai pierdut un dinte, mai mulți dinți sau ai nevoie de reconstrucții dentare complexe, echipa noastră de specialiști îți va oferi soluții personalizate care îmbină confortul, funcționalitatea și aspectul natural. Scopul proteticii dentare este de a restabili nu doar estetica zâmbetului, ci și funcția normală a masticației și vorbirii.",
        modalprogramare: "Programează o consultație la Dentissima Clinique și descoperă cum poți avea zâmbetul perfect la care ai visat mereu!",
        modalphone: "0364566554" ,
        modaldoctor: "Dr. Buia Laura",
    },
];

export default data_service;