import React, { useState } from "react";

const About = ({ data }) => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	const handleOverlayClick = (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			closeModal();
		}
	};

	if (data) {
		var name = data.name;
		var profilepic = process.env.PUBLIC_URL + "/images/" + data.image;
		var bio = data.bio;
		var street = data.address.street;
		var city = data.address.city;
		var state = data.address.state;
		var zip = data.address.zip;
		var phone = data.phone;
		var email = data.email;
		var resumeDownload = process.env.PUBLIC_URL + "/" + data.resumedownload;
		console.log(resumeDownload);
	}

	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img
						className="profile-pic"
						src={profilepic}
						alt="Krishna's Profile Pic"
					/>
				</div>
				<div className="nine columns main-col">
					<h2>About Me</h2>

					<p>{bio}</p>
					<div className="row">
						<div className="columns contact-details">
							<h2>Contact Details</h2>
							<p className="address">
								<span>{name}</span>
								<br />
								<span>
									{street}
									{/* <br /> */}
									{city}, {state}, {zip}
								</span>
								<br />
								<span>{phone}</span>
								<br />
								<span>{email}</span>
							</p>
						</div>
						<div className="columns download">
							<p>
								<button onClick={openModal} className="button">
									<i className="fa fa-eye"></i>View Resume
								</button>
							</p>
						</div>
						{showModal && (
							<div className="modal-overlay" onClick={handleOverlayClick}>
								<div
									className="modal-content"
									onClick={(e) => e.stopPropagation()}
								>
									<button onClick={closeModal} className="close-button">
										Close
									</button>
									<iframe
										src={resumeDownload}
										width="100%"
										height="100%"
										title="Resume Viewer"
									></iframe>
								</div>
							</div>
						)}

						{/* <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
