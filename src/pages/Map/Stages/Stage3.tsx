import PythonCodeBlock from "../../../Componenets/CodeBlock";
import SplitText from "../../../Componenets/SplitText";
import VariableDragGame from "../../../Utilities/DNDGame";

import "../../../Styles/Pages/Courses/Python/PythonVariables.css";

const variableExample = `age = 19
name = "Krish"
is_above_18 = True`;

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
        <p>
          In Python, a variable is simply a name that refers to a value stored
          in memory. Unlike some other programming languages, you don't need to
          declare a variable's type explicitly—Python automatically determines
          the type based on the value you assign. This makes Python dynamically
          typed.
          <br />
          <br />
          Variables act like containers that hold data, and the value they store
          can change during program execution. You create a variable by using
          the assignment operator <code>=</code>
          <br />
          <br /> Example-
        </p>
        <PythonCodeBlock code={variableExample} />
        <p>
          <br />
          <br />
          This code block demonstrates how you can create variables in python!
          <br />
          Over here <code>age</code>, <code>name</code> and{" "}
          <code>is_above_18</code> are called <code>variables</code> and{" "}
          <code>19</code>, <code>"Krish"</code> and <code>True</code> are called
          as <code>values</code> or <code>data</code>, of the respective
          variables.
          <br />
          <br />
          This means we are assigning a block of the computer's memory the label{" "}
          <code>name</code>, and storing the data <code>"Krish"</code> in it
          (the same for other other two variables also).
          <br />
          <br />
          In python there are certain rules we need to follow while naming a
          variable. They are-
        </p>
        <table id="variable-name-rules" className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Rules</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Variables cannot start with a number</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                Variables cannot have any special characters in them EXCEPT
                underscores <code>_</code>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Variables cannot have spaces</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                Variables cannot have the same name as{" "}
                <a href="https://docs.python.org/3/reference/lexical_analysis.html#keywords">
                  keywords
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          id="variable-game"
          className="d-flex flex-row mb-3 justify-content-center"
        >
          <VariableDragGame />
        </div>
      </div>
    </div>
  );
}

export default PythonVariables;
