import p1_3 from "../../assets/images/p1_3.png"



const Slide3 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <img src={p1_3} className="h-[73vh] w-[31vw]" alt="" />
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-between`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">The Problem</h1>
                    
                    <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">The Voter's Struggle</h2>
                </div>

                

                <div className="mt-16 w-[80%] font-gilroy h-full flex flex-col items-start justify-start">
                    <h1 className="font-gilroy text-black/50 text-2xl mb-3">KEY CHALLENGES</h1>
                    <ul className="font-gilroy text-2xl list-disc pl-8">
                        <li className="w-[110%] mb-4 leading-10">Many voters know party symbols but not the candidates, <span className="font-semibold">leading to party-based voting over individual merit.</span></li>
                        <li className="w-[110%] mb-4 leading-10">
                        Candidate details are scattered across sources, making <span className="font-semibold"> accurate and unbiased information hard to find.</span></li>
                        <li className="w-[110%] mb-2 leading-10">Lacking structured information, <span className="font-semibold"> voters decide last minute</span>, relying on hearsay and ads over verified facts.</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Slide3;