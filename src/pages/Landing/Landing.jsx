import Navbar from "../../components/Navbar/Navbar";
import { PiCopyFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import links from '../../data/links';
import projects from "../../data/projects"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import aboutMeImages from "../../data/aboutMeImages";

import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import "bootstrap/dist/css/bootstrap.min.css";

import about from "../../assets/images/f1_1.jpeg"

const Landing = () => {

    const { emailLink, bharatVoteLink } = { links }

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
                
                <div className="flex w-[20%] lg:w-[28%] lgMid:w-[27%] xl:w-[28%] xlMid:w-[27%] 2xl:w-[26.5%] 3xl:w-[25%] 4xl:w-[23%] items-center justify-between">
                    <button className="bg-black lg:px-4 lgMid:px-4 2xl:px-7 2xl:py-5 lg:py-2 lgMid:py-3 xl:px-6 xl:py-3 px-6 py-4 text-white text-xl lg:text-[100%] lgMid:text-[110%] xl:text-[123%] xlMid:text-[130%] 2xl:text-[145%] font-gilroy font-extralight">
                        Get in touch
                    </button>
                    {!copied ? (
                            <button className="font-gilroy font-extralight lg:px-4 lg:py-2 lgMid:py-3 xl:px-6 px-6 py-4 text-xl lg:text-[100%] lgMid:text-[110%] xl:text-[123%] xlMid:text-[130%] 2xl:text-[145%] text-center w-[53%]" onClick={handleCopy}>
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
                <HashLink className="no-underline" smooth to={`#work`}>
                    <h1 className="text-black no-underline text-2xl font-gilroy word-spacing-md">SCROLL DOWN <IoIosArrowDown className="text-xl inline" /></h1>
                </HashLink>
            </div>


            <div id="work" className="w-full bg-[#000000] text-[#FFFFFF] flex flex-col lg:px-20 4xl:px-32 items-center pt-20 lg:pb-72 xl:pb-72 2xl:pb-40 ">
                <h1 lassName="text-center w-full flex justify-center mb-20"><span className="tracking-normal font-canelaIt text-7xl lg:text-5xl xl:text-[180%] 3xl:text-[350%] 4xl:text-7xl mr-2">Selected </span> <span className="ml-2 font-gilroy text-7xl lg:text-5xl xl:text-[180%] 3xl:text-[350%] 4xl:text-7xl font-semibold"> Work</span></h1>
                <div className="w-[100%] flex flex-col mt16">
                    {projects.map((project) => {
                        return (
                            <ProjectCard 
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                image={project.image}
                                desc={project.desc}
                                link={project.link}
                            />
                        )
                    })}
                </div>
            </div>

            <section id="about" className="lg:pt-16 lg:px-20 2xl:px-24 xl:pt-16 xlMid:pt-20 font-canelaIt xlMid:px-20 4xl:px-32 pb-12">
                    <h1 className="font-canelaIt text-7xl lg:text-5xl xl:text-[320%] 2xl:text-[350%] 3xl:text-[370%] 4xl:text-7xl ">About Me</h1>
                    <div className="flex flex-row justify-between items-start w-full lg:mt-10 3xl:mt-16">
                        <div className="font-gilroy flex flex-col items-start justify-start w-[55%]">
                            <p className="leading-9 xlMid:leading-[160%] text-7xl lg:text-[117%] xl:text-[140%] xlMid:text-[150%] 2xl:text-[160%] 3xl:text-[185%] 4xl:text-[195%] ">Hey, I’m Prasanth Rajan —a designer, problem solver, and <br /> an all-around curious mind. I love figuring things out,<br /> I’ve always been drawn to how things work—whether it’s <br />digital products, everyday interactions, or even the <br />strategy behind a football match.</p>

                            <p className="leading-9 lg:mt-8 lgMid:mt-4 xlMid:mt-8 xlMid:leading-[160%] lg:text-[117%] xl:text-[140%] xlMid:text-[150%] 2xl:text-[160%] 3xl:text-[185%] 4xl:text-[195%]">Speaking of which apart from work, football and music <br /> are two things that I enjoy doing. When I’m not<br /> designing, you’ll probably find me playing football, trying<br /> different food, exploring new ideas, going to the gym or<br /> simply enjoying good conversations. I believe in keeping<br /> things simple yet effective, and that applies to everything<br /> from my design work to the way I approach life.<br /> Always up for a good chat, so feel free to reach out.</p>

                        </div>

                        <div className="w-[40%]">
                            <Carousel className="w-full">
                                {aboutMeImages.map((image) => {
                                    return (
                                        <Carousel.Item className="w-full">
                                            <img className="ml-auto mr-auto xl:w-[28vw] xlMid:w-[29vw] 2xl:w-[29vw] w-[27vw] h-[73vh]" src={image} alt="CarouselImage" />
                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                        </div>

                    </div>
            </section>
        </div>
    )
}

export default Landing;