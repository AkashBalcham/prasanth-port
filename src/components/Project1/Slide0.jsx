import p1_0 from "../../assets/images/p1_0.png"



const Slide0 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-col items-center justify-start">
            <div className="flex flex-col items-center">
                <h1 className="font-duplet text-[#212880] text-7xl">Bharat-Vote</h1>
                <h2 className="font-canela italic text-3xl tracking-wide mt-4">Help Voting Informed & Accessible.</h2>
            </div>
            <img src={p1_0} className="pb-24 z-100 h-[73.7vh] w-[31vw]" alt="" />
            
        </div>
    )
}

export default Slide0;