import p1_2 from "../../assets/images/p1_2.png"



const Slide2 = () => {
    return (
        <div className="w-full flex lg:pl-24 xlMid:pl-32 4xl:pl-40 pl-64 pr-40 lg:pt-16 xlMid:pt-20 4xl:pt-24  pt-24 flex-row justify-start">
            <img src={p1_2} className="h-[73vh] w-[31vw] lg:w-[40vw] xlMid:w-[38vw] 4xl:w-[35vw]" alt="" />
            <div className={`w-[39%] lg:ml-16 ml-28 4xl:ml-28 flex flex-col items-start justify-between`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl lg:text-4xl lgMid:text-[280%] xl:text-5xl 2xl:text-[350%] 3xl:text-[380%] italic font-semibold tracking-wide 4xl:text-6xl">The Inspiration</h1>
                    
                    <h2 className="font-duplet mt-2 lg:mt-1 tracking-tight font-bold lg:text-3xl lgMid:text-[210%] text-4xl xl:text-4xl  2xl:text-[270%] 3xl:text-[280%] 4xl:text-[290%] text-[#212880]">2024 Elections</h2>
                </div>

                

                <div className="mt-24 lg:mt-20 2xl:mt-16 font-gilroy h-full flex flex-col items-start justify-start">
                    <p className="text-[28px] lg:text-[125%] lgMid:text-[130%] xl:text-[150%] xlMid:text-[165%] xlMid:leading-10 2xl:text-[180%] 2xl:leading-[180%] 3xl:text-[200%] 4xl:text-[200%] 4xl:leading-[180%] w-[110%] lg:leading-9 leading-10 lg:mb-2 2xl:mb-2 mb-4">In the 2024 Indian General Election, <br/> 
                        <span className="font-semibold">46% of elected MPs</span> declared criminal <br/> 
                        cases against them. 
                    </p>
                    <p className="lg:text-[120%] lg:leading-9 lgMid:text-[130%] xl:text-[150%] w-[110%]  xlMid:text-[165%] xlMid:leading-10 2xl:text-[180%] 2xl:leading-[180%] leading-10 4xl:text-[200%] 4xl:leading-[180%]"><span className="font-semibold text-red-600">31% facing serious charges</span> such as <br/> 
                            murder, attempted murder, or crimes <br/>  
                            against women. 
                    </p>
                </div>
                
                <div className="font-gilroy text-black/50 lg:text-[105%] lgMid:text-[115%] xl:text-[125%] xlMid:text-[135%] 2xl:text-[155%] 4xl:text-[170%] w-[110%] text-xl">(Source: Association for Democratic Reforms)</div>
            </div>
        </div>
    )
}

export default Slide2;