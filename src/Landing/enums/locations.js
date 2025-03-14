const Puzzles = [
    {
      title: "The Arcane Tablet",
      path: "/tablet",
      background: "assets/showcase-images/rotating-tablet.png",
      description: "An interactive puzzle for DMs to use",
    },
  ];

  const Tools = [
    {
      title: "Easy Map Grids",
      path: "/map-grids",
      background: "assets/showcase-images/grids.png",
      description: "An easy-to-use, click-and-load grid for maps",
    },
    {
      title: "Background Assist",
      path: "/backgrounds",
      background: "assets/showcase-images/backgroundAssist.png",
      description: "Click and choose \"adventure\" for determining newer player's backgrounds",
    },
  ];

  const Generators = [
    {
      title: "Random Potions",
      path: "/potions",
      background: "assets/showcase-images/potions.png",
      description: "A random potion generator",
    },

    {
      title: "Character Generator",
      path: "/character-generator",
      background: "assets/showcase-images/character-generator.png",
      description: "A simple character personality generator for practicing DMs",
    },
    {
      title: "NPC Quick Stats",
      path: "/quick-stats",
      background: "assets/showcase-images/stats-generator.png",
      description: "A simple character stats generator for practicing DMs",
    },
  ];

  
  const Loaders = [
    {
      title: "Controller",
      path: "/loader/controller",
      background: "assets/showcase-images/loader_controller.png",
      description: "Used to control the fluid loader",
    },
    {
      title: "Fluid Loader",
      path: "/loader/fluid",
      background: "assets/showcase-images/loader_fluid.png",
      description: "A mystical fluid animation to display while you're not using a screen - supports images as well",
    },
  ];

  const GridList = {
    "Tools": Tools,
    "Generators": Generators,
    "Puzzles": Puzzles,
    "Loaders": Loaders
  }

  export const SortedGridList = Object.fromEntries(
    Object.entries(GridList).sort((a, b) => b[1].length - a[1].length)
  );