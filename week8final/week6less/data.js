$(document).ready(function() {
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        user: {
            n64: "Nintendo64",
            ps3: "Play station 3",
            ps4: "Play Station 4",

        },
        gamescat: {
            classicgames: "Classic Games",
            rpggames: "RPG Games",
            shootinggames: "Shooting Games",
            racinggames: "Racing Games",
            howitworks: "GameTri rules:",


        },
        gamesn64: [{
                name: "Legand of Zelda",
                price: "1.99"
            },
            {
                name: "Mortal Kombat Trilligoy",
                price: "3"
            },
            {
                name: "Kobe Bryant Courtsides",
                price: "2.50"
            },
            {
                name: "Pokemon Stadium",
                price: "2"
            },

            {
                name: "007 Golden Eye",
                price: "4"

            },
        ],

        gamesps4: [{
                name: "NFL Madden 18",
                price: "3",
            },
            {
                name: "NBA 2K18",
                price: "14",

            },
            {
                name: "NBA 2K19",
                price: "14",

            },
            {
                name: "FIFA 2K18",
                price: "14",

            },
            {
                name: "Mortal Kombat X",
                price: "10",

            },
        ],
        gamesps3: [{
                name: "NFL Madden 25",
                price: "3",
            },
            {
                name: "NBA 2K18",
                price: "14",

            },
            {
                name: "NCAA Football 2013",
                price: "14",

            },
            {
                name: "NCAA Basketball 2011",
                price: "14",

            },
            {
                name: "Call Duty Black Ops",
                price: "10",

            },
        ],
        classicgames: [{
            name: "Sonce the Hedgehog",
            price: "2",
            content: "SegaSonic the Hedgehog is a 1993 arcade game in the Sonic the Hedgehog series by Sega. Controlling Sonic the Hedgehog and his friends Mighty the Armadillo and Ray the Flying Squirrel, the player must escape an island as quickly as possible after they are kidnapped by series antagonist Doctor Eggman. ",






        },

        {
        name: "Super Steet Figher 2",
        price: "10",
        content: "The New Challengers is a head-to-head fighting game produced by Capcom and originally released as an arcade game in 1993. It is the fourth game in the Street Fighter II sub-series of Street Fighter games, following Street Fighter II Turbo: Hyper Fighting.",
    },

    ],
    rules1: [{
        rules: "Rule #1: select a game you want to rent or rent out.",

    },
    {
        rules: "Rule #2: renters must send game into Gametri for verifications",

    },
    {
        rules: "Rule #3: Rentees sendin your money to GameTri and we will take care of payments",
    },
    {
        rules: "Rule #4: Money will be provided to renter, once game transfer is completed.",
    },
    {
        rules: "Rule #5: Rentee can only keep the game for 30 days, if game is out past that point then rentee will be charge 50.00 late fee",
    },
],
    

        show: true,

        nogame: true
    });

    $("#target").html(rendered);
});