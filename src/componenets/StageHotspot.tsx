import { useNavigate } from "react-router-dom";

import "../Styles/Components/StageHotspot.css";

function StageHotspot({
  stage,
  x,
  y,
  url,
  locked,
}: {
  stage: string;
  x: string;
  y: string;
  url: string;
  locked: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="chapter-hotspot"
      style={{ top: y, left: x }}
      data-chapter-name={stage}
    >
      {locked ? (
        <span
          className="hotspot-icon"
          onClick={() => {
            const modal = document.getElementById("lockedModal");
            if (modal) {
              modal.style.display = "flex";
            }
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              const modal = document.getElementById("lockedModal");
              if (modal) {
                modal.style.display = "flex";
              }
            }
          }}
        >
          🔒
        </span>
      ) : (
        <span
          className="hotspot-icon"
          onClick={() => navigate(url)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              navigate(url);
            }
          }}
        >
          ▶
        </span>
      )}

      <span className="hotspot-label">{stage}</span>
    </div>
  );
}

export default StageHotspot;
