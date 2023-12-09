import "../styles/Explore.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ExploreFilter from "../components/ExploreFilter";

export default function Explore() {
  const [filterOpen, setFilterOpen] = useState(false);

  const meals = ["Breakfast", "Lunch", "Dinner"];
  const locations = ["Carm", "Dewick", "Hodgdon"];
  const years = ["2024", "2025", "2026", "2027", "Grad"];
  const purposes = ["Chat", "Advice", "Other"];

  const [mealIndexes, setMealIndexes] = useState([]);
  const [date, setDate] = useState();
  const [locationIndexes, setLocationIndexes] = useState([]);
  const [yearIndexes, setYearIndexes] = useState([]);
  const [purposeIndexes, setPurposeIndexes] = useState([]);

  return (
    <div>
      <Navbar />
      <div className="Explore">
        <div className="heading">Explore</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <div className="sub-heading">Based on your preferences...</div>
          <div className="filter" onClick={() => setFilterOpen(true)}>
            Filter
          </div>
        </div>
        <div>
          <div className="event">
            <div className="event-head">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div className="event-title" style={{ marginRight: "10px" }}>
                  Dinner @ 6
                </div>
                <div className="event-hours-ago">2 hrs ago</div>
              </div>
              <div>Anna L.</div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gridColumnGap: 10,
                gridRowGap: 6,
              }}
            >
              <div>Date </div>
              <div className="event-content">15 March</div>
              <div>Type</div>
              <div className="event-content">1 on 1</div>
              <div>Location </div>
              <div className="event-content">Carm</div>
              <div>Purpose</div>
              <div className="event-content">Advice</div>
            </div>

            <div className="request-button">Request</div>
          </div>
        </div>
      </div>
      {filterOpen ? (
        <ExploreFilter
          meals={meals}
          locations={locations}
          years={years}
          purposes={purposes}
          mealIndexes={mealIndexes}
          date={date}
          locationIndexes={locationIndexes}
          yearIndexes={yearIndexes}
          purposeIndexes={purposeIndexes}
          setMealIndexes={setMealIndexes}
          setDate={setDate}
          setLocationIndexes={setLocationIndexes}
          setYearIndexes={setYearIndexes}
          setPurposeIndexes={setPurposeIndexes}
          setFilterOpen={setFilterOpen}
        />
      ) : null}
    </div>
  );
}
