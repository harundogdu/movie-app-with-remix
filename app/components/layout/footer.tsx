import { AiOutlineGithub } from "react-icons/ai";
import { NavLink } from "remix";
import Logo from "~/assets/logo.png";

const Footer = () => {
    return (
        <footer className="text-gray-600 px-5 py-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <NavLink to="/" className="w-48 relative sm:mr-auto">
                <img src={Logo} alt="Sidebar" className="w-full" />
                <small className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs dark:text-gray-100 font-semibold text-primary">
                    To The Best
                </small>
            </NavLink>
            <div className="flex items-center">
                <p className="mr-4"> copyright &copy; {new Date().getFullYear()}</p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a
                        href="https://github.com/harundogdu"
                        target="_blank"
                        rel="noreferrer"
                        title="Harun Doğdu"
                    >
                        <AiOutlineGithub
                            className="text-gray-600 hover:text-gray-300 transition-colors mx-1"
                            size="2em"
                        />
                    </a>
                    <a
                        href="https://github.com/mduldul"
                        target="_blank"
                        rel="noreferrer"
                        title="Mert Can Düldül"
                    >
                        <AiOutlineGithub
                            className="text-gray-600 hover:text-gray-300 transition-colors mx-1"
                            size="2em"
                        />
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
