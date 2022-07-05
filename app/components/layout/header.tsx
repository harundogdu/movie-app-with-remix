import React from "react";
import { Form, useSubmit } from "remix";
import { BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

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

	const handleSidebarVisibleState = () => {
		document.querySelector("#sidebar")?.classList.toggle("hidden");
		document.querySelector("#sidebar")?.classList.toggle("flex");
	}

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
		<header className="bg-gradient-to-b dark:from-primary dark:to-secondary px-6 py-2 text-center flex items-center justify-between">

			<button className="lg:hidden mr-4 woutline-none" onClick={handleSidebarVisibleState}>
				<GiHamburgerMenu size={24} className={`${darkMode ? "text-brandYellow" : "text-primary"}`} />
			</button>

			<div className="flex justify-center items-center w-full">
				<div className="order-2  ml-4">
					<button className="outline-none" onClick={toggleTheme}>
						<BsFillMoonFill
							size={24}
							className={`${darkMode ? "text-brandYellow" : "text-primary"}`}
						/>
					</button>
				</div>

				<Form className="flex flex-1 order-1" onSubmit={handleSearchQuerySubmit}>
					<input
						type="text"
						placeholder="Search movie!"
						className="dark:bg-white bg-gray-50 border-gray-800  focus:shadow-outline border dark:border-gray-300  py-2 px-4 block appearance-none leading-normal w-full md:w-1/3 md:ml-auto md:focus:w-1/2 transition-all duration-300 outline-none dark:text-gray-400 text-primary rounded-md"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</Form>
			</div>
		</header>
	);
};

export default Header;
