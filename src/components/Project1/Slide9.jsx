import vid from "../../assets/images/Onboarding.mp4"



const Slide9 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <div className="h-[75vh] bg-[#F9FAFB] py-8 w-[31vw]">
                <video autoPlay muted loop className="ml-auto mr-auto shadow-2xl h-[100%] " src={vid} alt="" />
            </div>
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-start`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">The Onboarding</h1>
                    
                    <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">Welcome Aboard!</h2>
                </div>

                <div className="flex-col justify-around mt-10">
                    <div className="">
                        <p className="text-2xl font-gilroy text-black/50">STEP 1 - VOTING EXPERIENCE</p>
                        <p className="w-[95%] mt-6 text-2xl font-gilroy leading-10">Knowing a voter's experience tailors the guidance for <span className="font-semibold">first-timers</span>, quick access for <span>returning voters.</span></p>
                    </div>

                    <div className="mt-8">
                        <p className="text-2xl font-gilroy text-black/50">STEP 2 - INTERESTS AND PRIORTIES</p>
                        <p className="mt-6 text-2xl font-gilroy leading-10">Voters can select the <span className="font-semibold">issues that matter most</span> to them (e.g., education, healthcare, employment).</p>
                    </div>

                    <div className="mt-8">
                        <p className=" text-2xl font-gilroy text-black/50">STEP 3 - PINCODE</p>
                        <p className="w-[96%] mt-6 text-2xl font-gilroy leading-10">Since one PINCODE can have more constituencies, this helps <span className="font-semibold">accurately match users with their correct candidates.</span></p>
                    </div>

                </div>

                

                
                
            </div>
        </div>
    )
}

export default Slide9;