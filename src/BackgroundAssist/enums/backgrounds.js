// Result class definition
class Result {
    constructor(name, description, url, externalURL) {
      this.name = name;
      this.description = description;
      this.url = url;
      this.externalURL = externalURL;
    }
  }
  
  const baseUrl = "https://dnd5e.wikidot.com/background:";
  
  // Background endings
  const acolyte = new Result(
    "Acolyte",
    "You have spent your life in the service of a temple to a specific deity, learning sacred rites and offering sacrifices to the gods.",
    "https://i.pinimg.com/236x/14/21/fb/1421fb7aa75b3d9be126ada2621ab8fa.jpg",
    `${baseUrl}acolyte`
  );
  
  const charlatan = new Result(
    "Charlatan",
    "You have always had a way with people, convincing them of your sincerity and using your charm to your advantage.",
    "https://i.pinimg.com/236x/af/6d/03/af6d03208abe8fc7ff692726fb615922.jpg",
    `${baseUrl}charlatan`
  );
  
  const criminal = new Result(
    "Criminal",
    "You have a history of breaking the law, with a particular set of skills useful for illicit activities.",
    "https://i.pinimg.com/236x/06/3b/1e/063b1e222ba33b63f34cc47097a5e0bd.jpg",
    `${baseUrl}criminal`
  );
  
  const entertainer = new Result(
    "Entertainer",
    "You thrive in front of an audience, captivating them with your performances and becoming the center of attention.",
    "https://i.pinimg.com/474x/a9/d8/19/a9d8197d34430248951ee00893bb11ae.jpg",
    `${baseUrl}entertainer`
  );
  
  const folkHero = new Result(
    "Folk Hero",
    "You come from humble beginnings but have shown extraordinary courage or leadership, becoming a hero to the common people.",
    "https://i.pinimg.com/236x/dd/e7/e7/dde7e7ce2ec917a26de8324b292874fb.jpg",
    `${baseUrl}folk-hero`
  );
  
  const guildArtisan = new Result(
    "Guild Artisan",
    "You are a member of a guild of craftsmen, skilled in a particular trade and respected within your community.",
    "https://i.pinimg.com/236x/b5/ce/7e/b5ce7e58e524fdb4592355bedf24838f.jpg",
    `${baseUrl}guild-artisan`
  );
  
  const hermit = new Result(
    "Hermit",
    "You have lived in seclusion, away from society, seeking spiritual enlightenment or pursuing a quiet life.",
    "https://i.pinimg.com/236x/25/6d/84/256d841abe3c8bf7bb15a2d57d404162.jpg",
    `${baseUrl}hermit`
  );
  
  const noble = new Result(
    "Noble",
    "You were born into a family of high social rank, accustomed to privilege and wielding influence over others.",
    "https://i.pinimg.com/236x/c0/de/81/c0de813be18dac8a80154d595a0fc7a2.jpg",
    `${baseUrl}noble`
  );
  
  const outlander = new Result(
    "Outlander",
    "You grew up in the wilds, far from civilization, and are familiar with the ways of the wilderness.",
    "https://i.pinimg.com/236x/8a/7f/42/8a7f42ddd06b869b72f6eac95e1115c6.jpg",
    `${baseUrl}outlander`
  );
  
  const sage = new Result(
    "Sage",
    "You have spent years studying the lore of the multiverse, seeking knowledge and understanding of the deeper mysteries.",
    "https://i.pinimg.com/474x/f0/34/a0/f034a0d478c9669a55e14365de35d027.jpg",
    `${baseUrl}sage`
  );
  
  const sailor = new Result(
    "Sailor",
    "You have sailed the seas, facing the dangers of the deep and becoming adept at life aboard a ship.",
    "https://i.pinimg.com/236x/89/93/b6/8993b69a3bb9410f358e18908a72f05e.jpg",
    `${baseUrl}sailor`
  );
  
  const soldier = new Result(
    "Soldier",
    "You have served in a military capacity, trained in combat and experienced in following orders on the battlefield.",
    "https://i.pinimg.com/236x/61/1c/84/611c845f0dd2b69ea4d4f27f212e85af.jpg",
    `${baseUrl}soldier`
  );
  
  const urchin = new Result(
    "Urchin",
    "You grew up on the streets, learning to fend for yourself and navigate the challenges of urban life.",
    "https://i.pinimg.com/236x/2a/e2/a9/2ae2a9a447a63a054708fff4e12289ec.jpg",
    `${baseUrl}urchin`
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
  