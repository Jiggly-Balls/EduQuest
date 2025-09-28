import SplitText from "../../Componenets/SplitText";

import "../../Styles/Pages/Courses/Courses.css";

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
    </div>
  );
}

export default Map;
