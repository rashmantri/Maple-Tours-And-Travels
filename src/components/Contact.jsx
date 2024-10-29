import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import {
	faInstagram,
	faFacebook,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
	const scriptURL =
		"https://script.google.com/macros/s/AKfycbzga5kcqkv6GxTBwqVNoZYcqeb8kaj1Xtu7Bx_7DxYhNsECzozaswwsNBEBu6eoxW_zXQ/exec" // Replace with actual script URL

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	})

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// Form validation
		if (!formData.firstName || !formData.lastName) {
			alert("Please enter both First Name and Last Name.")
			return
		}
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		if (!emailPattern.test(formData.email)) {
			alert("Please enter a valid email address.")
			return
		}
		const phonePattern = /^[0-9]{10}$/
		if (!phonePattern.test(formData.phone)) {
			alert("Please enter a valid 10-digit phone number.")
			return
		}

		// Send form data to Google Sheets
		fetch(scriptURL, {
			method: "POST",
			body: new URLSearchParams(formData),
		})
			.then((response) => {
				alert("Thank you! Your form has been submitted successfully.")
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					message: "",
				})
			})
			.catch((error) => console.error("Error!", error.message))
	}

	return (
		<div className="flex flex-col md:flex-row w-full p-10 m-10">
			{/* Contact Form */}
			<div className="md:w-7/12 mx-10 w-full mb-6 md:mb-0 ">
				<h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
				<form
					className="flex flex-col space-y-5"
					onSubmit={handleSubmit}>
					<div className="flex flex-col md:flex-row gap-4">
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							placeholder="First Name"
							className="border border-gray-300 rounded-lg p-2 md:w-1/2 w-full"
							required
						/>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							placeholder="Last Name"
							className="border border-gray-300 rounded-lg p-2 md:w-1/2 w-full"
							required
						/>
					</div>

					<div className="flex flex-col md:flex-row gap-4">
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Email"
							className="border border-gray-300 rounded-lg p-2 md:w-1/2 w-full"
							required
						/>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="Phone Number"
							className="border border-gray-300 rounded-lg p-2 md:w-1/2 w-full"
							required
						/>
					</div>

					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Your Message"
						className="border border-gray-300 rounded-lg p-2"
						rows="5"
						required
					/>
					<button
						type="submit"
						className="bg-orange-500 text-white rounded-lg py-2 px-4 w-40 mt-2 self-start hover:bg-orange-600 transition duration-200">
						Send Request
					</button>
				</form>
			</div>

			{/* Contact Info */}
			<div className="md:w-5/12 w-full md:pl-8">
				<h2 className="text-2xl font-bold mb-4">Contact Information</h2>
				<div className="space-y-6 text-xl">
					<div className="flex items-center space-x-2">
						<FontAwesomeIcon
							icon={faMapMarkerAlt}
							className="text-orange-500"
						/>
						<p>Ganpati Matha, Warje-Malwadi, Pune-58</p>
					</div>
					<div className="flex items-center space-x-2">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="text-orange-500"
						/>
						<p>mapletours888@gmail.com</p>
					</div>
					<div className="flex items-center space-x-2">
						<FontAwesomeIcon
							icon={faPhone}
							className="text-orange-500"
						/>
						<p>+91 7276671824 / 8668522877</p>
					</div>

					{/* Social Media Icons */}
					<div className="flex items-center space-x-4 mt-6 ">
						<a
							href="https://www.instagram.com/maple8882024/"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon
								icon={faInstagram}
								className="text-pink-600 text-3xl"
							/>
						</a>
						<a
							href="https://www.facebook.com/share/HaBCP6DjSLFBGJu9/?mibextid=qi2Omg"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon
								icon={faFacebook}
								className="text-blue-600 text-3xl"
							/>
						</a>
						<a
							href="https://wa.me/8668522877"
							target="_blank"
							rel="noreferrer">
							<FontAwesomeIcon
								icon={faWhatsapp}
								className="text-green-600 text-3xl"
							/>
						</a>
					</div>

					{/* Google Map Embed */}
					<div className="mapouter lg:w-[80%] w-[80%] ml-2 h-fit rounded-lg mt-10 mb-10 mr-11">
						<div className="gmap_canvas rounded-lg ">
							<iframe
								className="gmap_iframe"
								width="100%"
								height="350" // Adjust height as needed
								frameBorder="0"
								scrolling="no"
								marginHeight="0"
								marginWidth="0"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151662.3277858245!2d74.35190569486288!3d18.78862877115792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc66b9b015d5bb%3A0x1649de8f9058e31b!2sInstyle%20Interiors!5e0!3m2!1sen!2sin!4v1698358470965!5m2!1sen!2sin"
								title="Map of Instyle Interiors"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
