import { Link } from "react-router-dom";

const ProjectCard = (props) => {

    console.log(props);

    return (
        <div className="w-[100%] lg:w-[110%] flex flex-row bg-[#FFF]">
            <img src={props.image} className="h-full w-[50%]" alt="" />
            <div className="py-12 flex flex-col items-start justify-between px-20">
                <div className="flex flex-col justify-between items-start lg:h-[38%] lgMid:h-[35%] xl:h-[40%] xlMid:h-[35%] 2xl:h-[28%]">
                    <h1 className="font-duplet text-[#212880] lg:text-3xl xl:text-5xl 2xl:text-5xl font-semibold">{props.name}</h1>
                    <h2 className="w-[70%] lg:w-[90%] font-canela italic lg:text-xl xl:text-3xl 2xl:text-3xl tracking-wide">{props.desc}</h2>
                </div>

                <Link to={`/projects/${props.id}`}>
                    <button className="bg-black px-6 py-4 lg:px-4 text-white lg:text-lg xl:text-xl 2xl:text-2xl font-gilroy font-extralight">
                        View Case Study
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;