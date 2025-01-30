import ProgressBar from "../ProgressBar/ProgressBar";
import closeButton from '../../assets/icons/close.svg'
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import rightArrow from "../../assets/images/rightArrow.svg"
import leftArrow from "../../assets/images/leftArrow.svg"
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <div className='z-100 pt-8 h-[10%] pl-8 left-0 right-0 pr-8 flex flex-row justify-between fixed bottom-8 border-t border-black border-opacity-20'>
            <div className="w-[90%] justify-between flex items-center">
                <Link to={`/`}>
                    <button>
                        <img src={closeButton} alt="" />
                    </button>
                </Link>
                <ProgressBar fill={props.fill} />

            </div>
            <div className="flex w-[8%] justify-around">
                <button className="font-light px-3 border-black border-opacity-10 border-[2px] text-5xl" onClick={() => {props.handleSlideChange(false)}}><img src={leftArrow} /></button>
                <button className="font-light px-3 border-black border-opacity-10 border-[2px] text-5xl" onClick={() => {props.handleSlideChange(true)}}> <img src={rightArrow} /></button>
                {/* <img className="w-[20%] px-2 border-black border-opacity-10 border-[2px]" src={leftArrow} alt="" />
                <img className="w-[20%] px-2 border-black border-opacity-10 border-[2px]" src={rightArrow} alt="" /> */}
            </div>
        </div>
    )
}

export default Footer;