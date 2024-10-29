import React from "react"

const About = () => {
	return (
		<section className="py-24 relative">
			<div className="w-full max-w-7xl px-4 mx-auto">
				<div className="w-full grid lg:grid-cols-2 gap-10 items-center">
					{/* Left Image */}
					<div className="w-full flex justify-center lg:justify-end">
						<div className="w-full max-w-md h-full rounded-3xl overflow-hidden shadow-lg">
							<img
								className="w-full h-full object-cover"
								src="src/assets/brochure.jpg"
								alt="Maple Tours & Travels"
							/>
						</div>
					</div>

					{/* Right Content */}
					<div className="flex flex-col gap-8">
						<div>
							<h6 className="text-gray-400 text-base font-normal leading-relaxed">
								About Us
							</h6>
							<h2 className="text-indigo-700 text-4xl font-bold leading-normal">
								Maple Tours & Travels
							</h2>
							<p className="text-gray-500 mt-4">
								Founded in 2019, Maple Tours & Travels is a globally recognized
								company offering a wide range of travel services. Authorized by
								the Maharashtra State Tourism Development Corporation (MSTDC),
								we pride ourselves on being a disciplined, honest, and reliable
								company that offers complete travel solutions.
							</p>
							<p className="text-gray-500 mt-4">
								Our firm is verified, trusted, top-rated, and fast-responsive,
								and is renowned for honesty and reliability.
							</p>
						</div>

						<div className="flex flex-col gap-6">
							<h3 className="text-gray-900 text-2xl font-bold">Our Vision</h3>
							<p className="text-gray-500">
								To connect thousands of students with nature and help them
								experience its peace and harmony. Traveling with Maple lets you
								discover the wonders around you.
							</p>
						</div>

						<div className="flex flex-col gap-6">
							<h3 className="text-gray-900 text-2xl font-bold">
								Why Travel with Maple?
							</h3>
							<ul className="list-disc pl-5 text-gray-500">
								<li>Improves mental health and communication skills.</li>
								<li>
									Offers a chance to explore diverse cultures and make
									unforgettable memories.
								</li>
								<li>Promotes appreciation for nature and reduces stress.</li>
							</ul>
						</div>

						<div className="flex flex-col gap-6">
							<h3 className="text-gray-900 text-2xl font-bold">
								What We Provide
							</h3>
							<ul className="list-disc pl-5 text-gray-500">
								<li>Educational and Corporate Tours</li>
								<li>Timely and hygienic travel arrangements</li>
								<li>Services for Passport, Visa, Insurance, and more</li>
								<li>Train, flight, hotel, bus, and car rental bookings</li>
							</ul>
						</div>

						<button className="mt-8 px-5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-md flex items-center text-indigo-600 font-medium">
							<span>Read More</span>
							<svg
								className="ml-2"
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none">
								<path
									d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
									stroke="#4F46E5"
									strokeWidth="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
