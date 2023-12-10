import { useState } from "react";
import "../styles/Onboarding.css";

// TODO: hookup /users/edit route (token should already be in localstorage)
export default function Onboarding() {
  const years = [2024, 2025, 2026, 2027];
  const pronouns = ["He/him", "She/her", "They/them", "Other"];
  const restrictions = [
    "Vegan",
    "Vegetarian",
    "Soy-Free",
    "Pescatarian",
    "Gluten-Free",
    "Nut-Free",
    "Dairy-Free",
    "Other",
  ];
  const interests = [
    "Art",
    "Movies",
    "Music",
    "Sports",
    "Cooking",
    "Traveling",
    "Activism",
    "Reading",
    "Gaming",
  ];

  const [preferredName, setPreferredName] = useState("");
  const [yearIndex, setYearIndex] = useState(-1);
  const [pronounIndex, setPronounIndex] = useState(-1);
  const [restrictionsIndexes, setRestrictionsIndexes] = useState([]);
  const [interestsIndexes, setInterestsIndexes] = useState([]);

  return (
    <div className="OnboardingContainer">
      <h1 className="OnboardingTitleText">Tell us a bit about yourself!</h1>
      <div className="OnboardingGridDiv">
        <div className="OnboardingSubText">Preferred Name</div>
        <div className="OnboardingSubText desktop-view">Class Year</div>
        <input
          className="OnboardingInput desktop-view"
          type="text"
          value={preferredName}
          onChange={(event) => setPreferredName(event.target.value)}
        />

        <input
          className="OnboardingInput mobile-view"
          type="text"
          value={preferredName}
          onChange={(event) => setPreferredName(event.target.value)}
        />
        <div className="OnboardingSubText mobile-view">Class Year</div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 10,
          }}
        >
          {years.map((year, index) => (
            <div
              key={index}
              className="OnboardingYellowContainer"
              style={{
                backgroundColor:
                  yearIndex === index ? "rgba(242, 201, 76, 0.50)" : "#fff",
              }}
              onClick={() => setYearIndex(yearIndex === index ? -1 : index)}
            >
              {year}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 28 }}>
        <div className="OnboardingSubText" style={{ marginBottom: 10 }}>
          Pronouns
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {pronouns.map((pronoun, index) => (
            <div
              key={index}
              className="OnboardingYellowContainer"
              style={{
                backgroundColor:
                  pronounIndex === index ? "rgba(242, 201, 76, 0.50)" : "#fff",
              }}
              onClick={() =>
                setPronounIndex(pronounIndex === index ? -1 : index)
              }
            >
              {pronoun}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 28 }}>
        <div className="OnboardingSubText" style={{ marginBottom: 10 }}>
          Allergens/Restrictions
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {restrictions.map((restriction, index) => (
            <div
              key={index}
              className="OnboardingYellowContainer"
              style={{
                backgroundColor: restrictionsIndexes.includes(index)
                  ? "rgba(242, 201, 76, 0.50)"
                  : "#fff",
              }}
              onClick={() =>
                setRestrictionsIndexes(
                  restrictionsIndexes.includes(index)
                    ? restrictionsIndexes.filter(
                        (restrictionIndex) => restrictionIndex !== index
                      )
                    : [...restrictionsIndexes, index]
                )
              }
            >
              {restriction}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 28 }}>
        <div className="OnboardingSubText" style={{ marginBottom: 10 }}>
          Interests
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {interests.map((interest, index) => (
            <div
              key={index}
              className="OnboardingYellowContainer"
              style={{
                backgroundColor: interestsIndexes.includes(index)
                  ? "rgba(242, 201, 76, 0.50)"
                  : "#fff",
              }}
              onClick={() =>
                setInterestsIndexes(
                  interestsIndexes.includes(index)
                    ? interestsIndexes.filter(
                        (interestIndex) => interestIndex !== index
                      )
                    : [...interestsIndexes, index]
                )
              }
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
      <button
        className="OnboardingYellowButton"
        onClick={() => {
          // @TODO: Remove this and replace with route and save data to database
          console.log(`Preferred Name: ${preferredName}`);
          console.log(`Year: ${years[yearIndex]}`);
          console.log(`Pronoun: ${pronouns[pronounIndex]}`);
          console.log(
            `Restrictions: ${restrictionsIndexes.map(
              (index) => ` ${restrictions[index]}`
            )}`
          );
          console.log(
            `Interests: ${interestsIndexes.map(
              (index) => ` ${interests[index]}`
            )}`
          );
        }}
      >
        Get started
      </button>
    </div>
  );
}
