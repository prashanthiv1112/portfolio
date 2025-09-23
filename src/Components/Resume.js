import React from "react";

const Resume = ({ data }) => {
	if (data) {
		var skillmessage = data.skillmessage;
		var education = data.education.map(function (education) {
			return (
				<div key={education.school}>
					<h3>{education.school}</h3>
					<p className="info">
						{education.degree} <span>&bull;</span>
						GPA - {education.GPA}
						<em className="date">{education.graduated}</em>
					</p>
					<p>{education.description}</p>
				</div>
			);
		});

		var extracurriculars = data.extracurricular.map(function (extracurricular) {
			return (
				<div key={extracurricular.company}>
					<h3>{extracurricular.company}</h3>
					<p className="info">
						{extracurricular.title}
						<span>&bull;</span>{" "}
						<em className="date">{extracurricular.years}</em>
					</p>
					<ul>
						<li>{extracurricular.description}</li>
					</ul>
				</div>
			);
		});
		var work = data.work.map(function (work) {
			return (
				<div key={work.company}>
					<h3>{work.company}</h3>
					<p className="info">
						{work.title}
						<span>&bull;</span> <em className="date">{work.years}</em>
					</p>
					<ul>
						<li>{work.description1}</li>
						<li>{work.description2}</li>
						<li>{work.description3}</li>
					</ul>
				</div>
			);
		});
		// var skills = data.skills.map(function (skills) {
		// 	var className = "bar-expand " + skills.name.toLowerCase();
		// 	return (
		// 		<li key={skills.name}>
		// 			<span style={{ width: skills.level }} className={className}></span>
		// 			<em>{skills.name}</em>
		// 		</li>
		// 	);
		// });
		var skills = data.skills.map((skill, index, array) => (
			<React.Fragment key={skill.name}>
				{skill.name}
				{index !== array.length - 1 && <span> &bull; </span>}
			</React.Fragment>
		));
	}

	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<div className="row item">
						<div className="twelve columns">{education}</div>
					</div>
				</div>
			</div>

			<div className="row work">
				<div className="three columns header-col">
					<h1>
						<span>Work</span>
					</h1>
				</div>

				<div className="nine columns main-col">{work}</div>
			</div>

			<div className="row work">
				<div className="three columns header-col">
					<h1>
						<span>Extracurriculars</span>
					</h1>
				</div>

				<div className="nine columns main-col">{extracurriculars}</div>
			</div>

			<div className="row skill">
				<div className="three columns header-col">
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<p>{skillmessage}</p>

					{/* <div className="bars">
						<ul className="skills">{skills}</ul>
					</div> */}
					<div className="skills-list">{skills}</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
