import { Outlet } from "react-router-dom";

export default function Authentication() {
	return (
		<main className="w-screen mx-auto h-full section flex flex-1 flex-col justify-center items-center">
			<Outlet />
		</main>
	);
}
