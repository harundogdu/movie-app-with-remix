import {NavLink} from "remix";

function HeroSection({img, title, overview, id}: { img: string, title: string, overview: string, id: number }) {

    return (
        <NavLink
            to={`/movie/${id}`}
            className="w-full h-96 rounded-lg relative px-8 group"
            >
            <img src={img} alt="Hero Section" className="w-full h-full object-cover shadow rounded"/>
            <div className="bg-black opacity-75 rounded-t-lg absolute bottom-0 right-8">
                <div className="w-full h-full flex flex-col items-end justify-end p-4">
                    <h1 className="text-white text-center text-2xl font-bold">{title}</h1>
                </div>
            </div>
            <div className="bg-black opacity-75 rounded-tr-md absolute bottom-0 left-8 w-1/2 hidden lg:block">
                <div className="w-full flex flex-col items-end justify-end p-6">
                    <p className="text-white text-center text-sm">{overview}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default HeroSection;