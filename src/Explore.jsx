import "./styles/Explore.css";
import Navbar from "./Navbar";

export default function Explore() {
	return (
		<div>
			<Navbar />
			<div className="Explore">
				<div className="heading">Explore</div>
				<div className="bar">
					<div className="sub-heading">Based on your preferences...</div>
					<div className="filter">
						<div>Filter</div>
						<img src="img/filter.svg"></img>
					</div>
				</div>

				<div className="format">
					<div className="event">
						<div className="event-head-explore">
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

						<div className="request-button">
							<div>Request</div>
							<img src="img/plus-black.svg"></img>
						</div>
					</div>

					<div className="event">
						<div className="event-head-explore">
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

						<div className="request-button">
							<div>Request</div>
							<img src="img/plus-black.svg"></img>
						</div>
					</div>

					<div className="event">
						<div className="event-head-explore">
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

						<div className="request-button">
							<div>Request</div>
							<img src="img/plus-black.svg"></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
