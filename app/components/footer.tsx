const Footer = () => {
    return (
        <footer
            className="bg-gradient-to-b from-primary to-secondary p-5 text-center text-light flex items-center justify-center">
            <p className="mr-4">
                copyright &copy; {new Date().getFullYear()} - powered by |
            </p>
            <div className="flex items-center justify-center font-bold">
                <a href="https://harundogdu.com" rel="noreferrer" target="_blank"
                   className="hover:!text-brandYellow transition-colors">Harun Doğdu</a>
                <span className="mx-4">&</span>
                <a href="https://github.com/mduldul" rel="noreferrer" target="_blank"
                   className="hover:!text-brandYellow transition-colors">Mert Can Düldül</a>
            </div>
        </footer>
    );
};

export default Footer;
