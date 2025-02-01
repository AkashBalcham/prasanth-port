import p1_4 from "../../assets/images/p1_4.png"



const Slide4 = () => {
    return (
        <div className="w-full flex lg:pl-20 2xl:pl-32 4xl:pl-40 pl-64 lg:pr-4 xlMid:pr-4 pr-40 lg:pt-16 xlMid:pt-20 4xl:pt-28 pt-24 flex-row justify-start">
            <img src={p1_4} className="h-[73vh] w-[31vw] lg:w-[38vw]" alt="" />
            <div className={`lg:ml-12 xlMid:ml-20 4xl:ml-28 ml-28 flex flex-col items-start justify-between`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl lg:text-4xl lgMid:text-[280%] xl:text-5xl  2xl:text-[300%] italic font-semibold tracking-wide 4xl:text-6xl">The Research Findings</h1>
                    
                    <h2 className="font-duplet mt-2 lg:mt-1 xlMid:mt-4 tracking-tight font-bold lg:text-3xl lgMid:text-[210%] text-4xl xl:text-4xl  2xl:text-[270%] 3xl:text-[280%] 4xl:text-[290%] text-[#212880]">What do voters struggle with?</h2>
                </div>

                

                <div className="lg:mt-8 lgMid:mt-10 xl:mt-12 3xl:mt-14  mt-8 font-gilroy h-full flex flex-col items-start justify-start">
                    <h1 className="lg:text-[120%] lgMid:text-[130%] xl:text-[140%] xlMid:text-[150%] 2xl:text-[165%] 3xl:text-[170%] text-2xl text-black/50">INSIGHT 1</h1>
                    <h1 className="font-extrabold lg:text-[220%] lgMid:text-[230%] xl:text-[250%] xlMid:text-[260%] 2xl:text-[300%] 3xl:text-[320%] text-5xl lg:mt-2 lgMid:mt-3 xl:mt-6 mt-6">65% of voters</h1>
                    <p className="lg:text-[125%] lgMid:text-[140%] xl:text-[146%] xlMid:text-[150%] 2xl:text-[175%] 3xl:text-[190%] text-2xl lg:leading-9 lgMid:leading-10 xl:leading-[180%] 3xl:leading-[187%] leading-10 lg:mt-2 xl:mt-4 3xl:mt-6 mt-6">prioritize party over individual candidate<br /> qualifications, emphasizing the need for<br /> candidate-centric awareness.</p>
                    <p className="lg:text-[125%] lgMid:text-[140%] xl:text-[146%] xlMid:text-[150%] 2xl:text-[175%] 3xl:text-[190%] text-2xl lg:mt-4 xlMid:mt-6 mt-8 w-[110%] lg:leading-9 lgMid:leading-10 xl:leading-[180%] 3xl:leading-[187%] leading-relaxed"><span className="font-semibold underline underline-offset-2">IMPACT</span>: This leads to unqualified or <br /> underperforming candidates getting elected <br /> simply because they represent a major party.</p>
                </div>

                <p className="w-[110%] font-gilroy lg:text-[80%] lgMid:text-[100%] xl:text-[105%] xlMid:text-[110%] 2xl:text-[128%] 3xl:text-[135%] xlMid:mb-2 lg:leading-[160%] xlMid:leading-[170%] text-xl">I conducted extensive research to gain a detailed understanding of<br /> voter behavior and challenges.</p>
                
            </div>
        </div>
    )
}

export default Slide4;