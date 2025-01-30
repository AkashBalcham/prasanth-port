import p1_10 from "../../assets/images/p1_10.png"



const Slide10 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <div className="h-[75vh] bg-[#F9FAFB] py-8 w-[31vw]">
                <img className="ml-auto mr-auto h-[100%] " src={p1_10} alt="" />
            </div>
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-start`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">Meet the Candidates</h1>
                    
                    <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">Make an Informed Choice</h2>
                </div>

                <div className="flex-col justify-around mt-10">
                    <p className="font-gilroy text-2xl leading-10 mt-6"><span className="font-semibold">EASY COMPARISONS - </span>A structured layout helps voters scan and compare candidates easily.</p>
                    <p className="font-gilroy text-2xl leading-10 mt-6 w-[90%]"><span className="font-semibold">ESSENTIAL INFO - </span>Cards highlight key details (name, party, priorities, experience) without overload.</p>
                    <p className="font-gilroy text-2xl leading-10 mt-6 w-[90%]"><span className="font-semibold">SEAMLESS NAVIGATION - </span>Tap a card for a detailed profile, ensuring smooth interaction.</p>
                    <p className="font-gilroy text-2xl leading-10 mt-6"><span className="font-semibold">INSTANT RECOGNITION - </span>Party symbols and color-coded elements enhance clarity.</p>


                </div>

                

                
                
            </div>
        </div>
    )
}

export default Slide10;