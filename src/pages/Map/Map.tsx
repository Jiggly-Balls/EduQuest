import SplitText from "../../Componenets/SplitText";

import mapImage from "../../assets/map.png";

import "../../Styles/Pages/Map/Map.css";

function Map() {
  return (
    <div>
      <h1 className="Title justify-content-center">
        <SplitText
          text="Map"
          className="text-2xl font-semibold text-center justify-content-center"
          delay={125}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </h1>
      <div
        className="d-flex flex-row mb-3 justify-content-center"
        id="map-container"
      >
        <img id="map-image" src={mapImage} alt="EduQuest World Map" />
        <div
          className="chapter-hotspot"
          id="chapter1"
          data-chapter-name="Stage 1"
        ></div>
        <div
          className="chapter-hotspot"
          id="chapter2"
          data-chapter-name="Stage 2"
        ></div>
        <div
          className="chapter-hotspot"
          id="chapter3"
          data-chapter-name="Stage 3"
        ></div>
        <div
          className="chapter-hotspot"
          id="chapter4"
          data-chapter-name="Stage 4"
        ></div>
        <div
          className="chapter-hotspot"
          id="chapter5"
          data-chapter-name="Stage 5"
        ></div>
        <div
          className="chapter-hotspot"
          id="chapter6"
          data-chapter-name="Stage 6"
        ></div>
        <div
          className="chapter-hotspot"
          id="chapter7"
          data-chapter-name="Stage 7"
        ></div>
        <div
          className="chapter-hotspot"
          id="chapter8"
          data-chapter-name="Stage 8"
        ></div>
      </div>
    </div>
  );
}

export default Map;
