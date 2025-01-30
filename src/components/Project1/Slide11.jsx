import p1_11 from "../../assets/images/p1_11.png"



const Slide10 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <div className="h-[75vh] bg-[#F9FAFB] py-8 w-[31vw]">
                <img className="ml-auto mr-auto h-[100%] " src={p1_11} alt="" />
            </div>
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-start`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">Meet the Candidates</h1>
                    
                    <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">Make an Informed Choice</h2>
                </div>

                <div className="flex-col justify-around mt-8">
                    <p className="font-gilroy text-2xl leading-10 mt-8"><span className="font-semibold">IN-DEPTH INSIGHTS - </span>View candidate’s experience, achievements, and policies in one place..</p>
                    <p className="font-gilroy text-2xl leading-10 mt-8"><span className="font-semibold">STRUCTURED LAYOUT - </span>Key sections like manifesto highlights, past contributions, and criminal record status are easy to navigate.</p>
                    <p className="font-gilroy text-2xl leading-10 mt-8 w-[90%]"><span className="font-semibold">TRANSPARENCY FIRST - </span>Verified information ensures voters see unbiased, fact-checked details before deciding.</p>


                </div>

                

                
                
            </div>
        </div>
    )
}

export default Slide10;