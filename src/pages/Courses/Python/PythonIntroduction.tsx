import SplitText from "../../../Componenets/SplitText";

import guidoVanRossum from "../../../assets/guido-van-rossum.png";

import "../../../Styles/Pages/Courses/Python/PythonIntroduction.css";

function PythonIntroduction() {
  return (
    <div>
      <h1 className="Title justify-content-center">
        <SplitText
          text="Python Introduction"
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
      <div className="page-content">
        <div className="d-flex flex-row mb-3">
          <p id="main-introduction-para">
            Python is a high level programming language created by Guido van
            Rossum. Known for its clean and intuitive syntax, Python allows
            developers to write code that is easy to learn and understand,
            making it one of the most beginner-friendly languages.
            <br />
            <br />
            Today, Python is widely used in web development, data science,
            artificial intelligence, machine learning, cybersecurity, etc. Its
            thriving open-source community continuously contributes to its
            growth, ensuring that Python remains one of the most popular and
            influential programming languages in the world.
          </p>
          <img id="guido-van-rossum-image" src={guidoVanRossum} />
        </div>
        <p className="text-center justify-content-center" id="post-para">
          <br />
          <br />
          In this course we will be covering the core concepts of the language
          such as variables, data types, loops, functions, etc, in a fun way!
        </p>
      </div>
      <div className="d-flex flex-row mb-3 justify-content-center">
        <a
          id="next-topic"
          href="#/courses/"
          type="button"
          className="btn btn-primary"
        >
          Next Topic
        </a>
      </div>
    </div>
  );
}

export default PythonIntroduction;
