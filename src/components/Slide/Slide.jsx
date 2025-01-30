import '../../index.css';

const parseFormattedText = (text) => {
    return text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith("***") && part.endsWith("***")) {
        return (
          <strong key={index} className="text-red-600 font-bold">
            {part.slice(3, -3)}
          </strong>
        );
      } else if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
};

const Slide = (props) => {
    //props: currentslide, 
    console.log(props.data)
    return (
        <div className="w-full flex pl-56 pr-40 pt-24 flex-row justify-start">
            <img src={props.data.image} alt="" />
            <div className={`w-[39%] ml-40 flex flex-col items-start justify-between`}>
                <div className={` flex flex-col items-start justify-evenly ${!props.data.hasOwnProperty("mainHeading") ? "mt-8 hidden" : ""} ${props.data.content.onlyBullets ? "-mb-20" : ""}`}>
                    { props.data.hasOwnProperty("mainHeading") && <h1 className="font-canela text-5xl italic font-semibold tracking-wide">{ props.data.mainHeading }</h1> }
                    
                    { props.data.hasOwnProperty("mainSubheading") && <h2 className="font-duplet mt-2 tracking-tight font-bold text-4xl text-[#212880]">{ props.data.mainSubheading }</h2>}
                </div>

                
                {/* Text data */}
                <>
                    {props.data.content.paragraphs && props.data.content.paragraphs.map(text => {
                        return <p className={`font-gilroy font-medium ${props.data.content.small ? "-mt-20" : ""} text-2xl leading-10 word-spacing-lg`}>{parseFormattedText(text)}</p>
                    })}
                </>


                {/* Bullet points */}
                {
                    props.data.content.bullets && (
                        <div className={`font-gilroy ${(props.data.content.onlyBullets) ? "pb-20" : ""}`}>
                            <h3 className="text-black/50 text-2xl leading-10">{ props.data.content.bulletHeading }</h3>
                            {props.data.content.bulletPoints.map(text => {
                                return <li className="text-2xl leading-10">{ parseFormattedText(text) }</li>
                            })}
                        </div>
                    )
                }

                {/* Insight */}
                {
                    props.data.content.insight && (
                        <div className={`font-gilroy ${!props.data.hasOwnProperty("mainHeading") ? "mt-20" : ""} h-[75%] flex flex-col items-start justify-between ${(props.data.content.insight) ? "" : ""}`}>
                            <h1 className="text-black/50 text-2xl">INSIGHT {props.data.content.insightNumber}</h1>
                            <p className="text-2xl leading-10"><span className="text-6xl font-bold">{ props.data.content.insightHeading }<br/></span> {props.data.content.insightContinuation}</p>
                            <p className="text-2xl leading-10"><span className="underline font-bold">IMPACT</span>: {props.data.content.impact}</p>
                            { props.data.content.note && <p className="text-lg">{ props.data.content.note }</p>}
                        </div>
                    )
                }


                {props.data.content.src ? <span className="text-xl text-black/50">{props.data.content.src}</span> : <span className="hidden"></span>}
                
            </div>
        </div>
    );
}

export default Slide;