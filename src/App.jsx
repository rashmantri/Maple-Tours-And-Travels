import "./App.css"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import "flowbite"
import { Outlet } from "react-router-dom"

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export default App
