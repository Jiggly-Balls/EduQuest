import React, { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  DragEndEvent,
} from "@dnd-kit/core";
import confetti from "canvas-confetti";

const initialWords = ["name", "2ndName", "_score", "class", "user_age"];

const pythonKeywords = new Set([
  "False",
  "None",
  "True",
  "and",
  "as",
  "assert",
  "break",
  "class",
  "continue",
  "def",
  "del",
  "elif",
  "else",
  "except",
  "finally",
  "for",
  "from",
  "global",
  "if",
  "import",
  "in",
  "is",
  "lambda",
  "nonlocal",
  "not",
  "or",
  "pass",
  "raise",
  "return",
  "try",
  "while",
  "with",
  "yield",
]);

function isValidPythonVar(name: string): boolean {
  const validStart = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
  return validStart.test(name) && !pythonKeywords.has(name);
}

function DraggableWord({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    padding: "8px",
    margin: "4px 0",
    background: "#f1f1f1",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "grab",
  };
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {id}
    </div>
  );
}

function DroppableZone({
  id,
  children,
  color,
}: {
  id: string;
  children: React.ReactNode;
  color: string;
}) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    border: `2px dashed ${color}`,
    padding: "10px",
    width: "200px",
    minHeight: "150px",
    background: isOver ? "#f0f8ff" : "transparent",
  };
  return (
    <div ref={setNodeRef} style={style}>
      <h4>{children}</h4>
    </div>
  );
}

export default function VariableDragGame() {
  const [words, setWords] = useState(initialWords);
  const [validZone, setValidZone] = useState<string[]>([]);
  const [invalidZone, setInvalidZone] = useState<string[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (!over) return;

    const word = active.id as string;

    if (over.id === "validZone") {
      if (isValidPythonVar(word)) {
        setValidZone([...validZone, word]);
        setWords(words.filter((w) => w !== word));

        if (words.length == 1) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      } else {
        alert(`❌ ${word} is not valid!`);
      }
    }

    if (over.id === "invalidZone") {
      if (!isValidPythonVar(word)) {
        setInvalidZone([...invalidZone, word]);
        setWords(words.filter((w) => w !== word));

        if (words.length == 1) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      } else {
        alert(`❌ ${word} is actually valid!`);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Pool of words */}
        <div
          style={{
            border: "2px solid black",
            padding: "10px",
            width: "200px",
          }}
        >
          <h4>Word Pool</h4>
          {words.map((word) => (
            <DraggableWord key={word} id={word} />
          ))}
        </div>

        {/* Valid Zone */}
        <DroppableZone id="validZone" color="green">
          ✅ Valid Variables
          {validZone.map((word, i) => (
            <div
              key={i}
              style={{ padding: "6px", background: "#d4edda", margin: "4px 0" }}
            >
              {word}
            </div>
          ))}
        </DroppableZone>

        {/* Invalid Zone */}
        <DroppableZone id="invalidZone" color="red">
          ❌ Invalid Variables
          {invalidZone.map((word, i) => (
            <div
              key={i}
              style={{ padding: "6px", background: "#f8d7da", margin: "4px 0" }}
            >
              {word}
            </div>
          ))}
        </DroppableZone>
      </div>
    </DndContext>
  );
}
