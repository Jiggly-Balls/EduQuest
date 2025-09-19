import SplitText from "../../../Componenets/SplitText";
import pythonLogo from "../../../assets/python-logo-transparent.png";
import "../../../Styles/Pages/Courses/Python/Python.css";

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
          delay={15}
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

      <table
        id="table-of-contents"
        className="table table-dark justify-content-center"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Topic Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <a href="#/courses/python/introduction">Introduction</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <a href="#/courses/">Variables</a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <a href="#/courses/">Variables</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Python;
