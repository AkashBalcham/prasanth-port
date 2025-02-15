import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import linkedin from '../../assets/images/linkedin.svg';
import { GoArrowUpRight } from "react-icons/go";
import links from '../../data/links'
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

    const { linkedinLink, resumeLink } = links;

    return (
        <div className="lg:pl-12 lg:pr-4 lgMid:pl-16 lgMid:pr-8 xl:pr-6 px-16 w-full flex justify-between items-center top-0 pt-6">
            <Link to={`/`}><img className="lgMid:w-[80%] 4xl:w-[100%]" src={logo} alt="Logo" /></Link>
            <div className="text-black flex flex-row items-center justify-between lg:ml-24 lg:w-[17%] xl:w-[17%] xlMid:w-[16%] 2xl:w-[15%] 3xl:w-[15%] 4xl:w-[13.3%]">
                <button className="lg:text-[105%] lgMid:text-[130%] xl:text-[135%] 2xl:text-[145%] 3xl:text-[157%] 4xl:text-[160%] font-gilroy px-4 py-2 "><HashLink className="text-black no-underline" smooth to={'#work'}>
                    Work
                </HashLink></button>
                <button className="lg:text-[105%] lgMid:text-[130%] xl:text-[135%] 2xl:text-[145%] 3xl:text-[157%] 4xl:text-[160%] font-gilroy px-4 py-2 "><HashLink smooth to={`#about-me`}></HashLink>About</button>
            </div>
            
            <div className="lg:w-[18%] xl:w-[17%] xlMid:w-[14.9%] 2xl:w-[14%] 3xl:w-[14%] 4xl:w-[12%] flex flex-row items-center justify-between">
                <Link to={resumeLink} target="_blank">
                    <button className="text-black lg:text-[105%] lgMid:text-[130%] xl:text-[135%] 2xl:text-[145%] 3xl:text-[157%] 4xl:text-[160%] font-gilroy px-6 py-2 ">Resume</button>
                </Link>
                <Link to={linkedinLink} target="_blank"><img className="lg:w-[75%] 2xl:w-[90%]" src={linkedin} alt="linkedin"/></Link>          {/* Change the link for the LinkedIn*/}
            </div>
        </div>
    )
}

export default Navbar;