import p1_4 from "../../assets/images/p1_4.png"



const Slide4 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <img src={p1_4} className="h-[73vh] w-[31vw]" alt="" />
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-between`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">The Research Findings</h1>
                    
                    <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">What do voters struggle with?</h2>
                </div>

                

                <div className="mt-8 w-[80%] font-gilroy h-full flex flex-col items-start justify-start">
                    <h1 className="text-2xl text-black/50">INSIGHT 1</h1>
                    <h1 className="font-extrabold text-5xl mt-6 ">65% of voters</h1>
                    <p className="text-2xl leading-10 mt-6">prioritize party over individual candidate qualifications, emphasizing the need for candidate-centric awareness.</p>
                    <p className="text-2xl mt-8 w-[110%] leading-relaxed"><span className="font-semibold underline underline-offset-2">IMPACT</span>: This leads to unqualified or underperforming candidates getting elected simply because they represent a major party.</p>
                </div>

                <p className="w-[110%] font-gilroy text-xl">I conducted extensive research to gain a detailed understanding of voter behavior and challenges.</p>
                
            </div>
        </div>
    )
}

export default Slide4;