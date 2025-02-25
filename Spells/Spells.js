var iFileName = "KibblesTasty - Spells.js";

RequiredSheetVersion(13);

SpellsList["arcane ablation"] = {
    name: "Arcane Ablation",
    regExpSearch: /^(?=.*arcane)(?=.*ablation).*$/i,
    classes: ["inventor"],
    source: ["HB", 38],
    level: 1,
    school: "Trans",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S",
    duration: "1 h",
    description: "1 crea: 4 temp hp, when those are gone: 3 -> 2 -> 1 -> spell end. +1 starting temp hp per SL.",
    descriptionMetric: "1 crea: 4 temp hp, when those are gone: 3 -> 2 -> 1 -> spell end. +1 starting temp hp per SL.",
    descriptionFull: "You touch a piece of worn armor or clothing and imbue it with magic. The creature wearing this imbued item gains 4 temporary hit points for the duration. When these temporary hit points are exhausted, at the start of the creature's next turn it will gain hit points equal to 1 hit point less than the previous amount gained from this spell (for example, from 4 to 3), until no temporary hit points would be gained and the spell ends. \nAt Higher Levels: The initial temporary hit points increases by 1 for each slot level above 1st."
};
SpellsList["arcane weapon"] = {
    name: "Arcane Weapon",
    regExpSearch: /^(?=.*arcane)(?=.*weapon).*$/i,
    classes: ["inventor"],
    source: ["HB", 38],
    level: 1,
    school: "Trans",
    time: "1 bns",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S",
    duration: "1 h",
    description: "1 weap: Deals Force dmg, if \"Ammunition\" property: Doesn't consume ammo, no reloading needed.",
    descriptionMetric: "1 weap: Deals Force dmg, if \"Ammunition\" property: Doesn't consume ammo, no reloading needed.",
    descriptionFull: "You touch a weapon and imbue it with magic. For the duration the weapon counts as a magical weapon and any damage dealt by it is Force damage. When casting this one a weapon with the ammunition property, it no longer consumes ammunition when fired, and does not need to be reloaded. \nAt Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, the duration becomes 8 hours. When you use a spell slot of 5th level or higher, the duration becomes 24 hours."
};
SpellsList["awaken rope"] = {
    name: "Awaken Rope",
    regExpSearch: /^(?=.*awaken)(?=.*rope).*$/i,
    classes: ["inventor", "bard", "ranger", "sorcerer", "wizard"],
    source: ["HB", 38],
    level: 1,
    school: "Trans",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S,M\u0192",
    compMaterial: "10 ft to 60 ft of cord or rope, worth at least 1 cp",
    Duration: "Instantaneous",
    description: "Single command: Bind, Fasten, or Grab. More HP/AC/DC on higher Levels.",
    descriptionMetric: "Single command: Bind, Fasten, or Grab. More HP/AC/DC on higher Levels.",
    descriptionFull: "As an action, you can touch a rope 10 to 60 feet long and issue a single command to it, selecting from the following options:\n\u2022 \"Bind\": The rope attempts to bind a creature of your choice within 20 feet of you. The creature must make a Dexterity saving throw or become restrained until it is freed. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the rope (AC 10) also frees the creature without harming it, ending the effect and destroying the rope. \n\u2022 \"Fasten\": The rope flies up 60 feet and ties one end to an object or surface that a rope could be tied to, before becoming inanimate again, hanging from the object. \n\u2022 \"Grab\": The rope lashes out grabs one Small or smaller object that is not being worn by a creature within a range equal to the length of the rope and pulls that object back to your hand. If that object is being carried by a creature, it must make a Strength saving throw. On success, it retains the object, and on failure the object is pulled from the creature. \nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target a chain instead of a rope. It has the same available actions, but it has a DC 15, an AC of 15, and resistance to slashing damage when taking the Bind action. When cast with a spell slot of 3rd level or higher targeting a rope, that rope is magically imbued for 1 minute, gaining an DC of 15, an AC 20, and 20 hit points."
};
SpellsList["bond item"] = {
    name: "Bond Item",
    regExpSearch: /^(?=.*bond)(?=.*item).*$/i,
    classes: ["inventor"],
    source: ["HB", 38],
    level: 1,
    school: "Trans",
    time: "1 min",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S",
    duration: "8 h",
    save: "Cha",
    description: "1 item <100 lbs gets linked, can recall to your hand as bonus action. If a crea has it -> save against spell.",
    descriptionMetric: "1 item <50 kg gets linked, can recall to your hand as bonus action. If a crea has it -> save against spell.",
    descriptionFull: "You touch an item weighing no more than 100 lbs and form a link between you and it. Until the spell ends, you can recall it to your hand as a bonus action. If another creature is holding or wearing the item when you try to recall it, they make a Charisma saving throw to retain possession of the item, and if they succeed, the spell fails. They make this save with advantage if they have had possession of the item for more than 1 minute."
};
SpellsList["fall"] = {
    name: "Fall",
    regExpSearch: /^(?=.*fall).*$/i,
    classes: ["inventor", "sorcerer", "wizard"],
    source: ["HB", 38],
    level: 1,
    school: "Trans",
    time: "1 a",
    range: "Self",
    rangeMetric: "Self",
    components: "V,S",
    duration: "1 rnd",
    description: "Alter gravity for yourself, fall up to 500 ft. Fall dmg as usual.",
    descriptionMetric: "Alter gravity for yourself, fall up to 150 m. Fall dmg as usual.",
    descriptionFull: "You alter gravity for yourself, causing you to reorient which way is down for you until the end of your turn.You can pick any direction to fall as if under the effect of gravity, falling up to 500 feet before the spell ends. If you collide with something during this time, you take falling damage as normal, but you can control your fall as you could under normal conditions by holding onto objects or move along a surface according to your new orientation as normal until your turn ends and gravity returns to normal."
};
SpellsList["returning weapon"] = {
    name: "Returning Weapon",
    regExpSearch: /^(?=.*returning)(?=.*weapon).*$/i,
    classes: ["inventor"],
    source: ["HB", 39],
    level: 1,
    school: "Trans",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S,M",
    compMaterial: "A magic item you cast the spell on",
    duration: "24 h",
    description: "1 weap gets the \"Thrown (20/60)\" (or adds 20/60 ft to its range) and \"Returning\" properties.",
    descriptionMetric: "1 weap gets the \"Thrown (6/18)\" (or adds 6/18 m to its range) and \"Returning\" properties.",
    descriptionFull: "You touch a weapon granting it the \"Thrown (20/60)\" property. If it already has the thrown property, it's range increases by 20/60 ft. It also gains the \"Returning\" property. After being thrown and hitting or missing, it automatically reappears in the throwers hand."
};
SpellsList["seeking projectile"] = {
    name: "Seeking Projectile",
    regExpSearch: /^(?=.*seeking)(?=.*projectile).*$/i,
    classes: ["inventor"],
    source: ["HB", 39],
    level: 1,
    school: "Trans",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S",
    duration: "Conc, 10 min",
    description: "1 ammo or weap with \"Thrown\": 1 Attack w/ Adv., can use Spell Attack, if Roll + Mods > 20, its a crit.",
    descriptionMetric: "1 ammo or weap with \"Thrown\": 1 Attack w/ Adv., can use Spell Attack, if Roll + Mods > 20, its a crit.",
    descriptionFull: "You touch a piece of ammunition or weapon with the \"Thrown\" property, imbuing it with the property of seeking its target. When a ranged attack roll is made with that weapon, that attack gains advantage and the attack roll can add your spell casting modifier to the value on the dice. If that makes the value on the die + your spell casting modifier results in a 20 or more, the attack is a critical hit as if a 20 was rolled. After making the attack roll, the spell ends."
};
SpellsList["unburden"] = {
    name: "Unburden",
    regExpSearch: /^(?=.*unburden).*$/i,
    classes: ["inventor"],
    source: ["HB", 39],
    level: 1,
    school: "Trans",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S",
    duration: "1 h",
    description: "1 crea: No penalties from medium/heavy armor, not encumbered unless carrying twice its capacity.",
    descriptionMetric: "1 crea: No penalties from medium/heavy armor, not encumbered unless carrying twice its capacity.",
    descriptionFull: "A creature you touch no longer suffers the penalties to movement speed or to their Dexterity (Stealth) checks while wearing medium or heavy armor, and is no longer encumbered from carry weight unless they are carrying more than twice the weight that would encumber them."
};
SpellsList["imbue luck"] = {
    name: "Imbue Luck",
    regExpSearch: /^(?=.*imbue)(?=.*luck).*$/i,
    classes: ["inventor"],
    source: ["HB", 39],
    level: 2,
    school: "Abjur",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S",
    duration: "1 h",
    description: "1 weap or armor: If weap, can choose to gain Adv., else can impose Disadv. on an attacker. Only once!",
    descriptionMetric: "1 weap or armor: If weap, can choose to gain Adv., else can impose Disadv. on an attacker. Only once!",
    descriptionFull: "You touch a weapon or worn item and imbue luck into it. If imbued on a weapon, for the duration, on an attack roll, the wielder can roll an additional d20(they can choose to do this after they roll, but before the outcome is determined).The creature can choose which of the d20s is used for the attack roll. If imbued into a worn item, they can roll a d20 when attacked, then choose whether the attack uses the attacker's roll or theirs. With either use, the spell immediately ends upon rolling the extra d20."
};
SpellsList["lightning charged"] = {
    name: "Lightning Charged",
    regExpSearch: /^(?=.*lightning)(?=.*charged).*$/i,
    classes: ["inventor"],
    source: ["HB", 39],
    level: 2,
    school: "Evoc",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S,M",
    compMaterial: "A piece of once used lightning rod",
    duration: "10 min",
    description: "1 crea: 6 + 2/SL charges, each: 1d6 Lightning dmg on Melee attack, grappeled /-ing, or getting hit.",
    descriptionMetric: "1 crea: 6 + 2/SL charges, each: 1d6 Lightning dmg on Melee attack, grappeled /-ing, or getting hit.",
    descriptionFull: "You channel lightning energy into a creature. The energy is harmless to the creature, but escapes in dangerous bursts to other nearby creatures. Every time that creature strikes another creature with a melee attack, a spell with a range of touch, is struck by another creature with melee attack, or ends their turn while grappling or being grappled by another creature, they deal 1d6 Lightning damage to that creature. Once this spell has discharged 6 times(dealing up to 6d6 damage), the spell ends. \nAt Higher Levels: The spell can discharge damage 2 additional times(dealing 2d6 more total damage) before the spell ends for each slot level above 2nd."
};
SpellsList["thunderburst mine"] = {
    name: "Thunderburst Mine",
    regExpSearch: /^(?=.*thunderburst)(?=.*mine).*$/i,
    classes: ["inventor"],
    source: ["HB", 39],
    level: 2,
    school: "Abjur",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S,M\u2020",
    compMaterial: "Any tiny nonmagical item, which is destroyed by the activation of the spell",
    duration: "8 h",
    save: "Con",
    description: "1 item: Magical trap, 10 ft rad all crea 3d8 Thunder dmg, save half, cannot be moved.",
    descriptionMetric: "1 item: Magical trap, 3 m rad all crea 3d8 Thunder dmg, save half, cannot be moved.",
    descriptionFull: "You can set a magical trap by infusing explosive magic into an item. You can set this item to detonate when someone comes within 5 ft of it, or by a verbal command using your reaction (one or more mines can be detonated). When the magic trap detonates, each creature in a 10 ft radius sphere centered on the item must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. If a creature is in the area of effect of more than one thunderburst mine during a turn, they take half damage from any subsequent effects of the mines. A magical mine must be set 5 feet or more from another mine, and cannot be moved once placed; any attempt to move it results in it detonating unless the Inventor that set it disarms it with an action."
};
SpellsList["dispel construct"] = {
    name: "Dispel Construct",
    regExpSearch: /^(?=.*dispel)(?=.*construct).*$/i,
    classes: ["inventor"],
    source: ["HB", 40],
    level: 3,
    school: "Abjur",
    time: "1 a",
    range: "60 ft",
    rangeMetric: "18 m",
    components: "V,S",
    duration: "1 min",
    save: "Con",
    description: "1 construct: 4d10 Force dmg, save or 1 min stun, save repeated at end of round, <50 HP = dead.",
    descriptionMetric: "1 construct: 4d10 Force dmg, save or 1 min stun, save repeated at end of round, <50 HP = dead.",
    descriptionFull: "You can attempt to purge the magic animating a construct within range, rendering it inert. The target takes 4d10 force damage must succeed on a Constitution saving throw or become stunned for 1 minute. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the spell ends on the target.If the target has less than 50 hit points remaining when it fails, it is reduced to zero hit points."
};
SpellsList["fireburst mine"] = {
    name: "Fireburst Mine",
    regExpSearch: /^(?=.*fireburst)(?=.*mine).*$/i,
    classes: ["inventor"],
    source: ["HB", 40],
    level: 3,
    school: "Abjur",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S,M\u2020",
    compMaterial: "Any tiny nonmagical item, which is destroyed by the activation of the spell",
    duration: "8 h",
    save: "Con",
    description: "1 item: Magical trap, 20 ft rad all crea 5d8 Fire dmg, save half, cannot be moved.",
    descriptionMetric: "1 item: Magical trap, 6 m rad all crea 5d8 Fire dmg, save half, cannot be moved.",
    descriptionFull: "You can set a magical trap by infusing explosive magic into an item. You can set this item to detonate when someone comes within 5 ft of it, or by a verbal command using your reaction (one or more mines can be detonated). When the magic trap detonates, each creature in a 20 ft radius sphere centered on the item must make a Dexterity saving throw. A creature takes 5d8 fire damage on a failed save, or half as much damage on a successful one. If a creature is in the area of effect of more than one fireburst mine during a turn, they take half damage from any subsequent effects of the mines. A magical mine must be set 5 feet or more from another mine, and cannot be moved once placed; any attempt to move it results in it detonating unless the Inventor that set it disarms it with an action."
};
SpellsList["repair"] = {
    name: "Repair",
    regExpSearch: /^(?=.*repair).*$/i,
    classes: ["inventor"],
    source: ["HB", 40],
    level: 4,
    school: "Trans",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S",
    duration: "Instantaneous",
    description: "1 construct or item: 10d6 + 2d6/SL heal or restore to condition 10d6 years ago (cannot get worse).",
    descriptionMetric: "1 construct or item: 10d6 + 2d6/SL heal or restore to condition 10d6 years ago (cannot get worse).",
    descriptionFull: "You touch a construct or inanimate object, causing it to regain 10d6 hit points. This causes any parts or material that has broken away from the construct or object to reattach, repairing it to the condition it was in before losing those hit points. If the construct or object damaged state is the result of age, you can instead repair to the condition it was in 10d6 years ago, if it was previously in a better condition during that time (the condition can only improve or not change). \nAt Higher Levels: The hit points restored increases by 2d6 (or the years restored) for each slot above 4th."
};
SpellsList["vorpal weapon"] = {
    name: "Vorpal Weapon",
    regExpSearch: /^(?=.*vorpal)(?=.*weapon).*$/i,
    classes: ["inventor"],
    source: ["HB", 40],
    level: 5,
    school: "Trans",
    time: "1 a",
    range: "Touch",
    rangeMetric: "Touch",
    components: "V,S",
    duration: "Conc, 1 h",
    description: "1 weap: Ignores resistances, gains \"Siege\" property, gets +3 mod, crit + <50HP on target = dead.",
    descriptionMetric: "1 weap: Ignores resistances, gains \"Siege\" property, gets +3 mod, crit + <50HP on target = dead.",
    descriptionFull: "You touch a weapon and imbue it with power. Until the spell ends, the weapon becomes indescribably sharp, ignoring resistances, and gains the Siege property, dealing double damage to inanimate objects such as structures. If a weapon has a modifier of less than +3 to attack and damage rolls, its modifier becomes +3 to attack and damage rolls for the duration of the spell. Additionally, if a critical strike of this weapon would leave a creature with less than 50 hitpoints, the target creature is decapitated, killing it."
};
