import vote from "../assets/images/vote.jpg"
import transit from "../assets/images/transit.jpg"
import cella from "../assets/images/cella.jpg"
import loco from "../assets/images/loco.jpg"
import locoVideo from "../assets/images/loco.mp4"


const projects = [
    {
        id: 1,
        image: transit,
        name: "Transit",
        desc: "A standalone app that integrates\nall transport modes in Bangalore\nfor seamless commuting.",
        link: "https://www.figma.com/proto/OfVCj4Tbb1cGYiGhBiabK8/Transit?page-id=0%3A1&node-id=24-200&p=f&viewport=-1169%2C337%2C0.23&t=aivXO5QVgN8dq1Pl-1&scaling=scale-down&content-scaling=fixed",
        hasVideo: false,
    },
    {
        id: 2,
        image: vote,
        name: "Bharat-Vote",
        desc: "Making voting easy for all with\n seamless access to informed\n choices.",
        link: "https://www.figma.com/proto/1E1llrq4Gvfv8nqtsPfRK6/Bharat-Vote?page-id=0%3A1&node-id=6-444&p=f&viewport=60%2C392%2C0.04&t=qpjSUqHYHwsi7egA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A444",
        hasVideo: false,
    },
    {
        id: 3,
        image: cella,
        name: "Cella",
        desc: "An innovative solution for\n energy efficiency that helps\n users reduce their carbon\n footprint.",
        link: "https://www.behance.net/gallery/193643811/Project-Cella-Towards-Energy-Efficiency",
        hasVideo: false,
    },
    {
        id: 4,
        image: loco,
        name: "Loco",
        desc: "We shot a fun promo video in\n our college for our all-in-one\n travel app project during our\n 2nd year.",
        hasVideo: true,
        link: "/videos/1"
    }
]

export default projects;