/*  -WHAT IS THIS?-

    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets

    Import this file using the "Add Extra Materials" bookmark.



    -KEEP IN MIND-

    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).

*/



/*  -INFORMATION-

    Subject:    Class

    Effect:     This script adds a class called the "Artificer" and its 5 subclasses.

                This class has been made by /u/KibblesTasty on the subbreddit /UnearthedArcana

                It can be found here: https://www.reddit.com/r/UnearthedArcana/comments/cal77v/kibbles_alternate_artificer_v20_forge_armor_wield/

                This code is based on v2.0.1 of /u/KibblesTasty's work



                This script was based upon MPMB's script for the Witch.



    Code by:    Apocalypsa, LividLindy, Banner318

*/



var iFileName = "Artificer [KibblesTasty].js";

SourceList["KT:AR"] = {

    name : "KibblesTasty: Artificer (v2.0.1)",

    abbreviation : "KT:AR",

    group : "KibblesTasty",

    url : "https://www.gmbinder.com/share/-LAEn6ZdC6lYUKhQ67Qk",



};



//first make the sheet know which spells are artificer spells

[

    // 1st level

    "alarm", "arcane ablation", "arcane weapon", "bond item", "catapult", "comprehend languages", "cure wounds", "detect magic", "disguise self", "expeditious retreat", "fall", "false life", "feather fall", "grease", "identify", "illusory script", "jump", "longstrider", "sanctuary", "seeking projectile", "snare", "unburden", "unseen servant", "tenser's floating disk",



    // 2nd level

    "aid", "alter self", "arcane lock", "blur", "cloud of daggers", "darkvision", "earthbind", "enhance ability", "enlarge/reduce", "find traps", "heat metal", "hold person", "imbue luck", "invisibility", "knock", "lightning charged", "locate object", "magic weapon", "magic mouth", "nystul's magic aura", "protection from poison", "see invisibility", "spider climb", "thunderburst mine",



    // 3rd level

    "dispel magic", "dispel construct", "elemental weapon", "feign death", "flame arrows", "fireburst mine", "gaseous form", "glyph of warding", "life transference", "lightning arrow", "magic circle", "nondetection", "protection from energy", "sending", "tiny servant", "wall of sand", "water breathing", "water walk", "wind wall",



    // 4th level

    "arcane eye", "death ward", "fabricate", "fire shield", "freedom of movement", "greater invisibility", "leomund's secret chest", "otiluke's resilient sphere", "repair", "stone shape", "stoneskin", "sickening radiance",



    // 5th level

    "animate objects", "creation", "hold monster", "legend lore", "mislead", "passwall", "skill empowerment", "telekinesis", "teleportation circle", "transmute rock", "vorpal weapon", "wall of stone"

].forEach( function (n) {

    if(SpellsList[n] && SpellsList[n].classes.indexOf("artificer") === -1) SpellsList[n].classes.push("artificer");

});



ClassList["artificer"] = {

    regExpSearch : /artificer/i,

    name : "Artificer",

	source : ["KT:AR", 1],

    primaryAbility : "Intelligence;",

    abilitySave : 4,

    prereqs : "Intelligence 13",

    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],

    die : 8,

    saves : ["Con", "Int"],

    skillstxt : {
			primary : "Choose three from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand."
	},

	toolProfs : { 
			primary : ["Thieves' Tools", "a tool of your choice"],
			secondary : ["Thieves' Tools"]
	},

	armorProfs : {
			primary : [true, true, false, false],
			secondary : [true, false, false, false]
	},
	
	weaponProfs : {
			primary : [true, false, ["hand crossbows, heavy crossbows"]]
	},
    
    equipment : "Artificer starting equipment:" + 
			"\n \u2022 A light crossbow and quiver of 20 bolts -or- any two simple weapons;" + 
			"\n \u2022 Scale mail -or- leather armor -or- chain mail;" + 
			"\n \u2022 Thieves' tools and a dungeoneer's pack." + 
			"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",

    subclasses : ["Artificer Specialization", ["artificer-infusionsmith"]],

    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    spellcastingFactor : 2,

    spellcastingKnown : {

        spells : "list",

        spells : [0,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]

    },

    features : {

        "magic item analysis" : {

            name : "Magic Item Analysis",

			source : ["KT:AR", 3],

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

        "spellcasting" : {

            name : "Spellcasting",

			source : ["KT:AR", 3],

            minlevel : 2,

            description : "\n   " + "I can cast artificer spells that I know, using Intelligence as my spellcasting ability." + "\n   " + "I can use an arcane focus as a spellcasting focus.",

            additional : ["0 spells known", "2 spells known", "3 spells known", "3 spells known", "4 spells known", "4 spells known", "5 spells known", "5 spells known", "6 spells known", "6 spells known", "7 spells known", "7 spells known", "8 spells known", "8 spells known", "9 spells known", "9 spells known", "10 spells known", "10 spells known", "11 spells known", "11 spells known"],

        },        

        "tool expertise" : {

            name : "Tool Expertise",

			source : ["KT:AR", 3],

            minlevel : 2,

            description : "\n   " + "My proficiency bonus is doubled for any ability check I make that uses any of the tool proficiencies I gain from this class."

        },

        "arcane reconstruction" : {

            name : "Arcane Reconstruction",

			source : ["KT:AR", 4],

            minlevel : 6,

            description : "\n   " + "I have mastered the knowledge of using magic to repair things. I learn the Mending cantrip, and can cast it at will. Additionally, I learn the Cure Wounds spell. If I already know Cure Wounds I can select another spell from the Artificer list. When I cast Cure Wounds, it can heal constructs in addition to normally valid targets. Both Mending and Cure Wounds learned through this features are considered Artificer spells for me.",

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

        "wondrous items proficiency" : {

            name : "Wondrous Items Proficiency",

			source : ["KT:AR", 4],

            minlevel : 7,

            description : "\n   " + "My familiarity with the workings of magical items means that I can ignore class based restrictions on attuning to magical items." + "\n   " + "Additionally I can now attune to up to four magic items at once."

        },

        "improved magical crafting" : {

            name : "Improved Magical Crafting",

			source : ["KT:AR", 4],

            minlevel : 10,

            description : "\n   " + "My experience in creating my own wondrous invention makes me more adept at crafting a magic item than a normal spellcaster. Creating a magic item takes me half the time it would normally take." + "\n   " + "Additionally, I can make 1 hour of progress toward crafting a magic item, scroll, or potion during a long rest."
        },

        "wondrous item recharge" : {

            name : "Wondrous Item Recharge",

			source : ["KT:AR", 4],

            minlevel : 10,

            description : "\n   " + "I can recharge a magic item that has has charges, as long as those charges can only be used to cast spells. To restore charges, I perform a ritual that takes one minute and expends a spell slot of equal or higher level then a spell slot level of a spell cast by the item. The number of charges restored to the item is equal to the number of charges required to cast that spell using the item once."

        },

        "study of magic" : {

            name : "Study of Magic",

			source : ["KT:AR", 4],

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

			source : ["KT:AR", 4],

            minlevel : 18,
			
			action : ["bonus action", ""],

            description : "\n   " + "I can activate a magic item that would normally take an action as a bonus action instead." + "\n   " + "Additionally, I can attune to five magical items at a time."
			
        },

        "peerless inventor" : {

            name : "Peerless Inventor",

			source : ["KT:AR", 4],

            minlevel : 20,

			recovery : "short rest",
			
            description : "\n   " + "My mind is always thinking of new options and clever solutions. As an Action, I can select and create a temporary version of an Upgrade from my subclass that I do not have but am qualified to take, provided it has a level requirement of 11th or lower." + "\n   " + "I retain this upgrade until I complete a short rest and cannot select another temporary upgrade in this way until I complete a short of long rest."
			
        },

    }

}

ClassSubList["artificer-infusionsmith"] = {

    regExpSearch : /infusionsmith/i,

    subname : "Infusionsmith",

    features : {

		"infusionsmith's_proficiency" : {

			name : "Infusionsmith's Proficiency",

			minlevel : 1,

			description : desc(["   I gain proficiency with jeweler's tools and calligrapher's supplies.", "Creating a magic spell scroll only takes me half the time and material cost it would normally take."]),

			toolProfs : ["Jeweler's Tools", "Calligrapher's supplies"],

			},

		"infused_armament" : {

			name : "Infused Armament",

			minlevel : 1,

			description : "\n   " + "At 1st level you can infuse a powerful armament to take into battle. At the end of a long rest, select one of the Infusions below. The infusion lasts until the end of your next long rest." + "\n   " + "Animated Weapon: touch a melee weapon an cause it to spring to life. An animated weapon can be carried or stowed, but when readied it floats beside you. As an action you can make a melee spell attack with it" + "\n   " + "If it hits it deals weapon damage dice + Int modifier. The range of this attack is 30 feet, with the range reduced to 15 feet if the weapon has the Heavy property, or increased to 60 feet if it has the Light property." + "\n   " + "Blasting Rod: touch a nonmagical wand-blank, stick staff or rod, infusing it with the ability to cast a cantrip. Select one Evocation cantrip from the Wizard spell list that does not require concetration. As an action you can use the Blasting rod to cast that cantrip." + "\n   " + "Once per turn when using the Blasting rod you can add your Int modifer to the damage dealt to that target." + "\n   " + "Infused Weapon: touch a weapon, enchanting its effectiveness. Whilst enchanted in this way you (and only you) have proficiency with it. You can wield the weapon as normal but can apply your Int modifier to attack and damage rolls instead of Strength or Dexterity." + "\n   " + "If an Infused Weapon has a single damage die, and that damage die is less than a d12, the damage die of the Infused Weapon is increased.",
			
			calcChanges : {

				atkAdd : [

				function (fields, v) {
					
					if (!classes.known.artificer || classes.known.artificer.level < 3 || v.isSpell) return;
					
					if ((/infused/i).test(v.WeaponText)) {
						try {
							var curDie = eval(fields.Damage_Die.replace('d', '*')); 
						} catch (e) {
							var curDie = 'x';
						};
						if (isNaN(curDie) || curDie == 4) {
							fields.Damage_Die = '1d' + '6';
						};
						if (isNaN(curDie) || curDie == 6) {
							fields.Damage_Die = '1d' + '8';
						};
						if (isNaN(curDie) || curDie == 8) {
							fields.Damage_Die = '1d' + '10';
						};
						if (isNaN(curDie) || curDie == 10) {
							fields.Damage_Die = '1d' + '12';
						};
						if (What('Int Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod')) {
							fields.Mod = 4;
						};
						fields.Proficiency = true;
					}
					if ((/animated/i).test(v.WeaponText)) {
						if ((/heavy/i).test(fields.Description)) { 
							fields.Range = '15 ft';
							fields.Mod = 4;
							fields.Proficiency = true;
						};
						if ((/light/i).test(fields.Description)) { 
							fields.Range = '60 ft';
							fields.Mod = 4;
							fields.Proficiency = true;
						}; 
						if (!(/light|heavy/i).test(fields.Description)) { 
							fields.Range = '30 ft'; 
							fields.Mod = 4;
							fields.Proficiency = true;
						}; 
					};
				}
				],
			}
			
		},

		"spell manual" : {
			
			name : "Spell Manual",
			
			minlevel : 3,
			
			description : "\n   " + "Starting at 3rd level I have a Spell Manual containing 2 1st level wizard spells of my choice. My Spell Manual is my repository of any non-Artificer spell I know." + "\n   " + "I cannot cast these spells and they do not count towards my spells known, but when learning a new Artificer spell I can instead select a spell from my Spell Manual, at which point I can cast it as normal, I can choose to scribe any Artificer spell I know into the Spell Manual, as if copying from a written spell.",
			
			eval : "CurrentSpells['spell manual'] = {name : 'Spell Manual', ability : 4, list : {class : ['wizard', 'artificer']}, known : {spells : 'book'}}; SetStringifieds('spells');",
			
			removeeval : "delete CurrentSpells['spell manual']; SetStringifieds('spells');"
		},

		"infuse magic" : {

			name : "Infuse Magic",

			minlevel : 3,

			description : "\n   " + "In a special ritual taking 1 minute, I can expend a spell slot to cast a spell as normal, but the spell does not take effect, and is stored in an item for later use." + "\n   " + "Subequently any creature holding the item with an Int of 6 or higher is aware there is magic infused in it and can expend the stored magic to cast the spell." + "\n   " + "The spell uses my spellcasting modifiers, but is in all other ways treated as if the creature holding it cast the spell. The magic infused in the item expires if I complete a long rest without expending the stored spell.",

		},

			"improved armaments" : {

				name : "Improved Armaments",

				minlevel : 5,

				description : "\n   " + "At 5th level you have mastered the use of your Infused Armaments." + "\n   " + "Your Animated Weapon can now animate two Animated Weapons, and you can attack with both as a part of the same action." + "\n   " + "Your Blasting Rod can now be used more easily. If you cast a spell using an item from Infuse Magic or from a wand, you can cast the cantrip from your Blasting Rod as a bonus action." + "\n   " + "Your Infused Weapon empowers you, allowing you to attack twice instead of once when you take the attack action.",

				},

			"infused focus" : {

				name : "Infused Focus",

				minlevel : 14,
				
				recovery : "short rest",
				
				description : "\n   " + "When I cast a concentration spell, I can anchor it to an item, and do not need to maintain concentration. The spell lasts a number of rounds equal to your Int modifier, after which the spell ends." + "\n   " + "Once I use this ability, I must complete a short or long rest before using it again.",

				},

			"infusionsmith_upgrade" : {

            name : "Specialization Upgrade",

            minlevel : 3,

            description : "\n   " + "Starting at 3rd level, I can choose an upgrade from the list at the end of my specialization, and gain the benefits listed in the description of the Upgrade." + "\n   " + "The number of  upgrades I have increases as shown in the class table.",

            additional : ["", "", "1 upgrade", "1 upgrade", "2 upgrades", "2 upgrades", "3 upgrades", "3 upgrades", "4 upgrades", "4 upgrades", "5 upgrades", "5 upgrades", "6 upgrades", "6 upgrades", "7 upgrades", "7 upgrades", "8 upgrades", "8 upgrades", "9 upgrades", "9 upgrades"],

            extraname : "Infusion Upgrades",

            extrachoices : [
				"Advanced Object Animation (prereq: level 15 Artificer)", 
				"Animated Archer", 
				"Animated Shield", 
				"Arcane Ammunition (prereq: level 5 Artificer)", 
				"Arcane Armament", 
				"Deflecting Weapon", 
				"Detonate Armament (prereq: level 9 Artificer)", 
				"Dimensional Pockets (prereq: level 9 Artificer)", 
				"Empower Weapon (prereq: level 11 Artificer)", 
				"Enchanted Broom (prereq: level 11 Artificer)", 
				"Infuse Elements", 
				"Infuse Shadows (prereq: level 5 Artificer)", 
				"Invisibility Cloak (prereq: level 9 Artificer)", 
				"Life Infusion (prereq: level 11 Artificer)", 
				"Magical Rod (prereq: level 11 Artificer)", 
				"Magical Wand", 
				"Malicious Infusion (prereq: level 5 Artificer)", 
				"Mixed Technique (prereq: level 11 Artificer)", 
				"Prepared Enchantment (prereq: level 9 Artificer)", 
				"Ring of Reaction (prereq: level 5 Artificer)", 
				"Skilled Animation", 
				"Spell Trapping Ring (prereq: level 9 Artificer)", 
				"Soul Saving Bond", 
				"Third Animated Weapon (prereq: level 15 Artificer)",
				"Translocation Binding (prereq: level 5 Artificer)", 
				"Warding Stone", 
				"Weapon Enchantment Expertise (prereq: level 5 Artificer)", 
				"Weapon Enchantment Resonance (prereq: level 5 Artificer)", 
				"Worn Enchantment"
			],

			 "advanced object animation (prereq: level 15 artificer)" : {

				 name : "Advanced Object Animation",

				 description : "\n   " + "When I cast the animate objects spell, my animated objects add +1 to their attack and damage rolls per object it counts as (tiny objects gain +1, huge objects gain +8).",

				 spellcastingBonus : {

					 name : "Advanced Object Animation",

					 spells : ["animate objects"],

					 selection : ["animate objects"],

					 times : 1,					 

					 },

				 prereqeval : "classes.known.artificer.level >= 15"

				 },

			"animated archer" : {

				name : "Animated Archer",

				minlevel : 3,

				description : "\n   " + "I master animation enchantments allowing me to use your Animate Weapon feature on ranged weapons and a quiver of ammunition. An animated ranged weapon can target anything inside the weapons normal range with a ranged spell attack, dealing weapon damage + my Int modifier on hit. The weapon still requires ammunition, and can carry up 30 pieces of ammunition at a time, after which it needs to be reloaded as an action."				

			},

			"animated shield" : {

				name : "Animated Shield",

				minlevel : 3,
				
				action : "reaction",

				description : "\n   " + "You apply your animating magic to a shield. At the end of a long rest, you can touch a shield, causing it to spring to life and protect you until you complete your next long rest. While it is protecting you, you gain the benefit if you had the shield equipped. You cannot benefit from both an animated shield and an equipped shield." + "\n   " + "While you have an animated shield, you can use your reaction to send it to defend an ally who is being attacked. You can impose disadvantage on that attack, but do not gain the benefits of having an animated shield until the start of your next turn."				

			},

			"arcane ammunition (prereq: level 5 artificer)" : {
				
				name : "Arcane Ammunition",
				
				minlevel : 5,
				
				description : "\n   " + "You infuse a ranged weapon with special magic granting it magical ammunition. The weapons damage becomes force damage and it no longer requires ammunition to fire. If the weapon had the Loading property, it no longer has the Loading Property.",

				prereqeval : "classes.known.artificer.level >= 5"
				
			},


			"arcane armament" : {

				name : "Arcane Armament",

				minlevel : 3,

				description : "\n   " + "I master armoring myself with magical enchantments. I learn the mage armor spell. While under the effect of mage armor, I can add my Int modifier to my AC instead of my Dex modifier. I can only do this if I am not adding my Int modifier to my AC from another source. Additionally I gain resistance to force damage.",
				
				spellcastingBonus : {
					name : "Arcane Armament",
					spells : ["mage armor"],
					selection : ["mage armor"],
					times : 1,
				},

				armorOptions : {
					regExpSearch : /^(?=.*(mage|magic))(?=.*armou?r).*$/i,
					name : "Mage armor (Int)",
					source : [["SRD", 160], ["P", 256]],
					ac : 13,
					dex : -10,
					addMod : true,
					list : "magic",
					dmgres : ["Force"]
				},

			},

			"deflecting weapon" : {

				name : "Deflecting Weapon",

				minlevel : 3,

				description : "\n   " + "While I have an animated melee weapon, if I am attacked I can use my reaction to defend myself with them, granting you +2 AC against an single attack. If the attack misses me, I can immediately attack the creature that attacked me, making a single melee spell attack with one animated weapon against the attacker.",

				action : ["reaction", ""]

			},

			"detonate armament (prereq: level 9 artificer)" : {

				name : "Detonate Armament",

				minlevel : 9,

				description : "\n   " + "As a reaction to taking damage, I can end the effect of mage armor to cast thunder step without expending a spell slot. When I cast thunder step in this manner, it deals force damage instead of thunder damage. Once I do this, I cannot use this ability again until the end of your next short or long rest.",

				spellcastingBonus : {

					name : "Detonate Armor",

					spells : ["thunder step"],

					selection : ["thunder step"],

					times : 1,

				},

				recovery : "short rest",

				prereqeval : "classes.known.artificer.level >= 9"

			},

			"dimensional pockets (prereq: level 9 artificer)" : {
				
				name : "Dimensional Pockets",
				
				minlevel : 9,
				
				description : "\n   " + "I enchant a pocket on my gear to contain far more than it would appear. That pocket can hold any object that can fit through a 6 inch diameter opening, and up to 50 pounds. The pocket otherwise behaves in the same manner as a bag of holding.",
				
				prereqeval : "classes.known.artificer.level >= 9"
			},

			"empower weapon (prereq: level 11 artificer)" : {

				name : "Empower Weapon",

				minlevel : 11,

				description : "\n   " + "As a bonus action, I can infuse a weapon I touch with arcane power. The next time this weapon strikes a target before the start of my next turn, it deals an additional 2d4 force damage. When infusing the weapon I can expend a 1st level spell slot or higher spell slot to increase the damage to be an additional 4d4 force damage.",

				action : ["bonus action", ""],

				prereqeval : "classes.known.artificer.level >= 11"

			},

			"enchanted broom (prereq: level 11 artificer)" : {

				name : "Enchanted Broom",

				minlevel : 11,

				description : "\n   " + "I can enchant a broom (or broom like object) into a Broom of Flying. I set the command word for the broom, and the Broom only obeys me.",

				prereqeval : "classes.known.artificer.level >= 11"

			},

			"infuse elements" : {

				name : "Infuse Elements",

				minlevel : 3,

				description : "\n   " + "I can infuse elements with my magic temporarily, granting me limited control of them. I learn the cantrips control flames, mold earth, and shape water.",

				spellcastingBonus : {

					name : "Infuse Elements",

					spells : ["control flames", "mold earth", "shape water"],

					selection : ["control flames", "mold earth", "shape water"],

					times : 3

				}

			},

			"infuse shadows (prereq: level 5 artificer)" : {
				
				name : "Infuse Shadows",
				
				minlevel : 5,
				
				description : "\n   " + "You learn the spell shadow blade. When you are wielding the blade conjured by shadow blade you can treat it as an Infused Weapon.",
				
				spellcastingBonus : {

					name : "Infuse Shadows",

					spells : ["shadow blade"],

					selection : ["shadow blade"],

					times : 1

				},

				prereqeval : "classes.known.artificer.level >= 5"
				
			},
			
			"invisibility cloak (prereq: level 9 artificer)" : {
				
				name : "Invisibility Cloak",
				
				minlevel : 9,
				
				description : "\n   " + "You make a cloak of invisbility. While wearing this a creature can cast invisibility once without expending a spell slot. When cast in this method it does not require concentration. It cannot be used again in that way until you complete a short or long rest.",
				
				spellcastingBonus : {
				
					name : "Invisibility Cloak",
					
					spells : ["invisibility"],
					
					selection : ["invisibility"],
					
					times : 1
					
				},

				prereqeval : "classes.known.artificer.level >= 9"
				
			},

			"life infusion (prereq: level 11 artificer)" : {

				name : "Life Infusion",

				minlevel : 3,

				description : "\n   " + "I learn a potent magical infusion that suffuses a creature with life energy. I can cast regenerate without expending a spell slot. Once I cast this spell in this manner, I cannot use it again until I complete a long rest.",

				spellcastingBonus : {

					name : "Life Infusion",

					spells : ["regenerate"],

					selection : ["regenerate"],

					times : 1,					

				},

				recovery : "long rest",

				prereqeval : "classes.known.artificer.level >= 11"

			},	

			"magical rod (prereq: level 11 artificer)" : {
			
				name : "Magical Rod",
				
				minlevel : 11,
				
				description : "\n   " + "You create a new Rod that you can infuse with a spell of 5th level or higher you have recorded in your Spell Manual. This rod does not require attunement, but can only be used by you. The spell level must be equal to half or less of your Artificer level (as of when you would get this upgrade), rounded down. This rod has one charge. You can expend the charge to cast the selected spell at its base level. The rod regains all charges at the end of a long rest." + "\n   " + "You can select this upgrade multiple times, selecting a different spell each time you take this upgrade.",
				
				uses : 1,

				recovery : "long rest",
				
				prereqeval : "classes.known.artificer.level >= 11"
				
			},

			"magical wand" : {
			
				name : "Magical Wand",
				
				minlevel : 3,
				
				description : "\n   " + "You create a new Wand that you can infuse with a spell of 1st level or higher that you have recorded in your Spell Manual. This wand does not require attunement, but can only be used by you. The spell must be of a level that you can cast. This wand has three charges." + "\n   " + "You can expend a charge to cast the selected spell at its base level. The wand regains all charges at the end of a long rest." + "\n   " + "You can select this upgrade multiple times, selecting a different spell each time you take this upgrade.",
				
				uses : 3,
				
				recovery : "long rest"
				
			},

			"malicious infusion (prereq: level 5 artificer)" : {

				name : "Malicious Infusion",

				minlevel : 5,

				description : "\n   " + "As a reaction to being hit with a metal weapon, you can cast heat metal targeting the weapon that struck you. Additionally, you learn the spell heat metal.",

				spellcastingBonus : {

					name : "Malicious Infusion",

					spells : ["heat metal"],

					selection : ["heat metal"],

					times : 1

				},

				prereqeval : "classes.known.artificer.level >= 5"

			},

			"mixed technique (prereq: level 11 artificer)" : {
			
				name : "Mixed Technique",
				
				minlevel : 11,
				
				description : "\n   " + "When create an Arcane Armament at the end of a long rest, I can create two different Infused Armaments (I cannot select the same option twice); if I use my action to use one to attack or cast a cantrip, I can make a single attack with the other as a bonus action (a single Animated Weapon attack, or a single attack with your Infused Weapon)." + "\n   " + "For example, if I use my action to cast a cantrip with my Blasting Rod, I can use my bonus action to make a single animated weapon attack, or if I use my action to attack with my Animated Weapons, I can make a single Infused Weapon attack.",
				
				prereqeval : "classes.known.artificer.level >= 5"

				
			},

			"prepared enchantment (prereq: level 9 artificer)" : {
				
				name : "Prepared Enchantment",
				
				minlevel : 9, 
				
				description : "\n   " + "You bestow magical enchantments onto your gear, casting a limited version of contingency without expending a material component or spell slot. When cast in this way, the spell triggered by contingency must must a 2nd level or lower spell, and ends if you complete a long rest before the contingency is triggered." + "\n   " + "Once you cast contingency in this way, you cannot cast it again until you complete a long rest.",
				
				prereqeval : "classes.known.artificerlevel >= 9"
				
			},
			
			"ring of reaction (prereq: level 5 artificer)" : {
			
				name : "Ring of Reaction",
				
				minlevel : 5,
				
				description : "\n   " + "You make a minor magic ring. Any creature wearing it can add your Intelligence modifier to their Dexterity saving throws and initiative rolls.",
				
				prereqeval : "classes.known.artificerlevel >= 5"
				
			},

			"skilled animation" : {

				name : "Skilled Animation",

				minlevel : 3,

				description : "\n   " + "I manage to make the magic of my Animated Weapons so potent that attacks made with them are made as if made by a wielder with a fighting style. Attacks made with one-handed animated weapons can apply the Dueling fighting style to the attack, attacks made with two handed weapons can apply the Great Weapon Fighting style, and attacks made with ranged weapons can apply the Archery fighting style."

			},

			"spell trapping ring (prereq: level 9 artificer)" : {

				name : "Spell Trapping Ring",

				minlevel : 9,

				description : "\n   " + "I set a powerful magic into a non-magical ring. I can use this ring to cast counterspell without expending a spell slot. When I cast counterspell in this way and it succeeds, the spell countered is stored in the ring. I can then cast the stored spell without expending a spell slot, but the spell fades if it is not used before I complete a long rest. Once I use this ring, I cannot use it again until I complete a long rest.",

				spellcastingBonus : {

					name : "Spell Trapping Ring",

					spells : ["counterspell"],

					selection : ["counterspell"],

					times : 1

				},

				recovery : "long rest",

				prereqeval : "classes.known.artificer.level >= 9"

			},

			"soul saving bond" : {

				name : "Soul Saving Bond",

				minlevel : 3,

				description : "\n   " + "I set up a special magical bond between me and another creature. When either creature bound by this abilities fails Wisdom, Intelligence, Charisma, or Death saving throw, the other character can make their own saving throw, replacing the failed saved with their own roll. If this ability is used on a death saving throw, the replacement roll is a 20. Once a roll is replaced by this feature, it cannot be used again until both creatures in the bond have completed a short or long rest. This bond can be set up with a different creature at the end of a long rest.",

				recovery : "long rest"

			},

			"third animated weapon (prereq: level 15 artificer)" : {

				name : "Third Animated Weapon",

				minlevel : 15,

				description : "\n   " + "My mastery of weapon animation expands to greater breadth of control. I can animate a third weapon with my Animate Weapon feature. When I make a spell attack with my animated weapons, I can attack with this weapon as well.",

				prereqeval : "classes.known.artificer.level >= 15"

			},

			"translocation binding (prereq: level 5 artificer)" : {
			
				name : "Translocation Binding",
				
				minlevel : 5,
				
				description : "\n   " + "As a bonus action while attacking with an Infused or Animated melee weapon, you can expend a first level spell slot and teleport to an unoccupied location within 5 feet of it before it returns to you. You can invoke this even if the attack misses the target.",
				
				prereqeval : "classes.known.artificer.level >= 5"
				
			},

			"warding stone" : {

				name : "Warding Stone",

				minlevel : 3,

				description : "\n   " + "You learn how to weave a protective enchantment on an item. That item gains a pool of temporary hit points equal to your Artificer level. Whoever is carrying this item gains any temporary hit points remaining in this pool, but these are lost when that creature is no longer carrying this item. This pool of temporary hit points refreshes when the Artificer that created it completes a long rest."

			},	

			"weapon enchantment expertise (prereq: level 5 artificer)" : {

				name : "Weapon Enchantment Expertise",

				minlevel : 5,

				description : "\n   " + "Additionally, magical weapon or vorpal weapon increases the damage dealt by 1d4 force damage, and elemental weapon makes the weapon deal an additional 1d4 damage of the selected type." + "\n   " + "Additionally, when I make a Constitution saving throw to maintain Concentration on arcane weapon , magical weapon, elemental weapon, holy weapon, or vorpal weapon I have advantage on the roll.",				

				prereqeval : "classes.known.artificer.level >= 5"

			},

			"weapon enchantment resonance (prereq: level 5 artificer)" : {

				name : "Weapon Enchantment Resonance",

				minlevel : 5,

				description : "\n   " + "When I cast arcane weapon, magical weapon, elemental weapon, holy weapon or vorpal weapon it also effects any weapon Animated or Infused by me." + "\n   " + "Additionally, when I cast arcane weapon, magical weapon, elemental weapon, or vorpal weapon I can target a weapon that is already magical, adding to any effect the weapon already has.",				

				prereqeval : "classes.known.artificer.level >= 5"

			},

			"worn enchantment" : {

				name : "Worn Enchantment",

				minlevel : 3,

				description : "\n   " + "I can enchant an item I am wearing, such as a scarf or cloak to animate and assist me with a task, be it climbing a wall, grappling an enemy, or picking a lock. I can expend a 1st level spell slot to gain proficiency in a Strength or Dexterity skill until I complete a long rest. I can use up all the magic in the item to gain advantage on one check of that skill, immediately ending the effect."

			},

		},

	},

};

var iFileName = "Homebrew Syntax - SpellsList.js";

RequiredSheetVersion(13);

SpellsList["arcane ablation"] = {

	name : "Arcane Ablation",

	nameShort : "Arcane Ablation",

	regExpSearch : /^(?=.*arcane)(?=.*ablation).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 1,

	school : "Trans",

	time : "1 action",

	range : "Touch",

	components : "V,S",

	duration : "1 hour",

	description : "Touch a piece of worn armor and imbue it with magic.",

	descriptionFull : "I touch a piece of worn armor or clothing and imbue it with magic. The creature wearing this item gains 4 temporary hit points for the duration. When these hit points are exhausted, at the start of the creature's next turn it will gain 3 temporary hit points. This repeats when those temporary hit points are exhausted as the previous total minus one, until no temporary hit points would be gained and this spell ends." + "\n   " + "At Higher Levels: The initial temporary hit points increases by 1 for each level above 1st.",
},

SpellsList["arcane weapon"] = {

	name : "Arcane Weapon",

	nameShort : "Arcane Weapon",

	regExpSearch : /^(?=.*arcane)(?=.*weapon).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 1,

	school : "Trans",

	time : "1 action",

	range : "Touch",

	components : "V,S",

	duration : "Concentration, up to 1 hour",

	description : "Touch a weapon and imbue it with magic.",

	descriptionFull : "I touch a weapon and imbue it with magic. For the duration the weapon counts as a magical weapon, any damage dealt by it is Force damage.",
}

SpellsList["bond item"] = {

	name : "Bond Item",

	regExpSearch : /^(?=.*bond)(?=.*item).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 1,

	school : "Conj",

	time : "1 minute",

	range : "Touch",

	components : "V,S",

	duration : "8 hours",

	description : "Touch an item weighing no more than 100 pounds and form a link between it and myself.",

	descriptionFull : "I touch an item weighing no more than 100 pounds and form a link between you and it. Until the spell ends, you can recall it to your hand as a bonus action." + "\n   " + "If another creature is holding or wearing the item when you try to recall it, they make a Charisma saving throw, and if they succeed, the spell fails. They make this save with advantage if they have had possession of the item for more than 1 minute.",
}

SpellsList["fall"] = {

	name : "Fall",

	regExpSearch : /^(?=.*fall).*$/i,

	source : ["KT:AR", 36],

	classes : ["artificer", "sorcerer", "wizard"],

	level : 1,

	school : "Trans",

	time : "1 action",

	range : "Self",

	components : "V,S",

	duration : "Instantaneous",

	description : "I alter gravity for myself.",

	descriptionFull : "I alter gravity for yourself, causing you to reorient which way is down for you until the end of your turn. You can pick any direction to fall as if under the effect of gravity, falling up to 500 feet before the spell ends." + "\n   " + "If you collide with something during this time, you take falling damage as normal, but you can control your fall as you could under normal conditions by holding onto objects or move along a surface according to your new orientation as normal until your turn ends and gravity returns to normal.",
}

SpellsList["seeking projectile"] = {

	name : "Seeking Projectile",

	regExpSearch : /^(?=.*seeking)(?=.*projectile).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 1,

	school : "Trans",

	time : "1 action",

	range : "Touch",

	components : "V,S",

	duration : "Concentration, up to 10 minutes",

	description : "One piece of ammunition/weapon with thrown property. Ranged Attack add spellcasting modifier to dice roll. If 20+ attack = Critical hit.",

	descriptionFull : "You touch a piece of ammunition or weapon with the thrown property imbuing it with the property of seeking its target. When an ranged attack roll is made with that weapon, the attack roll can add your spell casting modifier to the value on the dice. If that makes the value on the die a 20 or more, the attack is a critical hit as if a 20 was rolled. After making the attack roll, the spell ends.",
}

SpellsList["unburden"] = {

	name : "Unburden",

	regExpSearch : /^(?=.*unburden).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 1,

	school : "Trans",

	time : "1 action",

	range : "Touch",

	components : "V,S",

	duration : "1 hour",

	description : "One creature.No penalties to movement of stealth whilst wearing heavy armor and carry weight = twice normal.",

	descriptionFull : "A creature you touch no longer suffers the penalties to movement speed or to their Dexterity (Stealth) checks while wearing heavy armor, and is no long encumbered from carry weight unless they are carrying more than twice the weight that would encumber them.",
}

SpellsList["imbue luck"] = {

	name : "Imbue Luck",

	regExpSearch : /^(?=.*imbue)(?=.*luck).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 2,

	school : "Abj",

	time : "1 action",

	range : "Touch",

	components : "V,S",

	duration : "1 hour",

	description : "Touch 1 weapon or worn item. Weapon = can roll additional d20 (choose after initial roll) and choose which to use. Worn item = when attacked, can roll d20 and choose which roll is used. After use spell ends.",

	descriptionFull : "You touch a weapon or worn item and imbue luck into it. If imbued on a weapon, for the duration, on an attack roll, the wielder can roll an additional d20 (they can choose to do this after they roll, but before the outcome is determined). The creature can choose which of the d20s is used for the attack roll. If imbued into a worn item, they can roll a d20 when attacked, then choose whether the attack uses the attacker's roll or theirs. With either use, the spell immediately ends upon rolling the extra d20.",
}

SpellsList["lightning charged"] = {

	name : "Lightning Charged",

	regExpSearch : /^(?=.*lightning)(?=.*charged).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 2,

	school : "Evoc",

	time : "1 action",

	range : "Touch",

	components : "V,S,M",
	
	compMaterial : "A piece of once used lightning rod",

	duration : "10 minutes",

	description : "Creature touched = +1d6 lightning damage for melee attacks, touch range spells, when hit in melee or end turn in grapple. After 6 discharges spell ends (+2 times/SL)",

	descriptionFull : "You channel lightning energy into a creature. The energy is harmless to the creature, but escapes in dangerous bursts to other nearby creatures." + "\n   " + "Every time that creature strikes another creature with a melee attack, a spell with a range of touch, is struck by another creature with a melee attack, or ends their turn while grappling or being grappled by another creature, they deal 1d6 Lightning damage to that creature." + "\n   " + "Once this spell has discharged 6 times (dealing up to 6d6 damage), the spell ends." + "\n   " + "At Higher Levels: The spell can discharge damage 2 additional times (dealing 2d6 more total damage) before the spell ends for each slot level above 2nd.",
}

SpellsList["thunderburst mine"] = {

	name : "Thunderburst Mine",

	regExpSearch : /^(?=.*thunderburst)(?=.*mine).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 2,

	school : "Abj",

	time : "1 minute",

	range : "Touch",

	components : "V,S,M",
	
	compMaterial : "A tiny nonmagical item, destroyed by the activation of the spell",

	duration : "8 hours",
	
	save : "Con",

	description : "Set magic trap, detonates when someone comes in 5ft or when verbal command is used. All creatures in 10ft area = Con save. 3d8 thunder damage on fail/half on success.",

	descriptionFull : "You can set a magical trap by infusing explosive magic into an item. You can set this item to detonate when someone comes within 5 feet of it, or by a verbal command using your reaction (one or more mines can be detonated)." + "\n   " + "When the magic trap detonates, each creature in a 10-footradius sphere centered on the item must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. If a creature is in the area of effect of more than one thunderburst mine during a turn, they take half damage from any subsequent effects of the mines." + "\n   " + "A magical mine must be set 5 feet or more from another mine, and cannot be moved once placed; any attempt to move it results in it detonating unless the Artificer that set it disarms it with an action.",
}

SpellsList["dispel construct"] = {

	name : "Dispel Construct",

	regExpSearch : /^(?=.*dispel)(?=.*construct).*$/i,

	source : ["KT:AR", 36],

	classes : "artificer",

	level : 3,

	school : "Abj",

	time : "1 action",

	range : "60 feet",

	components : "V,S",
	
	duration : "instantaneous",
	
	save : "Con",

	description : "Can purge animating magic of a construct. Target succeed Con saving throw or be reduced to 0hp. If target has 100+hp, roll with advantage.",

	descriptionFull : "You can attempt to purge the magic animating a construct within range, rendering it inert. The target must succeed on a Constitution saving throw, or be reduced to zero hit points. If the target has more than 100 hit points remaining, it makes this roll with advantage.",
}

SpellsList["fireburst mine"] = {

	name : "Fireburst Mine",

	regExpSearch : /^(?=.*fireburst)(?=.*mine).*$/i,

	source : ["KT:AR", 37],

	classes : "artificer",

	level : 3,

	school : "aBJ",

	time : "1 minute",

	range : "Touch",

	components : "V,S,M",
	
	compMaterial : "A tiny nonmagical item, destroyed by the activation of the spell",

	duration : "8 hours",
	
	save : "Dex",

	description : "Set magic trap, detonates when someone comes in 5ft or when verbal command is used. All creatures in 20ft area = Dex save. 5d8 fire damage on fail/half on success.",

	descriptionFull : "You can set a magical trap by infusing explosive magic into an item. You can set this item to detonate when someone comes within 5 feet of it, or by a verbal command using your reaction (one or more mines can be detonated)." + "\n   " + "When the magic trap detonates, each creature in a 20-foot radius sphere centered on the item must make a Dexterity saving throw. A creature takes 5d8 fire damage on a failed save, or half as much damage on a successful one. If a creature is in the area of effect of more than one thunderburst mine during a turn, they take half damage from any subsequent effects of the mines." + "\n   " + "A magical mine must be set 5 feet or more from another mine, and cannot be moved once placed; any attempt to move it results in it detonating unless the Artificer that set it disarms it with an action.",
}

SpellsList["repair"] = {

	name : "Repair",

	regExpSearch : /^(?=.*repair).*$/i,

	source : ["KT:AR", 37],

	classes : "artificer",

	level : 4,

	school : "Trans",

	time : "1 action",

	range : "Touch",

	components : "V,S",
	
	duration : "instantaneous",
	
	description : "Repair construct or inanimate object. Regain 10d6 (+ 2d6/SL) hp, or repair to condition from 10d6 (+ 2d6/SL) years ago.",

	descriptionFull : "You touch a construct or inanimate object, causing it regain 10d6 hit points. This causes any parts or material that has broken away from the construct or object to reattach, repairing it to the condition it was in before losing those hit points." + "\n   " + "If the construct or object damaged state is the result of age, you can instead repair to the condition it was in 10d6 years ago, if it was previously in a better condition during that time (the condition can only improve or not change)."  + "\n   " + "At Higher Levels: The hit points restored increases by 2d6 (or the years restored) for each slot above 4th.",
}

SpellsList["vorpal weapon"] = {

	name : "Vorpal Weapon",

	regExpSearch : /^(?=.*vorpal)(?=.*weapon).*$/i,

	source : ["KT:AR", 37],

	classes : "artificer",

	level : 5,

	school : "Trans",

	time : "1 action",

	range : "Touch",

	components : "V,S",
	
	duration : "Concentration, Up to 1 hour",
	
	description : "Weapon touched = ignores res to slashing. Double damage to inanimate objects. If < +3 to attack/damage becomes +3 to attack/damage. On Crit, if creature has less than 50 hp then creature is killed.",

	descriptionFull : "You touch a weapon and imbue it with power. Until the spell ends, the weapon becomes indescribably sharp, ignoring resistance to slashing damage, and gains the Siege property, dealing double damage to inanimate objects such as structures. If weapon has a modifier of less than +3 to attack and damage rolls, its modifier becomes +3 to attack and damage rolls for the duration of the spell." + "\n   " + "Additionally, if a critical strike of this weapon would leave a creature with less than 50 hitpoints, the target creature is decapitated, killing it.",
}
