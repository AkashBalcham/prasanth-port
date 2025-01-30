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
        <div id="page-top" className="px-16 relative box-border">
            <Navbar id="top"/>
            <section className="h-[100vh] flex flex-col items-center justify-center -mt-24">
                <h1 className="items-center font-gilroy font-normal text-center text-6xl w-[25%] tracking-tight mb-12">
                    <span>Problem-solver</span><span className="font-duplet">,</span> storyteller<span className="font-canela">,</span> <span className="font-canela -pb-8">designer.</span>
                </h1>
                <h2 className="font-gilroy text-center text-2xl w-[23%] mb-10">
                    My name is Prasanth Rajan and I'm currently trying to avoid sugar.
                </h2>
                
                <div className="flex w-[20%] items-center justify-between">
                    <button className="bg-black px-6 py-4 text-white text-xl font-gilroy font-extralight">
                        Get in touch
                    </button>
                    {!copied ? (
                            <button className="text-xl font-gilroy font-extralight px-6 py-4 text-center w-[53%]" onClick={handleCopy}>
                                <PiCopyFill className="inline mr-2" /> Copy email
                            </button>
                        ) : (
                            <button className="font-gilroy font-extralight px-6 py-4 text-lg text-center w-[50%]">
                                <IoMdCheckmark className="inline text-lg mr-2" /> Copied
                            </button>
                        )}
                    {/* <button className="px-4 py-2 text-lg">
                        <PiCopyFill className="inline"/> Copy email
                    </button> */}
                </div>
            </section>
            <div className="w-[full] flex items-center justify-center bottom-0 -mt-8 text-lg pb-8">
                <HashLink smooth to={`#gong-box`}>
                    <h1 className="text-2xl font-gilroy word-spacing-md">SCROLL DOWN <IoIosArrowDown className="text-xl inline" /></h1>
                </HashLink>
            </div>


            <div id="work" className="bg-[#FAFAFA] flex flex-col items-center pt-20 px-20">
                <h1 className="text-center w-full flex justify-center mb-20"><span className="font-canela italic text-7xl mr-2">Selected </span> <span className="ml-2 font-gilroy text-7xl font-semibold"> Work</span></h1>
                <div className="flex flex-col w-[80%]">
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