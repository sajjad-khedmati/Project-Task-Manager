import { Button, Input, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";

// ? ICONS
import { AiOutlineRollback } from "react-icons/ai";
import { FaCreativeCommonsBy } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Register() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validate: (values) => {
			const errors = {};

			if (values.username === "") {
				errors.username = "required";
			}

			if (values.email === "") {
				errors.email = "required";
			}

			if (values.username && values.email && values.password === "") {
				errors.password = "required";
			}

			if (values.password.length < 6 && values.password.length !== 0) {
				errors.password = "password must be above 6 character";
			}

			if (
				values.username &&
				values.email &&
				values.password !== values.confirmPassword &&
				values.confirmPassword !== ""
			) {
				errors.confirmPassword = "password are not equal";
			}

			return errors;
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="px-4 py-2 w-full md:w-[60%] lg:w-[50%]"
		>
			<FaCreativeCommonsBy className="mb-8 text-4xl text-center mx-auto" />
			<h3 className="text-center lg:text-2xl text-xl mt-3 mb-6 uppercase">
				Register
			</h3>
			<div className="flex flex-col gap-4">
				<div className="w-full flex flex-col xl:flex-row gap-4 md:gap-2">
					<Input label="FirstName" {...formik.getFieldProps("firstName")} />
					<Input label="LastName" {...formik.getFieldProps("lastName")} />
				</div>
				<div className="w-full grid lg:grid-cols-2 gap-4 md:gap-2">
					<div>
						<Input
							label="User Name"
							{...formik.getFieldProps("username")}
							error={formik.errors.username && formik.touched.username}
						/>
						{formik.errors.username && formik.touched.username ? (
							<span className="text-xs text-red-500">
								{formik.errors.username}
							</span>
						) : null}
					</div>
					<div>
						<Input
							label="email"
							{...formik.getFieldProps("email")}
							error={formik.errors.email && formik.touched.email}
						/>
						{formik.errors.email && formik.touched.email ? (
							<span className="text-xs text-red-500">
								{formik.errors.email}
							</span>
						) : null}
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-2">
					<div>
						<Input
							label="password"
							type="password"
							{...formik.getFieldProps("password")}
							error={formik.errors.password && formik.touched.password}
						/>
						{formik.errors.password && formik.touched.password ? (
							<span className="text-xs text-red-500">
								{formik.errors.password}
							</span>
						) : null}
					</div>
					<div>
						<Input
							label="CcnfirmPassword"
							type="password"
							{...formik.getFieldProps("confirmPassword")}
							error={
								formik.errors.confirmPassword && formik.touched.confirmPassword
							}
						/>
						{formik.errors.confirmPassword && formik.touched.confirmPassword ? (
							<span className="text-xs text-red-500">
								{formik.errors.confirmPassword}
							</span>
						) : null}
					</div>
				</div>
				<Link to="/auth/login">
					<Typography
						variant="small"
						className="text-gray-700 hover:text-light-blue-500 default__transition flex items-center gap-2"
					>
					    <AiOutlineRollback /> back to Login
					</Typography>
				</Link>

				<Button
					type="submit"
					variant="filled"
					color="light-blue"
					fullWidth
					className="my-4"
				>
					Register
				</Button>
			</div>
		</form>
	);
}
