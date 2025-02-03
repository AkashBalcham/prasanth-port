import { Link } from "react-router-dom";
import gray from "../../assets/images/gray.svg"

const ProjectCard = (props) => {

    console.log(props);

    return (
        <div className="w-[100%] h-[70vh] flex flex-row border-[1px] border-[rgba(255,255,255,0.2)] bg-[#000000] lg:mt-16">
            <div className="lg:pt-16 xlMid:pt-24 3xl:pt-28 py-12 flex flex-col items-start justify-between lg:px-12 xlMid:pl-20 3xl:pl-24 px-20 w-[50%]">
                <div className="flex flex-col justify-between items-start lg:h-[38%] lgMid:h-[35%] xl:h-[40%] xlMid:h-[35%] 2xl:h-[28%]">
                    <h1 className="font-duplet text-[#FFFFFF] lg:text-3xl lgMid:text-[250%] xl:text-5xl 2xl:text-[320%] 2xl:text-5xl 3xl:text-[350%] 3xl:tracking-wide font-semibold">{props.name}</h1>
                    {props.desc.split("\n").map((line, index) => (
        <h2 className="text-white/50 font-gilroy lg:mt-4 lgMid:mt-10 lg:leading-[0%] 3xl:mt-12 3xl:leading-[0%] 3xl:tracking-wide lgMid:text-[150%] xlMid:text-[180%] 2xl:text-[180%] 3xl:text-[210%]" key={index}>
          {line}
          <br />
        </h2>
      ))}
                    {/* <h2 className="w-[70%] lg:w-[90%] text-white/50 font-gilroy lg:text-xl xl:text-3xl 2xl:text-3xl tracking-wide">{props.desc}</h2> */}
                </div>

                <Link to={`${props.link}`} target="_blank">
                    <button className="border-[1px] border-[rgba(255,255,255,0.2)] bg-black px-6 py-4 lg:px-6 lgMid:px-8 lgMid:py-4 xl:py-6 3xl:px-8 3xl:py-6 text-white lg:text-[100%] lgMid:text-[110%] xl:text-[125%] xlMid:text-[145%] 2xl:text-[157%] font-gilroy font-extralight">
                        View Case Study
                    </button>
                </Link>
            </div>
            {
                props.image ? (
                    <img src={props.image ? props.image : gray} className={`h-full w-[50%]`} alt="" />
                ) : (
                    <div className="w-[50%] bg-[#171717]"></div>
                )
            }
            
        </div>
    )
}

export default ProjectCard;