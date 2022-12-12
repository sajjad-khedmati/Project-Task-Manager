// ? REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";

import AuthRoute from "./auth.routes";

//? PAGES
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

export default function IndexRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			{AuthRoute}
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
}
