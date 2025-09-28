import { BiLockAlt } from "react-icons/bi";

import SplitText from "../../Componenets/SplitText";
import StageHotspot from "../../Componenets/StageHotspot";

import mapImage from "../../assets/map.png";

import "../../Styles/Pages/Map/Map.css";

type Stage = {
  locked: boolean;
  name: string;
  top: string; // position relative to map
  left: string; // position relative to map
  url: string;
};

const stages: Stage[] = [
  {
    locked: false,
    name: "Stage 1",
    top: "83%",
    left: "88%",
    url: "/map/stage-1",
  },
  {
    locked: false,
    name: "Stage 2",
    top: "45%",
    left: "75%",
    url: "/map/stage-2",
  },
  {
    locked: false,
    name: "Stage 3",
    top: "35%",
    left: "50%",
    url: "/map/stage-3",
  },
  {
    locked: false,
    name: "Stage 4",
    top: "80%",
    left: "40%",
    url: "/map/stage-4",
  },
  {
    locked: false,
    name: "Stage 5",
    top: "60%",
    left: "25%",
    url: "/map/stage-5",
  },
  {
    locked: false,
    name: "Stage 6",
    top: "20%",
    left: "30%",
    url: "/map/stage-6",
  },
];

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

        {stages.map((stage) => (
          <StageHotspot
            stage={stage.name}
            x={stage.left}
            y={stage.top}
            url={stage.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Map;
