import p1_4 from "../../assets/images/p1_4.png"



const Slide5 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <img src={p1_4} className="h-[73vh] w-[31vw]" alt="" />
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-between`}>
                

                

                <div className="mt-28 w-[80%] font-gilroy h-full flex flex-col items-start justify-start">
                    <h1 className="text-2xl text-black/50">INSIGHT 2</h1>
                    <h1 className="font-extrabold text-5xl mt-6 ">40% of voters</h1>
                    <p className="text-2xl leading-10 mt-4 w-[110%]">find it difficult to access clear candidate information. because they are scattered across multiple sources, such as news portals, social media, govt.sites, etc which are often biased, inaccruate and unstructured.</p>
                    <p className="text-2xl mt-12 w-[110%] leading-relaxed"><span className="font-semibold underline underline-offset-2">IMPACT</span>: Many voters struggle to find accurate, unbiased, and easily digestible information, leading to uninformed decisions</p>
                </div>

                
                
            </div>
        </div>
    )
}

export default Slide5;