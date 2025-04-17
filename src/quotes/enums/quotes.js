export const Perspective = {
    spokenOf: 'Being refered to',
    self: 'Refering to self',
    speakingTo: 'Being spoken to',
}

export const Categories = {
    Tone: {
      Vengeance: { name: 'Vengeance', color: '#ff4d4f' },
      Grief: { name: 'Grief', color: '#6a0572' },
      Regret: { name: 'Regret', color: '#9e4770' },
      Pride: { name: 'Pride', color: '#d4af37' },
      Love: { name: 'Love', color: '#ff6b81' },
      Sadness: { name: 'Sadness', color: '#3a6ea5' },
      Mystery: { name: 'Mystery', color: '#5c5470' },
      Resolve: { name: 'Resolve', color: '#2d6a4f' },
      Justice: { name: 'Justice', color: '#3d405b' },
      Humorous: { name: 'Humorous', color: '#f4a261' },
      Ominous: { name: 'Ominous', color: '#1e1e2f' }
    },
  
    Archetype: {
      AntiHero: { name: 'Anti Hero', color: '#7f5af0' },
      Villain: { name: 'Villain', color: '#d00000' },
      TragicHero: { name: 'Tragic Hero', color: '#ffb703' },
      Redeemer: { name: 'Redeemer', color: '#2ec4b6' },
      Warrior: { name: 'Warrior', color: '#264653' },
      AncientBeing: { name: 'Ancient Being', color: '#8338ec' },
      Betrayed: { name: 'Betrayed', color: '#9e2a2b' },
      Avenger: { name: 'Avenger', color: '#ef233c' },
      Prophet: { name: 'Prophet', color: '#5f0f40' },
      BrokenMentor: { name: 'Broken Mentor', color: '#8d99ae' }
    },
  
    DialogueFunction: {
      Monologue: { name: 'Monologue', color: '#118ab2' },
      Confrontation: { name: 'Confrontation', color: '#ef476f' },
      Confession: { name: 'Confession', color: '#06d6a0' },
      Taunt: { name: 'Taunt', color: '#ffd166' },
      Revelation: { name: 'Revelation', color: '#073b4c' },
      Plea: { name: 'Plea', color: '#ff9f1c' },
      Goodbye: { name: 'Goodbye', color: '#8e9aaf' },
      InternalThought: { name: 'Internal Thought', color: '#adb5bd' }
    },
  
    Theme: {
      Identity: { name: 'Identity', color: '#6a4c93' },
      Power: { name: 'Power', color: '#c1121f' },
      Redemption: { name: 'Redemption', color: '#2b9348' },
      Time: { name: 'Time', color: '#577590' },
      Destiny: { name: 'Destiny', color: '#6c757d' },
      Sacrifice: { name: 'Sacrifice', color: '#780000' },
      Betrayal: { name: 'Betrayal', color: '#9d0208' },
      Memory: { name: 'Memory', color: '#3f88c5' },
      Legacy: { name: 'Legacy', color: '#ff6d00' },
      Myth: { name: 'Myth', color: '#b08968' },
      Humour: { name: 'Humour', color: '#fcbf49' }
    }
  };

export const lines = [
    {
        text: 'Good men don\'t need rules. Today is not the day to find out why I have so many.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Resolve,
            Categories.Archetype.Warrior,
            Categories.Theme.Power
        ]
    },
    {
        text: 'No second chances. I\'m that sort of a man.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Pride,
            Categories.Archetype.AntiHero,
            Categories.DialogueFunction.Confrontation
        ]
    },
    {
        text: 'They never raised their voice. That was the worst thing- their fury. And then we discovered why. Why they, who had fought with gods and demons, why they had run away from us and hidden… They were being kind.',
        perspective: Perspective.spokenOf,
        category: [
            Categories.Tone.Mystery,
            Categories.Theme.Myth,
            Categories.Archetype.AncientBeing,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'I\'ve walked through fire that would unmake your soul. And I kept walking.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Resolve,
            Categories.Archetype.TragicHero,
            Categories.Theme.Sacrifice,
            Categories.DialogueFunction.Confession
        ]
    },
    {
        text: 'I\'ve ended empires with less provocation than you\'ve given me today.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Vengeance,
            Categories.Archetype.AntiHero,
            Categories.Theme.Power,
            Categories.DialogueFunction.Taunt
        ]
    },
    {
        text: 'The difference between us? You still think this is about winning.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Pride,
            Categories.Archetype.AntiHero,
            Categories.DialogueFunction.Confrontation,
            Categories.Theme.Power
        ]
    },
    {
        text: 'You speak of destiny as though I haven\'t broken it before.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Defiance,
            Categories.Archetype.Prophet,
            Categories.Theme.Destiny,
            Categories.DialogueFunction.Taunt
        ]
    },
    {
        text: 'You know me, even if you don\'t know why.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Mystery,
            Categories.Archetype.BrokenMentor,
            Categories.DialogueFunction.Revelation,
            Categories.Theme.Identity
        ]
    },
    {
        text: 'You dig through ruins - I am what the ruins were trying to bury.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Mystery,
            Categories.Archetype.AncientBeing,
            Categories.DialogueFunction.Taunt,
            Categories.Theme.Myth
        ]
    },
    {
        text: 'The stars have forgotten me. That should terrify you.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Grief,
            Categories.Tone.Vengeance,
            Categories.Archetype.TragicHero,
            Categories.Theme.Time,
            Categories.Theme.Legacy,
            Categories.DialogueFunction.Confrontation
        ]
    },
    {
        text: 'I have worn every face, spoken every truth, and broken every oath.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Regret,
            Categories.Archetype.Betrayed,
            Categories.Theme.Identity,
            Categories.Theme.Betrayal,
            Categories.DialogueFunction.Confession
        ]
    },    
    {
        text: 'Your gods were children when they learned to fear my name.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Pride,
            Categories.Tone.Mystery,
            Categories.Archetype.AncientBeing,
            Categories.Theme.Myth,
            Categories.DialogueFunction.Taunt
        ]
    },
    {
        text: 'You are not the first to beg. You will not be the last to be denied.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Resolve,
            Categories.Archetype.AntiHero,
            Categories.DialogueFunction.Confrontation,
            Categories.Theme.Power
        ]
    },
    {
        text: 'If you were meant to leave, the door wouldn\'t have closed behind you.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Mystery,
            Categories.Archetype.Prophet,
            Categories.Theme.Destiny,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'You don’t get to be sorry. Not now. Not after this.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Grief,
            Categories.Tone.Vengeance,
            Categories.Archetype.Betrayed,
            Categories.DialogueFunction.Confrontation,
            Categories.Theme.Betrayal
        ]
    },
    {
        text: 'You made me choose. And now you have to live with what I became.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Regret,
            Categories.Tone.Pride,
            Categories.Archetype.TragicHero,
            Categories.Theme.Identity,
            Categories.Theme.Sacrifice,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'You told me it would all be worth it. So show me—what was worth this?',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Grief,
            Categories.Archetype.Betrayed,
            Categories.Theme.Redemption,
            Categories.Theme.Sacrifice,
            Categories.DialogueFunction.Confession
        ]
    },
    {
        text: 'Do you even remember their names? Because I carry every single one.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Grief,
            Categories.Tone.Resolve,
            Categories.Archetype.TragicHero,
            Categories.Theme.Memory,
            Categories.Theme.Legacy,
            Categories.DialogueFunction.Confession
        ]
    },    
    {
        text: 'Tell me how to forgive you. I swear I\'ll try. Just... tell me how.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Regret,
            Categories.Tone.Love,
            Categories.Archetype.Redeemer,
            Categories.Theme.Redemption,
            Categories.DialogueFunction.Plea
        ]
    },
    {
        text: 'I still set a place for you at the fire. Every night. Like a fool.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Sadness,
            Categories.Tone.Love,
            Categories.Archetype.TragicHero,
            Categories.Theme.Loss,
            Categories.DialogueFunction.InternalThought
        ]
    },
    {
        text: 'The worst part is, you still think you matter.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.ColdResolve,
            Categories.Archetype.Villain,
            Categories.DialogueFunction.Taunt,
            Categories.Theme.Power
        ]
    },
    {
        text: 'I\'m not the villain, but I stopped trying to be the hero a long time ago.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Regret,
            Categories.Archetype.AntiHero,
            Categories.Theme.Identity,
            Categories.DialogueFunction.Confession
        ]
    },
    {
        text: 'I won the war, and lost the only thing that mattered.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Grief,
            Categories.Archetype.TragicHero,
            Categories.Theme.Sacrifice,
            Categories.DialogueFunction.Confession
        ]
    },
    {
        text: 'They needed someone to fall, so I jumped.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Resolve,
            Categories.Archetype.Redeemer,
            Categories.Theme.Sacrifice,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'My blade is heavy with names—don\'t make me add yours.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Vengeance,
            Categories.Archetype.Warrior,
            Categories.Theme.Power,
            Categories.DialogueFunction.Taunt
        ]
    },
    {
        text: 'Glory is a lie we tell the dying.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Resolve,
            Categories.Archetype.BrokenMentor,
            Categories.Theme.Myth,
            Categories.DialogueFunction.InternalThought
        ]
    },
    {
        text: 'You speak like the world is young. How quaint.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Mystery,
            Categories.Archetype.AncientBeing,
            Categories.Theme.Time,
            Categories.DialogueFunction.Taunt
        ]
    },
    {
        text: 'You lit the fire. I just let it spread.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.ColdResolve,
            Categories.Archetype.AntiHero,
            Categories.Theme.Betrayal,
            Categories.DialogueFunction.Confrontation
        ]
    },
    {
        text: 'I saw it all—your rise, your fall, and the ruin you\'ll beg for.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Vengeance,
            Categories.Archetype.Prophet,
            Categories.Theme.Destiny,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'The future doesn\'t whisper. It screams.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Mystery,
            Categories.Archetype.Prophet,
            Categories.Theme.Time,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'They were the kind of legend that left behind scars, not songs.',
        perspective: Perspective.spokenOf,
        category: [
            Categories.Tone.Grief,
            Categories.Archetype.AncientBeing,
            Categories.Theme.Legacy,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'She once held the sky together with her bare hands.',
        perspective: Perspective.spokenOf,
        category: [
            Categories.Tone.Myth,
            Categories.Archetype.Legend,
            Categories.Theme.Myth,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'I remember what I was before they broke me. Do you?',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Grief,
            Categories.Tone.Regret,
            Categories.Archetype.Betrayed,
            Categories.Theme.Identity,
            Categories.DialogueFunction.Confession
        ]
    },
    {
        text: 'I carry my sins like armor. You\'ll find me hard to kill.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Resolve,
            Categories.Archetype.AntiHero,
            Categories.Theme.Redemption,
            Categories.DialogueFunction.Confrontation
        ]
    },
    {
        text: 'I\'m not lost. I walk away on purpose.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Pride,
            Categories.Archetype.Loner,
            Categories.Theme.Identity,
            Categories.DialogueFunction.InternalThought
        ]
    },
    {
        text: 'You\'re not ready to hear what I saw, and I\'m not ready to say it again.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Mystery,
            Categories.Archetype.Prophet,
            Categories.Theme.Time,
            Categories.DialogueFunction.Confession
        ]
    },
    {
        text: 'You don\'t see the doom coming because it wears your face.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Mystery,
            Categories.Tone.Ominous,
            Categories.Archetype.Prophet,
            Categories.Theme.Destiny,
            Categories.Theme.Identity,
            Categories.DialogueFunction.Revelation
        ]
    },
    {
        text: 'I laugh when I get tickled, but in reality I am not fond of it.',
        perspective: Perspective.self,
        category: [
            Categories.Tone.Humor,
            Categories.Archetype.Trickster,
            Categories.Theme.Discomfort,
            Categories.DialogueFunction.InternalThought
        ]
    },
    {
        text: 'Hush kitten. Daddy will play with you when he is done trembling from anger at the patriarchy.',
        perspective: Perspective.speakingTo,
        category: [
            Categories.Tone.Sarcasm,
            Categories.Tone.Vengeance,
            Categories.Archetype.Rebel,
            Categories.Theme.Humour,
            Categories.Theme.Power,
            Categories.Theme.Gender,
            Categories.DialogueFunction.Taunt
        ]
    }
];