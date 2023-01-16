/*  -WHAT IS THIS?-

    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets

    Import this file using the "Add Extra Materials" bookmark.



    -KEEP IN MIND-

    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).

*/



/*  -INFORMATION-

    Subject:    Class

    Effect:     This script adds a class called the "Inventor" and its 5 subclasses.

                This class has been made by /u/KibblesTasty on the subbreddit /UnearthedArcana

                It can be found here: https://www.reddit.com/r/UnearthedArcana/comments/cal77v/kibbles_alternate_artificer_v20_forge_armor_wield/

                This code is based on v1.0 (Alpha) of /u/KibblesTasty's work

                This code updates code by Apocalypsa, LividLindy, Banner318, and Praxidicae



    Code by:    jaydee829

*/

var iFileName = "Inventor - Base Class.js";
RequiredSheetVersion(13);

SourceList["KTI"] = {
    name : "Inventor",
    abbreviation : "KTI",
    group : "KibblesTasty",
    url : "https://drive.google.com/file/d/13t2k7n4w99XRKdNPrdEJ5We5MK2GW6oe/view",
};

SourceList["KCCC"] = {
    name : "Kibbles' Compendium of Craft and Creation",
    abbreviation : "KCCC",
    group : "KibblesTasty",
    url : "https://www.kthomebrew.com/"
};

ClassList["inventor"] = {
    regExpSearch : /inventor/i,
    name : "Inventor",
	source : ["KTI", 1],
    primaryAbility : "Intelligence;",
    abilitySave : 4,
    prereqs : "Intelligence 13",
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    die : 8,
    saves : ["Con", "Int"],
    skillstxt : {
			primary : "Choose three from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, Sleight of Hand.",
            secondary: "Arcana"
	},
	toolProfs : { 
			primary : ["Thieves' Tools", "a tool of your choice"],
			secondary : []
	},
	armorProfs : {
			primary : [true, true, false, false],
			secondary : [true, false, false, false]
	},
	weaponProfs : {
			primary : [true, false, ["hand crossbows, heavy crossbows"]]
	},
    equipment : "Inventor starting equipment:" + 
			"\n \u2022 A light crossbow and quiver of 20 bolts -or- any two simple weapons;" + 
			"\n \u2022 Scale mail -or- leather armor -or- chain mail;" + 
			"\n \u2022 Thieves' tools and a dungeoneer's pack.",

    subclasses : ["Inventor Specialization", []],
    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spellcastingFactor : 2,
    spellcastingKnown : {
        spells : "list",
        spells : [0,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]
    },
    spellcastingList: {
        spells: [
            // 1st level
            "alarm", "arcane ablation", "arcane weapon", "awaken rope", "bond item", "comprehend languages", "cure wounds", "detect magic", "disguise self", "expeditious retreat", "fall", "false life", "feather fall", "grease", "identify", "illusory script", "jump", "longstrider", "sanctuary", "seeking projectile", "unburden", "unseen servant", "tenser's floating disk",

            // 2nd level
            "aid", "alter self", "arcane lock", "blur", "cloud of daggers", "darkvision", "earthbind", "enhance ability", "enlarge/reduce", "find traps", "heat metal", "hold person", "imbue luck", "invisibility", "knock", "lightning charged", "locate object", "magic weapon", "magic mouth", "nystul's magic aura", "protection from poison", "see invisibility", "spider climb", "thunderburst mine",
        
            // 3rd level
            "dispel magic", "dispel construct", "elemental weapon", "feign death", "flame arrows", "fireburst mine", "gaseous form", "glyph of warding", "life transference", "lightning arrow", "magic circle", "nondetection", "protection from energy", "sending", "tiny servant", "wall of sand", "water breathing", "water walk", "wind wall",
        
            // 4th level
            "arcane eye", "death ward", "fabricate", "fire shield", "freedom of movement", "greater invisibility", "leomund's secret chest", "otiluke's resilient sphere", "repair", "stone shape", "stoneskin", "sickening radiance",
        
            // 5th level
            "animate objects", "creation", "hold monster", "legend lore", "mislead", "passwall", "skill empowerment", "telekinesis", "teleportation circle", "transmute rock", "vorpal weapon", "wall of stone"
        ]
    },
    features : {
        "magic item analysis" : {
            name : "Magic Item Analysis",
			source : ["KTI", 3],
            minlevel : 1,
            description : "\n   " + "I know the artificer spells detect magic and identify, and I can cast them as rituals.",
            spellcastingBonus : [{
                name : "Magic Item Analysis",
                spells : ["detect magic"],
                selection : ["detect magic"],
                ritual : true
            }, {
                name : "Magic Item Analysis",
                spells : ["identify"],
                selection : ["identify"],
                ritual : true
            }]
        },

        "subclassfeature1": {
            name: "Inventor Specialization",
            source: ["KTI", 3],
            minlevel: 1,
            description: desc(["Choose a specialization based on your craft and put it in the \"Class\" field on the first page"])
        },

        "spellcasting" : {
            name : "Spellcasting",
			source : ["KTI", 3],
            minlevel : 2,
            description : "\n   " + "I can cast artificer spells that I know, using Intelligence as my spellcasting ability." + "\n   " + "I can use an arcane focus as a spellcasting focus.",
            additional : ["0 spells known", "3 spells known", "4 spells known", "4 spells known", "5 spells known", "5 spells known", "6 spells known", "6 spells known", "7 spells known", "7 spells known", "8 spells known", "8 spells known", "9 spells known", "9 spells known", "10 spells known", "10 spells known", "11 spells known", "11 spells known", "12 spells known", "12 spells known"],
        },    

        "tool expertise" : {
            name : "Tool Expertise",
			source : ["KTI", 3],
            minlevel : 2,
            description : "\n   " + "My proficiency bonus is doubled for any ability check I make that uses any of the tool proficiencies I gain from this class."
        },

        "arcane retrofit": {
            name: "Arcane Retrofit",
            source: ["KTI", 3],
            minlevel: 2,
            description: desc([
                "During a long rest, I can transfer a +1/2/3 enchantment from a wpn onto an Inventor weapon.",
                "I can also convert a set of +1/2/3 armor to a lighter armor type (e.g. chainmail to chainshirt)"
            ])
        },

        "arcane reconstruction" : {
            name : "Arcane Reconstruction",
			source : ["KTI", 4],
            minlevel : 6,
            description : "\n   " + "I have mastered the knowledge of using magic to repair things. I learn the Mending cantrip, and can cast it at will. Additionally, I learn the Cure Wounds spell. If I already know Cure Wounds I can select another spell from the Inventor list. Constructs targeted by my Cure Wounds can regain hit points as normal.",
            spellcastingBonus : [{
                name : "Arcane Reconstruction",
                spells : ["mending"],
                selection : ["mending"],
                prepared : true
            }, {
                name : "Arcane Reconstruction",
                spells : ["cure wounds"],
                selection : ["cure wounds"],
                prepared : true
            }]
        },

        "cross-disciplinary knowledge":{
            name: "Cross-Disciplinary Knowledge",
            source: ["KTI", 4],
            minlevel: 6,
            description: desc([
                "I gain the knowledge to and can craft one of: a Thundersmith's Stormforged Weapon; an Infusionsmith's Animated Weapon, Blasting Rod, or Infused Weapon; a Potionsmith's Alchemical Reagent Pouch and Alchemical Fire or Alchemical Acid; an Unrestricted Gadgetsmith Upgrade."
            ]),
            choices: ["Stormforged Weapon", "Animated Weapon", "Blasting Rod", "Infused Weapon", "Alchemical Fire", "Alchemical Acid", "Gadgetsmith Upgrade"],
            "stormforged weapon": {
                name: "Stormforged Weapon",
                description: "I craft a Thundersmith's Stormforged Weapon",
                eval: function(lvl, chc) {AddMagicItem("Stormforged Weapon");},
                removeeval: function (lvl, chc) {
                	var loc = CurrentMagicItems.known.indexOf("stormforged weapon");
                	if (loc == -1) return;
                	MagicItemClear(loc + 1, true);
                },
            },
            "animated weapon": {
                name: "Animated Weapon",
                description: "I craft an Infusionsmith's Animated Weapon",
            },
            "blasting rod": {
                name: "Blasting Rod",
                description: "I craft an Infusionsmith's Blasting Rod",
            },
            "infused weapon": {
                name: "Infused Weapon",
                description: "I craft an Infusionsmith's Infused Weapon",
            },
            "alchemical fire": {
                name: "Alchemical Fire",
                description: "I craft a Potionsmith's Alchemical Reagent Pouch and Alchemical Fire",
            },
            "alchemical acid": {
                name: "Alchemical Acid",
                description: "I craft a Potionsmith's Alchemical Reagent Pouch and Alchemical Acid",
            },
            "gadgetsmith upgrade": {
                name: "Gadgetsmith Upgrade",
                description: "I gain access to an unrestricted Gadgetsmith upgrade"
            }
        },

        "wondrous items proficiency" : {
            name : "Wondrous Items Proficiency",
			source : ["KTI", 4],
            minlevel : 7,
            description : "\n   " + "My familiarity with the workings of magical items means that I can ignore class based restrictions on attuning to magical items." + "\n   " + "Additionally I can now attune to up to four magic items at once."
        },

        "improved magical crafting" : {
            name : "Improved Magical Crafting",
			source : ["KTI", 4],
            minlevel : 10,
            description : "\n   " + "Creating a magic item takes me half the time it would normally take." + "\n   " + "Additionally, I can make 1 hour of progress toward crafting a magic item, scroll, or potion during a long rest."
        },

        "wondrous item recharge" : {
            name : "Wondrous Item Recharge",
			source : ["KTI", 4],
            minlevel : 10,
            description : "\n   " + "I can recharge a magic item that has has charges, as long as those charges can only be used to cast spells. To restore charges, I perform a ritual that takes one minute and expends a spell slot of equal or higher level then a spell slot level of a spell cast by the item. The number of charges restored to the item is equal to the number of charges required to cast that spell using the item once."
        },

        "study of magic" : {
            name : "Study of Magic",
			source : ["KTI", 4],
            minlevel : 11,
            description : "\n   " + "My proficiency in the workings of magic has become so great I can cast detect magic and identify at will. Additionally, I have advantage on all Intelligence (Arcana) checks to understand the workings of magical traps, effects, or runes.",
            spellcastingBonus : [{
                name : "Study of Magic",
                spells : ["detect magic"],
                selection : ["detect magic"],
                atwill : true
            }, {
                name : "Study of Magic",
                spells : ["identify"],
                selection : ["identify"],
                atwill : true
            }]
        },

        "wondrous item mastery" : {
            name : "Wondrous Item Mastery",
			source : ["KTI", 4],
            minlevel : 18,
			action : ["bonus action", ""],
            description : "\n   " + "I can activate a magic item that would normally take an action as a bonus action instead." + "\n   " + "Additionally, I can attune to five magical items at a time."
        },

        "peerless inventor" : {
            name : "Peerless Inventor",
			source : ["KTI", 4],
            minlevel : 20,
            description : "\n   " + "After a short or long rest, I can select and create a temporary version of an Upgrade from my subclass that I do not have but am qualified to take, provided it has a level requirement of 11th or lower." + "\n   " + "I retain this upgrade until I complete a short or long rest after which I can select another Upgrade.",
            usages: 1,
            recovery: "short rest",
        },
    }
}
