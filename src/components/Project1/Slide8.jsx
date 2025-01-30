import vid from "../../assets/images/Walkthrough.mp4"



const Slide8 = () => {
    return (
        <div className="w-full flex pl-64 pr-40 pt-24 flex-row justify-start">
            <div className="h-[75vh] bg-[#F9FAFB] py-8 w-[31vw]">
                <video autoPlay muted loop className="ml-auto mr-auto shadow-2xl h-[100%] " src={vid} alt="" />
            </div>
            <div className={`w-[39%] ml-28 flex flex-col items-start justify-between`}>
                <div className={` flex flex-col items-start justify-evenly `}>
                    <h1 className="font-canela text-5xl italic font-semibold tracking-wide">The Walkthrough</h1>
                    
                    <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">Easy Steps Ahead!</h2>
                </div>

                

                <div className="mt-14 w-[80%] font-gilroy h-full flex flex-col items-start justify-start">
                    <p className="text-2xl leading-10 w-[111%]">After the splash screen, the <span className="font-semibold">language selection screen</span> comes first to provide personalized, inclusive, and accessible user experience by catering to <span className="font-semibold">diverse audience of the country.</span></p>
                    <p className="text-2xl leading-10 w-[111%] mt-12">
                        Next, a straightforward 3-screen walkthrough highlighting informed decisions, easy for 
                        everyone and verified information.
                    </p>
                    <p className="text-2xl mt-12 w-[114%] leading-10">All the illustrations in the app are <span className="font-semibold">AI generated</span> using various tools like Flux, Firefly, Chatgpt, etc.</p>
                </div>

                
                
            </div>
        </div>
    )
}

export default Slide8;