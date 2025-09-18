import SplitText from "../../Componenets/SplitText";
import GenerateCard from "../../Componenets/Cards";

import pythonLogo from "../../assets/python-logo.png";

import "../../Styles/Pages/Courses/Courses.css";

function Courses() {
  return (
    <div>
      <h1 className="Title justify-content-center">
        <SplitText
          text="Courses"
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
        id="courses-cards"
        className="d-flex flex-row mb-3 justify-content-center"
      >
        <GenerateCard
          image={pythonLogo}
          title="Python Programming"
          text="Learn Python Programming"
          buttonText="Learn now"
          buttonLink="#/courses/python"
        />
      </div>
    </div>
  );
}

export default Courses;
