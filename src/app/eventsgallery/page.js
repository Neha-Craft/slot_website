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
    title: "Festival Event",
    src: "/videos/festival-event.mp4",
    description: "Join us for special festival celebrations throughout the year.",
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
    console.log(`Ended: ${currentVideo.title}`);
    const currentIndex = resortVideos.findIndex((v) => v.id === currentVideo.id);
    const nextIndex = (currentIndex + 1) % resortVideos.length;
    setCurrentVideo(resortVideos[nextIndex]);
  };

  return (
    <div className="container py-4">
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

      {/* Main Video Player and Playlist */}
      <div className="row">
        {/* Main Video */}
        <div className="col-lg-7 mb-4">
          <div className="card border-0 rounded shadow-sm">
            <div className="ratio ratio-16x9 bg-dark" style={{ maxHeight: "320px" }}>
              <video
                key={currentVideo.id}
                controls
                autoPlay
                src={currentVideo.src}
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
                className="object-fit-cover"
                style={{ width: "100%" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-body bg-light p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="mb-0" style={{ color: "#5a3921", fontWeight:600,fontSize:"25px" }}>
                  {currentVideo.title}
                </p>
                <span className="badge bg-success rounded-pill">Now Playing</span>
              </div>
              <p className="text-muted mb-0 small">{currentVideo.description}</p>
            </div>
          </div>
        </div>

        {/* Playlist */}
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
                    <div
                      className="position-relative me-2"
                      style={{ minWidth: "80px", height: "48px" }}
                    >
                      <div
                        className="bg-dark rounded w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          backgroundImage: `url(/placeholder.svg?height=48&width=80)`,
                          backgroundSize: "cover",
                        }}
                      >
                        <span
                          className={`badge rounded-circle p-2 ${
                            video.id === currentVideo.id
                              ? "bg-white text-success"
                              : "bg-success"
                          }`}
                        >
                          <i className="bi bi-play-fill fs-6"></i>
                        </span>
                      </div>
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
                          video.id === currentVideo.id
                            ? "text-white-50"
                            : "text-muted"
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
  );
}
