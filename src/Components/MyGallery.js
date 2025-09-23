import React from "react";

const MyGallery = () => {
	// Adjusting based on the provided naming pattern and location
	const images = Array(5)
		.fill(0)
		.map((_, idx) => `images/portfolio/${idx + 1}.jpg`);

	return (
		<section id="MyGallery">
			<div className="my-gallery-container">
				<div className="my-gallery">
					{images.map((image, index) => (
						<img
							key={index}
							src={`${process.env.PUBLIC_URL}/${image}`}
							alt={`Gallery ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyGallery;
