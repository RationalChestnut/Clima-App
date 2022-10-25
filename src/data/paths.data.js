import firstSteps from "../../assets/images/first_steps.jpeg";
import earthDay from "../../assets/images/earthday.jpeg";
import climateChange from "../../assets/images/climate-change.jpeg";
import evidence from "../../assets/images/evidence.jpeg";
import effects from "../../assets/images/effects.jpeg";
import atHome from "../../assets/images/at-home.jpg";
import tenThingsFromHome from "../../assets/images/10-things-to-do-from-home.jpg";
import saveWater from "../../assets/images/save-water.jpg";
import twentyFiveWaysToSaveWater from "../../assets/images/25-ways-to-save-water.jpg";
import startSaving from "../../assets/images/start-saving.jpg";

const paths = [
  {
    id: "7352964098216",
    articles: [
      {
        id: "87jh1s2736h8",
        title: "Climate Change Is Real: Evidence",
        link: "https://climate.nasa.gov/evidence/",
        type: "Article",
        image: evidence,
      },
      {
        id: "87jh1s2736h9",
        title: "Climate Change Causes",
        link: "https://climate.nasa.gov/causes/",
        type: "Article",
        image: climateChange,
      },
      {
        id: "87jh1s2736h2",
        title: "Why Should You Care?",
        link: "https://climate.nasa.gov/effects/",
        type: "Article",
        image: effects,
      },
      {
        id: "87jh1s2736h7",
        title: "Protecting Our Planet Starts with You",
        link: "https://oceanservice.noaa.gov/ocean/earthday.html",
        type: "Article",
        image: earthDay,
      },
    ],
    description: "Take your first steps toward being an Eco-Hero!",
    title: "First Steps",
    type: "Course",
    tasks: ["A8uHPMrjw0CfyIz0oTi2", "ApxTnhYLgaX2LUW5mlHd", "3ikyEYYrOPmorqZEecIy"],
    image: firstSteps,
    number: 1,
  },
  {
    id: "7352964098217",
    articles: [
      {
        id: "79fb9asdfu9",
        title: "6 Ways To Help The Environment From Home",
        link: "https://www.rainforesttrust.org/our-impact/rainforest-news/6-ways-to-help-the-environment-from-home/",
        type: "Article",
        image: atHome,
      },
      {
        id: "79fb9asdfu8",
        title: "Ten Ways You Can Help The Environment At Home",
        link: "https://www.youtube.com/watch?v=w4csl7HTP2U",
        type: "Video",
        image: tenThingsFromHome,
      },
    ],
    description: "A few simple things you can do at home to help the environment!",
    title: "At Home I",
    type: "Course",
    tasks: ["5NUw4MBaaEXQxz6zsZDz", "D9Lf6EUBZHXf2DcEELA9", "Nx1GnCYfCOP15lJRu2Yy"],
    image: atHome,
    number: 2,
  },

  {
    id: "7352964098218",
    articles: [
      {
        id: "89ajh2bf7",
        title: "25 Ways To Save Water",
        link: "https://www.volusia.org/services/growth-and-resource-management/environmental-management/natural-resources/water-conservation/25-ways-to-save-water.stml",
        type: "Article",
        image: twentyFiveWaysToSaveWater,
      },
      {
        id: "89ajh2bf8",
        title: "EPA: Start Saving",
        link: "https://www.epa.gov/watersense/start-saving",
        type: "Article",
        image: startSaving,
      },
    ],
    description: "Simple tricks that can help save tons of water! Literal tons!",
    title: "Save Water I",
    type: "Course",
    tasks: ["a8s7dh785", "j876h087t87ht", "h12873612"],
    image: saveWater,
    number: 3,
  },
];

export default paths;
