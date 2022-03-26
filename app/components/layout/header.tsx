import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { Form, useSubmit } from "remix";

const Header = () => {
	const submit = useSubmit();

	const [darkMode, setDarkMode] = React.useState(false);
	const [searchQuery, setSearchQuery] = React.useState("");

	const toggleTheme = () => {
		localStorage.setItem("dark", JSON.stringify(!darkMode));
		setDarkMode(!darkMode);
	};

	const handleSearchQuerySubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchQuery("");
		submit(null, { method: "get", action: `/search/${searchQuery}` });
	};

	React.useEffect(() => {
		const root = document.documentElement;

		if (darkMode) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

	}, [darkMode]);

	React.useEffect(() => {
		const localMode = JSON.parse(localStorage.getItem("dark") || "false");

		setDarkMode(localMode);
	}, []);

	return (
		<header className="bg-gradient-to-b dark:from-primary dark:to-secondary px-8 py-2 text-center flex items-center justify-between">
			<div>
				<button className="outline-none" onClick={toggleTheme}>
					<BsFillMoonFill
						size={24}
						className={`${darkMode ? "text-brandYellow" : "text-primary"}`}
					/>
				</button>
			</div>
			<Form className="flex flex-1 w-full" onSubmit={handleSearchQuerySubmit}>
				<input
					type="text"
					placeholder="Search movie!"
					className="dark:bg-white bg-gray-50 border-gray-800  focus:shadow-outline border dark:border-gray-300  py-2 px-4 block appearance-none leading-normal w-full md:w-1/3 md:ml-auto focus:w-1/2 transition-all duration-300 outline-none dark:text-gray-400 text-primary ml-4"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</Form>
		</header>
	);
};

export default Header;
