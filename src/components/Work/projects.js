import FarmFresh from "../../images/Farm_Fresh.JPG";
import RamenTatsu from "../../images/Ramen_Tatsu.JPG";

const projects = [
  {
    id: 1,
    projectName: "Fresh Farm Produce",
    description:
      "Fresh Farm Produce is a fully responsive static marketing web page created with a deskstop first approach in mind, using only HTML and CSS. ",
    image: FarmFresh,
    altText: "website-thumbnail",
    gitRepo: "https://github.com/Build-Week-Farm-Fresh/Web-UI",
    deployedURL: "https://hopeful-varahamihira-431872.netlify.app",
  },
  {
    id: 2,
    projectName: "RamenTatsu",
    description:
      "RamenTatsu is a noodle shop located in Las Vegas, Nevada. I was asked to help create a fully responsive marketing page using only HTML, CSS, and a mock design file.",
    image: RamenTatsu,
    gitRepo: "https://github.com/rbhouck32/RamenTatsu",
    deployedURL: "http://http://www.ramen-tatsu.com/",
  },
];

export default projects;
