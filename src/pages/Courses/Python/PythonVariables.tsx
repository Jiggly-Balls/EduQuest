import SplitText from "../../../Componenets/SplitText";

import "../../../Styles/Pages/Courses/Python/PythonVariables.css";

function PythonVariables() {
  return (
    <div>
      <h1 className="Title justify-content-center">
        <SplitText
          text="Python Variables"
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
        In Python, a variable is simply a name that refers to a value stored in
        memory. Unlike some other programming languages, you don't need to
        declare a variable's type explicitly—Python automatically determines the
        type based on the value you assign. This makes Python dynamically typed.
        <br />
        <br />
        Variables act like containers that hold data, and the value they store
        can change during program execution. You create a variable by using the
        assignment operator =
      </div>
    </div>
  );
}

export default PythonVariables;
