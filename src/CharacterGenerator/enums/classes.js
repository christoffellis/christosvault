// Function to calculate proficiency bonus based on level
const getProficiencyBonus = (level) => Math.floor((level - 1) / 4) + 2;

// Function to roll hit points based on hit die
const calculateHitPoints = (level, hitDie) => {
  let totalHP = hitDie + Math.floor(Math.random() * hitDie) + 1; // Roll for level 1
  for (let i = 2; i <= level; i++) {
    totalHP += Math.floor(Math.random() * hitDie) + 1; // Roll hit die for additional levels
  }
  return totalHP;
};

export const Classes = {
    Barbarian: (level) => {
        return {
            className: "Barbarian",
            level: level,
            speed: 30,
            hitPoints: calculateHitPoints(level, 12),
            proficiencyBonus: getProficiencyBonus(level),
        };
    },
    Bard: (level) => {
        return {
            className: "Bard",
            level: level,
            speed: 30,
            hitPoints: calculateHitPoints(level, 8),
            proficiencyBonus: getProficiencyBonus(level),
            spellSlots: {
            1: [2, 3, 4, 4, 4, 4, 4, 4, 4, 4],
            2: [0, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            3: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3],
            4: [0, 0, 0, 1, 3, 3, 3, 3, 3, 3],
            5: [0, 0, 0, 0, 1, 2, 3, 3, 3, 3],
            6: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3],
            7: [0, 0, 0, 0, 0, 0, 1, 2, 3, 3],
            8: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
            9: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2]
            },
        };
    },
        
    Cleric: (level) => {
        return {
          className: "Cleric",
          level: level,
          speed: 30,
          hitPoints: calculateHitPoints(level, 8),
          proficiencyBonus: getProficiencyBonus(level),
          spellSlots: {
            1: [2, 3, 4, 4, 4, 4, 4, 4, 4, 4],
            2: [0, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            3: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3],
            4: [0, 0, 0, 1, 3, 3, 3, 3, 3, 3],
            5: [0, 0, 0, 0, 1, 2, 3, 3, 3, 3],
            6: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3],
            7: [0, 0, 0, 0, 0, 0, 1, 2, 3, 3],
            8: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
            9: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2]
          },
        };
    },
    

    Druid: (level) => {
        return {
        className: "Druid",
        level: level,
        speed: 30,
        hitPoints: calculateHitPoints(level, 8),
        proficiencyBonus: getProficiencyBonus(level),
        spellSlots: {
            1: [2, 3, 4, 4, 4, 4, 4, 4, 4, 4],
            2: [0, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            3: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3],
            4: [0, 0, 0, 1, 3, 3, 3, 3, 3, 3],
            5: [0, 0, 0, 0, 1, 2, 3, 3, 3, 3],
            6: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3],
            7: [0, 0, 0, 0, 0, 0, 1, 2, 3, 3],
            8: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
            9: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2]
        },
        };
    },

    Fighter: (level) => {
        return {
          className: "Fighter",
          level: level,
          speed: 30,
          hitPoints: calculateHitPoints(level, 10),
          proficiencyBonus: getProficiencyBonus(level),
        };
    },
    
    Monk: (level) => {
        return {
          className: "Monk",
          level: level,
          speed: 30 + (level >= 2 ? 10 : 0) + (level >= 6 ? 5 : 0) + (level >= 10 ? 5 : 0), // Unarmored Movement bonus
          hitPoints: calculateHitPoints(level, 8),
          proficiencyBonus: getProficiencyBonus(level),
        };
    },
    
    Paladin: (level) => {
        return {
          className: "Paladin",
          level: level,
          speed: 30,
          hitPoints: calculateHitPoints(level, 10),
          proficiencyBonus: getProficiencyBonus(level),
          spellSlots: {
            1: [2, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            2: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3],
            3: [0, 0, 0, 0, 2, 3, 3, 3, 3, 3],
            4: [0, 0, 0, 0, 0, 0, 2, 3, 3, 3],
            5: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3]
          },
        };
    },
    
    Ranger: (level) => {
        return {
          className: "Ranger",
          level: level,
          speed: 30,
          hitPoints: calculateHitPoints(level, 10),
          proficiencyBonus: getProficiencyBonus(level),
          spellSlots: {
            1: [2, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            2: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3],
            3: [0, 0, 0, 0, 2, 3, 3, 3, 3, 3],
            4: [0, 0, 0, 0, 0, 0, 2, 3, 3, 3],
            5: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3]
          },
        };
    },
    
    Rogue: (level) => {
        return {
          className: "Rogue",
          level: level,
          speed: 30,
          hitPoints: calculateHitPoints(level, 8),
          proficiencyBonus: getProficiencyBonus(level),
        };
},
    
    Sorcerer: (level) => {
        return {
          className: "Sorcerer",
          level: level,
          speed: 30,
          hitPoints: calculateHitPoints(level, 6),
          proficiencyBonus: getProficiencyBonus(level),
          spellSlots: {
            1: [2, 3, 4, 4, 4, 4, 4, 4, 4, 4],
            2: [0, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            3: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3],
            4: [0, 0, 0, 1, 3, 3, 3, 3, 3, 3],
            5: [0, 0, 0, 0, 1, 2, 3, 3, 3, 3],
            6: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3],
            7: [0, 0, 0, 0, 0, 0, 1, 2, 3, 3],
            8: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
            9: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2]
          },
        };
    },
    
    Warlock: (level) => {
        return {
          className: "Warlock",
          level: level,
          speed: 30,
          hitPoints: calculateHitPoints(level, 8),
          proficiencyBonus: getProficiencyBonus(level),
          spellSlots: {
            1: [2, 3, 4, 4, 4, 4, 4, 4, 4, 4],
            2: [0, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            3: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3],
            4: [0, 0, 0, 1, 3, 3, 3, 3, 3, 3],
            5: [0, 0, 0, 0, 1, 2, 3, 3, 3, 3],
            6: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3],
            7: [0, 0, 0, 0, 0, 0, 1, 2, 3, 3],
            8: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
            9: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2]
          },
        };
    },
    
      Wizard: (level) => {
        return {
          className: "Wizard",
          level: level,
          speed: 30,
          hitPoints: calculateHitPoints(level, 6),
          proficiencyBonus: getProficiencyBonus(level),
          spellSlots: {
            1: [2, 3, 4, 4, 4, 4, 4, 4, 4, 4],
            2: [0, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            3: [0, 0, 2, 3, 3, 3, 3, 3, 3, 3],
            4: [0, 0, 0, 1, 3, 3, 3, 3, 3, 3],
            5: [0, 0, 0, 0, 1, 2, 3, 3, 3, 3],
            6: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3],
            7: [0, 0, 0, 0, 0, 0, 1, 2, 3, 3],
            8: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
            9: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2]
          },
        };
    },
    
};

export const classColorMap = {
    "Barbarian": "#F4A5A5",  // Light Red (Fiery / Fury)
    "Bard": "#D48ED4",       // Light Purple (Creative / Artistic)
    "Cleric": "#FFF59D",     // Light Yellow (Divine / Holy)
    "Druid": "#A5D6A7",      // Light Green (Nature / Balance)
    "Fighter": "#90CAF9",    // Light Blue (Strong / Determined)
    "Monk": "#FFAB91",       // Light Orange (Discipline / Tranquility)
    "Paladin": "#FFEB3B",    // Light Amber (Noble / Righteous)
    "Ranger": "#A5D6A7",     // Light Green (Wild / Adventurous)
    "Rogue": "#B0BEC5",      // Light Blue-gray (Stealthy / Cunning)
    "Sorcerer": "#D1A0D6",   // Light Purple (Mystical / Innate Power)
    "Warlock": "#B39DDB",    // Light Deep Purple (Arcane / Pact-bound)
    "Wizard": "#81D4FA"      // Light Blue (Intelligent / Arcane Mastery)
};

  
