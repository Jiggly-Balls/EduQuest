import SplitText from "../../../Componenets/SplitText";
import pythonLogo from "../../../assets/python-logo-transparent.png";
import "../../../Styles/Pages/Courses/Python/Python.css";

const contentPages = {
  Introduction: "#/courses/python/introduction",
  Variables: "#/courses/",
  "Data Types": "#/courses/",
  "Arithmetic Operators": "#/courses/",
  "Comparison Operators": "#/courses/",
  "Logical Operators": "#/courses/",
  "Identity Operators": "#/courses/",
  "Membership Operators": "#/courses/",
};

function Python() {
  return (
    <div>
      <h1 className="Title justify-content-center">
        <SplitText
          text="Python Programming"
          className="text-2xl font-semibold text-center justify-content-center"
          delay={100}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </h1>

      <div className="d-flex flex-row mb-3 justify-content-center">
        <img id="python-logo" src={pythonLogo} alt="Python Logo" />
      </div>

      <p id="introduction-para">
        <SplitText
          text="Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It supports multiple programming paradigms, including object-oriented, functional, and procedural styles. Python's extensive standard library and large ecosystem of third-party packages make it widely used in fields like web development, data science, artificial intelligence, automation, and scientific computing. Its beginner-friendly syntax and strong community support have made it one of the most popular programming languages in the world."
          className="text-2xl font-semibold text-center justify-content-center"
          delay={10}
          duration={0.1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </p>

      <div
        id="table-of-contents-header"
        className="d-flex flex-row mb-3 justify-content-center"
      >
        <h2>Table of Contents</h2>
      </div>

      <div className="d-flex flex-row mb-3 justify-content-center">
        <table id="table-of-contents" className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic Name</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(contentPages).map(([key, value], index) => (
              <tr key={key}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={value}>{key}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Python;
