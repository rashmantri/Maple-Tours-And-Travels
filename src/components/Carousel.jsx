import React from "react"

const Carousel = () => {
	return (
		<div
			id="default-carousel"
			className="relative w-full"
			data-carousel="slide">
			{/* Carousel wrapper */}
			<div className="relative h-56 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-lg">
				{/* Item 1 */}
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item>
					<img
						src="https://wallpapers.com/images/hd/cool-nature-uq37hdsg5l3ll7ck.jpg"
						className="absolute block w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						alt="Slide 1"
					/>
				</div>
				{/* Item 2 */}
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item>
					<img
						src="https://www.pixel4k.com/wp-content/uploads/2020/11/people-nature-and-landscape-4k_1606595561-2048x1535.jpg"
						className="absolute block w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						alt="Slide 2"
					/>
				</div>
				{/* Item 3 */}
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item>
					<img
						src="src\assets\nature1.jpg"
						className="absolute block w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						alt="Slide 3"
					/>
				</div>
				{/* Item 4 */}
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item>
					<img
						src="https://images.alphacoders.com/106/thumb-1920-1068173.jpg"
						className="absolute block w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						alt="Slide 4"
					/>
				</div>
				{/* Item 5 */}
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item>
					<img
						src="https://wallpapers.com/images/hd/4k-nature-vivid-landscape-6ki7pp0ul2gfta76.jpg"
						className="absolute block w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						alt="Slide 5"
					/>
				</div>
			</div>

			{/* Slider indicators */}
			<div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
				<button
					type="button"
					className="w-3 h-3 rounded-full bg-gray-300"
					aria-label="Slide 1"
					data-carousel-slide-to="0"></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full bg-gray-300"
					aria-label="Slide 2"
					data-carousel-slide-to="1"></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full bg-gray-300"
					aria-label="Slide 3"
					data-carousel-slide-to="2"></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full bg-gray-300"
					aria-label="Slide 4"
					data-carousel-slide-to="3"></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full bg-gray-300"
					aria-label="Slide 5"
					data-carousel-slide-to="4"></button>
			</div>

			{/* Previous button */}
			<button
				type="button"
				className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
				data-carousel-prev>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 19l-7-7 7-7"></path>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>

			{/* Next button */}
			<button
				type="button"
				className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
				data-carousel-next>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5l7 7-7 7"></path>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	)
}

export default Carousel
