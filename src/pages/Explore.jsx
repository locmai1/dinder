import "../styles/Explore.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
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
  const [events, setEvents] = useState([]);

  const baseURL = "http://localhost:3001";

  const calculateHoursAgo = (dateTime) => {
    const now = new Date();
    const timeDifference = now - new Date(dateTime);
    const hoursAgo = Math.round(timeDifference / (1000 * 60 * 60));
    return hoursAgo;
  };

  const formatDate = (dateTime) => {
    const options = { month: "short", day: "numeric" };
    return new Date(dateTime).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await fetch(baseURL + "/events", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setEvents(data.events);
        } else {
          console.error("Error getting events:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    fetchAllEvents();
  }, []);

  const requestEvent = async (id) => {
    try {
      const response = await fetch(baseURL + "/events/request/" + id, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("Error getting events:", response.statusText);
      }
    } catch (error) {
      console.error("Error requesting event:", error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="Explore">
        <div className="heading">Explore</div>
        <div className="bar">
          <div className="sub-heading">Based on your preferences...</div>
          <div className="filter" onClick={() => setFilterOpen(true)}>
            <div>Filter</div>
            <img src="img/filter.svg" alt="Filter" />
          </div>
        </div>

        <div className="format">
          {events.map((event, index) => (
            <div key={index} className="event">
              <div className="event-head-explore">
                <div className="event-title-hours">
                  <div className="event-title">{event.mealType}</div>
                  <div className="event-hours-ago">
                    {calculateHoursAgo(event.dateTime)} hrs ago
                  </div>
                </div>
                <div>{event.hostName}</div>
              </div>

              <div className="event-grid">
                <div>Date </div>
                <div className="event-content">
                  {formatDate(event.dateTime)}
                </div>
                <div>Type</div>
                <div className="event-content">{event.type}</div>
                <div>Location </div>
                <div className="event-content">{event.location}</div>
                <div>Purpose</div>
                <div className="event-content">{event.purpose}</div>
              </div>

              <div className="meeting-location">
                <div>Meeting Location</div>
                <div style={{ fontWeight: "700" }}>{event.meetingLocation}</div>
              </div>

              {event.isUserPending ? (
                <div className="pending-button" disabled>
                  <div>Pending</div>
                </div>
              ) : (
                <div
                  className="request-button"
                  onClick={() => requestEvent(event._id)}
                >
                  <div>Request</div>
                  <img src="img/plus-black.svg" alt="Plus-Black" />
                </div>
              )}
            </div>
          ))}
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
