/*

    Wonderous Class Items

*/

var iFileName = "Inventor - Weapons.js";
RequiredSheetVersion(13);

//Fleshsmith weapons and armor

// WeaponsList["extra fangs"] = {

//     regExpSearch : /^(?=.*extra fangs).*$/i,
//     name : "Extra Fangs",
//     source : ["KT:AR"],
//     ability : 2,
//     type : "Natural",
//     damage : [1, 6, "Piercing"],
//     range : "melee",
//     description : "",
//     abilitytodamage : true,
//     modifiers : ["Dex", ""],
//     monkweapon : false,

// };

// WeaponsList["extra tentacle"] = {

//     regExpSearch : /^(?=.*extra tentacle).*$/i,
//     name : "Extra Tentacle",
//     source : ["KT:AR"],
//     ability : 1,
//     type : "Natural",
//     damage : [1, 4, "bludgeoning"],
//     range : "melee",
//     description : "has reach",
//     abilitytodamage : true,
//     modifiers : ["Str", ""],
//     monkweapon : false,

// };

// WeaponsList["retractable claws"] = {

//     regExpSearch : /^(?=.*retractable claws).*$/i,
//     name : "Retractable Claws",
//     source : ["KT:AR"],
//     ability : 2,
//     type : "Natural",
//     damage : [1, 6, "slashing"],
//     range : "melee",
//     description : "",
//     abilitytodamage : true,
//     modifiers : ["Dex", ""],
//     monkweapon : false,

// };

// ArmourList["subdermal plating"] = {

// 	regExpSearch : /^(?=.*subdermal plating).*$/i,
// 	name : "Subdermal Plating",
// 	source : ["KT:AR"],
// 	type : "natural",
// 	ac : 16,
// 	dex : 2

// };

// Thundersmith
WeaponsList["thunder cannon"] = {
    regExpSearch : /^(?=.*thunder cannon).*$/i,
    name : "Thunder Cannon",
    source : ["KTI", 22],
    ability : 2,
    type: "AlwaysProf",
    damage : [1, 12, "Piercing"],
    range : "60/180 ft",
    description : "Ammunition, Two-handed, Loud, Stormcharged",
    abilitytodamage : true,
    modifiers : ["Dex", ""],
    weight : 15,
    isMagicWeapon: true,
    list: "stormforged",
};

WeaponsList["hand cannon"] = {
    regExpSearch : /^(?=.*hand cannon).*$/i,
    name : "Hand Cannon",
    source : ["KTI", 22],
    ability : 2,
    type: "AlwaysProf",
    damage : [1, 10, "Piercing"],
    range : "30/90 ft",
    description : "Ammunition, Light, Loud, Stormcharged",
    abilitytodamage : true,
    modifiers : ["Dex", ""],
    weight : 5,
    isMagicWeapon: true,
    list: "stormforged",
};

WeaponsList["kinetic hammer"] = {
    regExpSearch : /^(?=.*kinetic hammer).*$/i,
    name : "Kinetic Hammer",
    source : ["KTI", 22],
    ability : 1,
    type: "AlwaysProf",
    damage : [1, 10, "bludgeoning"],
    range : "Melee",
    description : "+1d4 thunder; Two-handed, Heavy, Loud",
    abilitytodamage : false,
    modifiers : ["Str", ""],
    weight : 10,
    isMagicWeapon: true,
    list: "stormforged"
};

WeaponsList["charged blade"] = {
    regExpSearch : /^(?=.*charged blade).*$/i,
    name : "Charged Blade",
    source : ["KTI", 22],
    ability : 1,
    type: "AlwaysProf",
    damage : [1, 6, "slashing"],
    range : "Melee",
    description : "+1d4 lightning, Finesse, Loud",
    abilitytodamage : true,
    modifiers : ["Str", ""],
    weight : 3,
    isMagicWeapon: true,
    list: "stormforged",
};

WeaponsList["lightning pike"] = {
    regExpSearch: /^(?=.*lightning pike).*$/i,
    name: "Lightning Pike",
    source: ["KTI", 22],
    ability: 1,
    type: "AlwaysProf",
    damage: [1, 8, "piercing"],
    range: "Melee",
    description: "+1d4 lightning, Reach, Two-Handed, Loud",
    abilitytodamage: true,
    modifiers: ["Str", ""],
    weight: 10,
    isMagicWeapon: true,
    list: "stormforged",
};

WeaponsList["harpoon reel"] = {
    regExpSearch: /^(?=.*harpoon reel).*$/i,
    name: "Harpoon Reel",
    source: ["KTI", 24],
    ability: 2,
    abilitytodamage: false,
    type: "AlwaysProf",
    damage: [1, 6, "piercing"],
    range: "30/60 ft",
    modifiers: ["Dex", ""],
    description: "Attached to tgt by 60' cord; Tgt remove using action, 1d6 piercing"
};

MagicItemsList["stormforged weapon"] = {
    name: "Stormforged Weapon",
    source: ["KTI", 22],
    type: "weapon",
    rarity: "rare",
    attunement: true,
    prerequisite: "Requires Thundersmith or Inventor Cross Disciplinary Knowledge",
    prereqeval: function(v) {
        return classes.known.inventor.level >= 6 || (/thundersmith/).test(classes.known.inventor.subclass);
    },
    allowDuplicates: true,
    description: "I harness the power of thundering storms in a powerful weapon. I am proficient in it while attuned.",
    descriptionLong: "Starting at 1st level, you harness the power of elemental power of thundering storms to create a powerful weapon. This weapon requires attunement and you are proficient with it while attuned. and you can only be attuned to one Stormforged Weapon at a time. If you have multiple Stormforged Weapons, you can change which one you are attuned to during a long rest. If you lose your Stormforged Weapon or wish to create additional ones, you can do so over the course of three days (eight hours each day) by expending 200 gold pieces worth of metal and other raw materials. When you make a new Stormforged Weapon, you can make the same or different type, and select the same or different upgrades.",
    chooseGear: {
        type: "weapon",
        excludeCheck: function (inObjKey, inObj) {
            return !(inObj.list == "stormforged");
        },
        prefixOrSuffix: "brackets",
        itemName1stPage: ["prefix", ""],
    },
};

// Gadgetsmith

// WeaponsList["boomerang of hitting"] = {

//     regExpSearch : /^(?=.*boomerang of hitting).*$/i,
//     name : "Boomerang of Hitting",
//     source : ["HB", 0],
//     ability : 1,
//     type : "Natural",
//     damage : [1, 4, "Bludgeoning"],
//     range : "30/90 ft",
//     description : "Thrown. Finesse. Special: When this weapon is thrown, you can make target two targets within 10 feet of each other, making a seperate attack roll against each target.",
//     abilitytodamage : true,
//     monkweapon : false

// };

// WeaponsList["impact gauntlet"] = {

//     regExpSearch : /^(?=.*impact gauntlet).*$/i,
//     name : "Impact Gauntlet",
//     source : ["HB", 0],
//     ability : 1,
//     type : "Natural",
//     damage : [1, 8, "Bludgeoning"],
//     range : "Melee",
//     description : "Finesse. Light. Special: When this weapon is thrown, you can make target two targets within 10 feet of each other, making a seperate attack roll against each target.",
//     abilitytodamage : true,
//     monkweapon : false

// };

// WeaponsList["lightning baton"] = {

//     regExpSearch : /^(?=.*lightning baton).*$/i,
//     name : "Lightning Baton",
//     source : ["HB", 0],
//     ability : 1,
//     type : "Natural",
//     damage : [1, 4, "Bludgeoning"],
//     range : "Melee",
//     description : "Finesse. Light. Also deals 1d4 Lightning damage on a hit. On a critical, target must make Con save vs Spell DC or be stunned until the start of my next turn.",
//     abilitytodamage : true,
//     monkweapon : false

// };

// WeaponsList["repeating hand crossbow"] = {

//     regExpSearch : /^(?=.*repeating hand crossbow).*$/i,
//     name : "Repeating Hand Crossbow",
//     source : ["HB", 0],
//     ability : 2,
//     type : "Natural",
//     damage : [1, 6, "Piercing"],
//     range : "30/120 ft",
//     description : "Ammunition. Light. Special: Does not require a free hand to load. Once per turn, when I attack with this weapon and have advantage on the attack, I can forgo the advantage in order to make an additional attack as a bonus action (also without advantage) against the same target.",
//     abilitytodamage : true,
//     monkweapon : false

// };

// // Infusionsmith


// // Potionsmith


// // Warsmith

// WeaponsList["mechplate gauntlet"] = {

//     regExpSearch : /^(?=.*mechplate gauntlet).*$/i,
//     name : "Mechplate Gauntlet",
//     source : ["HB", 0],
//     ability : 1,
//     type : "Natural",
//     damage : [1, 6, "Bludegoning"],
//     range : "Melee",
//     description : "While wearing this gauntlet, you have proficiency in Martial Weapons, unarmed strikes using this gauntlet deal 1d6 bludgeoning damage, and you learn the Shocking Grasp cantrip and can cast it through the gauntlet.",
//     abilitytodamage : true,
//     monkweapon : false

// };

// WeaponsList["force blast"] = {

//     regExpSearch : /^(?=.*force blast).*$/i,
//     name : "Force Blast",
//     source : ["HB", 0],
//     ability : 4,
//     type : "Natural",
//     damage : [1, 8, "Force"],
//     range : "30 ft",
//     description : "You upgrade your Mechplate gauntlet to allow you to make a ranged spell attack.",
//     abilitytodamage : true,
//     monkweapon : false

// };

// WeaponsList["power gauntlet"] = {

//     regExpSearch : /^(?=.*power gauntlet).*$/i,
//     name : "Power Gauntlet",
//     source : ["HB", 0],
//     ability : 1,
//     type : "Natural",
//     damage : [1, 8, "Bludegoning"],
//     range : "Melee",
//     description : "Special: When you make an attack roll, you can choose to forgo adding your Proficiency modifier to the attack roll. If the attack hits, you can add double your Proficiency modifier to the damage roll.",
//     abilitytodamage : true,
//     monkweapon : false

// };

// ArmourList["mechplate"] = {

//     regExpSearch : /^(?=.*mechplate).*$/i,
//     name : "Mechplate",
//     source : ["HB", 0],
//     type : "heavy",
//     ac : 18,
//     stealthdis : true,
//     weight : 105,
//     description : "While wearing your Mechplate your Strength score increases by 2, and your maximum Strength score increase by the same amount. Additionally, you count as one size larger when determining the weight you can push, drag, or lift. A small creature wearing mechplate becomes a medium sized creature while wearing the mechplate."

// };

// ArmourList["mechsuit"] = {

//     regExpSearch : /^(?=.*mechsuit).*$/i,
//     name : "Mechsuit",
//     source : ["HB", 0],
//     type : "medium",
//     ac : 15,
//     stealthdis : false,
//     weight : 40,
//     description : "While wearing your Mechsuit your Strength score increases by 2, and your maximum Strength score increase by the same amount. Additionally, you count as one size larger when determining the weight you can push, drag, or lift. A small creature wearing mechsuit becomes a medium sized creature while wearing the mechsuit."

// };
