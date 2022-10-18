import laundry from "../../assets/images/laundry.jpeg";
import lightbulb from "../../assets/images/lightbulb.jpeg";
import cauking from "../../assets/images/cauking.jpeg";
import filter from "../../assets/images/filter.jpeg";
import insulate from "../../assets/images/insulate.png";
import heater from "../../assets/images/heater.jpeg";
import window from "../../assets/images/window.jpeg";
import plug from "../../assets/images/plug.png";
import thermostat from "../../assets/images/thermostat.jpeg";
import water_heater from "../../assets/images/water-heater.jpeg";
import unplug from "../../assets/images/unplug.png";
import treeGrowing from "../../assets/images/treeGrowing.png";
import compost from "../../assets/images/compost.jpeg";
import runningTap from "../../assets/images/runningTap.png";
import grass from "../../assets/images/grass.jpeg";

// eslint-disable-next-line import/prefer-default-export
export const tasks = [
  {
    id: "3ikyEYYrOPmorqZEecIy",
    title: "Wash Clothes with Cold Water",
    type: "At-home Activities",
    description:
      "Using cold water instead of warm water to wash your clothes is an easy way to reduce carbon emissions! Not all clothes can be washed with warm water, but when they can, using cold water is the way to go!",
    exp: 130,
    carbonRemoved: 32,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Colorful and delicate fabrics do best in cold water",
      "75-90% of energy expended when washing clothes is due to heating up water",
      "Using cold water to wash clothes can save up to 1,600 pounds of CO2 a year",
    ],
    linkToPurchase: "https://amzn.to/3y6WpHo",
    image: laundry,
  },
  {
    id: "5NUw4MBaaEXQxz6zsZDz",
    title: "Switch to LED",
    type: "At-home Activities",
    description:
      "Switching to LEDs is a no brainer. The average person will save 463.2kg of carbon dioxide per year from switching to LED lightbulbs! LEDs also last longer which saves both time and money. Talk about efficiency! ",
    exp: 1401,
    carbonRemoved: 463.2,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "The average LED lasts 25x longer than regular light bulbs.",
      "The average household saves around $225 a year from making the switch!",
      "They contain no mercury and are non-toxic. Whew!",
      "If each household switched one lightbulb to LED, CO2 emissions would be reduced by 9 billion pounds!",
    ],
    linkToPurchase: "https://amzn.to/3d2JA9A",
    image: lightbulb,
  },
  {
    id: "5VmJf7tLDPgXf3p2fn7Y",
    title: "Use Energy Efficient Windows",
    type: "At-home Activities",
    description:
      "Energy efficient windows are designed to prevent warm or cool air from escaping your home. Their insulation reduces home energy usage and energy bills!",
    exp: 3630,
    carbonRemoved: 907,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Save up to $500 a year in energy savings from switching",
      "Reduce CO2 emissions by 111-907kg a year!",
      "Protects furniture from UV rays",
      "Enjoy outside noise reduction",
    ],
    linkToPurchase: "",
    image: window,
  },
  {
    id: "A8uHPMrjw0CfyIz0oTi2",
    title: "Turn off the lights",
    type: "At-home Activities",
    description:
      "Turning off the lights when you leave the room can save both energy and money! One innovation you can utilize are motion sensor lights. These turn off and on when someone leaves the room. That way you no longer have to worry about monitoring the lights!",
    exp: 7,
    carbonRemoved: 1.72,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Save 1.2 cents per hour when the lights are off!",
      "You also save 0.43kg of carbon dioxide emissions per hour!",
    ],
    linkToPurchase: "https://amzn.to/3RX9N8e",
    image: unplug,
  },
  {
    id: "ApxTnhYLgaX2LUW5mlHd",
    title: "Unplug Appliances",
    type: "At-home Activities",
    description:
      "Believe it or not, your appliances use energy even when they are not active. This energy use is called vampire power. We can avoid vampire power by unplugging appliances from the outlet. However, instead of unplugging appliances, consider using a power adapter. This will allow you to fully turn off all appliances with just a flip of a switch!",
    exp: 5,
    carbonRemoved: 1.5,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Vampire power accounts for 5%-10% of residential energy use",
      "Unplugging devices can save the average household $165 a year",
      "If the entire U.S. unplugged their appliances, we would save 44 million metric tons of carbon dioxide pollution.",
    ],
    linkToPurchase: "https://amzn.to/3U1QFI3",
    image: plug,
  },
  {
    id: "D9Lf6EUBZHXf2DcEELA9",
    title: "Regulate Temperature",
    type: "At-home Activities",
    description:
      "Overheating and overcooling rooms is very common! In the winter, set your thermostat at 68 degrees during the day, and 55 degrees at night. In the summer, keep it at 78 degrees. This will maximize energy savings!",
    exp: 2000,
    carbonRemoved: 420,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Lowering the thermostat by 2 degrees during the winter saves 6% of heating-related CO2 emissions!",
      "This is a reduction of 420 pounds of CO2 per year!",
    ],
    linkToPurchase: "https://amzn.to/3UQy1TY",
    image: thermostat,
  },
  {
    id: "Nx1GnCYfCOP15lJRu2Yy",
    title: "Lower Water Temperature",
    type: "At-home Activities",
    description:
      " Water heaters are typically set at 140 degrees. However, at this temperature you are both at a risk of scalding and wasting energy. Turning down the temperature your water heater is set at can be an efficient way in helping to save the environment!",
    exp: 700,
    carbonRemoved: 160,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "You can save up to 22% of energy expenditure when you turn down your water heater!",
      "The average household whose water heater is set at 140 degrees loses up to $61 annually from standby heat loss.",
      "Overheated heaters cause build up in sediment which can damage the tank.",
    ],
    linkToPurchase: "https://amzn.to/3RsnvQ6",
    image: water_heater,
  },
  {
    id: "fYoRBdBeEMFT73caKATR",
    title: "Weatherize Home",
    type: "At-home Activities",
    description:
      "Weatherizing your home using caulk and weather stripping can dramatically reduce air leaks! Air leaks allow for heat to easily escape your home which drives up energy usage!",
    exp: 2000,
    carbonRemoved: 500,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Caulking costs less than $1 a window!",
      "Save up to 500kg of CO2 per year!",
      "Cauking allows for easier temperature regulation",
    ],
    linkToPurchase: "https://amzn.to/3CnWCsk",
    image: cauking,
  },
  {
    id: "k6iPoicWLtc4HrVPpHzQ",
    title: "Insulate Home",
    type: "At-home Activities",
    description:
      "Insulating your home is one of the easiest and cost-effective ways to reduce your carbon footprint! The more effective your insulation is, the less air that escapes and the less cooling or heating your house has to expend energy doing!",
    exp: 3000,
    carbonRemoved: 750,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Adding insulation can reduce your home’s carbon footprint by 30%!",
      "Save up to 15% on cooling and heating costs!",
      "Save up to $417 a year on energy expenditure!",
    ],
    linkToPurchase: "https://amzn.to/3TZJiRs",
    image: insulate,
  },
  {
    id: "l8kRPR79yqB4fTUwtpXb",
    title: "Wrap Water Heater",
    type: "At-home Activities",
    description:
      "Current models of heaters are not well insulated and require an insulating jacket.  Wrapping your water heater in an insulating jacket prevents your pipes from losing heat to outside air and can reduce the time it takes for water to heat up!",
    exp: 2000,
    carbonRemoved: 500,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "A cover can save up to 17% on energy bills",
      "Covers are only $50 making this a worthy investment!",
      "You can save up to 1100 lbs of CO2 per year for an electric water heater!",
    ],
    linkToPurchase: "https://amzn.to/3UR73vB",
    image: heater,
  },
  {
    id: "zbx4uW01ZlNp11j7EKlw",
    title: "Replace Air filter",
    type: "At-home Activities",
    description:
      "Replacing air filters reduces the amount of energy needed to run your HVAC system. Similarly, replacing dirty air filters allows for proper ventilation of the house which ensures you are getting enough oxygen in all rooms.",
    exp: 320,
    carbonRemoved: 80,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Replacing dirty air filters can also help prevent allergens from contaminating your airways! Keep your lungs safe!",
      "Save up to 15% on your energy bill by making your HVAC system more efficient!",
      "Replace your air filter a minimum of every three months.",
    ],
    linkToPurchase: "https://amzn.to/3CnBqCE",
    image: filter,
  },

  {
    id: "dsaofuhg87858324",
    title: "Plant a Tree",
    type: "Outdoor Activities",
    description:
      "Planting a tree is a well known but effective way to reduce carbon emissions. Trees absorb carbon dioxide from the atmosphere and store it. The best part? Trees continuously absorb carbon dioxide for decades on end making them a worthwhile investment.",
    exp: 100,
    carbonRemoved: 25,
    wasteRemoved: 5,
    waterSaved: 0,
    statistics: [
      "In one year a mature tree will absorb 25kg of carbon dioxide and release oxygen in exchange!",
      "Trees’ roots also help keep soil in place reducing erosion",
      "Trees also absorb heat and cool the ground beneath themselves",
    ],
    linkToPurchase: "https://amzn.to/3Rseart",
    image: treeGrowing,
  },

  {
    id: "a8s7dh785",
    title: "Check & Fix Any Water Leaks",
    type: "Conserve Water",
    description:
      "According to the EPA, the average household's leaks can account for nearly 10,000 gallons of water wasted every year and ten percent of homes have leaks that waste 90 gallons or more per day. Common types of leaks found in the home are worn toilet flappers, dripping faucets, and other leaking valves. ",
    exp: 360,
    carbonRemoved: 0,
    wasteRemoved: 0,
    waterSaved: 90,
    statistics: [
      "Check your water meter before and after a two-hour period when no water is being used",
      "Take a look at your water usage during a colder month, such as January or February. If a family of four exceeds 12,000 gallons per month, there are serious leaks.",
      "Examine faucet gaskets and pipe fittings for any water on the outside of the pipe to check for surface leaks.",
    ],
    linkToPurchase: "https://amzn.to/3CnBqCE",
    image: runningTap,
  },

  {
    id: "sdf6876r5tfd7s",
    title: "Start a Compost",
    type: "Outdoor Activities",
    description:
      "Composting organic waste versus landfilling can reduce more than 50% of carbon dioxide-equivalent greenhouse gas emissions of the waste. Composting is a natural way to provide nutrients to plants and enhances productivity while also storing carbon in the soil. Composts act as carbon sinks.",
    exp: 1652,
    carbonRemoved: 413,
    wasteRemoved: 240,
    waterSaved: 0,
    statistics: [
      "American families produce an average of 9kg of food waste a month",
      "Every kilogram of food thrown away results in 3.8kg of greehouse gas emissions",
      "Begin composting to reduce this number by 50%! Boost your plants while lowering carbon emissions!",
    ],
    linkToPurchase: "https://amzn.to/3SFJjJv",
    image: compost,
  },
  {
    id: "23946374932",
    title: "Leave grass clippings on the yard",
    type: "Outdoor Activities",
    description:
      "Leaving your grass clippings in the yard may seem counterintuitive, but doing so actually saves you time while also helping the environment.",
    exp: 20,
    carbonRemoved: 1,
    wasteRemoved: 3,
    waterSaved: 2,
    statistics: [
      "Leaving lawn clippings out provides your lawn with free food. As the clippings decompose, nitrogen and potassium are absorbed by the soil.",
      "Clippings in fact do not cause thatch and are mostly made of water.",
      "Saves the need to buy environmentally unfriendly fertilizer.",
      "If you see signs of lawn disease, do throw away your clippings to prevent the disease from spreading.",
    ],
    linkToPurchase: "https://amzn.to/3MFC2ad",
    image: grass,
  },
];
