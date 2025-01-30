import p1_4 from "../../assets/images/p1_4.png"



const Slide6 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <img src={p1_4} className="h-[73vh] w-[31vw]" alt="" />
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-between`}>
                

                

                <div className="mt-28 w-[80%] font-gilroy h-full flex flex-col items-start justify-start">
                    <h1 className="text-2xl text-black/50">INSIGHT 3</h1>
                    <h1 className="font-extrabold text-5xl mt-6 ">46% of elected MP’s </h1>
                    <p className="text-2xl leading-10 mt-4 w-[115%]">in 2024 had criminal cases yet many voters were unaware. Nearly half of the elected MPs had pending criminal cases. Voters had no idea due to lack of transparency, voter unawareness and political infulence.</p>
                    <p className="text-2xl mt-12 w-[110%] leading-relaxed"><span className="font-semibold underline underline-offset-2">IMPACT</span>: Voters unknowingly elect candidates with criminal records, reducing accountability and governance quality.</p>
                </div>

                
                
            </div>
        </div>
    )
}

export default Slide6;