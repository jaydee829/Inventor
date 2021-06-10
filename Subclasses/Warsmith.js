var iFileName = "Inventor - Thundersmith.js";
RequiredSheetVersion(13);

AddSubClass("inventor", "warsmith", {
    regExpSearch : /warsmith/i,
    subname : "Warsmith",
    features : {
        "warsmiths proficiency" : {
            name : "Warsmith's Proficiency",
            minlevel : 1,
            description : desc([
                "You gain proficiency with Heavy Armor, Tinker's Tools, and Smith's Tools."
            ]),
            toolProfs : [["Smith's Tools", "Str"], ["Tinker's Tools", "Int"]],
            armor : [true, true, true, false],
            weapons: [true, false]
        },
        "warplate gauntlet" : {
            name : "Warplate Gauntlet",
            minlevel : 1,
            description : desc([
                "You have constructed a Warplate Gauntlet. This is a specialized Wondrous Item that only you can attune to. When you create this gauntlet, you can add one of the following upgrades to it: \"Power Fist\", \"Force Blast\", or \"Martial Grip\". This upgrade does not count towards your upgrade total. You can make multiple gauntlets with different upgrades, but you can only be attuned to one at a time. If you lose your Warplate gauntlet, you can remake it during a long rest with 25 gold worth of materials, or you can scavenge for materials and forge it over two days of work (eight hours a day) without the material expense."
            ]),
        },
        "artificial strength": {
            name: "Artificial Strength",
            minlevel: 1,
            description: desc([
                "When you don your Warplate Gauntlet or as an action while wearing it, you can dedicate some of your intelligence to fully controlling the power of the gauntlet. You can reduce your current and maximum Intelligence score to increase your current Strength ability score by the same amount, but you can only raise your Strength ability score up what your Intelligence ability score was before engaging Artificial Strength. You can stop using Artificial Strength at any time, and it automatically ends if your gauntlet is removed."
            ]),
            action: ["action", ""]
        },
        "warsmiths armor": {
            name: "Warsmith's Armor",
            minlevel : 3,
            description : desc([
                "At 3rd level, you've attained the knowledge of forging and arcane tinkering sufficient to create a set of armor that augments and expands your abilities from a standard, nonmagical, set of heavy armor using resources you've gathered. This process takes 8 hours to complete, requiring the use of a forge, foundry or similar and it incorporates a Warplate Gauntlet (they do not require separate attunement). While wearing your armor, your Strength ability score increases by 2, and your maximum Strength ability score becomes 22. You can create a new set of armor by forging it from a set of gathered and purchased materials in a process that takes 2000 gold pieces and eight hours. You can create multiple sets of armor, but you can only be attuned to one of them at a given time, and you can only change which one you are attuned to during a long rest. When you create your armor, you can create a heavy plated Warplate, a magically enhanced Warsuit, or you can integrate your changes directly into your body as an Integrated Armor."
            ]),
            extraname: "Armor Choice",
            extrachoices: ["Warplate", "Warsuit", "Integrated Armor"],

            //Warsmith's Armors

            "warplate": {
                name: "Warplate",
                description: desc([
                    "You built the Warplate, a heavily plated set of armor."
                ]),
                eval: "AddArmor('Warplate');",
                removeeval: "RemoveArmor('Warplate');",
                prereqeval: "classes.known.inventor.level >= 3"
            },
            "warsuit": {
                name: "Warsuit",
                description: desc([
                    "You built the Warsuit, a magically enhanced set of gear."
                ]),
                eval: "AddArmor('Warsuit');",
                removeeval: "RemoveArmor('Warsuit');",
                prereqeval: "classes.known.inventor.level >= 3"
            },
            "integrated armor": {
                name: "Integrated Armor",
                description: desc([
                    "You upgraded your own body with the Integrated Armor."
                ]),
                eval: "AddArmor('Integrated Armor');",
                removeeval: "RemoveArmor('Integrated Armor');",
                prereqeval: "classes.known.inventor.level >= 3"
            },
        },
        "armor upgrades" : {
            name : "Armor Upgrades",
            minlevel : 3,
            description : desc([
                "If you create a new set of Warplate, you can apply a number of Upgrades equal to the value on the class table, applying each at the level you get it on the class table."
            ]),
            additional : ["", "", "1 upgrade", "1 upgrade", "2 upgrades", "2 upgrades", "3 upgrades", "3 upgrades", "4 upgrades", "4 upgrades", "5 upgrades", "5 upgrades", "6 upgrades", "6 upgrades", "7 upgrades", "7 upgrades", "8 upgrades", "8 upgrades", "9 upgrades", "9 upgrades"],
            extraname: "Inventor Upgrades",
            extrachoices: ["Accelerated Movement", "Arcane Visor", "Collapsible (incompatible with Integrated Armor)", "Flame Projector (incompatible with other Projectors)", "Force Blast", "Grappling Reel (prereq: Warplate -or- Integrated Armor)", "Grappling Hook (prereq: Warsuit)",
                "Lightning Channel", "Lightning Projector (incompatible with other Projectors)", "Martial Grip", "Power Fist", "Reinforced Armor", "Sentient Armor", 
                "Artificial Guidance (prereq: lvl 5, Sentient Armor)", "Active Camouflage (prereq: lvl 5)", "Emergency Protocol (prereq: lvl 5, Sentient Armor)", "Force Accumulator (prereq: lvl 5, Force Blast)", "Mechanical Enhancement (prereq: lvl 5, Integrated Armor)",
                "Reactive Plating (prereq: lvl 5, Warplate)", "Resistance (prereq: lvl 5)", "Sealed Suit (prereq: lvl 5, Warplate)", 
                "Ether Reactor (prereq: lvl 9)", "Heads Up Display (prereq: lvl 9, Arcane Visor -or- Sentient Armor)", "Brute Force Style (prereq: lvl 9)", "Phase Suit (prereq: lvl 9, Warsuit)", "Recall (prereq: lvl 9)", 
                "Cloaking Device (prereq: lvl 11, Active Camouflage)", "Lightning Rod (prereq: lvl 11, Lightning Channel", "Flash Freeze Capacitator (prereq: lvl 11, incompatible with other Capacitors)", "Flight (prereq: lvl 11)",
                "Integrated Attack (prereq: lvl 11, Integrated Armor -or- Warplate, incompatible with Iron Grip)", "Iron Muscle (prereq: lvl 11, Integrated Armor -or- Warplate)", "Power Slam Capacitor (prereq: lvl 11, incompatible with other Capacitors.)",
                "Iron Grip (prereq: lvl 15, Iron Muscle, incompatible with Integrated Attack)", "Phase Engine (prereq: lvl 15, Warsuit)", "Heavy Plating (prereq: lvl 15, Warplate)", "Sun Cannon (prereq: lvl 15)", "Virtual Interface (prereq: lvl 15, Sentient Armor)"
            ],

            //Unrestricted Upgrades

            "accelerated movement" : {
                name : "Accelerated Movement",
                description : desc([
                    "You reduce the weight of your armor and increase the power to joints. The armor's weight is reduced by 15 lbs. While wearing your armor, your speed increases by 10 feet. This applies to all movement speeds you have while wearing your armor. You can apply this upgrade up to 2 times."
                ]),
                speed : { allModes : "+10" },
                prereqeval : ""
            },
            "arcane visor" : {
                name: "Arcane Visor",
                description: desc([
                    "You magically enchant your visor. You gain one of the following effects while wearing the armor, picking one when you choose this Upgrade.",
                    " \u2022You gain darkvision to a range of 60 ft. If you already have darkvision, the range of that darkvision is increased by 60 ft.",
                    " \u2022You can ignore Sunlight Sensitivity.",
                    " \u2022Divination spells no longer require Concentration to maintain. You can only use this effect one spell at a time.",
                    "Regardless of your choice, you also always have advantage on saving throws against being blinded while wearing your armor. You can select this Upgrade multiple times (manually, this is not implemented in the PDF)."
                ]),
                vision: [["Darkvision", "fixed 60"], ["Darkvision", "+60"], ["You ignore Sunlight Sensitivity.", ""]],
                prereqeval: ""
            },
            "collapsible (incompatible with integrated armor)" : {
                name: "Collapsible",
                description: desc([
                    "Your Warsmith's armor can collapse into a case for easy storage. When transformed this way, the armor is indistinguishable from a normal case and weighs 1/3 its normal weight. As an action, you can don or doff the armor, allowing it to transform as needed."
                ]),
                action: ["action", " (don/doff Warplate)"],
                prereqeval: ""
            },
            "flame projector (incompatible with other projectors)" : {
                name: "Flame Projector",
                description: desc([
                    "You gain the ability to unleash fire energy. While wearing your Warplate Gauntlet, you can cast \"Fire Bolt\" and gain access to the following spells at 3rd, 5th, 9th, 13th, and 17th level: \"Burning Hands\", \"Scorching Ray\", \"Fireball\", \"Wall of Fire\", and \"Immolation\"."
                ]),
                spellcastingBonus: {
                    name: "Flame Projector",
                    spells: ["fire bolt", "burning hands", "scorching ray", "fireball", "wall of fire", "immolation"],
                    selection: ["fire bolt", "burning hands", "scorching ray", "fireball", "wall of fire", "immolation"],
                    times: 5
                },
                prereqeval: ""
            },
            "force blast" : {
                name: "Force Blast",
                description: desc([
                    "You upgrade your Warplate Gauntlet to deliver special ranged attacks. These attacks are a ranged spell attack that deal 1d8 + your Intelligence modifier Force damage. The range is 60 feet. You are proficient in this weapon. When you take the attack action, you can use this ranged spell attack in place of any attack made."
                ]),
                eval: "AddWeapon('force blast');",
                removeeval: "RemoveWeapon('force blast');",
                prereqeval: ""
            },
            "grappling reel (prereq: warplate -or- integrated armor)" : {
                name: "Grappling Reel",
                description: desc([
                    "Your Warsmith's armor gains an integrated grappling reel set into your gauntlet. As an attack or action, you may target a surface, object or creature within 30 feet. If the target is Large or smaller, you can make a Grapple check to pull it to you and Grapple it. Alternatively, if the target is Large or larger, you can choose to be pulled to it, this does not grapple it. This movement generates attacks of opportunity as normal movement would."
                ]),
                action : ["action", ""],
                prereqeval: ""
            },
            "grappling hook (prereq: warsuit)" : {
                name: "Grappling Hook",
                description: desc([
                    "Your Warsuit gains an integrated grappling reel set into your gauntlet. As an attack or action, you may target a surface, object or creature within 20 feet. If the target is Small or smaller, you can make a Grapple check to pull it to you and Grapple it. Alternatively, if the target is Medium or larger, you can choose to be pulled to it, this does not grapple it. Any attacks of opportunity generated by this movement are made with disadvantage."
                ]),
                action: ["action", ""],
                prereqeval: ""
            },
            "lightning channel" : {
                name: "Lightning Channel",
                description: desc([
                    "You are able to funnel your suit's power into your attacks. You can use this upgrade to cast \"Lightning Charged\" as a bonus action without expending a spell slot. Additionally, you can apply the damage from \"Lightning Charged\" on your Force Blast ranged spell attacks. Once used, this Upgrade cannot be used until you complete a short or long rest."
                ]),
                recovery: "short rest",
                usages: 1,
                action: ["bonus action", " (6 uses)"],
                prereqeval: ""
            },
            "lightning projector (incompatible with other projectors)" : {
                name: "Lightning Projector",
                description: desc([
                    "You gain the ability to unleash lightning energy. While wearing your Warplate Gauntlet, you can cast \"Shocking Grasp\" and gain access to the following spells at 3rd, 5th, 9th, 13th, and 17th level: \"Lightning Tendril\", \"Lightning Charged\", \"Lightning Bolt\", \"Jumping Bolt\", and \"Sky Burst\"."
                ]),
                spellcastingBonus: {
                    name: "Lightning Projector",
                    spells: ["lightning tendril", "lightning charged", "lightning bolt", "jumping bolt", "sky burst"],
                    selection: ["lightning tendril", "lightning charged", "lightning bolt", "jumping bolt", "sky burst"],
                    times: 5
                },
                prereqeval: ""
            },
            "martial grip" : {
                name: "Martial Grip",
                description: desc([
                    "Your Warplate gauntlet grants the ability to wield a wide variety of powerful weapons. You gain proficiency with martial weapons while wearing your Warplate Gauntlet"
                ]),
                weapons: [[true, true]],
                prereqeval: ""
            },
            "power fist" : {
                name: "Power Fist",
                description: desc([
                    "Your Warplate Gauntlet becomes a melee weapon while you aren't holding anything in it. You have proficiency in this weapon, and it has the Light and Special properties. It deals 1d8 bludgeoning damage.",
                    "Special: When you make an attack roll, you can choose to forgo adding your Proficiency modifier to the attack roll. If the attack hits, you can add double your Proficiency modifier to the damage roll. You can apply this Upgrade a second time, making a second Power Fist with the same properties for the purpose of dual wielding."
                ]),
                eval: "AddWeapon('power fist');",
                removeeval: "RemoveWeapon('power fist');",
                prereqeval: ""
            },
            "reinforced armor" : {
                name: "Reinforced Armor",
                description: desc([
                    "You reinforce the structure and materials that make up your Warsmith's armor. Your Warsmith's armor Armor Class (AC) increases by 1. You can apply this upgrade up to 3 times (manually, this is not implemented in the PDF)."
                ]),
                extraAC: [{
                    mod: 1,
                    name: "Reinforced Armor",
                    text: "I improved my Warsmith's armor, improving its AC by 1."
                }],
                prereqeval: ""
            },
            "sentient armor": {
                name: "Sentient Armor",
                description: desc([
                    "You create an artificial personality integrated into your Warsmith's armor, giving it limited sentience. This sentience assists you in many ways. While wearing your Warsmith's armor, your Intelligence ability score and maximum Intelligence ability score are increased by 2. Your armor can understand and speak any language you can speak. You can communicate telepathically with it while wearing it."
                ]),
                scores: [0, 0, 0, 2, 0, 0],
                scoresMaximum: [0, 0, 0, 22, 0, 0],
                prereqeval: ""
            },

            //Level 5 Upgrades

            "artificial guidance (prereq: lvl 5, sentient armor)" : {
                name: "Artificial Guidance",
                description: desc([
                    "You upgrade the artificial personality integrated into your armor to assist with new skills. While able to communicate with your armor, you can gain the effect of \"Guidance\" when making an Intelligence or Wisdom ability check."
                ]),
                prereqeval: "classes.known.inventor.level >= 5"
            },
            "active camouflage (prereq: lvl 5)" : {
                name : "Active Camouflage",
                description : desc([
                    "As an action, you can activate active camouflage causing your suit to automatically blend into its surroundings. This lasts until deactivated. While this is active, you are considered lightly obscured and can hide from a creature even when they have a clear line of sight to you. Wisdom (Perception) checks to find you that rely on vision are made with disadvantage."
                ]),
                action : ["action", ""],
                prereqeval : "classes.known.inventor.level >= 5"
            },
            "emergency protocol (prereq: lvl 5, sentient armor)" : {
                name : "Emergency Protocol",
                description: desc([
                    "The artificial intelligence in your armor will attempt to preserve your life. If you are Incapacitated or Unconscious and cannot take your action, it will cast a spell or take the dodge action. It can only cast spells using your armor's upgrades. It can act in this way up a number of turns equal to your Intelligence modifier, but this cannot happen again until you complete a short or long rest. You automatically resume control if you are no longer Incapacitated or Unconscious."
                ]),
                recovery: "short rest",
                usages: 1,
                action: ["action", " (Spell from Upgrade or Dodge Action)"],
                prereqeval: "classes.known.inventor.level >= 5"
            },
            "force accumulator (prereq: lvl 5, force blast)" : {
                name: "Force Accumulator",
                description: desc([
                    "Every time you expend a spell slot of 1st or higher level, you accumulate charges equal to the level of the spell slot spent. You can accumulate charges up to half your Intelligence modifier (rounded down), and can expend charges when you deal damage with Force Blast to deal an additional 1d6 damage or push the target 5 ft away from you per charge spent. Charges not spent within 1 minute of being accumulated are lost."
                ]),
                action: ["reaction", " (Free Action)"],
                prereqeval: "classes.known.inventor.level >= 5"
            },
            "mechanical enhancement (prereq: lvl 5, integrated armor)" : {
                name: "Mechanical Enhancement",
                description: desc([
                    "You improve every aspect of yourself ever so slightly. You gain + 5 feet of movement, one additional hit point per Inventor level, and + 1 to Strength, Dexterity, and Constitution saving throws."
                ]),
                speed: { allModes: "+5" },
                addMod: [{
                    type: "save",
                    field: "Str",
                    mod: 1
                },
                {
                    type: "save",
                    field: "Dex",
                    mod: 1
                },
                {
                    type: "save",
                    field: "Con",
                    mod: 1
                }],                
                rereqeval: "classes.known.inventor.level >= 5"
            },
            "reactive plating (prereq: lvl 5, warplate)" : {
                name: "Reactive Plating",
                description: desc([
                    "Your armor partially deflects incoming blows. You can use your reaction when hit by an attack that deals bludgeoning, piercing, or slashing damage to reduce the damage of that attack by an amount equal to your proficiency bonus."
                ]),
                action: ["reaction", ""],
                prereqeval: "classes.known.inventor.level >= 5"
            },
            "resistance (prereq: lvl 5)" : {
                name: "Resistance",
                description: desc([
                    "You tune your Warplate against certain forms of damage. Choose acid, cold, fire, force, lightning, necrotic, radiant, or thunder damage. While wearing your Warsmith's armor, you have resistance to that type of damage. You can choose this upgrade multiple times, picking a different damage type each time (manually, this is not implemented in the PDF)."
                ]),
                prereqeval: "classes.known.inventor.level >= 5"
            },
            "sealed suit (prereq: lvl 5, warplate)" : {
                name: "Sealed Suit",
                description: desc([
                    "As a bonus action on your turn you can environmentally seal your Warplate, giving you an air supply for up to 1 hour and making you immune to poison (but not curing you of existing poisoned conditions). Your armor regains 1 minute of air for every minute that you are not submerged and the armor is not sealed. In addition to the above, you are also considered adapted to cold and hot climates while wearing your armor, and you’re also acclimated to high altitude while wearing your armor."
                ]),
                action: ["bonus action", ""],
                prereqeval: "classes.known.inventor.level >= 5"
            },

            //Level 9 Upgrades

            "ether reactor (prereq: lvl 9)" : {
                name: "Ether Reactor",
                description: desc([
                    "You construct an ether reactor that feeds your armor, powering its upgrades with arcane energy. The Ether Reactor has 6 charges, and can be used to power upgrades that cast spells, even upgrades that would normally only recharge after a rest. You can cast those spells using charges instead, spending 1 charge per level of the spell you are casting. You can cast spells at a higher level by expending more charges. If your Ether Reactor has no charges left, you can overdraw your Ether Reactor for one last burst of power, but your armor is temporarily immobilized and your speed while wearing your armor becomes zero for a number of rounds equal to the level of the last spell cast. It regains all charges after a long rest."
                ]),
                recovery: "long rest",
                usages: 6,
                prereqeval: "classes.known.inventor.level >= 9"
            },
            "heads up display (prereq: lvl 9, arcane visor -or- sentient armor)" : {
                name: "Heads Up Display",
                description: desc([
                    "You can delegate displaying and tracking things in your sight to your Sentient armor, granting you the following benefits:",
                    " \u2022When a creature attempts to take the Hide action against you, you can make an active Wisdom (Perception) check to contest its Dexterity (Stealth) check as a reaction.",
                    " \u2022When making a Dexterity saving throw against an attack you can see, you can make an Intelligence saving throw instead.",
                    " \u2022When a creature hits you with a ranged attack roll, you can cast \"True Strike\" as a reaction targeting that creature."
                ]),
                action: ["reaction", ""],
                prereqeval: "classes.known.inventor.level >= 9"
            },
            "brute force style (prereq: lvl 9)" : {
                name: "Brute Force Style",
                description: desc([
                    "The strength imparted by your armor gives the force of your blows the devastating power of a more skilled combatant. You can select a Fighting Style from Duelist, Great Weapon Fighting, or Two Weapon Fighting and gain the effect of that Fighting Style while wearing your Warsmith's armor"
                ]),
                prereqeval: "classes.known.inventor.level >= 9"
            },
            "phase suit (prereq: lvl 9, warsuit)" : {
                name : "Phase Suit",
                description : desc([
                    "You gain the ability to cast \"Misty Step\" and \"Blink\" while wearing your Warsuit. Additionally, as an action, you can become intangible and move through creatures and objects until the end of your turn. If you end your turn inside a creature or object, you are forced to the nearest unoccupied location, taking 10 force damage for each foot you are forced to move. Once you become intangible using this upgrade, you cannot do so again until you complete a short or long rest."
                ]),
                recovery : "short rest",
                usages : 1,
                action : ["action", ""],
                spellcastingBonus : {
                    name : "Phase Suit",
                    spells : ["misty step", "blink"],
                    selection : ["misty step", "blink"],
                    times : 2
                },
                prereqeval: "classes.known.inventor.level >= 9"
            },
            "recall (prereq: lvl 9)" : {
                name: "Recall",
                description : desc([
                    "When not being worn, you can hide your Warplate in a pocket dimension. As an action on your turn, you can magically summon the armor and don it. You can use a bonus action to return the armor to the pocket dimension. While in the pocket dimension, the armor cannot be affected by other abilities and cannot be interacted with in any way."
                ]),
                eval : "AddAction('bonus action', 'Recall (doff Warplate)', 'Inventor (Warsmith)');",
                removeeval : "RemoveAction('bonus action', 'Recall (doff Warplate)');",
                action : ["action", " (don Warplate)"],
                prereqeval : "classes.known.inventor.level >= 9"
            },

            //Level 11 Upgrades

            "cloaking device (prereq: lvl 11, active camouflage)" : {
                name : "Cloaking Device",
                description : desc([
                    "If you do not move during your turn with active camouflage engaged, you can use your reaction to take the Hide action using an Intelligence(Stealth) check. You make this check with disadvantage if you are within 5 feet of another creature or you attacked during your turn. You can overload your camouflage to cast \"Greater Invisibility\" without expending a spell slot. Once you do this, you cannot do this again until you complete a long rest."
                ]),
                recovery : "long rest",
                usages : 1,
                action : ["action", " (Overload)"],
                prereqeval : "classes.known.inventor.level >= 11"
            },
            "lightning rod (prereq: lvl 11, lightning channel" : {
                name: "Lightning Rod",
                description: desc([
                    "Whenever you cast \"Lightning Charged\", you can treat the spell as if it was cast by a spell slot one level higher."
                ]),
                prereqeval: "classes.known.inventor.level >= 11"
            },
            "flash freeze capacitator (prereq: lvl 11, incompatible with other capacitors)" : {
                name : "Flash Freeze Capacitor",
                description : desc([
                    "You can store arcane energy, releasing it in a torrent of freezing energy. As an action, you can cast cone of cold without expending a spell slot or charges. The affected area becomes difficult terrain until the end of your next turn. Once you use this upgrade, you cannot use it again until you complete a long rest."
                ]),
                recovery: "long rest",
                usages: 1,
                action: ["action", " (Cone of Cold)"],
                prereqeval : "classes.known.inventor.level >= 11"
            },
            "flight (prereq: lvl 11)" : {
                name : "Flight",
                description : desc([
                    "You integrate a magical propulsion system into your Warsmith's Armor. While wearing your Warsmith's armor, you have a magical flying speed of 30 feet."
                ]),
                speed : { fly : "30"},
                prereqeval : "classes.known.inventor.level >= 11"
            },
            "integrated attack (prereq: lvl 11, integrated armor -or- warplate, incompatible with iron grip)" : {
                name : "Integrated Attack",
                description : desc([
                    "You integrate a melee weapon into your Warsmith's Armor. When you apply this Upgrade, you must have a weapon to integrate, and you must choose where on your armor the weapon is located. The weapon cannot have the Heavy property. You are proficient with this weapon. As a bonus action, you can activate the weapon. You must treat it as though you are wielding it with one hand, but you cannot be disarmed of it. Once activated, you can use this weapon when you take the attack action, and it does not require the use of a hand or your Warplate Gauntlet. You can apply this Upgrade multiple times, selecting a new weapon and new location on your armor to install it (manually, this is not implemented in the PDF). When you activate your integrated weapon, you can immediately make one free attack with it. While it is active, if you take the attack action on your turn, you can make one additional weapon attack with your integrated weapon using your bonus action."
                ]),
                action: [
                    ("bonus action", " (activate + attack/bonus action attack)")
                ],
                prereqeval : "classes.known.inventor.level >= 11"
            },
            "iron muscle (prereq: lvl 11, integrated armor -or- warplate)": {
                name: "Iron Muscle",
                description: desc([
                    "You reinforce the structure of your Warsmith's armor, giving it the strength of giants. While wearing your Warsmith's armor, your current Strength ability score is increased by 2, and your maximum Strength ability score becomes 24."
                ]),
                scores: [2, 0, 0, 0, 0, 0],
                scoresMaximum: [24, 0, 0, 0, 0, 0],
                prereqeval: "classes.known.inventor.level >= 11"
            },
            "power slam capacitor (prereq: lvl 11, incompatible with other capacitors.)" : {
                name : "Power Slam Capacitor",
                description : desc([
                    "You store up kinetic energy, and unleash it in a mighty bound. As an action, you can jump up to your entire movement speed and cast \"Destructive Wave\" without expending a spell slot upon landing. Once you use this upgrade, you cannot use it again until you complete a long rest."
                ]),
                recovery: "long rest",
                usages: 1,
                action: ["action", " (Destructive Wave)"],
                prereqeval: "classes.known.inventor.level >= 11"
            },

            //Level 15 Upgrades

            "iron grip (prereq: lvl 15, iron muscle, incompatible with integrated attack)": {
                name: "Iron Grip",
                description: desc([
                    "You improve your grip strength and control of one of your gauntlets beyond the limits of flesh. While wearing your suit, you gain the following benefits:",
                    " \u2022You can wield Large sized weapons without a penalty as a medium sized creature.",
                    " \u2022One handed weapons you wield count as if being wielded with two hands."
                ]),
                prereqeval: "classes.known.inventor.level >= 15"
            },
            "phase engine (prereq: lvl 15, warsuit)": {
                name: "Power Slam Capacitor",
                description: desc([
                    "When you are attacked, you can use your reaction to become intangible, causing that attack to miss if it is a nonmagical attack, or to have disadvantage if it is a magical attack. Once you do so, you cannot do so again until you complete a short or long rest. This Upgrade is refreshed every time you teleport or enter the ethereal plane."
                ]),
                recovery: "short rest",
                usages: 1,
                action: ["reaction", ""],
                prereqeval: "classes.known.inventor.level >= 15"
            },
            "heavy plating (prereq: lvl 15, warplate)" : {
                name : "Heavy Plating",
                description : desc([
                    "You install special heavy plating, giving you resistance to bludgeoning, piercing, and slashing damage from non-magical sources while wearing your Warplate."
                ]),
                dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]],
                prereqeval : "classes.known.inventor.level >= 15"
            },
            "sun cannon (prereq: lvl 15)" : {
                name : "Sun Cannon",
                description : desc([
                    "You install a Sun Cannon into your warplate, allowing you to unleash devestating solar laser blasts. As an action, you can cast \"Sunbeam\" without expending a spell slot. Once you use this ability, you can not use it again until you complete a long rest."
                ]),
                recovery: "short rest",
                usages: 1,
                action: ["action", ""],
                prereqeval : "classes.known.inventor.level >= 15"
            },
            "virtual interface (prereq: lvl 15, sentient armor)": {
                name: "Virtual Interface",
                description: desc([
                    "When you use Artificial Strength to raise your Strength ability score, you no longer lower your Intelligence ability score below your natural maximum (not counting Sentient Armor)."
                ]),
                prereqeval: "classes.known.inventor.level >= 15"
            }
        },


        "extra_attack" : {
            name : "Extra Attack",
            minlevel : 5,
            description : desc([
                "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                ]),
            eval : "ClassList['inventor'].attacks = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]",
            removeeval : "ClassList['inventor'].attacks = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
        },
        "fully_customized_gear" : {
            name : "Fully Customized Gear",
            minlevel : 14,
            description : desc([
                "Starting at 14th level, you've mastered the customization of your Warsmith's armor. You can add one additional Upgrade that does not count against your Upgrade total. Additionally, during a long rest, you can now swap out any one upgrade for any other Upgrade of the same level, so long as you don't have an Upgrade that requires the Upgrade you are removing as a prerequisite, or an incompatible Upgrade."
                ])
        }
    }
});