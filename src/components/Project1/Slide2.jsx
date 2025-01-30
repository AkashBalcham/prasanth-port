import p1_2 from "../../assets/images/p1_2.png"



const Slide2 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <img src={p1_2} className="h-[73vh] w-[31vw]" alt="" />
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-between`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">The Inspiration</h1>
                    
                    <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">2024 Elections</h2>
                </div>

                

                <div className="mt-24 w-[80%] font-gilroy h-full flex flex-col items-start justify-start">
                    <p className="text-[28px] w-[110%] leading-10 mb-4">In the 2024 Indian General Election, <br/> 
                        <span className="font-semibold">46% of elected MPs</span> declared criminal 
                        cases against them. 
                    </p>
                    <p className="text-[28px] leading-10"><span className="font-semibold text-red-600">31% facing serious charges</span> such as 
                            murder, attempted murder, or crimes 
                            against women. 
                    </p>
                </div>
                
                <div className="font-gilroy text-black/50 text-xl">(Source: Association for Democratic Reforms)</div>
            </div>
        </div>
    )
}

export default Slide2;