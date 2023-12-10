import "../styles/Hosting.css";
import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import CreateModal from "../components/CreateModal";

export default function Hosting() {
  const baseURL = "http://localhost:3001";

  const [hostedEvents, setHostedEvents] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    const fetchHostingData = async () => {
      try {
        const response = await fetch(baseURL + "/events/host", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setHostedEvents(data.hostedEvents);
        } else {
          console.error("Error fetching hosted events:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching hosted events:", error.message);
      }
    };

    fetchHostingData();
  }, []);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getDayMonth = (dateTime) => {
    let date = new Date(dateTime);
    return "" + date.getDate() + " " + monthNames[date.getMonth()];
  };

  return (
    <div>
      <Navbar />
      <div className="Hosting">
        <div className="heading">Hosting</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <div className="sub-heading">My upcoming dinders</div>
          <div className="create" onClick={() => setCreateModalOpen(true)}>
            <div>Create</div>
            <Icon icon={"ic:round-plus"} height={18} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 25 }}>
          {hostedEvents.map((event, index) => (
            <div key={index}>
              <div className="event">
                <div className="event-head-hosting">
                  <div className="event-title-hours">
                    <div className="event-title">{event.mealType} @ N/A</div>
                    {/* <div className="event-hours-ago">2 hrs ago</div> */}
                  </div>
                  {/* <div>Anna L.</div> */}
                </div>

                <div className="event-grid">
                  <div>Date </div>
                  <div className="event-content">
                    {getDayMonth(event.dateTime)}
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
                  <div style={{ fontWeight: "700" }}>
                    {event.meetingLocation}
                  </div>
                </div>
              </div>
              <div className="request-join">
                <div>Amy W. requested to join</div>
                <div className="accept-decline-bar">
                  <div className="accept-button">Accept</div>
                  <div className="decline-button">Decline</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          <div className="event">
            <div className="event-head-hosting">
              <div className="event-title-hours">
                <div className="event-title">Dinner @ 6</div>
                <div className="event-hours-ago">2 hrs ago</div>
              </div>
              <div>Anna L.</div>
            </div>

            <div className="event-grid">
              <div>Date </div>
              <div className="event-content">15 March</div>
              <div>Type</div>
              <div className="event-content">1 on 1</div>
              <div>Location </div>
              <div className="event-content">Carm</div>
              <div>Purpose</div>
              <div className="event-content">Advice</div>
            </div>

            <div className="meeting-location">
              <div>Meeting Location</div>
              <div style={{ fontWeight: "700" }}>574 Boston Ave.</div>
            </div>
          </div>
          <div className="request-join">
            <div>Amy W. requested to join</div>
            <div className="accept-decline-bar">
              <div className="accept-button">Accept</div>
              <div className="decline-button">Decline</div>
            </div>
          </div>
        </div> */}
      </div>
      {createModalOpen ? (
        <CreateModal setCreateModalOpen={setCreateModalOpen} />
      ) : null}
    </div>
  );
}
