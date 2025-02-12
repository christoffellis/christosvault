// Result class definition
class Result {
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  }
  
  // Background endings
  const acolyte = new Result(
    "Acolyte",
    "You have spent your life in the service of a temple to a specific deity, learning sacred rites and offering sacrifices to the gods."
  );
  
  const charlatan = new Result(
    "Charlatan",
    "You have always had a way with people, convincing them of your sincerity and using your charm to your advantage."
  );
  
  const criminal = new Result(
    "Criminal",
    "You have a history of breaking the law, with a particular set of skills useful for illicit activities."
  );
  
  const entertainer = new Result(
    "Entertainer",
    "You thrive in front of an audience, captivating them with your performances and becoming the center of attention."
  );
  
  const folkHero = new Result(
    "Folk Hero",
    "You come from humble beginnings but have shown extraordinary courage or leadership, becoming a hero to the common people."
  );
  
  const guildArtisan = new Result(
    "Guild Artisan",
    "You are a member of a guild of craftsmen, skilled in a particular trade and respected within your community."
  );
  
  const hermit = new Result(
    "Hermit",
    "You have lived in seclusion, away from society, seeking spiritual enlightenment or pursuing a quiet life."
  );
  
  const noble = new Result(
    "Noble",
    "You were born into a family of high social rank, accustomed to privilege and wielding influence over others."
  );
  
  const outlander = new Result(
    "Outlander",
    "You grew up in the wilds, far from civilization, and are familiar with the ways of the wilderness."
  );
  
  const sage = new Result(
    "Sage",
    "You have spent years studying the lore of the multiverse, seeking knowledge and understanding of the deeper mysteries."
  );
  
  const sailor = new Result(
    "Sailor",
    "You have sailed the seas, facing the dangers of the deep and becoming adept at life aboard a ship."
  );
  
  const soldier = new Result(
    "Soldier",
    "You have served in a military capacity, trained in combat and experienced in following orders on the battlefield."
  );
  
  const urchin = new Result(
    "Urchin",
    "You grew up on the streets, learning to fend for yourself and navigate the challenges of urban life."
  );
  
  // Exporting the results
  export const backgroundEndings = {
    acolyte,
    charlatan,
    criminal,
    entertainer,
    folkHero,
    guildArtisan,
    hermit,
    noble,
    outlander,
    sage,
    sailor,
    soldier,
    urchin,
  };
  