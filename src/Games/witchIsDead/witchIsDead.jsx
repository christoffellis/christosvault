import React, { useState, useEffect } from "react";
import { PageContainer, StyledButton, Dropdown, Label } from "./styled";

const characters = [
  "Fox",
  "Cat",
  "Toad",
  "Spider",
  "Owl",
  "Hare",
  "Magpie",
  "Crow",
  "Dog",
  "Rat",
];

const spells = [
  "Unseen Hand",
  "Conjure Light",
  "Speak Human (d6 words)",
  "Lock/Unlock, Open/Close",
  "Conjure Snack",
  "Make Flame",
  "Tidy, Clean and Mend",
  "Plant Growth",
  "Distract/Confuse",
  "Make Book Read Itself Aloud",
];

const villageEvents = [
  "Under the thumb of the baron",
  "Filled with cheery gnomes",
  "Controlled by a cult",
  "Devoutly religious",
  "Incredibly superstitious",
  "At war with forest tribes",
  "Built around a wizard college",
  "Full of hardy mining folk",
  "Shady and dangerous",
  "Oppressively perfect",
];

const villageTwists = [
  "The village are in on it",
  "A rival witch set her up",
  "The witch hunter didn’t do it",
  "The witch hunter is waiting for you",
  "The village folk are having a festival",
  "The witch-hunter died, and is being buried",
  "There are two (rival) witch-hunters in town",
  "The village is abandoned for some reason",
  "The witch-hunter has dragged a suspect up for questioning",
  "The village hate the witch-hunter",
];

// Shuffle function to randomize the array
const shuffleArray = (array) => {
  // return array.shuffle();
  return array;
};

export const WitchIsDead = () => {
  const [players, setPlayers] = useState(Array(4).fill("No character yet"));
  const [gamePhase, setGamePhase] = useState("intro");
  const [spellsAssigned, setSpellsAssigned] = useState([]);
  const [shuffledVillageEvents, setShuffledVillageEvents] = useState([]);
  const [shuffledVillageTwists, setShuffledVillageTwists] = useState([]);

  // Shuffle village events when moving to the village phase
  useEffect(() => {
    if (gamePhase === "village") {
      setShuffledVillageEvents(shuffleArray([...villageEvents])); // Create a copy and shuffle it
    }
  }, [gamePhase]);

  useEffect(() => {
    if (gamePhase === "village") {
      setShuffledVillageTwists(shuffleArray([...villageTwists])); // Create a copy and shuffle it
    }
  }, [gamePhase]);

  const handleAddPlayer = () => {
    if (players.length < 8) {
      setPlayers([...players, "No character yet"]);
    }
  };

  const handleRemovePlayer = () => {
    if (players.length > 1) {
      setPlayers(players.slice(0, -1));
    }
  };

  const handleShuffleCharacters = () => {
    const newAssignments = players.map(() => {
      const roll = Math.floor(Math.random() * 10);
      return characters[roll];
    });
    setPlayers(newAssignments);
  };

  const handleRollSpells = () => {
    const newSpells = players.map(() => {
      const roll = Math.floor(Math.random() * 10);
      return spells[roll];
    });
    setSpellsAssigned(newSpells);
  };

  return (
    <PageContainer
      style={{
        maxHeight: "100vh",
        overflowY: "auto",
        padding: "2rem",
        color: "white",
      }}
    >
      {/* Game Intro */}
      {gamePhase === "intro" && (
        <>
          <h1>🧙‍♀️ The Witch is Dead</h1>
          <p>
            Once upon a time, there was a kind and wise and beautiful witch who
            lived in the forest with her familiars, and her life was peaceful
            and happy until a <strong>FUCKING WITCH-HUNTER</strong> broke into
            her cottage and dragged her out and{" "}
            <strong>fucking MURDERED HER</strong> and now she’s DEAD.
          </p>
          <p>
            But: if you get revenge and kill him and bring his{" "}
            <strong>EYES</strong> to her corpse within a week, she’ll come back
            to life. Or so you’ve heard. Even if it doesn’t work, at least he’s
            dead.
          </p>

          <h2>You are a cute woodland animal.</h2>
          <p>You have four traits:</p>
          <ul>
            <li>
              <strong>CLEVER</strong> – interact with humans and human culture
            </li>
            <li>
              <strong>FIERCE</strong> – scare, lift, push, carry, claw, bite
            </li>
            <li>
              <strong>SLY</strong> – sneak, steal, hide
            </li>
            <li>
              <strong>QUICK</strong> – outpace, climb, evade
            </li>
          </ul>

          <h3>🎲 SYSTEM</h3>
          <p>
            Roll a d10, add your relevant trait, and try to beat the task
            number.
          </p>
          <ul>
            <li>6 - Simple</li>
            <li>7 - Basic</li>
            <li>8 - Challenging</li>
            <li>9 - Difficult</li>
            <li>10 - Nearly impossible</li>
          </ul>
          <p>
            Take turns to act. You can’t act twice in a row. Enemies don’t roll
            dice – they force you to roll dice.
          </p>
          <p>
            Using magic is always dangerous. If you roll ≤ your current danger,
            you’re out of the game.
          </p>

          <h3>🐾 Animal Stats</h3>
          <pre>
            FOX (C2 F2 S1 Q1) CAT (C0 F1 S3 Q2) TOAD (C1 F1 S2 Q1) SPIDER (C2 F0
            S3 Q1) OWL (C3 F1 S1 Q2) HARE (C0 F0 S2 Q3) MAGPIE (C2 F1 S1 Q2)
            CROW (C2 F1 S2 Q2) DOG (C1 F3 S0 Q1) RAT (C1 F0 S2 Q2)
          </pre>

          <h3>🔮 Spells</h3>
          <ul>
            {spells.map((spell, i) => (
              <li key={i}>{spell}</li>
            ))}
          </ul>

          <h3>🏘️ The Village (roll twice)</h3>
          <ul>
            {villageEvents.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>

          <h3>🧝‍♂️ The Witch-Hunter</h3>
          <p>
            The witch-hunter could be any of the following:
            <ul>
              <li>
                <strong>Armoured</strong> – A heavily armored brute.
              </li>
              <li>
                <strong>Wise</strong> – A clever strategist with knowledge of
                magic.
              </li>
              <li>
                <strong>Drunk</strong> – A slovenly and unpredictable drunk.
              </li>
              <li>
                <strong>Pious</strong> – Devoutly religious, believing his
                actions are righteous.
              </li>
              <li>
                <strong>Magical</strong> – A witch-hunter who uses his own magic
                to track and kill witches.
              </li>
              <li>
                <strong>Jolly</strong> – A seemingly cheery witch-hunter with a
                dark sense of humor.
              </li>
            </ul>
          </p>

          <h3>💀 Twist Possibilities</h3>
          <ul>
            <li>
              The village is in on it – They’re all part of the witch-hunter’s
              plot.
            </li>
            <li>
              A rival witch set her up – The murder was orchestrated by another
              witch.
            </li>
            <li>
              The witch-hunter didn’t do it – Someone else killed the witch, and
              the witch-hunter is after the wrong person.
            </li>
            <li>
              The witch-hunter is waiting for you – He knows you’re coming and
              has set a trap.
            </li>
            <li>
              There are two witch-hunters – Two hunters are after you, making
              your task even harder.
            </li>
            <li>
              The village is having a festival – The village’s merriment may
              hide darker secrets.
            </li>
          </ul>

          <StyledButton
            onClick={() => setGamePhase("character")}
            style={{ marginTop: "2rem" }}
          >
            🎬 Start Setup
          </StyledButton>
        </>
      )}

      {/* Character Rolling */}
      {gamePhase === "character" && (
        <>
          <h2>🎲 Roll for Characters</h2>
          {players.map((player, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Label>Player {index + 1}</Label>
              <Dropdown
                value={player}
                disabled
              >
                <option>{player}</option>
              </Dropdown>
            </div>
          ))}

          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <StyledButton
              onClick={handleAddPlayer}
              disabled={players.length >= 8}
            >
              + Add Player
            </StyledButton>
            <StyledButton
              onClick={handleRemovePlayer}
              disabled={players.length <= 1}
            >
              − Remove Player
            </StyledButton>
          </div>

          <StyledButton onClick={handleShuffleCharacters}>
            🎲 Shuffle Characters
          </StyledButton>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <StyledButton onClick={() => setGamePhase("intro")}>
              ⬅️ Back to Instructions
            </StyledButton>
            <StyledButton onClick={() => setGamePhase("spells")}>
              ➡️ Next: Roll for Spells
            </StyledButton>
          </div>
        </>
      )}

      {/* Spell Rolling */}
      {gamePhase === "spells" && (
        <>
          <h2>✨ Roll for Spells</h2>
          {players.map((player, index) => (
            <div
              key={index}
              style={{ marginBottom: "1rem" }}
            >
              <Label>{player}</Label>
              <Dropdown
                value={spellsAssigned[index] || "No spell yet"}
                disabled
              >
                <option>{spellsAssigned[index] || "No spell yet"}</option>
              </Dropdown>
            </div>
          ))}

          <StyledButton
            onClick={handleRollSpells}
            style={{ marginTop: "1rem" }}
          >
            ✨ Roll Spells
          </StyledButton>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <StyledButton onClick={() => setGamePhase("character")}>
              ⬅️ Back to Characters
            </StyledButton>

            <StyledButton onClick={() => setGamePhase("village")}>
              ➡️ Next: Go to the Village
            </StyledButton>
          </div>
        </>
      )}

      {/* Village Setup */}
      {gamePhase === "village" && (
        <>
          <h2>🏘️ The Village</h2>
          <p style={{ marginBottom: "1rem" }}>
            The village is full of secrets and danger. Here are some things the
            players might discover:
          </p>
          <div
              // key={index}
              style={{
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
            {shuffledVillageEvents.slice(0, 2).map((event, index) => (
              <Dropdown
                value={shuffledVillageEvents[index]}
                disabled
              >
                <option>{shuffledVillageEvents[index]}</option>
              </Dropdown>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <StyledButton onClick={() => setGamePhase("spells")}>
              ⬅️ Back to Spells
            </StyledButton>

            <StyledButton onClick={() => setGamePhase("twist")}>
              ➡️ Next: Go to the Twist
            </StyledButton>
          </div>
        </>
      )}

      {gamePhase === "twist" && (
        <>
          <h2>🏘️ Twist</h2>
          <p style={{ marginBottom: "1rem" }}>
            The village is full of secrets and danger. Here are some things the
            players might discover:
          </p>

          <div
              // key={index}
              style={{
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
            {shuffledVillageTwists.slice(0, 2).map((event, index) => (
              <Dropdown
                value={shuffledVillageTwists[index]}
                disabled
              >
                <option>{shuffledVillageTwists[index]}</option>
              </Dropdown>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <StyledButton onClick={() => setGamePhase("spells")}>
              ⬅️ Back to Spells
            </StyledButton>

            <StyledButton onClick={() => alert("Game begins! Improv time!")}>
              🧨 Start the Game!
            </StyledButton>
          </div>
        </>
      )}
    </PageContainer>
  );
};
