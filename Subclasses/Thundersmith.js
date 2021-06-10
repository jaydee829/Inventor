var iFileName = "Inventor - Thundersmith.js";
RequiredSheetVersion(13);

AddSubClass("inventor", "thundersmith", {
    regExpSearch : /thundersmith/i,
    source: ["KTI",22],
    subname : "Thundersmith",
    features : {
        "subclassfeature1" : {
            name : "Thundersmith Proficiency",
            source: ["KTI", 22],
            minlevel : 1,
            description : "\n   " + "I gain proficiency with tinker's tools and smith's tools." + "\n   " + "If my weapon requires ammunition, I can create up to 50 rounds of ammunition during a long rest. Material cost: 1gp per 10 rounds"
            ,
            toolProfs : [["Smith's Tools", "Dex"], ["Tinker's Tools", "Dex"]]
        },
        "subclassfeature1.1" : {
            name : "Stormforged Weapon",
            source: ["KTI", 22],
            minlevel : 1,
            description : desc([
                "I create a deadly weapon by harnessing the power of elemental thundering storms. This weapon requires attunement, I am proficient with it whilst attuned and can only be attuned to one Stormforged Weapon at a time. If I have multiple Stormforged Weapons I can change my attunement as a part of a long rest.",
                "If I lose my Stormforged Weapon or wish to create additional ones, I can do so over the course of three days (eight hours a day) by expending 200gp worth of raw materials. When making a new Stormforged weapon I can choose the same or a different type, and can select the same or different upgrades.",
                "Use the \"Choose Feature\" button above to add a Stormforged Weapon",
            ]),
            extraname: "Stormforged Weapon",
            extraTimes: 1,
            extrachoices: ["Thunder Cannon", "Hand Cannon", "Kinetic Hammer", "Charged Blade", "Lightning Pike"],
            "thunder cannon": {
                name: "Thunder Cannon",
                source: ["KTI", 22],
                description: desc(["I use the power of Thunder to launch a projectile of terrible power, if limited accuracy, over long distances."]),
                eval: function(lvl, chc) {AddMagicItem("Thunder Cannon");},
                removeeval: function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("thunder cannon");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
            },
            "lightning pike": {
                name: "Lightning Pike",
                source: ["KTI", 22],
                description: desc(["I create a charged blade and stick it to the end of a pole, making it more unwieldy, but with deadly reach."]),
                eval: function(lvl, chc) {AddMagicItem("Lightning Pike");},
                removeeval: function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("lightning pike");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
            },
            "kinetic hammer": {
                name: "Kinetic Hammer",
                source: ["KTI", 22],
                description: desc(["I keep the thundering power of a cannon imbued in a weapon, allowing it to apply devastating force."]),
                eval: function(lvl, chc) {AddMagicItem("Kinetic Hammer");},
                removeeval: function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("kinetic hammer");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
            },
            "charged blade": {
                name: "Charged Blade",
                source: ["KTI", 22],
                description: desc(["I channel the power of an elemental storm directly into a blade."]),
                eval: function(lvl, chc) {AddMagicItem("Charged Blade");},
                removeeval: function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("charged blade");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
            },
            "hand cannon": {
                name: "Hand Cannon",
                source: ["KTI", 22],
                description: desc(["I use thundering power to launch a projectile with all the force of a Cannon, but without the long range or barrel."]),
                eval: function(lvl, chc) {AddMagicItem("Hand Cannon");},
                removeeval: function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("hand cannon");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
            },
        },
            
        "subclassfeature3" : {
			name : "Thundermonger",
            source: ["KTI", 23],
			minlevel : 3,
			description : desc([
                "When I hit with my Stormforged Weapon 1 can deal an extra 1d6 thunder damage. Once discharged in this way I cannot deal this bonus damage again until the start of my next turn.",
                "This extra damage increases by 1d6 every 2nd level I take in Inventor.",
            ]),
	    	additional : levels.map(function (n) {
				return Math.floor(n / 2) + "d6";
				}),
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if (classes.known.inventor && v.theWea.list == 'stormforged') {
                            output.thunderMng = Math.floor(classes.known.inventor.level / 2);
                            fields.Description += (fields.Description ? '; ' : '') + 'Thundermonger ' + output.thunderMng + 'd6 lightning dmg';
                        };
                    },
                ]   
            },
            usages: 1,
            recovery: "turn",
        },

		"subclassfeature5" : {
			name : "Devastating Blasts",
            source: ["KTI", 23],
			minlevel : 5,
			description : "\n   " + "When I miss an attack with my Stormforged Weapon, I can apply Thundermonger damage to the target, dealing 1/2 of the bonus damage. This counds as applying Thundermonger damage for that turn.",
		},

		"subclassfeature14" : {
			name : "Unleashed Power",
            source: ["KTI", 23],
			minlevel : 14,
			description : "\n   " + "When I roll damage for Thundermonger, or for my Stormforged Weapon, I can expend a spell slot to reroll a number of damage dice up to the level of the spell slot + my Int modifier (minimum one). I must use the new rolls.",
		},

        "subclassfeature3.1" : {
            name : "Specialization Upgrade",
            source: ["KTI", 4],
            minlevel : 3,
            description : desc([
                "Use the \"Choose Feature\" button above to add Upgrades to the third page",
                "Whenever I gain an Inventor level, I can replace an upgrade I know with another of the same level requirement",
                "I cannot select an upgrade more than once unless the description says otherwise",
            ]),
            additional : levels.map(function (n) {
                return n < 2 ? "" : (n < 5 ? 1 : n < 7 ? 2 : n < 9 ? 3 : n < 11 ? 4 : n < 13 ? 5 : n < 15 ? 6 : n < 17 ? 7 : n < 19 ? 8 : 9) + " upgrades";
            }),
            extraname : "Thundersmith Upgrades",
            extraTimes : levels.map(function (n) {
                return n < 2 ? 0 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 12 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8;
            }),
            extrachoices : [
                // Unrestricted
                "Adaptable Weapon", "Arcane Lightning", "Extended Range", "Lightning Burst", "Point Blank (prereq: Hand Cannon)", "Silencer (incompatible w/ Echoing Boom)", "Shock Absorber", "Twin Thunder", "Weapon Improvement",

                //Lvl 5
                "Echoing Boom (prereq: lvl 5 inventor; incompatible w/ Silencer)", "Harpoon Reel (prereq: lvl 5 inventor)", "Terrifying Thunder (prereq: lvl 5 inventor, Echoing Boom)", "Storm Blast (prereq: lvl 5 inventor)",

                //Lvl 9
                "Elemental Swapping (prereq: lvl 9 inventor)", "Mortar Shells (prereq: lvl 9 inventor, Ammunition property)", "Ride the Lightning (prereq: lvl 9 inventor, Lightning Burst)", "Shock Harpoon (prereq: lvl 9 inventor, Harpoon Reel)", "Synaptic Feedback (prereq: lvl 9 inventor)", "Thunder Jump (prereq: lvl 9 inventor)",

                //Lvl 11
                "Backblast (prereq: lvl 11 inventor)", "Blast Radius (prereq: lvl 11 inventor)", "Stabilization (prereq: lvl 11 inventor)",

                //Lvl 15
                "Massive Overload (prereq: lvl 15 inventor, Storm Blast or Lightning Burst)", "Masterwork Weapon (prereq: lvl 15 inventor, Weapon Improvement)"
            ],

            "adaptable weapon": {
                name: "Adaptable Weapon",
                source: ["KTI", 23],
                description: desc([
                    "I can adapt a wpn w/o the Ammunition property to have a secondary attack giving it the functionality of a Hand Cannon",
                    "or I can give a wpn w/ the Ammunition propery a secondary attack with the properties of a Charged Blade",
                ]),
            },
            "arcane lightning": {
                name: "Arcane Lightning",
                source: ["KTI", 23],
                description: desc(["My mastery of lightning and thunder magic has allowed me to learn additional spells"]),
                spellcastingExtra: ["thunderwave", "shatter", "lightning bolt", "storm sphere"],
                spellcastingExtraApplyNonconform: true,
            },
            "extended range": {
                name: "Extended Range",
                source: ["KTI", 23],
                description: desc(["I extend the reach of my Stormforged weapon"]),
                calcChanges: {
                    atkAdd:[
                        function (fields,v) {
                            if (classes.known.inventor && (/ammunition|ammo/i.test(fields.Description))) {
                                v.range = 30 + +/.+?(?=\/)/i.exec(fields.Range)[0]; 
                                v.longrange = 90 + +/[^\/]*(?=\s)/i.exec(fields.Range)[0];
                                fields.Range = v.range + '/' + v.longrange + ' ft';
                            };
                            if (classes.known.inventor && v.isMeleeWeapon && (/.*?(2|two).*?(handed)/i.test(fields.Description))) {
                                fields.Description += (fields.Description ? '; ' : '') + 'Reach';
                            };
                        },
                    ]
                }
            },
            "lightning burst" : {
                name : "Lightning Burst",
                source: ["KTI", 24],
                description : desc([
                    "I can use my action to make my Stormforged Weapon emit lightning in  a 5 ft x 60 ft line.",
                    "Each creature in the line must make a Dex save, taking my Thundermonger damage on a failure, halved on a success.",
                    "Using this shot counts as applying Thundermonger damage for the turn. Firing in this method does not consume ammo."
                ]),
                prereqeval : "classes.known.inventor.level >= 1",
                action: ["action", ""],
                additional: "event.value = 'DC'+ 8 + What('Proficiency Bonus') + What('Int Mod')"
            },
            "point blank (prereq: hand cannon)": {
                name: "Point Blank",
                source: ["KTI", 24],
                description: desc([
                    "Being within 5 ft of a hostile creature does not impose disadv on ranged atk rolls.",
                    "I can use my Hand Cannon to make opportunity attacks",
                ]),
                prereqeval: function(v) {
                    return GetFeatureChoice('classes', 'inventor', 'subclassfeature1.1') == 'hand cannon';
                },
                action: ["reaction", " - Opportunity Attack"],
            },
            "silencer (incompatible w/ echoing boom)": {
                name: "Silencer",
                source: ["KTI", 24],
                description: desc([
                    "My Stormforged Weapon loses the Loud property. I can overcharge the silencer using a 2nd lvl spell slot to cast Silence."
                ]),
                additional: "Incompatible w/ Echoing Boom",
                prereqeval: function(v) {
                    return GetFeatureChoice('classes', 'inventor','subclassfeature3.1', true).indexOf('echoing boom (prereq: lvl 5 inventor; incompatible w/ silencer)' == -1);
                },
                calcChanges: {
                    atkAdd:[
                        function (fields,v) {
                            fields.Description = fields.Description.replace(', Loud', '');
                        },
                    ],
                },
                spellcastingBonus: [{
                    name: "Silencer",
                    spells: ["silence"],
                    selection: ["silence"],
                }],
            },
            "shock absorber": {
                name: "Shock Absorber",
                source: ["KTI", 24],
                description: desc([
                    "As a reaction to taking thunder/lightning dmg, I can cast Absorb Elements w/o expending a spell slot.",
                    "The bonus dmg from this spell can be applied to a ranged weapon attack."
                ]),
                spellcastingBonus:[{
                    name: "Shock Absorber",
                    spells: ["absorb elements"],
                    selection: ["absorb elements"],
                    firstCol: "atwill",
                    spellChanges:{
                        "absorb elements":{
                            description: "Lightning or Thunder resistance vs. 1 atk; first melee/ranged hit next rnd +1d6+1d6/SL dmg",
                            changes: "Applies only to lightning/thunder dmg; bonus dmg can be applied to a ranged attack"
                        }
                    }
                }],
            },
            "sonic movement": {
                name: "Sonic Movement",
                source: ["KTI", 24],
                description: desc([
                    "When I make an attack w/ my Stormforged wpn that would deal thunder dmg, I can knock myself back 5ft w/o provoking opportunity atks."
                ]),
            },
            "twin thunder": {
                name: "Twin Thunder",
                source: ["KTI", 24],
                description: desc([
                    "I can attune to 2 one-handed Stormforged wpns. They can share upgrades or have total upgrades equal to my max.",
                    "I can load a Stormforged wpn while dual-wielding without a free hand."
                ]),
            },
            "weapon improvement": {
                name: "Weapon Improvement",
                source: ["KTI", 24],
                description: desc([
                    "My Stormforged wpn gains +1 to atk and dmg rolls. This does not stack with Arcane Retrofit."
                ]),
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (v.theWea.list == 'stormforged' && output.magic == 0) {
                                output.magic = 1;
                            };
                        }
                    ]
                }
            },
            "echoing boom (prereq: lvl 5 inventor; incompatible w/ silencer)": {
                name: "Echoing Boom",
                source: ["KTI", 24],
                prereqeval : function(v) { return classes.known.inventor.level >= 5 && GetFeatureChoice("classes", "inventor", "subclassfeature3.1", true).indexOf("silencer (incompatible w/ echoing boom)") == -1;},
                description: desc([
                    "My Thundermonger does an extra 1d6 damage."
                ]),
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (v.theWea.list == 'stormforged') {
                                output.thunderMng += 1 // Do I need to redo the description?
                            }
                        }
                    ]
                }
            },
            "harpoon reel (prereq: lvl 5 inventor)": {
                name: "Harpoon Reel",
                source: ["KTI", 24],
                prereqeval: function(v) { return classes.known.inventor.level >= 5; },
                description: desc([
                    "I add a Harpoon Reel to my Stormforged wpn. Upon hit, tgt and I are connected by 60 ft cord.",
                    "I can use bonus action to reel in cord, bringing me to tgt if they are Medium or larger.",
                    "Free action to disconnect cord. Cannot use again until Reel action taken."
                ]),
                action: ["bonus action", "Reel (after harpoon hit)"],
                eval: function(lvl, chc) {AddWeapon("Harpoon Reel");},
                removeeval: function(lvl, chc) {RemoveWeapon("Harpoon Reel");},
            },
            "terrifying thunder (prereq: lvl 5 inventor, echoing boom)": {
                name: "Terrifying Thunder",
                source: ["KTI", 24],
                prereqeval: function(v) {return classes.known.inventor.level >= 5 && (GetFeatureChoice("classes", "inventor", "subclassfeature3.1", true).indexOf("echoing boom") != -1);},
                description: desc([
                    "My Thundermonger deafens a creature until the end of their next turn the first time it does damage to it.",
                    "The creature must make a Wis save or be frightened of me for 1 min; repeat save at end of each turn, immune for 24 hrs on success."
                ]),
            },
            "storm blast (prereq: lvl 5 inventor)": {
                name: "Storm Blast",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 5;},
                description: desc([
                    "As an action, if I have not used it this turn, I can use my Thundermonger in a 30 ft cone.",
                    "All crea Str save or take 1d6 + half Thundermonger damage and be knocked prone.",
                ]),
                action: ["action", "Storm Blast"],
            },
            "elemental swapping (prereq: lvl 9 inventor)": {
                name: "Elemental Swapping",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 9;},
                description: desc([
                    "When I attack with my Stormforged Weapon, I can change the dmg type of my Thundermonger bonus dmg.",
                    "The dmg can be fire, cold, acid, or lightning, or I can use a Vial of Holy Water to deal radiant."
                ]),
            },
            "mortar shells (prereq: lvl 9 inventor, ammunition property)": {
                name: "Mortal Shells",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 9 && (GetFeatureChoice("classes", "inventor", "subclassfeature1.1", true).indexOf("hand cannon") != -1 || GetFeatureChoice("classes", "inventor", "subclassfeature1.1", true).indexOf("thunder cannon") != -1);},
                description: desc([
                    "I can launch mortar shells from my Stormforged Cannon. This uses my Thundermonger for the turn.",
                    "I make an attack roll. All crea hit w/i 5 ft of a point in range take wpn dmg + half Thundermonger bonus dmg.",
                    "Creatures do not get the benefit of cover from this attack unless they have overhead cover."
                ]),
                action: ["action", "Mortar Shell (1 attack)"],
            },
            "ride the lightning (prereq: lvl 9 inventor, lightning burst)": {
                name: "Ride the Lightning",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 9 && GetFeatureChoice("classes", "inventor", "subclassfeature3.1", true).indexOf("lightning burst") != -1;},
                description: desc([
                    "When I use Lightning Burst, I can expend a spell slot of 1st level or higher to teleport 60 ft in the direction of the Lightning Burst.",
                    "I can stop anywhere along the path of the Lightning Burst, and it stops where I do."
                ]),
            },
            "shock harpoon (prereq: lvl 9 inventor, harpoon reel)": {
                name: "Shock Harpoon",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 9 && GetFeatureChoice("classes", "inventor", "subclassfeature3.1", true).indexOf("harpoon reel") != -1;},
                description: desc([
                    "After I hit a crea w/ my Harpoon, I can use a bonus action to deal my Thundermonger dmg as lightning dmg to the crea.",
                    "The target must make a Con save or be stunned until the end of its next turn.",
                    "Once used, the Harpoon must be reeled in before I can use this again."
                ]),
                action: ["bonus action", "Shock Harpoon (1/Reel)"],
            },
            "synaptic feedback (prereq: lvl 9 inventor)": {
                name: "Synaptic Feedback",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 9;},
                description: desc([
                    "When I deal lightning dmg w/ my Stormforged wpn, my speed increases 10 ft and I can Dash orDisengage as a bns action.",
                    "This effect lasts until the end of my next turn.",
                ]),
            },
            "thunder jump (prereq: lvl 9 inventor)": {
                name: "Thunder Jump (prereq: lvl 9 inventor)",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 9;},
                description: desc([
                    "I can use my Thundermonger ability to cast thunder step without expending a spell slot instead of causing dmg.",
                    "Once I use this ability, I must complete a long or short rest before I use it again."
                ]),
                usages: 1,
                recovery: "short rest",
                spellcastingBonus: [{
                    name: "Thunder Jump",
                    spells: ["thunder step"],
                    selection: ["thunder step"],
                    firstCol: "oncesr"
                }],
            },
            "backblast (prereq: lvl 11 inventor)": {
                name: "Backblast",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 11;},
                description: desc([
                    "After dealing thunder dmg on my turn, I can cast thunderclap as a bonus action.",
                ]),
                spellcastingBonus: [{
                    name: "Backblast",
                    spells: ["thunderclap"],
                    selection: ["thunderclap"],
                    spellChanges: {
                        "thunderclap": {
                            time: "1 bns",
                            changes: "I can cast thunderclap as a bonus action instead of an action, provided I deal thunder dmg on my turn."
                        }
                    },
                    firstCol: What("Int Mod"),
                }],
                usages: "Intelligence modifier per",
                recovery: "long rest"
            },
            "blast radius (prereq: lvl 11 inventor)": {
                name: "Blast Radius",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 11;},
                description: desc([
                    "My Devastating Blasts now deal half wpn dmg (including mods) in addition to half Thundermonger dmg.",
                    "The missed target must be within 30 ft of me.",
                ]),
            },
            "stabilization (prereq: lvl 11 inventor)": {
                name: "Stabilization",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 11;},
                description: desc([
                    "If the targets of my Stormforged wpn are prone, I no longer have disadvantage.",
                    "If neither my target nor I have moved since last I made a ranged wpn atk against them, I have adv on ranged wpn atks."
                ]),
            },
            "massive overload (prereq: lvl 15 inventor, storm blast or lightning burst)": {
                name: "Massive Overload",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 15 && (GetFeatureChoice("classes", "inventor", "subclassfeature3.1", true).indexOf("storm blast") != -1 || GetFeatureChoice("classes", "inventor", "subclassfeature3.1", true).indexOf("lightning burst") != -1);},
                description: desc([
                    "Before taking a shot, I can expend a 3rd+ level spell slot to use Storm Blast or Lightning Burst at the same time as an atk.",
                    "The additional effect is powered by the spell slot, not Thundermonger. Its direction is the same as my atk.",
                    "Doing this damages my wpn, requiring me to spend an action to repair it."
                ]),
            },
            "masterwork weapon (prereq: lvl 15 inventor, weapon improvement)": {
                name: "Masterwork Weapon",
                source: ["KTI", 25],
                prereqeval: function(v) {return classes.known.inventor.level >= 15 && GetFeatureChoice("classes", "inventor", "subclassfeature3.1", true).indexOf("weapon improvement") != -1;},
                description: desc([
                    "The bonus to attack and damage rolls with my Stormforged Weapon increases by +2.",
                    "This bonus stacks with Weapon Improvement or Arcane Retrofit, to a max of +4",
                ]),
                calcChanges: {
                    atkCalc: [
                        function(fields, v, output) {
                            if (v.theWea.list == 'stormforged') {
                                output.magic = Math.max(4, output.magic + 2);
                            };
                        }
                    ]
                }
            }
        },

    }
});

            

//             extrachoices : [ 
            
//             "autoloading magazine (prereq: integrated magazine)" : {
//                 name : "Autoloading Magazine",
//                 description : desc([
//                     "Your Thunder Cannon now automatically chambers the next round, no longer requiring your bonus action to reload."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 1"
//             },
//             "blast shells (prereq: level 15 artificer)" : {
//                 name : "Blast Shells",
//                 description : desc([
//                     "You can choose to fire a blast shell when firing your Thunder Cannon. When firing a Blast Shell, pick a target area within normal range of your Thunder Cannon. ",
//                     "Make an attack roll as normal, and apply that attack roll to all targets within a 5 foot radius of your target point.",
//                     "The first target (your choice if multiple creatures are hit) takes damage from Thundermonger. Targets after the first take bonus damage equal to half of the bonus damage dealt by Thundermonger in addition to the weapon attack damage."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 15"
//             },
//             "cannon improvement (prereq: level 5 artificer)" : {
//                 name : "Cannon Improvement",
//                 description : desc([
//                     "You fine tune your Thunder Cannon's firing mechanism. The Thunder Cannon gains a +1 bonus to Attack and Damage Rolls made with it.",
//                     "After the first time you take this upgrade, the piercing damage dealt by your Thunder Cannon is considered magical.",
//                     "You can apply this upgrade up to 3 times."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 5"
//             },
//             "divination scope (prereq: level 5 artificer)" : {
//                 name : "Divination Scope",
//                 description : desc([
//                     "You add a scope to your Thunder Cannon and enchant the lenses with Divination magic.",
//                     "The Scope has 3 Charges. As a bonus action you can use 1 charge to cast Hunter's Mark. As an action you can use 2 charges to cast See Invisibility or 3 charges to cast Clairvoyance.",
//                     "The scope regains all charges after a long rest."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 5"
//             },
//             "echoing boom (prereq: incompatible with silencer)" : {
//                 name : "Echoing Boom",
//                 description : desc([
//                     "You pack extra power into your Thundermonger, increasing the damage it deals by 1d6."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 1"
//             },
//             "extended barrel" : {
//                 name : "Extended Barrel",
//                 description : desc([
//                     "You extend the length of your Thunder Cannon’s barrel and add rifling. The normal weapon range of your Thunder Cannon increases by 30 feet, and the maximum range by 90 feet.",
//                     "After applying this twice, if you have the Lightning Charged Bayonet upgrade, the Bayonet gains the Reach property.",
//                     "You can apply this upgrade up to 2 times."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 1"
//             },
//             "harpoon reel (prereq: level 5 artificer)" : {
//                 name : "Harpoon Reel",
//                 description : desc([
//                     "You install a secondary firemode that launches a Harpoon attached to a tightly coiled cord. This attack has a normal range of 30 feet and an maximum range of 60 feet, and it deals only 1d6 piecing damage.",
//                     "A creature struck by this attack is impaled by the Harpoon unless it removes the Harpoon as an action. Removing the Harpoon requires a DC 14 Strength check. While the Harpoon is stuck in the target, you are connected to the target by an 60 ft cord.",
//                     "While connected in this manner, you can use your bonus action to activate the Reel action, pulling yourself to the location if the target if the target is Medium or larger. A Small or smaller creature is pulled back to you. Alternatively, you can opt to disconnect the cord.",
//                     "This attack can target a surface, object, or creature. This attack cannot be used again until the Reel action is taken."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 5"
//             },
//             "integrated magazine" : {
//                 name : "Integrated Magazine",
//                 description : desc([
//                     "Your Thunder Cannon holds 2 rounds at a time, allowing you to attack twice before a bonus action reload is required."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 1"
//             },
            
//             "lightning charged bayonet" : {
//                 name : "Lightning Charged Bayonet",
//                 description : desc([
//                     "You affix a short blade to the barrel of your Thunder Cannon, allowing you to make a melee weapon attack with it. The blade is a finesse weapon melee weapon that you are proficient with, and deals 1d6 Piercing damage.",
//                     "When Thundermonger bonus damage is dealt with a bayonet attack, the damage type is lightning. Dealing damage this way counts as applying Thundermonger damage for the turn.",
//                     "The blade can be used to apply Thundermonger bonus damage."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 1"
//             },
//             "overchannel capacitor (prereq: level 5 artificer)" : {
//                 name : "Overchannel Capacitor",
//                 description : desc([
//                     "You gain the ability to channel your magical power into the Thunder Cannon to overload its damage.",
//                     "You can expend a spell slot to increase the damage dealt by Thundermonger by 1d8 per spell level spent."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 5"
//             },
//             "silencer (prereq: incompatible with echoing booms)" : {
//                 name : "Silencer",
//                 description : desc([
//                     "You upgrade your Thunder Cannon with a sound dampening module.",
//                     "Your Thunder Cannon loses the Loud property."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 1"
//             },
//             "snap fire (prereq: level 9 artificer)" : {
//                 name : "Snap Fire",
//                 description : desc([
//                     "You can use your reaction to take a opportunity attack with your Thunder Cannon if an enemy comes within 10 ft of you. You have disadvantage on this attack.",
//                     "This attack only deals Thundermonger bonus damage if you have not dealt the bonus damage since the start of your last turn."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 9"
//             },
//             "shock absorber" : {
//                 name : "Shock Absorber",
//                 description : desc([
//                     "As a reaction to taking Lightning or Thunder Damage, you can cast Absorb Elements without consuming a spell slot.",
//                     "When absorbed in this method, you can apply the bonus damage granted by Absorb Elements to your next Thunder Cannon attack even if you make a ranged attack."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 1"
//             },
//             "shock harpoon (prereq: level 9 artificer, harpoon reel)" : {
//                 name : "Shock Harpoon",
//                 description : desc([
//                     "After hitting a creature with the Harpoon fire mode, you can use a bonus action to deliver a shock. If you have not used it since the start of your turn, you can apply Thundermonger damage as lightning damage.",
//                     "Additionally, the target must make a Constitution saving throw against your spell save DC or be stunned until the end of its next turn.",
//                     "Once used, the Harpoon must be reeled in before this can be used again."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 9"
//             },
//             "storm blast (prereq: level 5 artificer)" : {
//                 name : "Storm Blast",
//                 description : desc([
//                     "You upgrade your Thunder Cannon to discharge its power in 30-foot cone from the gun. As an action, you can make a special attack.",
//                     "Each creature must make a Strength saving throw, or take half the bonus damage of Thundermonger and be knocked prone. Using this shot counts as applying Thundermonger damage for the turn.",
//                     "Firing in this way does not consume ammo."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 5"
//             },
//             "synaptic feedback (prereq: level 9 artificer)" : {
//                 name : "Synaptic Feedback",
//                 description : desc([
//                     "You install feedback loop into your cannon, allowing you to siphon some energy from your Thunder Cannon to empower your reflexes",
//                     "Whenever you deal lightning damage with your Thunder Cannon your walking speed increases by 10ft and you can take the Dash or Disengage actions as a bonus action.",
//                     "This boost lasts until the start of your next turn."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 9"
//             },
//             "turret deployment (prereq: level 9 artificer)" : {
//                 name : "Turret Deployment",
//                 description : desc([
//                     "As an action, you deploy your Thunder Cannon in a spot adjacent to you, and subsequently can attack with it as long as you are within 100 feet of it and you can see the target you are attacking.",
//                     "It still has its normal range from the point it is attacking. A creature adjacent to it in this mode can use an action to render it nonfunctional as a turret."
//                 ]),
//                 prereqeval : "classes.known.artificer.level >= 9"
//             }
//         },
//         "thunder_monger" : {
//             name : "Thunder Monger",
//             minlevel : 3,
//             description : desc([
//                 "Once per turn, you can deal an extra 1d6 thunder damage to one creature you hit with an Attack using Thunder Cannon. After discharging this bonus damage, the you cannot deal this bonus damage again until the start of your next turn.",
//                 "This extra damage increases by 1d6 when you reach certain levels in this class: 5th level (2d6), 7th level (3d6), 9th level (4d6), 11th level (5d6), 13th level (6d6), 15th level (7d6), 17th level (8d6), and 19th level (9d6)."
//             ])
//         },
//         "devastating_blasts" : {
//             name : "Devastating Blasts",
//             minlevel : 5,
//             description : desc([
//                 "Beginning at 5th level, when you miss an attack with your Thunder Cannon, you can still choose to apply your Thundermonger damage, but it deals only half the bonus damage"
//             ])
//         },
//         "elemental_swapping" : {
//             name : "Elemental Swapping",
//             minlevel : 14,
//             description : desc([
//                 "When you take the attack action with your Thunder Cannon you can adjust the firing chamber, causing any bonus damage granted by Thundermonger to deal Fire, Cold, Acid, or Lightning damage instead of Thunder damage.",
//                 "Alternatively, you can consume a Vial of Holy Water to cause your next Thundermonger bonus damage to deal Radiant Damage."
//             ])
//         }
//     }
// };
