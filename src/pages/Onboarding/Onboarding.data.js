import seed from "../../../assets/images/seed.png";
import tree from "../../../assets/images/tree.png";
import sapling from "../../../assets/images/sapling.png";

const ONBOARDING_DATA = [
  {
    id: 1,
    subtitle: "Welcome to",
    title: "clima",
    image: seed,
    description: "Join others in reducing carbon emissions and make the world a better place!",
    backgroundColor: "#0FA958",
    main: true,
    nospacing: true,
  },
  {
    id: 2,
    subtitle: "Perform actions",
    title: "Reduce emissions",
    image: sapling,
    description: "Perform actions to earn EXP while competing with others",
    backgroundColor: "#527462",
  },
  {
    id: 3,
    subtitle: "Earn EXP",
    title: "Level up your tree",
    image: tree,
    description: "Watch your tree grow as you save the environment!",
    backgroundColor: "#3A887C",
  },
];

export default ONBOARDING_DATA;
