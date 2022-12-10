// ? REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";
import Authentication from "../Pages/Authentication";

//? PAGES
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

export default function IndexRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/auth" element={<Authentication />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
}
