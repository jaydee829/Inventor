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
    // isMagicWeapon: true,
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
    // isMagicWeapon: true,
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
    // isMagicWeapon: true,
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
    // isMagicWeapon: true,
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
    // isMagicWeapon: true,
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
        return classes.known.inventor.level >= 6 || (/thundersmith/i).test(classes.known.inventor.subclass);
    },
    allowDuplicates: true,
    description: "I harness the power of thundering storms in a powerful weapon. I am proficient in it while attuned. This weapon can take the form of a Charged Blade, a Kinetic Hammer, a Lightning Pike, a Hand Cannon, or a Thunder Cannon. As I grow in power as an Inventor I can upgrade my Stormforged Weapon and create additional ones, though I can only attune to one at a time.",
    descriptionLong: "Starting at 1st level, you harness the power of elemental power of thundering storms to create a powerful weapon. This weapon requires attunement and you are proficient with it while attuned. and you can only be attuned to one Stormforged Weapon at a time. If you have multiple Stormforged Weapons, you can change which one you are attuned to during a long rest. If you lose your Stormforged Weapon or wish to create additional ones, you can do so over the course of three days (eight hours each day) by expending 200 gold pieces worth of metal and other raw materials. When you make a new Stormforged Weapon, you can make the same or different type, and select the same or different upgrades.",
    chooseGear: {
        type: "weapon",
        excludeCheck: function (inObjKey, inObj) {
            return !((/(kinetic hammer)|(thunder cannon)|(charged blade)|(hand cannon)|(lightning pike)/i).test(inObjKey));
        },
        prefixOrSuffix: "brackets",
        itemName1stPage: ["prefix", ""],
    },
};

// Warsmith
WeaponsList["force blast"] = {
    regExpSearch : /^(?=.*force blast).*$/i,
    name : "Force Blast",
    source : ["HB", 28],
    ability : 4,
    type : "Natural",
    damage : [1, 8, "Force"],
    range : "60 ft",
    description : "Ranged spell attack, can be used in place of one attack.",
    abilitytodamage : true,
    monkweapon : false
};
WeaponsList["power fist"] = {
    regExpSearch : /^(?=.*power fist).*$/i,
    name : "Power Fist",
    source : ["HB", 29],
    ability : 1,
    type : "Natural",
    damage : [1, 8, "Bludegoning"],
    range : "Melee",
    description : "Light, Special: When you make an attack roll, you can choose to forgo adding your Proficiency modifier to the attack roll. If the attack hits, you can add double your Proficiency modifier to the damage roll.",
    abilitytodamage : true,
    monkweapon : false
};
ArmourList["warplate"] = {
    regExpSearch : /^(?=.*warplate).*$/i,
    name : "Warplate",
    source : ["HB", 27],
    type : "heavy",
    ac: 18,
    dex: 0,
    stealthdis : true,
    weight: 65,
    carryingCapacity: 2,
    scores: [2, 0, 0, 0, 0, 0],
    scoresMaximum: [22, 0, 0, 0, 0, 0],
    description : "While wearing your Warplate your Strength score increases by 2, and your maximum Strength score increase by the same amount. Additionally, you count as one size larger when determining the weight you can push, drag, or lift. A small creature wearing Warplate becomes a medium sized creature while wearing the Warplate."
};
ArmourList["warsuit"] = {
    regExpSearch: /^(?=.*warsuit).*$/i,
    name: "Warsuit",
    source: ["HB", 27],
    type: "medium",
    ac: 14,
    dex: 2,
    stealthdis: false,
    weight: 20,
    carryingCapacity: 1,
    scores: [2, 0, 0, 0, 0, 0],
    scoresMaximum: [22, 0, 0, 0, 0, 0],
    description: "While wearing your Warsuit your Strength score increases by 2, and your maximum Strength score increase by the same amount."
};
ArmourList["integrated armor"] = {
    regExpSearch: /^(?=.*integrated).*$/i,
    name: "Integrated Armor",
    source: ["HB", 27],
    type: "medium",
    ac: 14,
    dex: 2,
    stealthdis: false,
    weight: 0,
    carryingCapacity: 2,
    scores: [2, 0, 0, 0, 0, 0],
    scoresMaximum: [22, 0, 0, 0, 0, 0],
    description: "While \"wearing\" your Integrated Armor, your Strength score increases by 2, and your maximum Strength score increase by the same amount. Additionally, you count as one size larger when determining the weight you can push, drag, or lift."
};

// Gadgetsmith
WeaponsList["boomerang of hitting"] = {
    regExpSearch : /^(?=.*boomerang of hitting).*$/i,
    name : "Boomerang of Hitting",
    source : ["HB", 0],
    ability : 2,
    type : "Natural",
    damage : [1, 4, "Bludgeoning"],
    range : "30/60 ft",
    description : "Thrown. Finesse. Special: When this weapon is Thrown, you can make target up three seperate targets within 10 feet of each other, making a seperate attack roll against each target.",
    abilitytodamage : true,
    monkweapon : true
};
WeaponsList["grappling hook"] = {
    regExpSearch : /^(?=.*grappling hook).*$/i,
    name : "Grappling Hook",
    source : ["KCCC", 14],
    ability: 1,
    type: "special",
    damage: [0, 4, "Piercing"],
    range : "20 ft",
    list: "improvised",
    description : "Tgt crea, obj, or surface. If tgt Small-, grapple check against it; pull towards me on success. Tgt Medium+, pull myself to it. Opp atks provoked by this movement at disadv.",
    abilitytodamage: false,
};

// };

// // Infusionsmith


// // Potionsmith

