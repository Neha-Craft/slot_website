"use client";

import { useState } from "react";

const resortVideos = [
  {
    id: 1,
    title: "Resort Overview",
    src: "/videos/video1.mp4",
    description: "Take a tour of our beautiful resort facilities and amenities.",
  },
  {
    id: 2,
    title: "Wedding Ceremony",
    src: "/videos/video2.mp4",
    description: "Experience the magic of weddings at Shree Radha Madhavam Resort.",
  },
  {
    id: 3,
    title: "Room Tour",
    src: "/videos/video3.mp4",
    description: "Explore our luxurious rooms designed for your utmost comfort and relaxation.",
  },
];

export default function ResortVideoGallery() {
  const [currentVideo, setCurrentVideo] = useState(resortVideos[0]);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  const handlePlay = () => {
    console.log(`Playing: ${currentVideo.title}`);
  };

  const handlePause = () => {
    console.log(`Paused: ${currentVideo.title}`);
  };

  const handleEnded = () => {
    const currentIndex = resortVideos.findIndex((v) => v.id === currentVideo.id);
    const nextIndex = (currentIndex + 1) % resortVideos.length;
    setCurrentVideo(resortVideos[nextIndex]);
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8" }} className="py-5">
    <div className="container py-4" tyle={{ backgroundColor: "#000" }}>
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-6 fw-bold" style={{ color: "#5a3921" }}>
            Shree Radha Madhavam Resort
          </h2>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <div className="border-bottom border-2 border-warning" style={{ width: "60px" }}></div>
            <h4 className="mx-2 text-success mb-0">Video Gallery</h4>
            <div className="border-bottom border-2 border-warning" style={{ width: "60px" }}></div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Main Video Player */}
        <div className="col-lg-7 mb-4">
          <div className="card border-0 rounded shadow-sm h-100">
            <div
              className="bg-dark"
              style={{
                height: "320px",
                borderRadius: "0.375rem",
                overflow: "hidden",
              }}
            >
              <video
                key={currentVideo.id}
                controls
                autoPlay
                src={currentVideo.src}
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
                className="w-100 h-100 object-fit-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Playlist with Video Previews */}
        <div className="col-lg-5 mb-4">
          <div className="card border-0 rounded shadow-sm h-100">
            <div className="card-header bg-light border-0 py-2">
              <h5 className="mb-0">
                <i className="bi bi-collection-play me-2"></i>
                Playlist
              </h5>
            </div>
            <div className="card-body p-0" style={{ maxHeight: "320px", overflowY: "auto" }}>
              <div className="list-group list-group-flush">
                {resortVideos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoClick(video)}
                    className={`list-group-item list-group-item-action d-flex align-items-center py-2 px-3 ${
                      video.id === currentVideo.id ? "active custom-active-item" : ""
                    }`}
                  >
                    {/* Video Preview */}
                    <div
                      className="me-2 rounded overflow-hidden bg-dark"
                      style={{ minWidth: "80px", height: "48px" }}
                    >
                      <video
                        src={video.src}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-100 h-100 object-fit-cover"
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}
                      />
                    </div>

                    <div className="text-start overflow-hidden">
                      <h6
                        className={`mb-1 text-truncate ${
                          video.id === currentVideo.id ? "text-white" : ""
                        }`}
                      >
                        {video.title}
                      </h6>
                      <p
                        className={`small mb-0 text-truncate ${
                          video.id === currentVideo.id ? "text-white-50" : "text-muted"
                        }`}
                      >
                        {video.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}




// "use client";

// import { useState } from "react";

// const resortVideos = [
//   {
//     id: 1,
//     title: "Resort Overview",
//     src: "/videos/video1.mp4",
//     description: "Take a tour of our beautiful resort facilities and amenities.",
//   },
//   {
//     id: 2,
//     title: "Wedding Ceremony",
//     src: "/videos/video2.mp4",
//     description: "Experience the magic of weddings at Shree Radha Madhavam Resort.",
//   },
//   {
//     id: 3,
//     title: "Room Tour",
//     src: "/videos/video3.mp4",
//     description: "Explore our luxurious rooms designed for your utmost comfort and relaxation.",
//   },
// ];

// export default function ResortVideoGallery() {
//   const [currentVideo, setCurrentVideo] = useState(resortVideos[0]);

//   const handleVideoClick = (video) => {
//     setCurrentVideo(video);
//   };

//   const handlePlay = () => {
//     console.log(`Playing: ${currentVideo.title}`);
//   };

//   const handlePause = () => {
//     console.log(`Paused: ${currentVideo.title}`);
//   };

//   const handleEnded = () => {
//     const currentIndex = resortVideos.findIndex((v) => v.id === currentVideo.id);
//     const nextIndex = (currentIndex + 1) % resortVideos.length;
//     setCurrentVideo(resortVideos[nextIndex]);
//   };

//   return (
//     <div className="container py-4">
//       {/* Header Section */}
//       <div className="row mb-4">
//         <div className="col-12 text-center">
//           <h2 className="display-6 fw-bold" style={{ color: "#5a3921" }}>
//             Shree Radha Madhavam Resort
//           </h2>
//           <div className="d-flex justify-content-center align-items-center mb-2">
//             <div className="border-bottom border-2 border-warning" style={{ width: "60px" }}></div>
//             <h4 className="mx-2 text-success mb-0">Video Gallery</h4>
//             <div className="border-bottom border-2 border-warning" style={{ width: "60px" }}></div>
//           </div>
//         </div>
//       </div>

//       <div className="row">
//         {/* Main Video Player */}
//         <div className="col-lg-7 mb-4">
//           <div className="card border-0 rounded shadow-sm">
//             <div className="ratio ratio-16x9 bg-dark" style={{ maxHeight: "320px" }}>
//               <video
//                 key={currentVideo.id}
//                 controls
//                 autoPlay
//                 src={currentVideo.src}
//                 onPlay={handlePlay}
//                 onPause={handlePause}
//                 onEnded={handleEnded}
//                 className="object-fit-cover"
//                 style={{ width: "100%" }}
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         </div>

//         {/* Playlist with Video Previews */}
//         <div className="col-lg-5 mb-4">
//           <div className="card border-0 rounded shadow-sm h-100">
//             <div className="card-header bg-light border-0 py-2">
//               <h5 className="mb-0">
//                 <i className="bi bi-collection-play me-2"></i>
//                 Playlist
//               </h5>
//             </div>
//             <div className="card-body p-0" style={{ maxHeight: "320px", overflowY: "auto" }}>
//               <div className="list-group list-group-flush">
//                 {resortVideos.map((video) => (
//                   <button
//                     key={video.id}
//                     onClick={() => handleVideoClick(video)}
//                     className={`list-group-item list-group-item-action d-flex align-items-center py-2 px-3 ${
//                       video.id === currentVideo.id ? "active custom-active-item" : ""
//                     }`}
//                   >
//                     {/* Video Preview */}
//                     <div
//                       className="me-2 rounded overflow-hidden bg-dark"
//                       style={{ minWidth: "80px", height: "48px" }}
//                     >
//                       <video
//                         src={video.src}
//                         muted
//                         loop
//                         playsInline
//                         preload="metadata"
//                         className="w-100 h-100 object-fit-cover"
//                         onMouseEnter={(e) => e.target.play()}
//                         onMouseLeave={(e) => e.target.pause()}
//                       />
//                     </div>

//                     <div className="text-start overflow-hidden">
//                       <h6
//                         className={`mb-1 text-truncate ${
//                           video.id === currentVideo.id ? "text-white" : ""
//                         }`}
//                       >
//                         {video.title}
//                       </h6>
//                       <p
//                         className={`small mb-0 text-truncate ${
//                           video.id === currentVideo.id ? "text-white-50" : "text-muted"
//                         }`}
//                       >
//                         {video.description}
//                       </p>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
