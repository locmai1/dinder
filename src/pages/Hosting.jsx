import "../styles/Hosting.css";
import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CreateModal from "../components/CreateModal";

export default function Hosting() {
  const [createModalOpen, setCreateModalOpen] = useState(false);

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

        <div>
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
        </div>
      </div>
      {createModalOpen ? (
        <CreateModal setCreateModalOpen={setCreateModalOpen} />
      ) : null}
    </div>
  );
}
