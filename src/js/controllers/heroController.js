tc.controller("heroController", ['$scope',
        function($scope) {
            $scope.heroes = {
                hero1: {
                    id: 0,
                    name: "Markus Kruber",
                    selected: true,
                    subs: {
                        sub1: {
                            id: 0,
                            name: "Mercenary",
                            selected: true,
                            tiers : {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Ready for Action",
                                        description: "Increases stamina regeneration by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "And Stay Down!",
                                        description: "Increases critical hit chance by 5.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Battle Scars",
                                        description: "Increases healing effects by 30.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "The More the Merrier!",
                                        description: "Increases Power by 5.0% for every nearby enemy and stack up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Desperate Defiance",
                                        description: "Reduces damage taken by 25.0% when below 30.0% health.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Strike Together",
                                        description: "Reduces the attack interruption time when taking damage by 25.0%.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Reikland Reaper",
                                        description: "Increases Power by 10% when Paced Strikes is active.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Blade Barrier",
                                        description: "Reduces damage taken by 25.0% when Paced Strikes is active.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Strike Together",
                                        description: "Paced Strikes spreads to nearby allies.",
                                        selected: false
                                    }
                                ],
                                tierFour: [
                                    {
                                        id: "0",
                                        name: "For the Empire!",
                                        description: "Critical hits grant temporary health.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Soldier's Spirit",
                                        description: "Kills grant temporary health.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "The Harder They Fall",
                                        description: "When bosses die, gain health.",
                                        selected: false
                                    }
                                ],
                                tierFive: [
                                    {
                                        id: "0",
                                        name: "Gabbler",
                                        description: "Reduces the cooldown of Morale Boost by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Inspirational",
                                        description: "Increases the temporary health gained from Morale Boost.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "On Yer Feet, Mates!",
                                        description: "Morale Boost also revives knocked down allies.",
                                        selected: false
                                    }
                                ]
                            }
                        },
                        sub2: {
                            id: 1,
                            name: "Huntsman",
                            selected: false,
                            tiers: {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Keep 'Em Coming",
                                        description: "Increases reload speed by 20.0%",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "On Target",
                                        description: "Reduced range weapon spread by 25.0%",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Outdoorsman",
                                        description: "Grants an extra stamina shield",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "Scavenger",
                                        description: "When Bosses are killed Markus gains 30.0% of his maximun ammo",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Make 'Em Bleed",
                                        description: "Critical hits cause enemies to take increased damage",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Hands Off!",
                                        description: "Enemies that grab or pounce Markus take double damage",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Taal' Blessing",
                                        description: "Markus recovers 2 ammunation from scoring headshots",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Makin' It Look Easy",
                                        description: "After scoring a ranged headshot Markus gains a guaranteed critical hit",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Thrill Of The Hunt",
                                        description: "Headshot restore 2 health",
                                        selected: false
                                    }
                                ],
                                tierFour: [
                                    {
                                        id: "0",
                                        name: "For The Empire!",
                                        description: "Critical hits grant temporary health.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Soldier's Spirit",
                                        description: "Kills grant temporary health.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "The Harder they Fall",
                                        description: "When bosses die, gain health.",
                                        selected: false
                                    }
                                ],
                                tierFive: [
                                    {
                                        id: "0",
                                        name: "Blend In",
                                        description: "Reduces the cooldown of Hunters Prowl by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Hunter's Respite",
                                        description: "Markus recovers 4 health every second while under the effect of Hunters Prowl",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "I'm Coming For Ya",
                                        description: "Markus gains 20.0% power inscrease during Hunters Prowl",
                                        selected: false
                                    }
                                ]
                            }         
                        },
                        sub3: {
                            id: 2,
                            name: "Foot Knight",
                            selected: false,
                            tiers : {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Bulwark",
                                        description: "Increases effective block and push angle by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Bastion ofthe Reik",
                                        description: "Increases maximum Health by 25.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Onslaught",
                                        description: "Increases attack speed by 5.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "Regroup",
                                        description: "Reviving party members grants them 50.0% damage reduction for 10 seconds.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Counter-Attack",
                                        description: "Gain uninterruptible attacks for 5 seconds after block is broken.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Build Momentum",
                                        description: "Successful charged attacks grant 40.0% increased stamina regeneration for 2 seconds.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Battle Drill",
                                        description: "Protective Presence also grants 2 stamina.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Defensive Formation",
                                        description: "Increases damage reduction from Protective Presence to 20.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Drillmaster",
                                        description: "Protective Presence also increases movement speed by 5.0%.",
                                        selected: false
                                    }
                                ],
                                tierFour: [
                                    {
                                        id: "0",
                                        name: "For The Empire!",
                                        description: "Critical hits grant temporary health.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Soldier's Spirit",
                                        description: "Kills grant temporary health.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "The Harder they Fall",
                                        description: "When bosses die, gain health.",
                                        selected: false
                                    }
                                ],
                                tierFive: [
                                    {
                                        id: "0",
                                        name: "A Life of Battle",
                                        description: "Reduces the cooldown of Valiant Charge by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Glory Hound",
                                        description: "Valiant Charge also grants 25% Power for 10 seconds.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Hold Ground",
                                        description: "Valiant Charge grants a 100.0% reduction to stamina block cost for 10 seconds.",
                                        selected: false
                                    }
                                ]
                            }
                        }             
                    }
                },
                hero2: {
                    id: 1,
                    name: "Bardin Goreksson",
                    selected: false,
                    subs: {
                        sub1: {
                            id: 0,
                            name: "Ranger Veteran",
                            selected: true,
                            tiers : {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Hunter's Eye",
                                        description: "Reduces ranged spread by 25%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Apply Pressure",
                                        description: "Increases effect of healing by 30%.",
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
                            }
                        },
                        sub2: {
                            id: 1,
                            name: "Bounty Hunter",
                            selected: false,
                            tiers: {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Swift Reload",
                                        description: "Increases reload speed by 20 %.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Make Them Count",
                                        description: "Reduces ranged spread by 25%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Vicious Virtue",
                                        description: "Increases attack speed by 5.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "Leave None Behind",
                                        description: "Increases revive speed by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Necessary Means",
                                        description: "Gain 10.0% increased Power when out of ammunition.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Crippling Strike",
                                        description: "Increases the power boost of critcal hits by 25%.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Pious Fervour",
                                        description: "Critical hits restore 2 health.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Cruel Fortune",
                                        description: "Reduces cooldown on Blessed Shots to 7 seconds.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Prize Bounty",
                                        description: "Shots affected by Blessed Shots consumes no ammunition.",
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
                                        name: "Encore",
                                        description: "Reduces the cooldown of Locked and Loaded by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Double-shotted",
                                        description: "Modifies Victors sidearm to fire two powerful bullets in a straight line.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Buckshot",
                                        description: "Modifies Victors sidearm to fire two blasts of pallets devastating cone.",
                                        selected: false
                                    }
                                ]
                            }         
                        },
                        sub3: {
                            id: 2,
                            name: "Zealot",
                            selected: false,
                            tiers : {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Holy Endurance ",
                                        description: "Increases stamina regeneration speed by 30 %.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Saint of Battle",
                                        description: "Increases critical hit chance by 5.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Strong of Will ",
                                        description: "Reduces stun duration by 50.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "No Surrender!",
                                        description: "Increases Power by 5.0% for every nearby enemy and stack up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Flagellant",
                                        description: "Damage taken from one attack can not exceed 25.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Suppress Pain",
                                        description: "Reduces damage taken by 25.0% when below 30.0% health.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Shield of Faith",
                                        description: "Fiery Faith also increases block and push angle by 10.0% per 25 health missing. This effect stacks up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Holy Crusader",
                                        description: "Fiery Faith also increases power boost of critical hits by 10 per 25 health missing. This effect stacks up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Undying Fervour",
                                        description: "Fiery Faith also stamina per 1 health missing. This effect stacks up to 25 times.",
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
                                        name: "Frother",
                                        description: "Reduces the cooldown of Holy Fervor by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Pleasure from Pain",
                                        description: "Holy Fervor causes Victors to restore 2 health for each successful hit.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Blessed Frenzy",
                                        description: "Increases the duration of Holy Fervor's attack speed buff to 10 seconds.",
                                        selected: false
                                    }
                                ]
                            }
                        }             
                    }
                },
                hero3: {
                    id: 2,
                    name: "Kerillian",
                    selected: false,
                    subs: {
                        sub1: {
                            id: 0,
                            name: "Witch Hunter Captain",
                            selected: true,
                            tiers : {
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
                            }
                        },
                        sub2: {
                            id: 1,
                            name: "Bounty Hunter",
                            selected: false,
                            tiers: {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Swift Reload",
                                        description: "Increases reload speed by 20 %.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Make Them Count",
                                        description: "Reduces ranged spread by 25%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Vicious Virtue",
                                        description: "Increases attack speed by 5.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "Leave None Behind",
                                        description: "Increases revive speed by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Necessary Means",
                                        description: "Gain 10.0% increased Power when out of ammunition.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Crippling Strike",
                                        description: "Increases the power boost of critcal hits by 25%.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Pious Fervour",
                                        description: "Critical hits restore 2 health.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Cruel Fortune",
                                        description: "Reduces cooldown on Blessed Shots to 7 seconds.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Prize Bounty",
                                        description: "Shots affected by Blessed Shots consumes no ammunition.",
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
                                        name: "Encore",
                                        description: "Reduces the cooldown of Locked and Loaded by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Double-shotted",
                                        description: "Modifies Victors sidearm to fire two powerful bullets in a straight line.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Buckshot",
                                        description: "Modifies Victors sidearm to fire two blasts of pallets devastating cone.",
                                        selected: false
                                    }
                                ]
                            }         
                        },
                        sub3: {
                            id: 2,
                            name: "Zealot",
                            selected: false,
                            tiers : {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Holy Endurance ",
                                        description: "Increases stamina regeneration speed by 30 %.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Saint of Battle",
                                        description: "Increases critical hit chance by 5.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Strong of Will ",
                                        description: "Reduces stun duration by 50.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "No Surrender!",
                                        description: "Increases Power by 5.0% for every nearby enemy and stack up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Flagellant",
                                        description: "Damage taken from one attack can not exceed 25.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Suppress Pain",
                                        description: "Reduces damage taken by 25.0% when below 30.0% health.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Shield of Faith",
                                        description: "Fiery Faith also increases block and push angle by 10.0% per 25 health missing. This effect stacks up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Holy Crusader",
                                        description: "Fiery Faith also increases power boost of critical hits by 10 per 25 health missing. This effect stacks up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Undying Fervour",
                                        description: "Fiery Faith also stamina per 1 health missing. This effect stacks up to 25 times.",
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
                                        name: "Frother",
                                        description: "Reduces the cooldown of Holy Fervor by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Pleasure from Pain",
                                        description: "Holy Fervor causes Victors to restore 2 health for each successful hit.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Blessed Frenzy",
                                        description: "Increases the duration of Holy Fervor's attack speed buff to 10 seconds.",
                                        selected: false
                                    }
                                ]
                            }
                        }             
                    }
                },
                hero4: {
                    id: 3,
                    name: "Victor Saltzpyre",
                    selected: false,
                    subs: {
                        sub1: {
                            id: 0,
                            name: "Witch Hunter Captain",
                            selected: true,
                            tiers : {
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
                            }
                        },
                        sub2: {
                            id: 1,
                            name: "Bounty Hunter",
                            selected: false,
                            tiers: {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Swift Reload",
                                        description: "Increases reload speed by 20 %.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Make Them Count",
                                        description: "Reduces ranged spread by 25%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Vicious Virtue",
                                        description: "Increases attack speed by 5.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "Leave None Behind",
                                        description: "Increases revive speed by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Necessary Means",
                                        description: "Gain 10.0% increased Power when out of ammunition.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Crippling Strike",
                                        description: "Increases the power boost of critcal hits by 25%.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Pious Fervour",
                                        description: "Critical hits restore 2 health.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Cruel Fortune",
                                        description: "Reduces cooldown on Blessed Shots to 7 seconds.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Prize Bounty",
                                        description: "Shots affected by Blessed Shots consumes no ammunition.",
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
                                        name: "Encore",
                                        description: "Reduces the cooldown of Locked and Loaded by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Double-shotted",
                                        description: "Modifies Victors sidearm to fire two powerful bullets in a straight line.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Buckshot",
                                        description: "Modifies Victors sidearm to fire two blasts of pallets devastating cone.",
                                        selected: false
                                    }
                                ]
                            }         
                        },
                        sub3: {
                            id: 2,
                            name: "Zealot",
                            selected: false,
                            tiers : {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Holy Endurance ",
                                        description: "Increases stamina regeneration speed by 30 %.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Saint of Battle",
                                        description: "Increases critical hit chance by 5.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Strong of Will ",
                                        description: "Reduces stun duration by 50.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "No Surrender!",
                                        description: "Increases Power by 5.0% for every nearby enemy and stack up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Flagellant",
                                        description: "Damage taken from one attack can not exceed 25.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Suppress Pain",
                                        description: "Reduces damage taken by 25.0% when below 30.0% health.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Shield of Faith",
                                        description: "Fiery Faith also increases block and push angle by 10.0% per 25 health missing. This effect stacks up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Holy Crusader",
                                        description: "Fiery Faith also increases power boost of critical hits by 10 per 25 health missing. This effect stacks up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Undying Fervour",
                                        description: "Fiery Faith also stamina per 1 health missing. This effect stacks up to 25 times.",
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
                                        name: "Frother",
                                        description: "Reduces the cooldown of Holy Fervor by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Pleasure from Pain",
                                        description: "Holy Fervor causes Victors to restore 2 health for each successful hit.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Blessed Frenzy",
                                        description: "Increases the duration of Holy Fervor's attack speed buff to 10 seconds.",
                                        selected: false
                                    }
                                ]
                            }
                        }             
                    }
                },
                hero5: {
                    id: 4,
                    name: "Sienna Fuegonasus",
                    selected: false,
                    subs: {
                        sub1: {
                            id: 0,
                            name: "Witch Hunter Captain",
                            selected: true,
                            tiers : {
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
                            }
                        },
                        sub2: {
                            id: 1,
                            name: "Bounty Hunter",
                            selected: false,
                            tiers: {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Swift Reload",
                                        description: "Increases reload speed by 20 %.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Make Them Count",
                                        description: "Reduces ranged spread by 25%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Vicious Virtue",
                                        description: "Increases attack speed by 5.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "Leave None Behind",
                                        description: "Increases revive speed by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Necessary Means",
                                        description: "Gain 10.0% increased Power when out of ammunition.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Crippling Strike",
                                        description: "Increases the power boost of critcal hits by 25%.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Pious Fervour",
                                        description: "Critical hits restore 2 health.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Cruel Fortune",
                                        description: "Reduces cooldown on Blessed Shots to 7 seconds.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Prize Bounty",
                                        description: "Shots affected by Blessed Shots consumes no ammunition.",
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
                                        name: "Encore",
                                        description: "Reduces the cooldown of Locked and Loaded by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Double-shotted",
                                        description: "Modifies Victors sidearm to fire two powerful bullets in a straight line.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Buckshot",
                                        description: "Modifies Victors sidearm to fire two blasts of pallets devastating cone.",
                                        selected: false
                                    }
                                ]
                            }         
                        },
                        sub3: {
                            id: 2,
                            name: "Zealot",
                            selected: false,
                            tiers : {
                                tierOne: [
                                    {
                                        id: "0",
                                        name: "Holy Endurance ",
                                        description: "Increases stamina regeneration speed by 30 %.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Saint of Battle",
                                        description: "Increases critical hit chance by 5.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Strong of Will ",
                                        description: "Reduces stun duration by 50.0%.",
                                        selected: false
                                    }
                                ],
                                tierTwo: [
                                    {
                                        id: "0",
                                        name: "No Surrender!",
                                        description: "Increases Power by 5.0% for every nearby enemy and stack up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Flagellant",
                                        description: "Damage taken from one attack can not exceed 25.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Suppress Pain",
                                        description: "Reduces damage taken by 25.0% when below 30.0% health.",
                                        selected: false
                                    }
                                ],
                                tierThree: [
                                    {
                                        id: "0",
                                        name: "Shield of Faith",
                                        description: "Fiery Faith also increases block and push angle by 10.0% per 25 health missing. This effect stacks up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Holy Crusader",
                                        description: "Fiery Faith also increases power boost of critical hits by 10 per 25 health missing. This effect stacks up to 5 times.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Undying Fervour",
                                        description: "Fiery Faith also stamina per 1 health missing. This effect stacks up to 25 times.",
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
                                        name: "Frother",
                                        description: "Reduces the cooldown of Holy Fervor by 30.0%.",
                                        selected: false
                                    },
                                    {
                                        id: "1",
                                        name: "Pleasure from Pain",
                                        description: "Holy Fervor causes Victors to restore 2 health for each successful hit.",
                                        selected: false
                                    },
                                    {
                                        id: "2",
                                        name: "Blessed Frenzy",
                                        description: "Increases the duration of Holy Fervor's attack speed buff to 10 seconds.",
                                        selected: false
                                    }
                                ]
                            }
                        }             
                    }
                }
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
            };
            $scope.switchSpec = function (sub, subs) {
                for (var obj in subs) {
                    if (subs[obj].id == sub.id) {
                        subs[obj].selected = true
                    } else {
                        subs[obj].selected = false
                    }
                }
            };
            $scope.switchClass = function (hero, heroes) {
                for (var obj in heroes) {
                    if (heroes[obj].id == hero.id) {
                        heroes[obj].selected = true
                    } else {
                        heroes[obj].selected = false
                    }
                }
            };
        }
    ]
);