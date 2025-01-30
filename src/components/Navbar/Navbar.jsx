import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg';
import linkedin from '../assets/images/linkedin.svg';
import { GoArrowUpRight } from "react-icons/go";
import links from '../../data/links'
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

    const { linkedinLink } = links;

    return (
        <div className="w-full flex justify-between items-center top-0 pt-6">
            <Link to={`/`}><img src={logo} alt="Logo" /></Link>
            <div className="flex flex-row items-center justify-between w-[21%]">
                <button className="text-xl font-gilroy px-4 py-2 border border-black border-opacity-20 transition-all duration-300 hover:bg-black hover:bg-opacity-10 hover:cursor-pointer"><HashLink smooth to={'#work'}>
                    Work
                </HashLink></button>
                <button className="text-xl font-gilroy px-4 py-2 border border-black border-opacity-20 transition-all duration-300 hover:bg-black hover:bg-opacity-10 hover:cursor-pointer">About</button>
                <button className="text-xl font-gilroy px-6 py-2 border border-black border-opacity-20 transition-all duration-300 hover:bg-black hover:bg-opacity-10 hover:cursor-pointer">Resume <GoArrowUpRight className="text-2xl inline" /></button>
            </div>
            
            <Link to={linkedinLink} target="_blank"><img src={linkedin} alt="linkedin"/></Link>          {/* Change the link for the LinkedIn*/}
        </div>
    )
}

export default Navbar;