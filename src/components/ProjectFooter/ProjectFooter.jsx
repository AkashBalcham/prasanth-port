import ProgressBar from "../ProgressBar/ProgressBar";
import closeButton from '../../assets/icons/close.svg'
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import rightArrow from "../../assets/images/rightArrow.svg"
import leftArrow from "../../assets/images/leftArrow.svg"
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <div className='z-100 pt-8 lg:h-[8%] pl-8 left-0 right-0 pr-8 flex flex-row justify-between fixed bottom-8 border-t border-black border-opacity-20'>
            <div className="lg:w-[85%] lgMid:w-[85%] xl:w-[87%] xlMid:w-[87%] 2xl:w-[88%] 3xl:w-[90%] w-[90%] justify-between flex items-center">
                <Link to={`/`}>
                    <button>
                        <img className="lg:w-[80%]" src={closeButton} alt="" />
                    </button>
                </Link>
                <ProgressBar fill={props.fill} />

            </div>
            <div className="flex lg:w-[13%] lgMid:w-[12%] xl:w-[11%] xlMid:w-[10%] 2xl:w-[9%] 3xl:w-[8%] 4xl:w-[9%] justify-around">
                <button className="font-light lg:px-2 lg:h-[140%] lgMid:px-2 xl:px-2 xlMid:px-2 xlMid:h-[145%] 2xl:px-2 2xl:h-[150%] 3xl:px-2 4xl:h-[130%] 4xl:px-3 border-black border-opacity-10 border-[2px]" onClick={() => {props.handleSlideChange(false)}}><img className="ml-auto mr-auto lg:w-[70%] lgMid:w-[70%] 2xl:w-[80%] 3xl:w-[90%]" src={leftArrow} /></button>
                <button className="font-light lg:px-2 lg:h-[140%] lgMid:px-2 xl:px-2 xlMid:px-2 xlMid:h-[145%] 2xl:px-2 2xl:h-[150%] 3xl:px-2 4xl:h-[130%] 4xl:px-3 border-black border-opacity-10 border-[2px]" onClick={() => {props.handleSlideChange(true)}}> <img className="ml-auto mr-auto lg:w-[70%] lgMid:w-[70%] 2xl:w-[80%] 3xl:w-[90%]" src={rightArrow} /></button>
                {/* <img className="w-[20%] px-2 border-black border-opacity-10 border-[2px]" src={leftArrow} alt="" />
                <img className="w-[20%] px-2 border-black border-opacity-10 border-[2px]" src={rightArrow} alt="" /> */}
            </div>
        </div>
    )
}

export default Footer;