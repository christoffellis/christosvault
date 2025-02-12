import { backgroundEndings } from "../enums/backgrounds";

// Choice represents a decision the user can make
export class Choice {
    constructor(prompt, options) {
        this.prompt = prompt;
        this.options = options; // Each option leads to either another Choice or a Result
    }
}

const churchChoice1 = new Choice(
    "Were you isolated while living among the faithful?",
    {
        "Yes": backgroundEndings.hermit,
        "No": backgroundEndings.acolyte
    }
);


const tradeChoice1 = new Choice(
    "Was this trade a craft or a performance?",
    {
        "Craft": backgroundEndings.guildArtisan,
        "Performance": backgroundEndings.entertainer
    }
);

const militaryChoice1 = new Choice(
    "Did you have a trade or were you a scholar?",
    {
        "Scholar": backgroundEndings.sage,
        "Trade": tradeChoice1
    }
);

const crimeChoice2 = new Choice(
    "Did you serve in the military?",
    {
        "Yes": backgroundEndings.soldier,
        "No": militaryChoice1
    }
);

const crimeChoice1 = new Choice(
    "Did this crime involve falsifying documents?",
    {
        "Yes": backgroundEndings.charlatan,
        "No": backgroundEndings.criminal
    }
);


const cityChoice1 = new Choice(
    "Did you turn to crime to fill your purse?",
    {
        "Yes": crimeChoice1,
        "No": crimeChoice2
    }
);


const coastChoice1 = new Choice(
    "Does your trade involve the sea?",
    {
        "Yes": backgroundEndings.sailor,
        "No": cityChoice1
    }
);

const choice4 = new Choice(
    "Were you raised along the coast, within the wilderness, in a church or in the city?",
    {
        "Wilderness": backgroundEndings.outlander,
        "Coast": coastChoice1,
        "City": cityChoice1,
        "Church": churchChoice1
    }
);

const choice3 = new Choice(
    "Did you commit a great deed?",
    {
        "Yes": backgroundEndings.folkHero,
        "No": choice4
    }
);

const choice2 = new Choice(
    "Is your family wealthy?",
    {
        "Yes": backgroundEndings.noble,
        "No": choice3
    }
);

const choice1 = new Choice(
    "Are you an orphan?",
    {
        "Yes": backgroundEndings.urchin,
        "No": choice2
    }
);


export const startingChoice = choice1; 
