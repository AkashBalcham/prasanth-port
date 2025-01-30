// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ProgressBar from '../../components/ProgressBar/ProgressBar'
// import data from '../../data/project1'
// import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import closeButton from '../../assets/icons/close.svg'
// import spa from '../../assets/images/spa.png'
// import Footer from '../../components/ProjectFooter/ProjectFooter';



// const TestPage = () => {

//     const { id } = useParams();
    
//     const [projectData, setProjectData] = useState(null);
//     const [ currentSlide, setCurrentSlide ] = useState(1);
//     const [ prog, setProg ] = useState(0);
    
//     useEffect(() => {
//         const getProjectData = async () => {
//             const project = await data[id];
//             setProg(100 / project.images.length);
//             setProjectData(project);

//             console.log(projectData);
//         }

//         getProjectData();
//     }, [])


//     useEffect(() => {
//         setProg(projectData ? Math.round(Math.max(currentSlide * 100 / projectData.images.length)) : 0);
//     }, [currentSlide])


//     // const detectKeyPress = (event) => {
//     //     if (!projectData) return;

//     //     if (event.key === 'ArrowRight') {
//     //         console.log("Right pressed...")
//     //         for(let i=0; i<1; i++) handleSlideChange(true); // Move to the next slide
//     //     } else if (event.key === 'ArrowLeft') {
//     //         console.log("Left pressed...")
//     //         for(let i=0; i<1; i++) handleSlideChange(false); // Move to the previous slide
//     //     }
//     // }

//     // document.addEventListener('keydown', detectKeyPress);

//     useEffect(() => {
//         const detectKeyPress = (event) => {
//             if (!projectData) return;
    
//             if (event.key === 'ArrowRight') {
//                 console.log("Right pressed...");
//                 handleSlideChange(true); // Move to the next slide
//             } else if (event.key === 'ArrowLeft') {
//                 console.log("Left pressed...");
//                 handleSlideChange(false); // Move to the previous slide
//             }
//         };
    
//         document.addEventListener('keydown', detectKeyPress);
    
//         return () => {
//             document.removeEventListener('keydown', detectKeyPress);
//         };
//     }, [projectData]);

    

    
//     const handleSlideChange = (next) => {
//         // next = true means user went to next slide
//         if (next) {
//             setCurrentSlide((currentSlide) => {
//                 const nextSlide = Math.min(projectData.images.length, currentSlide + 1);
//                 console.log('Next Slide:', nextSlide);
//                 return nextSlide;
//             });
//             // console.log(currentSlide)
//             // console.log(currentSlide * 100 / projectData.images.length);
//             // setProg((oldProg) => {
//             //     return Math.round(Math.max(0, nextSlide * 100 / projectData.images.length));
//             // })
//         } else {
//             setCurrentSlide((currentSlide) => Math.max(1, currentSlide - 1));
//             // console.log(currentSlide)
//             // console.log(currentSlide * 100 / projectData.images.length);
//             // setProg(() => {
//             //     return Math.round(Math.max(0, currentSlide * 100 / projectData.images.length));
//             // })
//         }
//     }

//     console.log(projectData);

//     return (
//         <div className='w-full'>
//             <div className='px-8 shadow-md flex flex-row justify-between h-[8vh] align-center w-full'>
//                 <div className='w-[70%] flex flex-col justify-center'>
//                     <ProgressBar 
//                         // fill={projectData ? 100 * currentSlide / projectData.images.length : 0}
//                         fill={prog}
//                     />
//                 </div>
                
//                 <button>
//                     <img src={closeButton} alt="" />

//                 </button>
//             </div>

//                 {   
//                     projectData ? 

//                     (
//                         <div className='flex flex-row justify-around'>
//                             <img className="w-[100px]" src={projectData.images[currentSlide-1]} alt="Fake" />
//                             <p>{projectData.text[currentSlide-1]}</p>
//                         </div>
//                     ) : (
//                         <p>Loading...</p>
    
//                     )
//                 }

//             <Footer 
//                 handleSlideChange={handleSlideChange}
//             />
//         </div>
//     )
// }

// export default TestPage;