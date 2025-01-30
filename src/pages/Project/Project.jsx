import Footer from '../../components/ProjectFooter/ProjectFooter';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import mapping from "../../util/mappings";

const Project = () => {

    const { id } = useParams();
    const ProjectMap = mapping[id];

    const [projectData, setProjectData] = useState(null);
    const [ currentSlide, setCurrentSlide ] = useState(1);
    const [ prog, setProg ] = useState(0);

    // console.log(data);

    let project = null;

    useEffect(() => {
        const getProjectData = async () => {
            project = await data[id];

            if (project) {
                setProjectData(project);
                setProg(100 / ProjectMap.length);
            }

        }

        getProjectData();
    }, [])

    


    useEffect(() => {
        // console.log("Current slide: ", currentSlide)
        setProg(ProjectMap ? Math.round(Math.max(currentSlide * 100 / ProjectMap.length)) : 0);
    }, [currentSlide]);


    useEffect(() => {
        // console.log(projectData);
        if (ProjectMap) {
            // console.log(projectData);
            // console.log(100 / projectData.length);
            setProg(100 / ProjectMap.length);
        }
        
        const detectKeyPress = (event) => {
            if (!projectData) return;
    
            if (event.key === 'ArrowRight') {
                // console.log("Right pressed...");
                handleSlideChange(true); // Move to the next slide
            } else if (event.key === 'ArrowLeft') {
                // console.log("Left pressed...");
                handleSlideChange(false); // Move to the previous slide
            }
        };
    
        document.addEventListener('keydown', detectKeyPress);
    
        return () => {
            document.removeEventListener('keydown', detectKeyPress);
        };
    }, [ProjectMap]);
    

    const handleSlideChange = (next) => {
        // next = true means user went to next slide
        if (next) {
            // console.log("Going to next slide...")
            setCurrentSlide((currentSlide) => {
                const nextSlide = Math.min(ProjectMap.length, currentSlide + 1);
                // console.log('Next Slide:', nextSlide);
                return nextSlide;
            });
            // console.log(currentSlide)
            // console.log(currentSlide * 100 / projectData.images.length);
            // setProg((oldProg) => {
            //     return Math.round(Math.max(0, nextSlide * 100 / projectData.images.length));
            // })
        } else {
            // console.log("Going to prev slide...")
            setCurrentSlide((currentSlide) => Math.max(1, currentSlide - 1));
            // console.log(currentSlide)
            // console.log(currentSlide * 100 / projectData.images.length);
            // setProg(() => {
            //     return Math.round(Math.max(0, currentSlide * 100 / projectData.images.length));
            // })
        }
    }

    const SlideComponent = ProjectMap?.[currentSlide-1];

    return (
        <div className="w-[100vw] h-[100vh]">
            {/* {
                projectData ? (<div>Data has arrived: {typeof(projectData)}</div>) : (<div>Loading...</div>)
            } */}

            <div>
                {SlideComponent && <SlideComponent />}
            </div>
            <Footer 
                fill={prog}
                handleSlideChange={handleSlideChange}
            />
        </div>
    )
}

export default Project;