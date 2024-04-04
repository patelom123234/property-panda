// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import PageNotFound from './pages/PageNotFound/PageNotFound';
// import LoadingSpinner from './pages/LoadingSpinner/LoadingSpinner';
// import ScrollToTop from "./components/common/ScrollTop";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import "../public/scss/main.scss";
// import { useEffect } from "react";
// import Home_V2 from "./pages/homes/home-v2";
// import GridFull4Col from "./pages/listings/(grid-view)/grid-full-4-col";
// import SingleV7 from "./pages/property/(single-style)/single-v7";
// import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
// import Mainpage from './pages';
// import InfoAdvertise from './pages/InfoAdvertise/InfoAdvertise';

// const Insight_index = lazy(() => import('./pages/InsightIndex/Insight_index'));
// const Insight_details = lazy(() => import('./pages/InsightDetails/Insight_details'));

// if (typeof window !== "undefined") {
//   import("bootstrap");
// }

// function App() {
//   useEffect(() => {
//     Aos.init({
//       duration: 1200,
//       once: true,
//     });
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="app-container wrapper ovh">
//         <ScrollTopBehaviour />
//         <Suspense fallback={<LoadingSpinner />}>
//           <Routes>
//             <Route path="/" element={<Mainpage />} />
//             <Route path="/" element={<Home_V2 />} />
//             <Route path="/grid-full-4-col" element={<GridFull4Col />} />
//             <Route path="/single-v7/:id" element={<SingleV7 />} />
//             <Route path="/insight" element={<Insight_index />} />
//             <Route path="/details" element={<Insight_details />} />

//             {/* Render the InfoAdvertise component with the desired class */}
//             <Route path="/info-advertise/*" element={<div className="app_container_info_advertise_unique_name"><InfoAdvertise /></div>} />

//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </Suspense>
//         <ScrollToTop />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import LoadingSpinner from "./pages/LoadingSpinner/LoadingSpinner";
import ScrollToTop from "./components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../public/scss/main.scss";
import { useEffect } from "react";
import Home_V2 from "./pages/homes/home-v2";
import GridFull4Col from "./pages/listings/(grid-view)/grid-full-4-col";
import SingleV7 from "./pages/property/(single-style)/single-v7";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import { createGlobalStyle } from "styled-components";
import Disclaimer from "./pages/cmsPages/Desclaimer";
import TermsConditions from "./pages/cmsPages/TermsAndPrivacy";
import OurService from "./pages/cmsPages/OurService";
import PrivacyPolicy from "./pages/cmsPages/PrivacyPolicy";

const Insight_index = lazy(() => import("./pages/InsightIndex/Insight_index"));
const Insight_details = lazy(() =>
  import("./pages/InsightDetails/Insight_details")
);
const InfoAdvertise = lazy(() => import("./pages/InfoAdvertise/InfoAdvertise"));

if (typeof window !== "undefined") {
  import("bootstrap");
}

const GlobalStyles = createGlobalStyle`
  input::placeholder {
    font-family: inherit;
    fontSize:'20px';
    color: rgba(0, 0, 0, 2);
  }
`;

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />

      <div className="app-container wrapper ovh">
        <ScrollTopBehaviour />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home_V2 />} />
            <Route path="/grid-full-4-col" element={<GridFull4Col />} />
            <Route path="/single-v7/:id" element={<SingleV7 />} />
            <Route path="/insight" element={<Insight_index />} />
            <Route path="/details" element={<Insight_details />} />
            <Route path="/our-service" element={<OurService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* <Route path="/about-us" element={<AboutUs />} /> */}
            {/* <Route path="/contact-us" element={<ContactUs />} />
            
            <Route path="/feedback" element={<Feedback />} /> */}

            <Route
              path="/info-advertise/*"
              element={
                <div className="app_container_info_advertise_unique_name">
                  <InfoAdvertise />
                </div>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
