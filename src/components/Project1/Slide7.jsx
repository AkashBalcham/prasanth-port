import p1_7 from "../../assets/images/p1_7.png"



const Slide7 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <img src={p1_7} className="h-[73vh] w-[31vw]" alt="" />
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-center`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">The Solution</h1>
                    
                    <h2 className="font-duplet mt-4 tracking-tight font-bold text-6xl text-[#212880]">Bharat-Vote</h2>

                    <p className="mt-4 font-gilroy text-2xl text-black/50">Help making Voting Informed & Accessible.</p>
                </div>

                

                

                
                
            </div>
        </div>
    )
}

export default Slide7;