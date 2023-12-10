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
				<div className="bar">
					<div className="sub-heading">Based on your preferences...</div>
					<div className="filter" onClick={() => setFilterOpen(true)}>
						<div>Filter</div>
						<img src="img/filter.svg" alt="Filter" />
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

						<div className="meeting-location">
							<div>Meeting Location</div>
							<div style={{ fontWeight: "700" }}>574 Boston Ave.</div>
						</div>

						<div className="request-button">
							<div>Request</div>
							<img src="img/plus-black.svg" alt="Plus-Black" />
						</div>
					</div>

					<div className="event">
						<div className="event-head-explore">
							<div className="event-title-hours">
								<div className="event-title">Dinner @ 6:30</div>
								<div className="event-hours-ago">2 hrs ago</div>
							</div>
							<div>Jenny K.</div>
						</div>

						<div className="event-grid">
							<div>Date </div>
							<div className="event-content">16 March</div>
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

						<div className="request-button">
							<div>Request</div>
							<img src="img/plus-black.svg" alt="Plus-Black" />
						</div>
					</div>

					<div className="event">
						<div className="event-head-explore">
							<div className="event-title-hours">
								<div className="event-title">Breakfast @ 9:30</div>
								<div className="event-hours-ago">2 hrs ago</div>
							</div>
							<div>Stephen L.</div>
						</div>

						<div className="event-grid">
							<div>Date </div>
							<div className="event-content">20 March</div>
							<div>Type</div>
							<div className="event-content">Grp of 3</div>
							<div>Location </div>
							<div className="event-content">Dewick</div>
							<div>Purpose</div>
							<div className="event-content">Chat</div>
						</div>

						<div className="meeting-location">
							<div>Meeting Location</div>
							<div style={{ fontWeight: "700" }}>574 Boston Ave.</div>
						</div>

						<div className="request-button">
							<div>Request</div>
							<img src="img/plus-black.svg" alt="Plus-Black" />
						</div>
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
