var iFileName = "Inventor - Gadgetsmith.js";
RequiredSheetVersion(13);

AddSubClass("inventor", "gadgetsmith", {
    regExpSearch : /gadgetsmith/i,
    source: ["KCCC", 14],
    subname : "Gadgetsmith",
    features : {
        "subclassfeature1" : {
            name : "Gadgetsmith Proficiency",
            source: ["KCCC", 14],
            minlevel : 1,
            description : desc(["I gain proficiency with nets, rapiers, whips, and tinker's tools."]),
            toolProfs : [["Tinker's Tools", "Dex"]],
            weaponProfs: [false, false, ["Nets", "Rapiers", "Whips"]],
        },
        "subclassfeature1.1" : {
            name : "Essential Tools",
            source: ["KCCC", 14],
            minlevel : 1,
            description : desc([
                "At 1st level, you've mastered the creation of the essential reusable tools for surviving the battlefield as a gadgeteer. You have the following items:",
                "Gadgetsmith Weapon",
                "Grappling Hook",
                "Smoke Bomb",
            ]),
            spellcastingExtra: ["fog cloud"],
            spellChanges: {
                "fog cloud": {
                    range: "5/10/15/20-ft rad",
                    changes: "The radius can now be chosen to be 5, 10, 15, or 20 ft",
                },
            },
            weaponsAdd: ["Grappling Hook"],
            action: [
                ["action", "Smoke Bomb"],
            ],
            // Need to add a choice to select the gadgetsmith weapon
        },
    }
});