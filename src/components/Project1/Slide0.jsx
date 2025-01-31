import p1_0 from "../../assets/images/p1_0.png"



const Slide0 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-col items-center justify-start">
            <div className="flex flex-col items-center">
                <h1 className="font-duplet text-[#212880] lg:text-5xl lgMid:text-5xl xl:text-6xl 2xl:text-7xl">Bharat-Vote</h1>
                <h2 className="font-canela italic lg:text-xl xl:text-2xl 2xl:text-3xl text-3xl tracking-wide mt-4">Help Voting Informed & Accessible.</h2>
            </div>
            <img src={p1_0} className="pb-24 z-100 lg:h-[77vh] lg:w-[40vw] xl:w-[38vw] xl:h-[75vh] xlMid:w-[35vw] 2xl:w-[33vw] 2xl:h-[73vh] 3xl:w-[30vw] 4xl:h-[75vh] h-[73.7vh]" alt="" />
            
        </div>
    )
}

export default Slide0;