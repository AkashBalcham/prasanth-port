import Navbar from "../../components/Navbar/Navbar";
import { PiCopyFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import links from '../../data/links';
import projects from "../../data/projects"
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Landing = () => {

    const emailLink = { links }

    const [email, setEmail] = useState("user@example.com");
    const [copied, setCopied] = useState(false);
    const [prog, setProg] = useState(30);


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
        } catch (error) {
            console.error("Failed to copy text: ", error);
        }
    };

    const increaseProg = () => {
        console.log("Increaring progress...");
        let oldProg = prog;
        console.log("Old prog:", oldProg);
        oldProg += 20;
        console.log("New prog: ", oldProg);
        console.log("Increasing progress...");

        setProg((prevProg) => {
            const newProg = prevProg + 20;
            console.log("New prog: ", newProg);
            return newProg; // Return the updated value
        });

        console.log("Prog after setting:", prog);
    }


    return (
        <div id="page-top" className="relative box-border">
            <Navbar id="top"/>
            <section className="h-[100vh] flex flex-col items-center justify-center -mt-24">
                <h1 className="items-center font-gilroy font-normal text-center text-3xl  tracking-tight mb-12 lg:text-5xl xl:w-[30%] xl:text-[330%] xlMid:text-[350%] 2xl:text-[390%] 3xl:text-[400%] 4xl:text-[410%] 2xl:w-[30%]">
                    <span>Problem-solver</span><span className="font-duplet">,</span><br/> storyteller<span className="font-canela">,</span> <br/> <span className="font-canela tracking-normal -pb-8">designer.</span>
                </h1>
                <h2 className="font-gilroy text-center mb-10 lg:w-[33%] xl:text-[130%] xlMid:text-[130%] 2xl:text-2xl 4xl:text-[140%] w-[23%] lg:text-xl  xl:w-[32%] 2xl:w-[30%] 3xl:w-[27%]">
                    My name is Prasanth Rajan and <br/> I'm currently trying to avoid sugar.
                </h2>
                
                <div className="flex w-[20%] lg:w-[28%] lgMid:w-[27%] xl:w-[27%] xlMid:w-[27%] 2xl:w-[26.5%] 3xl:w-[25%] 4xl:w-[23%] items-center justify-between">
                    <button className="bg-black lg:px-4 lgMid:px-4 2xl:px-7 2xl:py-4 lg:py-2 lgMid:py-3 px-6 py-4 text-white text-xl lg:text-[100%] lgMid:text-[110%] xl:text-xl xlMid:text-2xl 2xl:text-[140%] font-gilroy font-extralight">
                        Get in touch
                    </button>
                    {!copied ? (
                            <button className="font-gilroy font-extralight lg:px-4 lg:py-2 lgMid:py-3 px-6 py-4 text-xl lg:text-[100%] lgMid:text-[110%] xl:text-xl xlMid:text-2xl 2xl:text-2xl text-center w-[53%]" onClick={handleCopy}>
                                <PiCopyFill className="inline mr-2" /> Copy email
                            </button>
                        ) : (
                            <button className="font-gilroy font-extralight px-6 py-4 text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-center w-[50%]">
                                <IoMdCheckmark className="inline text-lg mr-2" /> Copied
                            </button>
                        )}
                    {/* <button className="px-4 py-2 text-lg">
                        <PiCopyFill className="inline"/> Copy email
                    </button> */}
                </div>
            </section>
            <div className="w-[full] flex items-center justify-center bottom-0 -mt-8 text-lg pb-8">
                <HashLink smooth to={`#work`}>
                    <h1 className="text-2xl font-gilroy word-spacing-md">SCROLL DOWN <IoIosArrowDown className="text-xl inline" /></h1>
                </HashLink>
            </div>


            <div id="work" className="w-full bg-[#000000] text-[#FFFFFF] flex flex-col lg:px-20 4xl:px-32 px-0 items-center pt-20 lg:pb-72 xl:pb-72 2xl:pb-40 ">
                <h1 lassName="text-center w-full flex justify-center mb-20"><span className="tracking-wider font-canela italic text-7xl lg:text-5xl xl:text-[320%] 3xl:text-[350%] 4xl:text-7xl mr-2">Selected </span> <span className="ml-2 font-gilroy text-7xl lg:text-5xl xl:text-[320%] 3xl:text-[350%] 4xl:text-7xl font-semibold"> Work</span></h1>
                <div className="w-[100%] flex flex-col mt16">
                    {projects.map((project) => {
                        return (
                            <ProjectCard 
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                image={project.image}
                                desc={project.desc}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Landing;