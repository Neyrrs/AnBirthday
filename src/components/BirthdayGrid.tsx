// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import videoSrc from "../assets/videos/video.mp4";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// const BirthdayGrid = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const containerRef = useRef(null);

//   useGSAP(() => {
//     const video = videoRef?.current;

//     // Pastikan metadata video sudah dimuat
//     video.onloadedmetadata = () => {
//       gsap.to(video, {
//         currentTime: video?.duration - 1,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top center",
//           end: "50% center",
//           markers: true,
//           scrub: true,
//         },
//       });
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="video-container relative h-screen w-full overflow-hidden bg-black"
//     >
//       <video
//         ref={videoRef}
//         src={videoSrc}
//         muted
//         playsInline
//         preload="auto"
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// export default BirthdayGrid;
