import Routes from "./Routes/index.routes";

function App() {
	return (
		<section className="min-h-screen w-screen flex flex-col">
			<header className="w-full py-4 shadow-sm section">
				<nav className="flex justify-between items-center">
					<h1 className="text-xl font-thin">Project Manager</h1>
				</nav>
			</header>
			<Routes />
		</section>
	);
}

export default App;
