import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//create your first component
const Home = (props) => {
	return (
		<div className="bigDiv">
			<div className="littleDiv">
				<i className="far fa-clock"></i>
			</div>
			<div className="littleDiv">{props.thousands % 10}</div>
			<div className="littleDiv">{props.hundreds % 10}</div>
			<div className="littleDiv">{props.tens % 10}</div>
			<div className="littleDiv">{props.unit % 10}</div>
		</div>
	);
};

Home.propTypes = {
	unit: PropTypes.number,
	tens: PropTypes.number,
	hundreds: PropTypes.number,
	thousands: PropTypes.number,
};

let counter = 0;

setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter);

	counter++;
	ReactDOM.render(
		<Home unit={one} tens={two} hundreds={three} thousands={four} />,
		document.querySelector("#app")
	);
}, 1000);

export default Home;
