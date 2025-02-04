const url = "https://dnd5e.wikidot.com/spell:";

export const Spells = {
    0: { // Cantrips
      "Acid Splash": {
        link: `${url}acid-splash`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Blade Ward": {
        link: `${url}blade-ward`,
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"]
      },
      "Booming Blade": {
        link: `${url}booming-blade`,
        classes: ["Sorcerer", "Warlock", "Wizard"]
      },
      "Chill Touch": {
        link: `${url}chill-touch`,
        classes: ["Sorcerer", "Warlock", "Wizard"]
      },
      "Control Flames": {
        link: `${url}control-flames`,
        classes: ["Druid", "Sorcerer", "Wizard"]
      },
      "Create Bonfire": {
        link: `${url}create-bonfire`,
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"]
      },
      "Dancing Lights": {
        link: `${url}dancing-lights`,
        classes: ["Bard", "Sorcerer", "Wizard"]
      },
      "Druidcraft": {
        link: `${url}druidcraft`,
        classes: ["Druid"]
      },
      "Eldritch Blast": {
        link: `${url}eldritch-blast`,
        classes: ["Warlock"]
      },
      "Fire Bolt": {
        link: `${url}fire-bolt`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Friends": {
        link: `${url}friends`,
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"]
      },
      "Frostbite": {
        link: `${url}frostbite`,
        classes: ["Druid", "Sorcerer", "Wizard"]
      },
      "Green-Flame Blade": {
        link: `${url}green-flame-blade`,
        classes: ["Sorcerer", "Warlock", "Wizard"]
      },
      "Guidance": {
        link: `${url}guidance`,
        classes: ["Cleric", "Druid"]
      },
      "Gust": {
        link: `${url}gust`,
        classes: ["Druid", "Sorcerer", "Wizard"]
      },
      "Infestation": {
        link: `${url}infestation`,
        classes: ["Druid", "Sorcerer", "Wizard"]
      },
      "Light": {
        link: `${url}light`,
        classes: ["Bard", "Cleric", "Sorcerer", "Wizard"]
      },
      "Lightning Lure": {
        link: `${url}lightning-lure`,
        classes: ["Sorcerer", "Warlock", "Wizard"]
      },
      "Mage Hand": {
        link: `${url}mage-hand`,
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"]
      },
      "Magic Stone": {
        link: `${url}magic-stone`,
        classes: ["Druid", "Warlock"]
      },
      "Mending": {
        link: `${url}mending`,
        classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Wizard"]
      },
      "Message": {
        link: `${url}message`,
        classes: ["Bard", "Sorcerer", "Wizard"]
      },
      "Mind Sliver": {
        link: `${url}mind-sliver`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Minor Illusion": {
        link: `${url}minor-illusion`,
        classes: ["Bard", "Sorcerer", "Wizard"]
      },
      "Mold Earth": {
        link: `${url}mold-earth`,
        classes: ["Druid", "Sorcerer", "Wizard"]
      },
      "Poison Spray": {
        link: `${url}poison-spray`,
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"]
      },
      "Prestidigitation": {
        link: `${url}prestidigitation`,
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"]
      },
      "Primal Savagery": {
        link: `${url}primal-savagery`,
        classes: ["Druid"]
      },
      "Produce Flame": {
        link: `${url}produce-flame`,
        classes: ["Druid"]
      },
      "Ray of Frost": {
        link: `${url}ray-of-frost`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Resistance": {
        link: `${url}resistance`,
        classes: ["Cleric", "Druid"]
      },
      "Sacred Flame": {
        link: `${url}sacred-flame`,
        classes: ["Cleric"]
      },
      "Sapping Sting": {
        link: `${url}sapping-sting`,
        classes: ["Wizard"]
      },
      "Shape Water": {
        link: `${url}shape-water`,
        classes: ["Druid", "Sorcerer", "Wizard"]
      },
      "Shillelagh": {
        link: `${url}shillelagh`,
        classes: ["Druid"]
      },
      "Shocking Grasp": {
        link: `${url}shocking-grasp`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Spare the Dying": {
        link: `${url}spare-the-dying`,
        classes: ["Cleric"]
      },
      "Sword Burst": {
        link: `${url}sword-burst`,
        classes: ["Sorcerer", "Warlock", "Wizard"]
      },
      "Thaumaturgy": {
        link: `${url}thaumaturgy`,
        classes: ["Cleric"]
      },
      "Thorn Whip": {
        link: `${url}thorn-whip`,
        classes: ["Druid"]
      },
      "Thunderclap": {
        link: `${url}thunderclap`,
        classes: ["Bard", "Druid", "Sorcerer", "Wizard"]
      },
      "Toll the Dead": {
        link: `${url}toll-the-dead`,
        classes: ["Cleric", "Warlock", "Wizard"]
      },
      "True Strike": {
        link: `${url}true-strike`,
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"]
      },
      "Vicious Mockery": {
        link: `${url}vicious-mockery`,
        classes: ["Bard"]
      },
      "Word of Radiance": {
        link: `${url}word-of-radiance`,
        classes: ["Cleric"]
      }
    },
    1: {
      "Magic Missile": {
        link: `${url}magic-missile`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Cure Wounds": {
        link: `${url}cure-wounds`,
        classes: ["Cleric", "Paladin", "Druid", "Bard", "Ranger"]
      },
      "Shield": {
        link: `${url}shield`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Burning Hands": {
        link: `${url}burning-hands`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Detect Magic": {
        link: `${url}detect-magic`,
        classes: ["Wizard", "Sorcerer", "Bard", "Ranger"]
      },
      "Thunderwave": {
        link: `${url}thunderwave`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Entangle": {
        link: `${url}entangle`,
        classes: ["Druid", "Ranger"]
      },
      "Disguise Self": {
        link: `${url}disguise-self`,
        classes: ["Sorcerer", "Wizard", "Bard"]
      },
      "Mage Armor": {
        link: `${url}mage-armor`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Tasha's Hideous Laughter": {
        link: `${url}tashas-hideous-laughter`,
        classes: ["Bard", "Sorcerer", "Wizard"]
      },
      "Ray of Sickness": {
        link: `${url}ray-of-sickness`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Guiding Bolt": {
        link: `${url}guiding-bolt`,
        classes: ["Cleric", "Paladin"]
      },
      "Hex": {
        link: `${url}hex`,
        classes: ["Warlock"]
      },
      "Ice Knife": {
        link: `${url}ice-knife`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Goodberry": {
        link: `${url}goodberry`,
        classes: ["Druid", "Ranger"]
      },
      "Identify": {
        link: `${url}identify`,
        classes: ["Wizard", "Bard", "Artificer"]
      },
      "Detect Poison and Disease": {
        link: `${url}detect-poison-disease`,
        classes: ["Cleric", "Druid", "Ranger"]
      },
      "Command": {
        link: `${url}command`,
        classes: ["Cleric", "Paladin"]
      },
      "Sleep": {
        link: `${url}sleep`,
        classes: ["Wizard", "Sorcerer", "Bard"]
      },
      "Vicious Mockery": {
        link: `${url}vicious-mockery`,
        classes: ["Bard"]
      }
    },
    2: {
      "Misty Step": {
        link: `${url}misty-step`,
        classes: ["Sorcerer", "Wizard", "Bard"]
      },
      "Invisibility": {
        link: `${url}invisibility`,
        classes: ["Wizard", "Sorcerer", "Bard"]
      },
      "Hold Person": {
        link: `${url}hold-person`,
        classes: ["Cleric", "Wizard", "Sorcerer", "Bard"]
      },
      "Scorching Ray": {
        link: `${url}scorching-ray`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Shatter": {
        link: `${url}shatter`,
        classes: ["Wizard", "Sorcerer", "Bard"]
      },
      "Aid": {
        link: `${url}aid`,
        classes: ["Cleric", "Paladin"]
      },
      "Lesser Restoration": {
        link: `${url}lesser-restoration`,
        classes: ["Cleric", "Druid"]
      },
      "Spike Growth": {
        link: `${url}spike-growth`,
        classes: ["Druid", "Ranger"]
      },
      "Crown of Madness": {
        link: `${url}crown-of-madness`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Cloud of Daggers": {
        link: `${url}cloud-of-daggers`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Web": {
        link: `${url}web`,
        classes: ["Wizard", "Sorcerer", "Druid"]
      },
      "Darkness": {
        link: `${url}darkness`,
        classes: ["Sorcerer", "Warlock"]
      },
      "Flame Blade": {
        link: `${url}flame-blade`,
        classes: ["Druid", "Sorcerer", "Wizard"]
      },
      "Levitate": {
        link: `${url}levitate`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Silence": {
        link: `${url}silence`,
        classes: ["Cleric", "Wizard", "Sorcerer", "Bard"]
      },
      "Rope Trick": {
        link: `${url}rope-trick`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Mirror Image": {
        link: `${url}mirror-image`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Ray of Enfeeblement": {
        link: `${url}ray-of-enfeeblement`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Warding Bond": {
        link: `${url}warding-bond`,
        classes: ["Cleric", "Paladin"]
      },
      "Enlarge/Reduce": {
        link: `${url}enlargereduce`,
        classes: ["Wizard", "Sorcerer", "Bard"]
      }
    },
    3: {
      "Counterspell": {
        link: `${url}counterspell`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Lightning Bolt": {
        link: `${url}lightning-bolt`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Haste": {
        link: `${url}haste`,
        classes: ["Wizard", "Sorcerer", "Sorcerer"]
      },
      "Bestow Curse": {
        link: `${url}bestow-curse`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Slow": {
        link: `${url}slow`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Dispel Magic": {
        link: `${url}dispel-magic`,
        classes: ["Wizard", "Sorcerer", "Cleric"]
      },
      "Fly": {
        link: `${url}fly`,
        classes: ["Wizard", "Sorcerer", "Bard"]
      },
      "Leomund's Tiny Hut": {
        link: `${url}leomunds-tiny-hut`,
        classes: ["Wizard"]
      },
      "Stinking Cloud": {
        link: `${url}stinking-cloud`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Glyph of Warding": {
        link: `${url}glyph-of-warding`,
        classes: ["Wizard"]
      },
      "Animate Dead": {
        link: `${url}animate-dead`,
        classes: ["Cleric", "Wizard"]
      },
      "Clairvoyance": {
        link: `${url}clairvoyance`,
        classes: ["Wizard", "Sorcerer", "Cleric"]
      },
      "Fireball": {
        link: `${url}fireball`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Major Image": {
        link: `${url}major-image`,
        classes: ["Wizard", "Sorcerer", "Bard"]
      },
      "Fear": {
        link: `${url}fear`,
        classes: ["Wizard", "Sorcerer", "Bard"]
      },
      "Daylight": {
        link: `${url}daylight`,
        classes: ["Cleric", "Druid"]
      },
      "Water Breathing": {
        link: `${url}water-breathing`,
        classes: ["Cleric", "Druid"]
      },
      "Blinding Smite": {
        link: `${url}blinding-smite`,
        classes: ["Paladin"]
      }
    },
    4: {
      "Greater Invisibility": {
        link: `${url}greater-invisibility`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Polymorph": {
        link: `${url}polymorph`,
        classes: ["Wizard", "Druid"]
      },
      "Blight": {
        link: `${url}blight`,
        classes: ["Wizard", "Sorcerer", "Warlock"]
      },
      "Ice Storm": {
        link: `${url}ice-storm`,
        classes: ["Wizard", "Druid"]
      },
      "Dimension Door": {
        link: `${url}dimension-door`,
        classes: ["Wizard", "Sorcerer", "Bard"]
      },
      "Conjure Minor Elementals": {
        link: `${url}conjure-minor-elementals`,
        classes: ["Wizard", "Druid"]
      },
      "Stoneskin": {
        link: `${url}stoneskin`,
        classes: ["Cleric", "Druid", "Wizard"]
      },
      "Fire Shield": {
        link: `${url}fire-shield`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Charm Monster": {
        link: `${url}charm-monster`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Phantasmal Killer": {
        link: `${url}phantasmal-killer`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Otiluke's Resilient Sphere": {
        link: `${url}otilukes-resilient-sphere`,
        classes: ["Wizard"]
      },
      "Greater Restoration": {
        link: `${url}greater-restoration`,
        classes: ["Cleric", "Paladin"]
      },
      "Divination": {
        link: `${url}divination`,
        classes: ["Cleric"]
      },
      "Summon Elemental": {
        link: `${url}summon-elemental`,
        classes: ["Wizard", "Druid"]
      },
      "Wall of Fire": {
        link: `${url}wall-of-fire`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Guardian of Faith": {
        link: `${url}guardian-of-faith`,
        classes: ["Cleric"]
      },
      "Banishment": {
        link: `${url}banishment`,
        classes: ["Sorcerer", "Wizard"]
      }
    },
    5: {
      "Animate Objects": {
        link: `${url}animate-objects`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Cloudkill": {
        link: `${url}cloudkill`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Cone of Cold": {
        link: `${url}cone-of-cold`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Telekinesis": {
        link: `${url}telekinesis`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Dominate Person": {
        link: `${url}dominate-person`,
        classes: ["Wizard", "Sorcerer", "Warlock"]
      },
      "Wall of Force": {
        link: `${url}wall-of-force`,
        classes: ["Wizard"]
      },
      "Bigby's Hand": {
        link: `${url}bigbys-hand`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Hallow": {
        link: `${url}hallow`,
        classes: ["Cleric"]
      },
      "Flame Strike": {
        link: `${url}flame-strike`,
        classes: ["Cleric", "Paladin"]
      },
      "Mass Cure Wounds": {
        link: `${url}mass-cure-wounds`,
        classes: ["Cleric"]
      },
      "Dispel Evil and Good": {
        link: `${url}dispel-evil-and-good`,
        classes: ["Cleric", "Paladin"]
      },
      "Wall of Stone": {
        link: `${url}wall-of-stone`,
        classes: ["Wizard"]
      },
      "Cloud of Daggers": {
        link: `${url}cloud-of-daggers`,
        classes: ["Wizard"]
      },
      "Legend Lore": {
        link: `${url}legend-lore`,
        classes: ["Wizard", "Cleric"]
      },
      "Control Winds": {
        link: `${url}control-winds`,
        classes: ["Druid"]
      },
      "Teleportation Circle": {
        link: `${url}teleportation-circle`,
        classes: ["Wizard"]
      },
      "Dream": {
        link: `${url}dream`,
        classes: ["Sorcerer", "Wizard"]
      }
    },
    6: {
      "Chain Lightning": {
        link: `${url}chain-lightning`,
        classes: ["Wizard", "Sorcerer"]
      },
      "True Seeing": {
        link: `${url}true-seeing`,
        classes: ["Wizard", "Cleric"]
      },
      "Globe of Invulnerability": {
        link: `${url}globe-of-invulnerability`,
        classes: ["Wizard"]
      },
      "Wall of Thorns": {
        link: `${url}wall-of-thorns`,
        classes: ["Druid"]
      },
      "Heal": {
        link: `${url}heal`,
        classes: ["Cleric"]
      },
      "Move Earth": {
        link: `${url}move-earth`,
        classes: ["Druid", "Sorcerer", "Wizard"]
      },
      "Sunbeam": {
        link: `${url}sunbeam`,
        classes: ["Cleric", "Druid"]
      },
      "Mass Suggestion": {
        link: `${url}mass-suggestion`,
        classes: ["Bard", "Sorcerer", "Wizard"]
      },
      "True Polymorph": {
        link: `${url}true-polymorph`,
        classes: ["Wizard"]
      },
      "Blade Barrier": {
        link: `${url}blade-barrier`,
        classes: ["Cleric"]
      },
      "Flesh to Stone": {
        link: `${url}flesh-to-stone`,
        classes: ["Wizard"]
      },
      "Heroes' Feast": {
        link: `${url}heroes-feast`,
        classes: ["Cleric"]
      },
      "Conjure Fey": {
        link: `${url}conjure-fey`,
        classes: ["Druid"]
      },
      "Otto's Irresistible Dance": {
        link: `${url}ottos-irresistible-dance`,
        classes: ["Bard", "Wizard"]
      },
      "Power Word Pain": {
        link: `${url}power-word-pain`,
        classes: ["Sorcerer", "Wizard"]
      }
    },
    7: {
      "Teleport": {
        link: `${url}teleport`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Plane Shift": {
        link: `${url}plane-shift`,
        classes: ["Cleric", "Druid", "Wizard"]
      },
      "Fire Storm": {
        link: `${url}fire-storm`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Delayed Blast Fireball": {
        link: `${url}delayed-blast-fireball`,
        classes: ["Wizard"]
      },
      "Reverse Gravity": {
        link: `${url}reverse-gravity`,
        classes: ["Wizard"]
      },
      "Finger of Death": {
        link: `${url}finger-of-death`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Regenerate": {
        link: `${url}regenerate`,
        classes: ["Cleric"]
      },
      "Power Word Stun": {
        link: `${url}power-word-stun`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Summon Greater Demon": {
        link: `${url}summon-greater-demon`,
        classes: ["Warlock", "Sorcerer"]
      },
      "Crown of Stars": {
        link: `${url}crown-of-stars`,
        classes: ["Wizard"]
      },
      "Etherealness": {
        link: `${url}etherealness`,
        classes: ["Cleric", "Wizard"]
      },
      "Symbol": {
        link: `${url}symbol`,
        classes: ["Wizard"]
      },
      "Mordenkainen's Sword": {
        link: `${url}mordenkainens-sword`,
        classes: ["Wizard"]
      },
      "Meteor Swarm": {
        link: `${url}meteor-swarm`,
        classes: ["Sorcerer", "Wizard"]
      }
    },
    8: {
      "Antimagic Field": {
        link: `${url}antimagic-field`,
        classes: ["Wizard"]
      },
      "Power Word Kill": {
        link: `${url}power-word-kill`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Mind Blank": {
        link: `${url}mind-blank`,
        classes: ["Wizard"]
      },
      "Sunburst": {
        link: `${url}sunburst`,
        classes: ["Cleric", "Sorcerer", "Wizard"]
      },
      "Incendiary Cloud": {
        link: `${url}incendiary-cloud`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Earthquake": {
        link: `${url}earthquake`,
        classes: ["Cleric", "Druid"]
      },
      "Dominate Monster": {
        link: `${url}dominate-monster`,
        classes: ["Wizard", "Sorcerer"]
      },
      "Clone": {
        link: `${url}clone`,
        classes: ["Wizard"]
      },
      "Teleportation Circle": {
        link: `${url}teleportation-circle`,
        classes: ["Wizard"]
      },
      "Power Word Heal": {
        link: `${url}power-word-heal`,
        classes: ["Cleric"]
      },
      "Prismatic Wall": {
        link: `${url}prismatic-wall`,
        classes: ["Wizard"]
      },
      "Control Weather": {
        link: `${url}control-weather`,
        classes: ["Druid"]
      },
      "Feeblemind": {
        link: `${url}feeblemind`,
        classes: ["Wizard"]
      },
      "Whirlwind": {
        link: `${url}whirlwind`,
        classes: ["Wizard"]
      }
    },
    9: {
      "Wish": {
        link: `${url}wish`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Meteor Swarm": {
        link: `${url}meteor-swarm`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Time Stop": {
        link: `${url}time-stop`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Power Word Kill": {
        link: `${url}power-word-kill`,
        classes: ["Sorcerer", "Wizard"]
      },
      "True Resurrection": {
        link: `${url}true-resurrection`,
        classes: ["Cleric"]
      },
      "Prismatic Wall": {
        link: `${url}prismatic-wall`,
        classes: ["Wizard"]
      },
      "Foresight": {
        link: `${url}foresight`,
        classes: ["Druid", "Cleric"]
      },
      "Meteor Storm": {
        link: `${url}meteor-storm`,
        classes: ["Sorcerer", "Wizard"]
      },
      "Gate": {
        link: `${url}gate`,
        classes: ["Cleric", "Wizard"]
      },
      "Mass Heal": {
        link: `${url}mass-heal`,
        classes: ["Cleric"]
      },
      "Storm of Vengeance": {
        link: `${url}storm-of-vengeance`,
        classes: ["Druid"]
      },
      "Shapechange": {
        link: `${url}shapechange`,
        classes: ["Sorcerer", "Wizard"]
      },
      "True Polymorph": {
        link: `${url}true-polymorph`,
        classes: ["Sorcerer", "Wizard"]
      }
    }
  };
  