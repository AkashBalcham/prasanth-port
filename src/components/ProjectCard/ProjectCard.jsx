import { Link } from "react-router-dom";

const ProjectCard = (props) => {

    console.log(props);

    return (
        <div className="w-full flex flex-row bg-[#FFF]">
            <img src={props.image} className="h-full w-[50%]" alt="" />
            <div className="py-12 flex flex-col items-start justify-between px-20">
                <div className="flex flex-col justify-between items-start h-[28%]">
                    <h1 className="font-duplet text-[#212880] text-5xl font-semibold">{props.name}</h1>
                    <h2 className="w-[70%] font-canela italic text-3xl tracking-wide">{props.desc}</h2>
                </div>

                <Link to={`/projects/${props.id}`}>
                    <button className="bg-black px-6 py-4 text-white text-xl font-gilroy font-extralight">
                        View Case Study
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;