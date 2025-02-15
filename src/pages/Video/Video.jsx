import videos from "../../data/videos";
import { useParams } from "react-router-dom"

const VideoPage = () => {
    const { videoId } = useParams();

    return (
        <div className="ml-auto mr-auto pt-12 w-[80vw] h-[80vh]">
            <video controls autoPlay muted src={videos[videoId]}></video>
        </div>
    )
}

export default VideoPage;