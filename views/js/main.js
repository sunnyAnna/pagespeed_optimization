// Pizza ingredients
var pizzaIngredients = {};
pizzaIngredients.meats = [
  "Pepperoni",
  "Sausage",
  "Fennel Sausage",
  "Spicy Sausage",
  "Chicken",
  "BBQ Chicken",
  "Chorizo",
  "Chicken Andouille",
  "Salami",
  "Tofu",
  "Bacon",
  "Canadian Bacon",
  "Proscuitto",
  "Italian Sausage",
  "Ground Beef",
  "Anchovies",
  "Turkey",
  "Ham",
  "Venison",
  "Lamb",
  "Duck",
  "Soylent Green",
  "Carne Asada",
  "Soppressata Picante",
  "Coppa",
  "Pancetta",
  "Bresola",
  "Lox",
  "Guanciale",
  "Chili",
  "Beef Jerky",
  "Pastrami",
  "Kielbasa",
  "Scallops",
  "Filet Mignon"
];
pizzaIngredients.nonMeats = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Stuffed Peppers",
  "Spinach",
  "Tomatoes",
  "Pineapple",
  "Pear Slices",
  "Apple Slices",
  "Mushrooms",
  "Arugula",
  "Basil",
  "Fennel",
  "Rosemary",
  "Cilantro",
  "Avocado",
  "Guacamole",
  "Salsa",
  "Swiss Chard",
  "Kale",
  "Sun Dried Tomatoes",
  "Walnuts",
  "Artichoke",
  "Asparagus",
  "Caramelized Onions",
  "Mango",
  "Garlic",
  "Olives",
  "Cauliflower",
  "Polenta",
  "Fried Egg",
  "Zucchini",
  "Hummus"
];
pizzaIngredients.cheeses = [
  "American Cheese",
  "Swiss Cheese",
  "Goat Cheese",
  "Mozzarella Cheese",
  "Parmesean Cheese",
  "Velveeta Cheese",
  "Gouda Cheese",
  "Muenster Cheese",
  "Applewood Cheese",
  "Asiago Cheese",
  "Bleu Cheese",
  "Boursin Cheese",
  "Brie Cheese",
  "Cheddar Cheese",
  "Chevre Cheese",
  "Havarti Cheese",
  "Jack Cheese",
  "Pepper Jack Cheese",
  "Gruyere Cheese",
  "Limberger Cheese",
  "Manchego Cheese",
  "Marscapone Cheese",
  "Pecorino Cheese",
  "Provolone Cheese",
  "Queso Cheese",
  "Roquefort Cheese",
  "Romano Cheese",
  "Ricotta Cheese",
  "Smoked Gouda"
];
pizzaIngredients.sauces = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
pizzaIngredients.crusts = [
  "White Crust",
  "Whole Wheat Crust",
  "Flatbread Crust",
  "Stuffed Crust"
];

// Pulls adjective out of array using random number sent from generator
function getAdj(x) {
    switch (x) {
    case "dark":
        var dark = ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted",
      "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty",
      "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
        return dark;
    case "color":
        var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red",
      "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
      "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan",
      "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
        return colors;
    case "whimsical":
        var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
      "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
      "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked",
      "brainwashed"];
        return whimsy;
    case "shiny":
        var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise",
      "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
      "metallic"];
        return shiny;
    case "noisy":
        var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic",
      "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
      "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping",
      "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
        return noisy;
    case "apocalyptic":
        var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic",
      "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
      "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
        return apocalyptic;
    case "insulting":
        var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow",
      "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
      "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless",
      "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
      "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide",
      "horrible", "syncophantic", "unhelpful", "bootlicking"];
        return insulting;
    case "praise":
        var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
      "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
      "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave",
      "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome",
      "majestic", "grand", "stunning"];
        return praise;
    case "scientific":
        var scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
      "extinct", "galactic"];
        return scientific;
    default:
        var scientific_default = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological",
      "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar",
      "extinct", "galactic"];
        return scientific_default;
    }
}

// Pulls noun out of array using random number sent from generator
function getNoun(y) {
    switch (y) {
    case "animals":
        var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo",
      "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan",
      "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper",
      "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale",
      "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish",
      "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture",
      "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
        return animals;
    case "profession":
        var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
      "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor",
      "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
      "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
        return professions;
    case "fantasy":
        var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost",
      "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester",
      "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
        return fantasy;
    case "music":
        var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums",
      "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
      "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
      "singer"];
        return music;
    case "horror":
        var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf",
      "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter",
      "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
      "fiend", "satanist", "moon", "fullMoon"];
        return horror;
    case "gross":
        var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm",
      "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance",
      "fluid", "moisture", "garbage", "trash", "bug"];
        return gross;
    case "everyday":
        var everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
      "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
      "garden", "school", "wallet", "bottle"];
        return everyday;
    case "jewelry":
        var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry",
      "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
      "costume", "ornament", "treasure"];
        return jewelry;
    case "places":
        var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
      "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
      "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
        return places;
    case "scifi":
        var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
        return scifi;
    default:
        var scifi_default = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy",
      "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
      "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
      "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
        return scifi_default;
    }
}

// types of adjectives for pizza titles
var adjectives = ["dark", "color", "whimsical", "shiny", "noise", "apocalyptic", "insulting", "praise", "scientific"];
// types of nouns for pizza titles
var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];
var k = adjectives.length;
var l = nouns.length;

var bkgr = []; // array with background pizzas
var pies = []; // array with lists of pizza ingredients
var menu = []; // array with menu pizzas

// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Returns a string nested inside <li> tags
var ingredientItemizer = function (string) {
    return "<li>" + string + "</li>";
};

// Return a string with a random pizza ingredient from each respective category of ingredients
function selectRandom(food) {
    var v = pizzaIngredients[food];
    var o = v.length;
    var random = v[randomMath(o)];
    return random;
};

// Returns a random number
function randomMath(x) {
    return Math.floor((Math.random() * x));
}

// Returns random pizza ingredients nested inside <li> tags
var makeRandomPizza = function () {
    var pizza = "";

    var numberOfMeats = randomMath(4);
    var numberOfNonMeats = randomMath(3);
    var numberOfCheeses = randomMath(2);

    for (var i = 0; i < numberOfMeats; i++) {
        pizza = pizza + ingredientItemizer(selectRandom('meats'));
    }

    for (var j = 0; j < numberOfNonMeats; j++) {
        pizza = pizza + ingredientItemizer(selectRandom('nonMeats'));
    }

    for (var k = 0; k < numberOfCheeses; k++) {
        pizza = pizza + ingredientItemizer(selectRandom('cheeses'));
    }

    pizza = pizza + ingredientItemizer(selectRandom('sauces'));
    pizza = pizza + ingredientItemizer(selectRandom('crusts'));

    pies.push(pizza); // adds the new list of pizza ingredients to the pies array
};


// Generates random numbers for getAdj and getNoun functions and returns a new pizza name
var generateName = function () {
    var adj = adjectives[randomMath(k)];
    var noun = nouns[randomMath(l)];
    var randomA = randomMath(k);
    var randomN = randomMath(l);
    var adjective = getAdj(adj);
    var noun = getNoun(noun);
    var name = "The " + adjective[randomA] + " " + noun[randomN];
    return name;
};


// Creates DOM elements for pizzas
function pizzaElementGenerator(i) {
    var pizzaContainer, // contains pizza title, image and list of ingredients
        pizzaImageContainer, // contains pizza image
        pizzaImage, // pizza image
        pizzaDescriptionContainer, // contains pizza title and list of ingredients
        pizzaName, // pizza name
        ul; // list of ingredients

    // Creates DOM elements
    pizzaContainer = document.createElement("div");
    pizzaImageContainer = document.createElement("div");
    pizzaImage = document.createElement("div");
    pizzaDescriptionContainer = document.createElement("div");
    pizzaName = document.createElement("h5");
    ul = document.createElement("ul");

    // Adds css classes
    pizzaContainer.classList.add("randomPizzaContainer");
    pizzaImageContainer.classList.add("col-md-6");
    pizzaImage.classList.add("img-responsive");
    pizzaDescriptionContainer.classList.add("col-md-6");

    // Adds hierarchy
    pizzaContainer.appendChild(pizzaImageContainer);
    pizzaContainer.appendChild(pizzaDescriptionContainer);
    pizzaImageContainer.appendChild(pizzaImage);
    pizzaDescriptionContainer.appendChild(pizzaName);
    pizzaDescriptionContainer.appendChild(ul);

    pizzaContainer.id = "pizza" + i; // gives each pizza element a unique id
    pizzaName.textContent = generateName(); // generates a random name for each pizza element
    ul.innerHTML = pies[i]; // assigns a list of ingredients from the pies array to the current pizza element
    menu.push(pizzaContainer); // adds the new pizza element to the menu array
};


// Changes the size of the pizzas when the slider moves
var resizePizzas = function (size) {
    window.performance.mark("mark_start_resize"); // User Timing API function
    var windowWidth = document.querySelector("#randomPizzas").offsetWidth;
    var z = document.querySelectorAll(".randomPizzaContainer");
    var oldImg = document.querySelectorAll(".randomPizzaContainer .img-responsive");
    var oldWidth = z[0].offsetWidth;
    var oldSize = oldWidth / windowWidth;
    var newImg;
    var smImg = 'url(../views/images/pizza-sm.png) no-repeat center';
    var medImg = 'url(../views/images/pizza-med.png) no-repeat center';
    var lgImg = 'url(../views/images/pizza-lg.png) no-repeat center';


    // Changes the name of the size of the pizzas
    function changeSliderLabel(size) {
        switch (size) {
        case "1":
            document.querySelector("#pizzaSize").innerHTML = "Small";
            return;
        case "2":
            document.querySelector("#pizzaSize").innerHTML = "Medium";
            return;
        case "3":
            document.querySelector("#pizzaSize").innerHTML = "Large";
            return;
        default:
            console.log("bug in changeSliderLabel");
        }
    }

    changeSliderLabel(size);


    // Returns the size difference between the old pizza and the new one
    function determineDx(size) {

        // Changes the size of the pizzas' images and returns new width of the pizza container
        function sizeSwitcher(size) {
            switch (size) {
            case "1":
                newImg = smImg;
                return 0.25;
            case "2":
                newImg = medImg;
                return 0.333;
            case "3":
                newImg = lgImg;
                return 0.5;
            default:
                console.log("bug in sizeSwitcher");
            }
        }

        var newSize = sizeSwitcher(size);
        var dx = (newSize - oldSize) * windowWidth;

        return dx;
    }


    // Iterates through pizza elements on the page and changes their widths and images
    function changePizzaSizes(size) {
        var dx = determineDx(size);
        var newwidth = (oldWidth + dx) + 'px';
        var newheight = newwidth * 0.75;
        for (var i = 0, j = z.length; i < j; i++) {
            z[i].style.width = newwidth;
            oldImg[i].style.width = newwidth;
            oldImg[i].style.background = newImg;
        }
    }

    changePizzaSizes(size);

    // User Timing API
    window.performance.mark("mark_end_resize");
    window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
    var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
    console.log("Time to resize pizzas: " + timeToResize[timeToResize.length - 1].duration + "ms");
};

window.performance.mark("mark_start_generating"); // collects timing data

// Creates new pizza elements
(function () {
    // Creates an array with lists of pizza ingredients
    for (var i = 2; i < 100; i++) {
        makeRandomPizza();
    }

    // Creates new pizza elements
    for (var i = 2; i < 100; i++) {
        pizzaElementGenerator(i);
    }
})();

// User Timing API
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
function logAverageFrame(times) { // times is the array of User Timing measurements from updatePositions()
    var numberOfEntries = times.length;
    var sum = 0;
    for (var i = numberOfEntries - 1; i > numberOfEntries - 11; i--) {
        sum = sum + times[i].duration;
    }
    console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

// Code for sliding background pizzas pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pizzas based on scroll position
function updatePositions() {
    frame++;
    window.performance.mark("mark_start_frame");

    var items = document.querySelectorAll('.mover');
    var position = document.body.scrollTop;
    for (var i = 0; i < items.length; i++) {
        var phase = Math.sin((position / 1250) + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    }

    // User Timing API
    window.performance.mark("mark_end_frame");
    window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
    if (frame % 10 === 0) {
        var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
        logAverageFrame(timesToUpdatePosition);
    }
}

// Runs updatePositions on scroll
window.addEventListener('scroll', function () {
    requestAnimationFrame(updatePositions);
});


// Background pizza element constructor
function Element(i, cols, s) {
    var phase = Math.sin(i % 5);
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza-sm.png";
    elem.left = (i % cols) * s;
    elem.style.left = elem.left + 100 * phase + 'px';
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    bkgr.push(elem); // adds the new background pizza element to the bkgr array
};

// Creates pizzas for the background
function createElements() {
    var cols = 8;
    var s = 256;
    for (var i = 0; i < 50; i++) {
        var elem = new Element(i, cols, s);
    }
}

createElements();

// Runs generatePizzaImages upon DOM load
window.addEventListener('DOMContentLoaded', generatePizzaImages());

// Generates images of menu pizzas and sliding background pizzas
function generatePizzaImages() {
    window.removeEventListener('DOMContentLoaded', generatePizzaImages);
    var pizzasBkgr = document.getElementById("movingPizzas1");
    var pizzasDiv = document.getElementById("randomPizzas");
    for (var i = 0, j = bkgr.length; i < j; i++) { // appends background pizzas to the DOM
        pizzasBkgr.appendChild(bkgr[i]);
    }
    for (var i = 0, j = menu.length; i < j; i++) {
        pizzasDiv.appendChild(menu[i]); // appends menu pizzas to the DOM
    }
}
