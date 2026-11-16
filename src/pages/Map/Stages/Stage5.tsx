import { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/core";
import confetti from "canvas-confetti";

import PythonCodeBlock from "../../../componenets/CodeBlock";
import SplitText from "../../../componenets/SplitText";

import "../../../Styles/Pages/Map/Stages/Stage5.css";

const arithmeticExample = `a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3
print(a % b)   # 1
print(a ** b)  # 1000`;

type OperatorType =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "modulus"
  | "power";

type OperatorItem = {
  id: string;
  label: string;
  type: OperatorType;
};

const operatorPool: OperatorItem[] = [
  { id: "op-add", label: "+", type: "addition" },
  { id: "op-sub", label: "-", type: "subtraction" },
  { id: "op-mul", label: "*", type: "multiplication" },
  { id: "op-div", label: "/", type: "division" },
  { id: "op-mod", label: "%", type: "modulus" },
  { id: "op-pow", label: "**", type: "power" },
];

const operatorDescriptions: Record<OperatorType, string> = {
  addition: "Combines values together to get a sum",
  subtraction: "Finds the difference between two values",
  multiplication: "Repeats a value a number of times",
  division: "Splits one number into equal parts",
  modulus: "Returns the remainder after division",
  power: "Raises a number to a power",
};

const quizQuestions = [
  {
    prompt: "What is 12 + 5?",
    options: ["15", "17", "18", "19"],
    answer: "17",
  },
  {
    prompt: "What is 9 * 4?",
    options: ["32", "36", "38", "40"],
    answer: "36",
  },
  {
    prompt: "What is 15 % 4?",
    options: ["2", "3", "1", "0"],
    answer: "3",
  },
  {
    prompt: "What does 2 ** 3 equal?",
    options: ["5", "6", "8", "9"],
    answer: "8",
  },
];

function DraggableOperator({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="operator-chip"
      {...listeners}
      {...attributes}
    >
      {label}
    </div>
  );
}

function DropZone({
  id,
  title,
  color,
  values,
}: {
  id: OperatorType;
  title: string;
  color: string;
  values: string[];
}) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="operator-drop-zone"
      style={{
        borderColor: isOver ? color : "#a5b4fc",
        background: isOver ? "rgba(165, 180, 252, 0.12)" : "rgba(15, 23, 42, 0.8)",
      }}
    >
      <h4>{title}</h4>
      {values.length === 0 ? (
        <p className="drop-hint">Drop here</p>
      ) : (
        values.map((value, index) => (
          <div key={`${id}-${value}-${index}`} className="drop-value">
            {value}
          </div>
        ))
      )}
    </div>
  );
}

function Stage5() {
  const [items, setItems] = useState<OperatorItem[]>(operatorPool);
  const [sortedOperators, setSortedOperators] = useState<Record<OperatorType, string[]>>({
    addition: [],
    subtraction: [],
    multiplication: [],
    division: [],
    modulus: [],
    power: [],
  });
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const item = items.find((operator) => operator.id === active.id);
    if (!item) return;

    const target = over.id as OperatorType;
    if (item.type === target) {
      setSortedOperators((previous) => ({
        ...previous,
        [target]: [...previous[target], item.label],
      }));

      setItems((previous) => previous.filter((operator) => operator.id !== item.id));

      if (items.length === 1) {
        confetti({
          particleCount: 140,
          spread: 80,
          origin: { y: 0.7 },
        });
      }
      return;
    }

    alert(`❌ ${item.label} belongs to ${item.type}, not ${target}.`);
  };

  const handleQuizAnswer = (questionIndex: number, choice: string) => {
    if (selectedAnswers[questionIndex]) return;

    const isCorrect = choice === quizQuestions[questionIndex].answer;
    setSelectedAnswers((previous) => ({
      ...previous,
      [questionIndex]: choice,
    }));

    if (isCorrect) {
      setScore((previous) => previous + 1);
    }
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div>
      <h1 className="Title justify-content-center">
        <SplitText
          text="Arithmetic Operators"
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
          Arithmetic operators let us perform math in Python. They help us
          calculate values, compare numbers, and build logic in code. When you
          write a program, these operators are some of the first tools you learn
          because they are used in almost every calculation.
        </p>

        <PythonCodeBlock code={arithmeticExample} />

        <div className="operator-grid">
          {Object.entries(operatorDescriptions).map(([operator, description]) => (
            <div key={operator} className="operator-card">
              <span className="operator-label">
                {operator === "addition"
                  ? "+"
                  : operator === "subtraction"
                    ? "-"
                    : operator === "multiplication"
                      ? "*"
                      : operator === "division"
                        ? "/"
                        : operator === "modulus"
                          ? "%"
                          : "**"}
              </span>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div className="mini-game">
          <h2>Quick Quiz: Solve the expression</h2>
          {quizQuestions.map((question, index) => (
            <div key={question.prompt} className="quiz-card">
              <p>
                {index + 1}. {question.prompt}
              </p>
              <div className="quiz-options">
                {question.options.map((option) => {
                  const selected = selectedAnswers[index];
                  const isCorrect = option === question.answer;
                  const isSelected = selected === option;

                  return (
                    <button
                      key={option}
                      type="button"
                      className={
                        "quiz-option " +
                        (selected !== undefined && isCorrect ? "correct" : "") +
                        (selected !== undefined && isSelected && !isCorrect ? "wrong" : "")
                      }
                      onClick={() => handleQuizAnswer(index, option)}
                      disabled={selected !== undefined}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {answeredCount === quizQuestions.length && (
            <p className="quiz-summary">
              Your score: {score} / {quizQuestions.length}
              {score === quizQuestions.length ? " Excellent work!" : " Keep practicing!"}
            </p>
          )}
        </div>

        <div className="mini-game">
          <h2>Game: Match each operator to its meaning</h2>
          <DndContext onDragEnd={handleDragEnd}>
            <div className="operator-game">
              <div className="operator-pool">
                {items.map((item) => (
                  <DraggableOperator key={item.id} id={item.id} label={item.label} />
                ))}
              </div>

              <div className="operator-drop-zones">
                <DropZone
                  id="addition"
                  title="Addition"
                  color="#34d399"
                  values={sortedOperators.addition}
                />
                <DropZone
                  id="subtraction"
                  title="Subtraction"
                  color="#fbbf24"
                  values={sortedOperators.subtraction}
                />
                <DropZone
                  id="multiplication"
                  title="Multiplication"
                  color="#60a5fa"
                  values={sortedOperators.multiplication}
                />
                <DropZone
                  id="division"
                  title="Division"
                  color="#a78bfa"
                  values={sortedOperators.division}
                />
                <DropZone
                  id="modulus"
                  title="Modulus"
                  color="#f472b6"
                  values={sortedOperators.modulus}
                />
                <DropZone
                  id="power"
                  title="Power"
                  color="#fb7185"
                  values={sortedOperators.power}
                />
              </div>
            </div>
          </DndContext>

          {items.length === 0 && (
            <p className="quiz-summary">
              Great job! You matched every arithmetic operator correctly.
            </p>
          )}
        </div>
      </div>

      <div className="d-flex flex-row mb-3 justify-content-center">
        <a href="#/map" className="btn btn-primary" id="next-topic">
          Back to Map
        </a>
      </div>
    </div>
  );
}

export default Stage5;
