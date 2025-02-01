import p1_1 from "../../assets/images/p1_1.png"



const Slide1 = () => {
    return (
        <div className="w-full flex pl-64 lg:pl-20 pr-40 pt-24 lg:pt-16 2xl:pl-28 4xl:pl-36 flex-row justify-start">
            <img src={p1_1} className="h-[73vh] w-[31vw] lg:h-[70vh] lg:w-[40vw] lgMid:w-[37vw] lgMid:h-[73vh] 2xl:w-[35vw] 4xl:h-[75vh]" alt="" />
            <div className={`w-[39%] ml-28 lg:ml-12 lgMid:ml-16 xl:ml-24 flex flex-col items-start`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl lg:text-4xl lgMid:text-[280%] xl:text-5xl 2xl:text-[300%] italic font-semibold tracking-wide 4xl:text-6xl">The Inspiration</h1>
                    
                    <h2 className="font-duplet mt-2 lg:mt-1 tracking-tight font-bold lg:text-3xl lgMid:text-[210%] text-4xl xl:text-4xl  2xl:text-[270%] 4xl:text-[290%] text-[#212880]">2024 Elections</h2>
                </div>

                <div className="lg:mt-6 font-gilroy h-full flex flex-col items-start justify-around">
                    <p className="text-[28px] lg:text-[90%] lg:leading-[175%] lgMid:text-[114%] lgMid:leading-[190%] xl:text-[130%] xl:leading-[190%] xlMid:text-[140%] xlMid:leading-[190%] 2xl:text-[150%] 2xl:leading-10 3xl:text-[175%] 3xl:leading-relaxed 4xl:text-[200%]"
                    
                    >During the 2024 elections, 
                        I stood in line at <br/> the polling booth, overhearing people ask, <br/>
                        <span className="font-semibold">“Do you know who the candidates are? <br/> What have they done?” </span>
                        Another replied, “I <br/>only know the party names; 
                        I have no idea <br/> about the candidates themselves?”.
                    </p>
                    <p className="-mt-20 lg:-mt-4 lgMid:-mt-2 xl:mt-0 lg:text-[90%] leading-[175%] lgMid:text-[114%] lgMid:leading-[190%] xl:text-[130%] xl:leading-[190%] xlMid:text-[140%] 2xl:text-[150%] 2xl:leading-10 3xl:text-[175%] 3xl:leading-relaxed 4xl:text-[200%]">It struck me because I was just as <br/>uninformed, 
                        scrambling for details <span className="font-semibold">the day<br/> before but finding 
                        scattered, unhelpful<br/> information.</span>
                    </p>
                </div>

                
                
                
            </div>
        </div>
    )
}

export default Slide1;