import {Genre, ProductionCompany, ProductionCountry, SpokenLanguage} from "~/types/movies";

interface IMovieDetailItemProps {
    title: string,
    text?: string | number,
    array?: Genre[] | ProductionCompany[] | ProductionCountry[] | SpokenLanguage[],
}

export default function MovieDetailItem({title, text = "", array}: IMovieDetailItemProps) {
    return (
        <div>
            <span className="font-semibold">{title}</span>
            {
                text ?
                    <>
                        <p className="text-sm">{text}</p>
                    </>
                    :
                    <>
                        {array && <p className="text-sm w-5/6">{array.map(item => item.name).join(", ")}</p>}
                    </>
            }
        </div>
    );
}