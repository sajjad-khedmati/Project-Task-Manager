import { Route } from "react-router-dom";

// ? PAGES
import Authentication from "../Pages/Authentication";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const AuthRoute = [
	<Route path="/auth" element={<Authentication />}>
		<Route path="login" element={<Login />} />
		<Route path="register" element={<Register />} />
	</Route>,
];
export default AuthRoute;
