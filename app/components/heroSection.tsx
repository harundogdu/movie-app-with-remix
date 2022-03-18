function HeroSection({img, title}: { img: string, title: string }) {

    return (
        <div className="w-full h-96 shadow-xl rounded-lg relative px-8">
            <img src={img} alt="Hero Section" className="w-full h-full object-cover shadow rounded"/>
            <div className="bg-black opacity-75 rounded-t-lg absolute bottom-0 right-8">
                <div className="w-full h-full flex flex-col items-end justify-end p-4">
                    <h1 className="text-white text-center text-2xl font-bold">{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;