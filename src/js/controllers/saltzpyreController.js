tc.controller("saltzpyreController", ['$scope',
        function($scope) {
            $scope.tiers = {
                    tierOne: [
                    {
                        id: "0",
                        name: "Charmed Life",
                        description: "Increases dodge distance by 10%",
                        selected: false
                    },
                    {
                        id: "1",
                        name: "Unflagging Spirit",
                        description: "Grants an extra Stamina shield.",
                        selected: false
                    },
                    {
                        id: "2",
                        name: "Always Prepared",
                        description: "Increases max ammunition by 30.0%.",
                        selected: false
                    }
                ],
                tierTwo: [
                    {
                        id: "0",
                        name: "Abjure Temptation",
                        description: "Increases Power by 25% when the party holds at least one Grimoire.",
                        selected: false
                    },
                    {
                        id: "1",
                        name: "Deathknell",
                        description: "Increases headshot bonus by 25.0%.",
                        selected: false
                    },
                    {
                        id: "2",
                        name: "Suffer No Heresy",
                        description: "Reduces damage taken when disabled by 50.0%.",
                        selected: false
                    }
                ],
                tierThree: [
                    {
                        id: "0",
                        name: "Marked for Death",
                        description: "Witch-Hunt grants 10.0% increased attack speed for 4 seconds when taggable enemies die.",
                        selected: false
                    },
                    {
                        id: "1",
                        name: "Justice's Bounty",
                        description: "Witch-Hunt recovers 5 health for the party when taggable enemies die.",
                        selected: false
                    },
                    {
                        id: "2",
                        name: "Wild Fervour",
                        description: "Increases critical hit chance by 20.0% for 4 seconds when taggable enemies die.",
                        selected: false
                    }
                ],
                tierFour: [
                    {
                        id: "0",
                        name: "Holy Cause",
                        description: "Critical hits grant temporary health.",
                        selected: false
                    },
                    {
                        id: "1",
                        name: "Righteous Zeal",
                        description: "Kills grant temporary health.",
                        selected: false
                    },
                    {
                        id: "2",
                        name: "Purifier",
                        description: "When bosses die, gain health.",
                        selected: false
                    }
                ],
                tierFive: [
                    {
                        id: "0",
                        name: "Redoubled Purpose",
                        description: "Reduces the cooldown of Animosity by 30.0%.",
                        selected: false
                    },
                    {
                        id: "1",
                        name: "Resonating Faith",
                        description: "Increases the duration of Animosity to 12 seconds.",
                        selected: false
                    },
                    {
                        id: "2",
                        name: "Fierce Oratory",
                        description: "Increases the radius of Animosity by 50.0%.",
                        selected: false
                    }
                ]
            };
            $scope.activate = function (id, tier) {
                for (var i = 0; i < tier.length; i++) {
                    if (tier[i].id == id) {
                        tier[i].selected = true
                    }
                    else {
                        tier[i].selected = false
                    }
                }
            }  
        }
    ]
);