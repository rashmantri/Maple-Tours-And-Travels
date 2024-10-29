import React, { useEffect, useState } from "react"

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const images = [
		"src/assets/nature1.jpg",
		"src/assets/nature2.jpg",
		"src/assets/nature3.jpg",
		"src/assets/nature4.jpg",
		"src/assets/nature5.jpg",
	]

	useEffect(() => {
		// Reset to the first slide when the component mounts
		setCurrentIndex(0)

		// Set up an interval to change slides automatically
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 4000) // Change slide every 3 seconds

		// Cleanup function to clear the interval when the component unmounts
		return () => clearInterval(intervalId)
	}, []) // Empty dependency array ensures it runs only on mount

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
	}

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length)
	}

	return (
		<div
			id="default-carousel"
			className="relative w-full"
			data-carousel="slide">
			{/* Carousel wrapper */}
			<div className="relative h-56 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-lg">
				{images.map((src, index) => (
					<div
						key={index}
						className={`duration-700 ease-in-out ${
							currentIndex === index ? "block" : "hidden"
						}`}
						data-carousel-item>
						<img
							src={src}
							className="absolute block w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							alt={`Slide ${index + 1}`}
						/>
					</div>
				))}
			</div>

			{/* Slider indicators */}
			<div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
				{images.map((_, index) => (
					<button
						key={index}
						type="button"
						className={`w-3 h-3 rounded-full ${
							currentIndex === index ? "bg-gray-500" : "bg-gray-300"
						}`}
						aria-label={`Slide ${index + 1}`}
						onClick={() => setCurrentIndex(index)}></button>
				))}
			</div>

			{/* Previous button */}
			<button
				type="button"
				className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
				onClick={goToPrevious}>
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
				onClick={goToNext}>
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
