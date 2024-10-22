import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter } from "react-router-dom"
import Body from "./components/Body.jsx"
import ErrorPage from "./components/ErrorPage.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import TourPackages from "./components/TourPackages.jsx"
import { RouterProvider } from "react-router-dom"
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Body />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/about",
				element: <About />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/contact",
				element: <Contact />,
				errorElement: <ErrorPage />,
			},

			{
				path: "/tourPackages",
				element: <TourPackages />,
				errorElement: <ErrorPage />,
			},
		],
	},
])

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={appRouter} />
	</StrictMode>
)
