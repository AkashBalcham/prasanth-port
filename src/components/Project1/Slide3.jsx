import p1_3 from "../../assets/images/p1_3.png"



const Slide3 = () => {
    return (
        <div className="w-full flex pl-64 lg:pl-20 lg:pt-16 lg:pr-0 lgMid:pr-0 3xl:pl-32 pr-40 xl:pt-20 2xl:pt-24 3xl:pt-24 4xl:pt-28 pt-24 flex-row justify-start">
            <img src={p1_3} className="h-[73vh] w-[31vw] lg:w-[38vw] xlMid:w-[40vw] " alt="" />
            <div className={` ml-28 lg:ml-12 xlMid:ml-16 2xl:ml-20 3xl:ml-16 4xl:ml-24 flex flex-col items-start justify-between`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl lg:text-4xl lgMid:text-[280%] xl:text-5xl 2xl:text-[350%] 3xl:text-[380%] italic font-semibold tracking-wide 4xl:text-6xl">The Problem</h1>
                    
                    <h2 className="font-duplet mt-2 lg:mt-1 3xl:mt-4 tracking-tight font-bold lg:text-3xl lgMid:text-[210%] text-4xl xl:text-4xl  2xl:text-[270%] 3xl:text-[280%] 4xl:text-[300%] text-[#212880]">The Voter's Struggle</h2>
                </div>

                

                <div className="lg:mt-10 xl:mt-14 3xl:mt-24 4xl:mt-20 mt-16 font-gilroy h-full flex flex-col items-start justify-start">
                    <h1 className="font-gilroy text-black/50 lg:text-[110%] lgMid:text-[120%] xl:text-[130%] xlMid:text-[145%] 2xl:text-[160%] 3xl:text-[165%] 4xl:text-[185%] text-2xl lg:mb-2 xlMid:mb-2 4xl:mb-4 mb-3">KEY CHALLENGES</h1>
                    <ul className="font-gilroy lg:text-[110%] lgMid:text-[130%] xl:text-[150%] xlMid:text-[170%] 2xl:text-[180%] 3xl:text-[187%] 4xl:text-[clamp(1rem,185%,1.7rem)]  text-2xl list-disc pl-8">
                        <li className="lg:mb-1 xl:mb-2 2xl:mb-1 mb-4 lg:leading-8 lgMid:leading-9 xl:leading-10 xlMid:leading-[160%] 2xl:leading-[170%] 3xl:leading-[170%] 4xl:leading-[175%] leading-10">Many voters know party symbols but not<br /> the candidates, <span className="font-semibold">leading to party-based<br /> voting over individual merit.</span></li>
                        <li className="lg:mb-1 xl:mb-2 2xl:mb-1 mb-4 lg:leading-8 lgMid:leading-9 xl:leading-10 xlMid:leading-[160%] 2xl:leading-[170%] 3xl:leading-[170%] 4xl:leading-[175%] leading-10">
                        Candidate details are scattered across<br /> sources, making <span className="font-semibold"> accurate and unbiased<br /> information hard to find.</span></li>
                        <li className="mb-1 lg:leading-8 lgMid:leading-9 xl:leading-10 xlMid:leading-[160%] 2xl:leading-[170%] 3xl:leading-[170%] 4xl:leading-[175%] leading-10">Lacking structured information, <span className="font-semibold"> voters<br /> decide last minute</span>, relying on hearsay and<br /> ads over verified facts.</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Slide3;