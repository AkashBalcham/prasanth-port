import p1_1 from "../../assets/images/p1_1.png"



const Slide1 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <img src={p1_1} className="h-[73vh] w-[31vw]" alt="" />
            <div className={`w-[39%] ml-28 flex flex-col items-start`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">The Inspiration</h1>
                    
                    <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">2024 Elections</h2>
                </div>

                <div className="-mt-4 w-[102%] font-gilroy h-full flex flex-col items-start justify-around">
                    <p className="text-[28px] leading-relaxed">During the 2024 elections, 
                        I stood in line at the polling booth, overhearing people ask, 
                        <span className="font-semibold">“Do you know who the candidates are? What have they done?” </span>
                        Another replied,  “I only know the party names; 
                        I have no idea about the candidates themselves?”.
                    </p>
                    <p className="-mt-20 text-[28px] leading-relaxed">It struck me because I was just as uninformed, 
                        scrambling for details <span className="font-semibold">the day before but finding 
                        scattered, unhelpful information.</span>
                    </p>
                </div>

                
                
                
            </div>
        </div>
    )
}

export default Slide1;