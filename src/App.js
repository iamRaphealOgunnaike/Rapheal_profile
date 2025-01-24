import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient"
import useMediaQuery from "./hooks/useMediaQuery";
function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

//   useEffect(()=> {
//     const handleScroll = () =>{
//     if (window.scrollY === 0) setIsTopOfPage(true);
//     if (window.scrollY !== 0) setIsTopOfPage(false);
//   }
//   window.addEventListener('scroll', handleScroll);
//   return ()=> window.removeEventListener('scroll', handleScroll);
// }, []);

useEffect(() => {
  const handleScroll = () => setIsTopOfPage(window.scrollY === 0);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar  
      isTopOfPage={isTopOfPage} 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={ setSelectedPage}
          />
        )}
        <Landing setSelectedPage={ setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full" >
        <MySkills/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto " >
        <Projects/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full " >
        <Testimonials/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full " >
        <Contact/>
      </div>
      <Footer/>
       </div>
  );
}

export default App;

// import Navbar from "./scenes/Navbar";
// import DotGroup from "./scenes/DotGroup";
// import Landing from "./scenes/Landing";
// import MySkills from "./scenes/MySkills";
// import Projects from "./scenes/Projects";
// import Testimonials from "./scenes/Testimonials";
// import Contact from "./scenes/Contact";
// import LineGradient from "./components/LineGradient";
// import useMediaQuery from "./hooks/useMediaQuery";
// import { useEffect, useState } from "react";

// function App() {
//   const [isTopOfPage, setIsTopOfPage] = useState(true);
//   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
//   const [selectedPage, setSelectedPage] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => setIsTopOfPage(window.scrollY === 0);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const sections = [
//     { Component: Landing, gradient: true },
//     { Component: MySkills, gradient: true },
//     { Component: Projects, gradient: true },
//     { Component: Testimonials, gradient: true },
//     { Component: Contact, gradient: false },
//   ];

//   return (
//     <div className="app bg-deep-blue">
//       <Navbar isTopOfPage={isTopOfPage} />
//       <div className="w-5/6 mx-auto md:h-full">
//         {isAboveMediumScreens && <DotGroup />}
//       </div>
//       {sections.map(({ Component, gradient }, index) => (
//         <div key={index} className="w-5/6 mx-auto md:h-full">
//           <Component />
//           {gradient && <LineGradient />}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

