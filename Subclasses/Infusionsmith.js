// NOT UPDATED!!!!

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
					
				}
			],
			
			atkAdd : [

				function (fields, v) {
					
					if (!classes.known.artificer || classes.known.artificer.level < 3 || v.isSpell || v.isRangedWeapon) return;
					
					if ((/animated/i).test(v.WeaponText)) {
						if ((/!heavy|!light/).test(v.WeaponText)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Melee spell Attack';
							fields.Range = 'Melee, 30ft';
						};
						if ((/light/).test(v.WeaponText)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Melee spell Attack';
							fields.Range = 'Melee, 60ft';
						};
						if ((/heavy/).test(v.WeaponText)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Melee spell Attack';
							fields.Range = 'Melee, 15ft';
						};
						if (What('Int Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod')) {
							fields.Mod = 4;
						};
						fields.Proficiency = true;
					}
					
				}
			],
			},
		
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

				armorOptions : {
					regExpSearch : /^(?=.*(mage|magic))(?=.*armou?r).*$/i,
					name : "Mage armor (Int)",
					source : [["SRD", 160], ["P", 256]],
					ac : 13,
					dex : -10,
					addMod : true,
					list : "magic"
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
