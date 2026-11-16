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

import "../../../Styles/Pages/Map/Stages/Stage4.css";

const dataTypesExample = `age = 19
pi = 3.14
name = "Krish"
passed = True
scores = [80, 90, 100]
student = {"name": "Ava", "age": 16}`;

type DataType = "int" | "float" | "str" | "bool" | "list" | "dict";

type DataExample = {
  id: string;
  label: string;
  type: DataType;
};

const valuePool: DataExample[] = [
  { id: "int-1", label: "42", type: "int" },
  { id: "float-1", label: "3.14", type: "float" },
  { id: "str-1", label: '"hello"', type: "str" },
  { id: "bool-1", label: "True", type: "bool" },
  { id: "list-1", label: "[10, 20, 30]", type: "list" },
  { id: "dict-1", label: '{"city": "Delhi"}', type: "dict" },
  { id: "int-2", label: "-7", type: "int" },
  { id: "float-2", label: "0.5", type: "float" },
  { id: "str-2", label: '"Python"', type: "str" },
  { id: "bool-2", label: "False", type: "bool" },
  { id: "list-2", label: "['a', 'b']", type: "list" },
  { id: "dict-2", label: '{"age": 18}', type: "dict" },
];

const quizQuestions = [
  {
    prompt: "Which data type is best for a person's age?",
    options: ["int", "float", "str", "bool"],
    answer: "int",
  },
  {
    prompt: "Which data type stores a whole sentence such as 'hello world'?",
    options: ["bool", "list", "str", "dict"],
    answer: "str",
  },
  {
    prompt: "Which type is used for true or false values?",
    options: ["int", "float", "bool", "list"],
    answer: "bool",
  },
  {
    prompt: "Which type can store multiple items in one variable?",
    options: ["float", "list", "int", "str"],
    answer: "list",
  },
];

const typeDetails: Record<DataType, string> = {
  int: "Stores whole numbers like 10, -3, and 0",
  float: "Stores numbers with decimals like 3.14 and 2.5",
  str: "Stores text such as 'Python' or 'hello'",
  bool: "Stores only True or False values",
  list: "Stores an ordered collection of items in brackets []",
  dict: "Stores key-value pairs like {'name': 'Ava'}",
};

function DraggableValue({ id, label }: { id: string; label: string }) {
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
      className="value-chip"
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
  id: DataType;
  title: string;
  color: string;
  values: string[];
}) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="drop-zone"
      style={{
        borderColor: isOver ? color : "#7dd3fc",
        background: isOver ? "rgba(125, 211, 252, 0.12)" : "rgba(15, 23, 42, 0.8)",
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

function Stage4() {
  const [items, setItems] = useState<DataExample[]>(valuePool);
  const [sortedValues, setSortedValues] = useState<Record<DataType, string[]>>({
    int: [],
    float: [],
    str: [],
    bool: [],
    list: [],
    dict: [],
  });
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const dataItem = items.find((item) => item.id === active.id);
    if (!dataItem) return;

    const zone = over.id as DataType;
    if (dataItem.type === zone) {
      setSortedValues((previous) => ({
        ...previous,
        [zone]: [...previous[zone], dataItem.label],
      }));

      setItems((previous) => previous.filter((item) => item.id !== dataItem.id));

      if (items.length === 1) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.7 },
        });
      }
      return;
    }

    alert(`❌ ${dataItem.label} belongs to ${dataItem.type}, not ${zone}.`);
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
          text="Python Data Types"
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
          Python data types tell us what kind of value a variable holds. Every
          value in Python belongs to a type, and that type decides what kind of
          operations can be performed on it.
          <br />
          <br />
          The most common data types are integers, floats, strings, booleans,
          lists, and dictionaries. These are the building blocks of Python data,
          and understanding them makes it much easier to write powerful programs.
        </p>

        <PythonCodeBlock code={dataTypesExample} />

        <div className="data-type-grid">
          {Object.entries(typeDetails).map(([type, description]) => (
            <div key={type} className="data-type-card">
              <span className="type-label">{type}</span>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div className="mini-game">
          <h2>Quick Challenge: Pick the correct data type</h2>
          {quizQuestions.map((question, index) => (
            <div key={question.prompt} className="quiz-card">
              <p>{index + 1}. {question.prompt}</p>
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
          <h2>Game: Sort the values into the correct data type</h2>
          <DndContext onDragEnd={handleDragEnd}>
            <div className="type-game">
              <div className="value-pool">
                {items.map((item) => (
                  <DraggableValue key={item.id} id={item.id} label={item.label} />
                ))}
              </div>

              <div className="drop-zones">
                <DropZone id="int" title="int" color="#34d399" values={sortedValues.int} />
                <DropZone id="float" title="float" color="#fbbf24" values={sortedValues.float} />
                <DropZone id="str" title="str" color="#60a5fa" values={sortedValues.str} />
                <DropZone id="bool" title="bool" color="#f472b6" values={sortedValues.bool} />
                <DropZone id="list" title="list" color="#c084fc" values={sortedValues.list} />
                <DropZone id="dict" title="dict" color="#fb7185" values={sortedValues.dict} />
              </div>
            </div>
          </DndContext>

          {items.length === 0 && (
            <p className="quiz-summary">
              Great job! You classified all the values correctly.
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

export default Stage4;
