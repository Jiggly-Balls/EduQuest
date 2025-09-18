import SplitText from "../../Componenets/SplitText";

function Courses() {
  return (
    <div>
      <h1>
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
    </div>
  );
}

export default Courses;
