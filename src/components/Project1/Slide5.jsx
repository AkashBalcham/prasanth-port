import p1_4 from "../../assets/images/p1_4.png"



const Slide5 = () => {
    return (
        <div className="w-full flex lg:pl-20 2xl:pl-32 4xl:pl-36 lg:pt-12 xl:pt-20 3xl:pt-28 pl-64 lg:pr-0 pr-40 pt-24 flex-row justify-start">
            <img src={p1_4} className="h-[73vh] w-[31vw] lg:w-[35vw] xl:w-[38vw] xlMid:w-[40vw]" alt="" />
            <div className={`lg:ml-14 3xl:ml-20 4xl:ml-32 flex flex-col items-start justify-between`}>
                

                

                <div className="lg:mt-16 xl:mt-20 2xl:mt-28 4xl:mt-36 mt-28 font-gilroy h-full flex flex-col items-start justify-start">
                    <h1 className="lg:text-[120%] lg:-mb-2 lgMid:text-[119%] xlMid:text-[125%] 2xl:text-[139%] 3xl:text-[145%] 4xl:text-[158%] text-2xl text-black/50">INSIGHT 2</h1>
                    <h1 className="font-extrabold lg:text-[220%] lgMid:text-[250%] xlMid:text-[275%] 2xl:text-[285%] 3xl:text-[310%] 4xl:text-[340%] text-5xl mt-6 ">40% of voters</h1>
                    <p className="lg:text-[120%] lgMid:text-[135%] xl:text-[145%] xlMid:text-[155%] 2xl:text-[170%] 3xl:text-[190%] 4xl:text-[210%] lgMid:leading-9 xl:leading-10 xlMid:leading-[175%] 4xl:leading-[180%] text-2xl leading-8 lg:mt-2 xlMid:mt-4 mt-4">find it difficult to access clear candidate <br /> information. because they are scattered <br />across multiple sources, such as news portals, <br /> social media, govt.sites, etc which are often <br />biased, inaccruate and unstructured.</p>
                    <p className="lg:text-[120%] lgMid:text-[135%] xl:text-[145%] xlMid:text-[155%] 2xl:text-[170%] 3xl:text-[190%] 4xl:text-[210%] lgMid:leading-9 xl:leading-10 xlMid:leading-[175%] 4xl:leading-[180%] text-2xl lg:leading-8 mt-12 xlMid:mt-14 leading-relaxed"><span className="font-semibold underline underline-offset-2">IMPACT</span>: Many voters struggle to find accurate, <br />unbiased, and easily digestible information,<br /> leading to uninformed decisions</p>
                </div>

                
                
            </div>
        </div>
    )
}

export default Slide5;