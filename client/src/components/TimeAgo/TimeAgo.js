import React from 'react'
// import './TimeAgo.css'

export default function TimeAgo({ date }) {

	const d = new Date(date);
	const _d = new Date();

	const day = d.getDate();
	const hour = d.getHours();
	const minute = d.getMinutes();
	const second = d.getSeconds();
	const year = d.getFullYear();
	const month = d.getMonth() + 1;

	const _day = _d.getDate();
	const _hour = _d.getHours();
	const _minute = _d.getMinutes();
	const _second = _d.getSeconds();
	const _year = _d.getFullYear();

	const parse = e => {
		return e.toString().length == 1 ? `0${e}` : e
	}

	const showHour = () => {
		// return `${day.length == 1 ? "0" + day : day}`
		return `${parse(hour)}:${parse(minute)}`
	}
	const showDay = () => {
		// return `${day.length == 1 ? "0" + day : day}`
		if (day != _day)
			return ` - ${parse(day)}-${parse(month)}-${parse(year)}`
		return null;
	}



	// 19:32 - 11.06.2021

	return (
		<span>
			{showHour()}{showDay()}
		</span>
	)
}
