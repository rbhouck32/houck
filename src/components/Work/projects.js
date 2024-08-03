import FarmFresh from "../../images/Farm_Fresh.JPG";
import api from "../../images/api_pic.png";
import Mazda from "../../images/Mazda_img.webp";

const projects = [
  {
    id: 1,
    projectName: "Fresh Farm Produce",
    description:
      "Fresh Farm Produce is a fully responsive static marketing web page created with a deskstop first approach in mind, using only HTML and CSS. ",
    image: FarmFresh,
    altText: "website-thumbnail",
    gitRepo: "https://github.com/Build-Week-Farm-Fresh/Web-UI",
    deployedURL: "https://web-ui-fresh-farm.vercel.app/",
  },
  {
    id: 2,
    projectName: "African Marketplace API Documentation",
    description:
      "Built small API using Node.JS and KNEX. Documented using swagger docs and YAML",
    image: api,
    gitRepo: "https://github.com/rbhouck32/african-marketplace-swagger-doc",
    deployedURL: "https://african-marketplace-swagger-doc.vercel.app/",
  },
  {
    id: 3,
    projectName: "Niki Smells Like Pudding Cakes",
    description: "She loves Miatas and shit and stuff!",
    image: Mazda,
    gitRepo: "",
    deployedURL: "https://www.mazdausa.com/vehicles/mx-5-miata-rf",
  },
];

export default projects;
