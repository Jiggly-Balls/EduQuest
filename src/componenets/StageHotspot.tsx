import { BiLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "../Styles/Components/StageHotspot.css";

function StageHotspot({
  stage,
  x,
  y,
  url,
}: {
  stage: string;
  x: string;
  y: string;
  url: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="chapter-hotspot"
      style={{ top: y, left: x }}
      data-chapter-name={stage}
      onClick={() => navigate(url)}
    >
      <BiLockAlt className="hotspot-icon" />
      <span className="hotspot-label">{stage}</span>
    </div>
  );
}

export default StageHotspot;
