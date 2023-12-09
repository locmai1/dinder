import "../styles/Joining.css";
import Navbar from "../Navbar";

export default function Joining() {
	return (
		<div>
			<Navbar />
			<div className="Joining">
				<div className="heading">Joining</div>
				<div className="sub-heading">Confirmed dinders</div>

				<div style={{ display: "flex", flexDirection: "row", gap: "25px" }}>
					<div className="event">
						<div className="event-head-joining">
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

						<div className="chat-button">
							<img src="img/chat.svg"></img>
							<div>Chat</div>
						</div>
					</div>

					<div className="event">
						<div className="event-head-joining">
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

						<div className="chat-button">
							<img src="img/chat.svg"></img>
							<div>Chat</div>
						</div>
					</div>
				</div>

				<div className="sub-heading">Pending Requests</div>

				<div className="event">
					<div className="event-head-joining">
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

					<div className="cancel-button">Cancel Request</div>
				</div>
			</div>
		</div>
	);
}
