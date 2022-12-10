import { Link } from "react-router-dom";
import { Button, Input, Typography } from "@material-tailwind/react";

import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { CgPassword } from "react-icons/cg";
import { MdOutlineConfirmationNumber } from "react-icons/md";

// formik
import { useFormik } from "formik";

export default function Authentication() {
	const formik = useFormik({
		initialValues: {
			username: "",
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
			if (values.password === "" && values.username !== "") {
				errors.password = "required";
			}
			if (
				values.password !== values.confirmPassword &&
				values.password !== ""
			) {
				errors.confirmPassword = "password are not equal";
			}
			return errors;
		},
	});

	return (
		<main className="w-screen md:w-[60%] lg:w-[50%] 2xl:w-[40%] mx-auto h-full section flex flex-1 flex-col justify-center items-center">
			<form onSubmit={formik.handleSubmit} className="px-4 py-2 w-full">
				<AiOutlineLogin className="mb-8 text-4xl text-center mx-auto" />
				<h3 className="text-center lg:text-2xl text-xl mt-3 mb-6 uppercase">
					Login
				</h3>
				<div className="flex flex-col gap-4">
					<div>
						<Input
							{...formik.getFieldProps("username")}
							label="Username"
							autoComplete="off"
							size="lg"
							icon={<AiOutlineUser />}
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
							{...formik.getFieldProps("password")}
							label="password"
							type="password"
							autoComplete="off"
							size="lg"
							icon={<CgPassword />}
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
							{...formik.getFieldProps("confirmPassword")}
							label="confirm password"
							autoComplete="off"
							size="lg"
							type="password"
							icon={<MdOutlineConfirmationNumber />}
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

					<Link to="/forget-password">
						<Typography
							variant="small"
							className="text-gray-700 hover:text-light-blue-500 default__transition"
						>
							forget password?
						</Typography>
					</Link>

					<Button
						type="submit"
						variant="filled"
						color="light-blue"
						fullWidth
						className="my-4"
					>
						Login
					</Button>
				</div>
			</form>
		</main>
	);
}
