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
import woodChips from "../../assets/images/wood-chips.jpeg";
import marigolds from "../../assets/images/marigolds.jpeg";
import mower from "../../assets/images/mower.jpeg";
import clothesLine from "../../assets/images/clothesLine.jpeg";
import solarPoweredLight from "../../assets/images/solarPoweredLight.jpeg";
import dog from "../../assets/images/dog.jpeg";
import waterBarrel from "../../assets/images/waterBarrel.jpeg";
import veggieMeal from "../../assets/images/veggieMeal.jpeg";
import mug from "../../assets/images/mug.jpeg";
import reusableUtensils from "../../assets/images/reusableUtensils.jpeg";
import homeMadeFood from "../../assets/images/homeMadeFood.jpeg";
import paperStraw from "../../assets/images/paperStraw.jpeg";
import reusableWaterBottle from "../../assets/images/reusableWaterBottle.jpeg";
import bike from "../../assets/images/bike.jpeg";
import walk from "../../assets/images/walk.jpeg";
import workAtHome from "../../assets/images/workAtHome.jpeg";
import publicTransport from "../../assets/images/publicTransport.jpeg";
import carpool from "../../assets/images/carpool.jpeg";
import tesla from "../../assets/images/tesla.jpeg";
import leak from "../../assets/images/leak.jpeg";
import toilet from "../../assets/images/toilet.jpeg";
import toiletFlush from "../../assets/images/toiletFlush.jpeg";
import shower from "../../assets/images/shower.jpeg";
import ink from "../../assets/images/ink.jpeg";
import thrift from "../../assets/images/thrift.jpeg";
import bottles from "../../assets/images/bottles.jpeg";

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
    type: "Save Water",
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
  {
    id: "7264hx870y3",
    title: "Use recycled wood chips as mulch",
    type: "Outdoor Activities",
    description:
      "Wood chips do not only look nice but are also great for the environment! Recycling dead trees not only prevents them from ending up in the dump, but also provides a method to reduce nitrous oxide emissions.",
    exp: 368,
    carbonRemoved: 22,
    wasteRemoved: 30,
    waterSaved: 40,
    statistics: [
      "Using mulch can cut nitrous oxide emissions up to 28%",
      "Nitrous oxide is 300x more potent than carbon dioxide",
      "Mulched areas show a 74% reduction in soil nitrates which can leach into groundwater",
      "Helps to lock moisture into the ground",
    ],
    linkToPurchase: "https://amzn.to/3rNY4xZ",
    image: woodChips,
  },
  {
    id: "h18236gx87213",
    title: "Plant marigolds not pesticides",
    type: "Outdoor Activities",
    description:
      "We all know that pests are a gardener’s worst enemy. However, you can fight them off without resorting to the use of chemical pesticides. Planting marigolds in your garden is a cheap, effective, and chemical-free pest control method",
    exp: 40,
    carbonRemoved: 2,
    wasteRemoved: 3,
    waterSaved: 5,
    statistics: [
      "Marigolds are effective in repelling nematodes, tiny worms that feed on plant roots.",
      "Many gardeners also believe that marigolds repel slugs, snails, beetles, and caterpillars.",
      "Mulched areas show a 74% reduction in soil nitrates which can leach into groundwater",
      "Planting plants also helps reduce erosion of soil!",
    ],
    linkToPurchase: "https://amzn.to/3MyB4g4",
    image: marigolds,
  },
  {
    id: "27864dh73864",
    title: "Electric mower > gas mower",
    type: "Outdoor Activities",
    description:
      "Lawn mowers may seem harmless but in fact produce up to 5% of the United States’ air pollution. To reduce emissions, switch over to an electric lawn mower which produces fewer fumes and is a net positive to the environment.",
    exp: 300,
    carbonRemoved: 74,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "54 million Amerians mow their lawns using 800 millions gallons of gas a year",
      "This produces up to 5% of the United States’ air pollution",
      "The average lawn mower contributes 88kg of CO2 per year. Electric lawn mowers produce only 14.4kg a year!",
    ],
    linkToPurchase: "https://amzn.to/3TdP1ly",
    image: mower,
  },
  {
    id: "c129h78",
    title: "Dry clothes outside",
    type: "Outdoor Activities",
    description:
      "It’s time to go back to the good ol’ days! Using a clothesline to dry clothes is an efficient and cost effective way to reduce carbon emissions. No wonder there is a national Hanging Out Day!",
    exp: 30,
    carbonRemoved: 10.2,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Electricity costs from drying clothes can total up to $120 a year",
      "If you pledge to line dry your clothes just half the time, we will save 521kg of CO2 emissions! This is the work of 23 trees!",
    ],
    linkToPurchase: "https://amzn.to/3fR4ZDJ",
    image: clothesLine,
  },
  {
    id: "87c2h123",
    title: "Buy solar powered lights",
    type: "Outdoor Activities",
    description:
      "Solar-powered lights are a cheap, energy efficient way to reduce carbon emissions. Solar-powered lights do not require any electricity to run and instead are powered by the sun. As a plus, they only turn on when you want them to!",
    exp: 120,
    carbonRemoved: 30,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "You can save anywhere between $0.25 to $0.4 per day when using solar powered lamps",
      "This amounts to $91.25 to $146 annually!",
      "Save up to 90% of energy per kilowatt when using solar paneled lights",
    ],
    linkToPurchase: "https://amzn.to/3yYrw8D",
    image: solarPoweredLight,
  },
  {
    id: "j289174h",
    title: "No doggy doo",
    type: "Outdoor Activities",
    description:
      "Dog waste isn’t just a hazard to your shoes, it is also the cause of pollution in rivers and streams. Dog poop contains nitrogen and phosphorus which can promote the growth of harmful algae and also deplete fish of oxygen they require.",
    exp: 14,
    carbonRemoved: 3.5,
    wasteRemoved: 1,
    waterSaved: 0,
    statistics: [
      "U.S. households own over 70 million dogs! That’s a lot of poop!",
      "There are about 10 million tons of dog poop produced per year!",
      "Pest waste carries bacteria, parasites, and other diseases that can be transmitted to humans.",
    ],
    linkToPurchase: "https://amzn.to/3yQegTj",
    image: dog,
  },
  {
    id: "j876h087t87ht",
    title: "Buy a water barrel",
    type: "Outdoor Activities",
    description:
      "Water barrels are a slightly uncommon but very effective way to reduce water waste. A rain barrel will save on average about 1,300 gallons of water during the peak summer months.",
    exp: 100,
    carbonRemoved: 0,
    wasteRemoved: 0,
    waterSaved: 25,
    statistics: [
      "A rain barrel lowers water bills by about $35 a month in the summer.",
      "Considering rain barrels cost only $50-$200, this is a worthwhile investment.",
    ],
    linkToPurchase: "https://amzn.to/3T5KAJR",
    image: waterBarrel,
  },
  {
    id: "3284g897234",
    title: "Meatless Monday",
    type: "Food & Drink",
    description:
      "We all know that veggies are healthy, but they can also help reduce carbon emissions! For example, cows can burp up to 100kg of methane per year. In comparison, plants burp zero!",
    exp: 12516,
    carbonRemoved: 9,
    wasteRemoved: 0,
    waterSaved: 4163,
    statistics: [
      "If every American stopped eating meat for just a day each week, in one year around 1.4 billions animals would be spared.",
      "It takes around 1,700 gallons of water to produce a single pound of beef. In comparison, only 39 gallons of water are needed to produce a pound of vegetables.",
      "You save more water by not eating 450 grams of steak than you would by not showering for two months. Crazy right!",
      "Many scientists believe not eating meat is the singular best thing you can do for the environment.",
    ],
    linkToPurchase: "https://amzn.to/3Te0Ubs",
    image: veggieMeal,
  },
  {
    id: "3482t234",
    title: "<3 mug",
    type: "Food & Drink",
    description:
      "We all love getting a fresh cup of coffee in a brand new cup, but doing so is harmful for the environment. Instead, bring your own reusable coffee mug which can be easily refilled. Save on money and save on emissions!",
    exp: 8,
    carbonRemoved: 2.4,
    wasteRemoved: 0.2,
    waterSaved: 0,
    statistics: [
      "If you average one take-away coffee on weekdays, you’ll save roughly 80-120kg of CO2 a year if you switch to a reusable cup.",
      "Once a reusable cup has been used more than 15 times, it becomes more sustainable than a disposable cup.",
      "There are 500 billion disposable coffee cups that end up in a landfill globally each year",
    ],
    linkToPurchase: "https://amzn.to/3eKsqyA",
    image: mug,
  },
  {
    id: "237846h87324",
    title: "Use Reusable Utensils",
    type: "Food & Drink",
    description:
      "Many “compostable” bioplastic foodware are marked as green but in practice are almost always landfilled. Instead, ensure you are doing the environmentally safe thing by using reusable utensils.",
    exp: 120,
    carbonRemoved: 0.5,
    wasteRemoved: 0.2,
    waterSaved: 39,
    statistics: [
      "Producing just one pound of plastic cutlery can take up to 78 liters of water and release 1.13kg of CO2.",
      "Polypropylene and polystyrene, the two main plastics used in cutlery, take up to 400 years to photodegrade.",
      "By 2050, we will have more plastic than fish in the ocean.",
    ],
    linkToPurchase: "https://amzn.to/3g9BHk2",
    image: reusableUtensils,
  },
  {
    id: "sdj98f7ds",
    title: "Pack a lunch",
    type: "Food & Drink",
    description:
      "Who doesn’t like home-made food? Packing your own food allows you to cut down on unnecessary waste created by food packaging. Be in control of your meals!",
    exp: 120,
    carbonRemoved: 2,
    wasteRemoved: 0.5,
    waterSaved: 0,
    statistics: [
      "70% of our plastic waste comes from plastic packaging!",
      "Opting to use your own reusable food storage items such as lunch boxes, reusable food bags and eco-friendly cutlery will help you to greatly reduce the amount of plastic you purchase and throw away.",
      "Save up to $400 a year from packing an eco-friendly meal!",
    ],
    linkToPurchase: "https://amzn.to/3g9BHk2",
    image: homeMadeFood,
  },
  {
    id: "h82734h234",
    title: "Use a paper straw",
    type: "Food & Drink",
    description:
      "We have all seen that local coffee shop switching to paper straws (cough cough Starbucks), but how effective is this? Well, by using a paper straw you are saving around 0.08 grams of CO2 emissions. Worth it? Up to you.",
    exp: 120,
    carbonRemoved: 0.01,
    wasteRemoved: 0.0004,
    waterSaved: 0,
    statistics: [
      "A single plastic straw is responsible for 1.46 grams of CO2 emissions and costs $0.003.",
      "A single paper straw releases 1.38 grams CO2 emissions and costs $0.04.",
      "1,000 turtles die annually from digesting plastic.",
    ],
    linkToPurchase: "https://amzn.to/3EK9xX9",
    image: paperStraw,
  },
  {
    id: "h12873612",
    title: "Use Reusable Water Bottles",
    type: "Food & Drink",
    description:
      "Most of us own a reusable water bottle, but how often do we use it? After refilling a reusable water bottle about 17 times, you start to have a positive effect on the environment saving about 54 grams CO2 per refill.",
    exp: 5,
    carbonRemoved: 0.054,
    wasteRemoved: 0.01,
    waterSaved: 0,
    statistics: [
      "A single use plastic water bottle creates about 56 grams of CO2 emissions during its lifetime.",
      "In comparison, refilling a reusable water bottle creates about 2 grams of CO2 emissions.",
      "In one year of using a reusable water bottle, you will have reduced your carbon footprints by around 19kg!",
      "The average American can save $1,236 a year from using a reusable water bottle over a plastic one!",
    ],
    linkToPurchase: "https://amzn.to/3yEiYDl",
    image: reusableWaterBottle,
  },
  {
    id: "kdsfjwdpifh",
    title: "Ride a bike",
    type: "Transportation",
    description:
      "Choosing to bike instead of drive is a daunting feat but well worthwhile. Choosing a bike saves about 0.255kg of CO2 per kilometer. The only emissions caused by biking is from the food you consume!",
    exp: 2,
    carbonRemoved: 0.255,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Biking is one of the healthiest activities to pursue.",
      "A car produces about 0.313kg of CO2 per kilometer.",
      "A bike produces about 0.016kg of CO2 per kilometer.",
      "If you choose to bike to work instead of drive you will save around 1361kg CO2 a year.",
    ],
    linkToPurchase: "https://amzn.to/3gi1pmt",
    image: bike,
  },
  {
    id: "9283rt932",
    title: "Choose to walk",
    type: "Transportation",
    description:
      "Choosing to walk instead of driving is a great way to get exercise while also helping the environment. Just be sure to skip the meat at your next meal!",
    exp: 2,
    carbonRemoved: 0.28,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Walking releases 75% less greenhouse gasses than driving",
      "Cars contribute to 26% of all man made greenhouse gasses released into the atmosphere",
      "However, be careful. Walking can actually be up to 2x worse for the environment than driving depending on what you eat afterwards. Be sure to skip the meat and go for the veggies at your next meal.",
    ],
    linkToPurchase: "https://amzn.to/3D5FibS",
    image: walk,
  },
  {
    id: "8h7232349",
    title: "Skip the commute",
    type: "Transportation",
    description:
      "Who doesn’t love working at home? Logging on via Zoom skips the commute while also giving you those precious moments of free time at home.",
    exp: 50,
    carbonRemoved: 21,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "The average person travels 66 kilometers to and from work",
      "This amount to 20.65kg of CO2 emitted per day",
      "Skipping the commute allows you to save this amount! Better for the environment and your time.",
    ],
    linkToPurchase: "https://amzn.to/3ERNei5",
    image: workAtHome,
  },
  {
    id: "28364h179",
    title: "Public Transport",
    type: "Transportation",
    description:
      "Public transport not only saves us money but is also one of the best ways to help the environment.",
    exp: 20,
    carbonRemoved: 5,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Public transport in the U.S. saves 37 million tons of carbon dioxide annually.",
      "U.S. public transportation use saved 865 million hours in travel time due to reduced traffic.",
      "Public transport reduces carbon dioxide emissions from transportation by roughly 45%.",
    ],
    linkToPurchase: "https://amzn.to/3TdpV6O",
    image: publicTransport,
  },
  {
    id: "812746h2814",
    title: "Travel with friends",
    type: "Transportation",
    description:
      "Who doesn’t like to travel with friends? The Earth certainly does. In Paris, carpooling saved 1.6 million tons of CO2.",
    exp: 20,
    carbonRemoved: 5,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "Carpooling can reduce the carbon footprint of an average household by up to 907kg annually",
      "If every commuting vehicle carried one additional passenger, 33 million gallons of gas would be saved per day.",
      "Cutting 25 miles a week from your driving saves 680kg of CO2.",
    ],
    linkToPurchase: "https://amzn.to/3TdpV6O",
    image: carpool,
  },
  {
    id: "12h89746124",
    title: "Ride in style",
    type: "Transportation",
    description:
      "Electric vehicles are quickly becoming the new trend! Due to their fuel efficiency, quick acceleration, and overall benefit to the environment, it is no wonder why many countries are aiming to be 100% electric.",
    exp: 40,
    carbonRemoved: 10,
    wasteRemoved: 0,
    waterSaved: 0,
    statistics: [
      "In Europe, electric cars emit three times less CO2 than petrol cars",
      "While electric cars still do require energy, because they are more fuel efficient and can have their energy source replaced by renewables, they are a great way to help the environment.",
      "The average electric vehicle costs $66,000.",
    ],
    linkToPurchase: "https://amzn.to/3eKiRzB",
    image: tesla,
  },
  {
    id: "3246234",
    title: "Check and fix any water leaks",
    type: "Save Water",
    description:
      "According to the EPA, the average household's leaks can account for nearly 10,000 gallons of water wasted every year and ten percent of homes have leaks that waste 90 gallons or more per day. Common types of leaks found in the home are worn toilet flappers, dripping faucets, and other leaking valves. ",
    exp: 200,
    carbonRemoved: 0,
    wasteRemoved: 0,
    waterSaved: 50,
    statistics: [
      "Check your water meter before and after a two-hour period when no water is being used.",
      "Take a look at your water usage during a colder month, such as January or February. If a family of four exceeds 12,000 gallons per month, there are serious leaks.",
      "Examine faucet gaskets and pipe fittings for any water on the outside of the pipe to check for surface leaks.",
    ],
    linkToPurchase: "https://amzn.to/3TbtD0B",
    image: leak,
  },
  {
    id: "h01284612",
    title: "Install toilet tank banks",
    type: "Save Water",
    description:
      "According to the US Environmental Protection Agency, the toilet contributes to approximately 27 percent of all residential water consumption. The toilet tank bank is a simple device that can be installed in a few minutes, and will save water through the toilet as long as it is installed. It can even help block odors!",
    exp: 400,
    carbonRemoved: 0,
    wasteRemoved: 0,
    waterSaved: 120,
    statistics: [
      "Simple, quick one time setup",
      "Costs $5.49 per toilet tank bank",
      "Can save 0.8 gallons per flush",
    ],
    linkToPurchase: "https://amzn.to/3g6XzfJ",
    image: toilet,
  },
  {
    id: "87h3246h",
    title: "Avoid the flush",
    type: "Save Water",
    description:
      "Believe it or not, not flushing your pee everytime doesn’t actually spread germs, but it does save quite a bit of water for the good of our planet! Not to mention the water bill money it can save you per year. Though if you choose to do this, you should clean your toilet with mild cleaners at least twice a week, as the combination of urine and hard water could leave a “ring” on the side of the bowl over time. If you end up cleaning that with harsh chemical cleaners, the environmental impacts are much higher than just flushing every time.",
    exp: 15,
    carbonRemoved: 0,
    wasteRemoved: 0,
    waterSaved: 15,
    statistics: [
      "Pee is almost entirely sterile!",
      "The average person uses 9.6 gallons of water per day to flush.",
      "If you flush every third time, you could save 6.4 gallons of water per day.",
      "That's 2336 gallons per year!",
    ],
    linkToPurchase: "https://amzn.to/3ETuaA6",
    image: toiletFlush,
  },
  {
    id: "h218746sad",
    title: "Timed Shower",
    type: "Save Water",
    description:
      "On average, every minute of shower use uses around 2 gallons of water, and the shower of an average American lasts about 8 minutes. If you’re the person that takes 30-minute showers, you’re using around 60 gallons of water each time! According to the Environmental Protection Agency, if every American cut their shower time by one minute, we would save 165 billion gallons of water per year.",
    exp: 244,
    carbonRemoved: 0,
    wasteRemoved: 0,
    waterSaved: 61,
    statistics: [
      "Set a timer",
      "Even better, creating a 7 minute shower playlist can help you keep track of how long you’ve been in the shower and remind you when you should be getting out. ",
      "Stick to a shower routine so you can save the time you spend deciding whether to wash your hair or shave your legs",
    ],
    linkToPurchase: "https://amzn.to/3yQpDuz",
    image: shower,
  },
  {
    id: "p98yrb-92",
    title: "Reuse ink cartridges",
    type: "Reduce Trash",
    description:
      "You can refill your ink cartridges up to four times! Creating an ink cartridge puts about 10.5 pounds of CO2 into the atmosphere. Simple refilling your cartridges can have a huge impact on the environment.",
    exp: 95,
    carbonRemoved: 32,
    wasteRemoved: 0.5,
    waterSaved: 0,
    statistics: [
      "There are over 300 million cartridges disposed of every year",
      "Plastics used in ink cartridges can take between 450 to 1000 years to completely decompose",
    ],
    linkToPurchase: "https://amzn.to/3TpHccQ",
    image: ink,
  },
  {
    id: "p98yrb-92194t2y",
    title: "Go thrifting",
    type: "Reduce Trash",
    description:
      "You never know what unique pieces you might find at a local thrift store! Plus, it helps the environment tremendously by keeping clothes away from landfills and saving the water used to produce the cotton used in clothes.",
    exp: 300,
    carbonRemoved: 20,
    wasteRemoved: 10,
    waterSaved: 150,
    statistics: [
      "Over 400 gallons of water is used to produce cotton for just one t-shirt",
      "A dress purchased second hand can save up to 21.4 pounds of carbon dioxide emissions",
      "A second-hand handbag can save over 200 pounds of carbon emissions compared to purchasing one new",
    ],
    linkToPurchase: "https://amzn.to/3TBrNGp",
    image: thrift,
  },
  {
    id: "9374b623df",
    title: "Recycle Bottles",
    type: "Reduce Trash",
    description:
      "Plastic water bottles occupy valuable space in landfills, where they take 450 years to disintegrate, pollute the ocean, damage the natural environment, and may even end up in our water! Yes, harmful chemicals in plastics can contaminate water bodies when not recycled properly, and possibly end up in our drinking water.",
    exp: 2,
    carbonRemoved: 0.43,
    wasteRemoved: 2,
    waterSaved: 0,
    statistics: [
      "Only 9% of all plastic is recycled",
      "Only 30% of plastic water bottles end up in the recycle bin",
    ],
    linkToPurchase: "https://amzn.to/3s70V5q",
    image: bottles,
  },
];
