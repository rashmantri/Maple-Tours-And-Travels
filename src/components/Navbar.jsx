import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false) // For sidebar toggle

	// Toggle sidebar visibility
	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="flex justify-between items-center py-4 px-6  shadow-md sticky top-0 z-50 bg-orange-400">
			<div className="flex items-center ">
				<img
					alt="logo"
					className="w-12 h-12 rounded-full mr-4"
					src="src/assets/logo.jpg"
				/>
				<h1 className="text-2xl font-extrabold text-gray-800 whitespace-nowrap">
					Maple Tours and Travels
				</h1>
			</div>

			{/* Desktop Links */}
			<div className="hidden md:flex items-center">
				<ul className="flex space-x-8 text-lg font-semibold">
					<li>
						<Link
							to="/"
							className="text-gray-800 hover:text-blue-500 transition-colors">
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="text-gray-800 hover:text-blue-500 transition-colors">
							About Us
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="text-gray-800 hover:text-blue-500 transition-colors">
							Contact
						</Link>
					</li>
					<li>
						<Link
							to="/tourPackages"
							className="text-gray-800 hover:text-blue-500 transition-colors">
							Tour Packages
						</Link>
					</li>
				</ul>
			</div>

			{/* Mobile Hamburger Menu */}
			<div className="md:hidden">
				<button
					onClick={toggleSidebar}
					className="text-gray-800">
					{/* Hamburger Icon */}
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</div>

			{/* Sidebar for Mobile */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out`}>
				{/* Close Button */}
				<div className="flex justify-end p-4">
					<button onClick={toggleSidebar}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<ul className="flex flex-col space-y-4 text-lg font-semibold p-4">
					<li>
						<Link
							to="/"
							className="text-gray-800 hover:text-blue-500 transition-colors"
							onClick={toggleSidebar}>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="text-gray-800 hover:text-blue-500 transition-colors"
							onClick={toggleSidebar}>
							About Us
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="text-gray-800 hover:text-blue-500 transition-colors"
							onClick={toggleSidebar}>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to="/tourPackages"
							className="text-gray-800 hover:text-blue-500 transition-colors"
							onClick={toggleSidebar}>
							Tour Packages
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
