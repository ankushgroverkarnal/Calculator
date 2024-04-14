import React, { useState } from "react";

function Cal() {
  const [input, setInput] = useState("");
  const remove = () => {
    setInput(input.slice(0, -1));
  };
  const equal = () => {
    setInput(String(eval(input)));
  };
  const zero = () => {
    if (input.length > 0) {
      setInput(input + "0");
    }
  };
  const operator = (opt) => {
    if (input !== "") {
      if (
        !input.endsWith("+") &&
        !input.endsWith("-") &&
        !input.endsWith("*") &&
        !input.endsWith("/") &&
        !input.endsWith("%") &&
        !input.endsWith(".")
      ) {
        setInput(input + opt);
      }
    }
  };
  return (
    <>
      <div className="main h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="cal w-64 h-auto border-4 border-red-500 outline-2 outline-blue-600 m-auto bg-black">
          <div className="input w-full h-16 bg-black text-white">
            <input
              type="text"
              placeholder="0"
              readOnly
              className="text-right w-full h-full text-4xl font-semibold bg-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="row1 h-10 text-red-500 font-bold flex  gap-4 text-xl mt-2 pl-2 pr-2">
            <button
              className="w-12 h-12 rounded-full bg-blue-400"
              onClick={() => setInput("")}
            >
              AC
            </button>
            <button
              className="w-12 h-12  rounded-full bg-blue-400"
              onClick={remove}
            >
              C
            </button>
            <button
              className="w-12 h-12 rounded-full bg-slate-300"
              onClick={() => operator("%")}
            >
              %
            </button>
            <button
              className="w-12 h-12  rounded-full bg-slate-300"
              onClick={() => operator("/")}
            >
              /
            </button>
          </div>
          <div className="row1 h-10 text-red-500 font-bold flex  gap-4 text-xl mt-4 pl-2 pr-2">
            <button
              className="w-12 h-12 rounded-full bg-blue-400"
              onClick={() => setInput(input + "7")}
            >
              7
            </button>
            <button
              className="w-12 h-12  rounded-full bg-blue-400"
              onClick={() => setInput(input + "8")}
            >
              8
            </button>
            <button
              className="w-12 h-12 rounded-full bg-slate-300"
              onClick={() => setInput(input + "9")}
            >
              9
            </button>
            <button
              className="w-12 h-12  rounded-full bg-slate-300"
              onClick={() => operator("*")}
            >
              *
            </button>
          </div>
          <div className="row1 h-10 text-red-500 font-bold flex  gap-4 text-xl mt-4 pl-2 pr-2">
            <button
              className="w-12 h-12 rounded-full bg-blue-400"
              onClick={() => setInput(input + "4")}
            >
              4
            </button>
            <button
              className="w-12 h-12  rounded-full bg-blue-400"
              onClick={() => setInput(input + "5")}
            >
              5
            </button>
            <button
              className="w-12 h-12 rounded-full bg-slate-300"
              onClick={() => setInput(input + "6")}
            >
              6
            </button>
            <button
              className="w-12 h-12  rounded-full bg-slate-300"
              onClick={() => operator("-")}
            >
              -
            </button>
          </div>
          <div className="row1 h-10 text-red-500 font-bold flex  gap-4 text-xl mt-4 pl-2 pr-2">
            <button
              className="w-12 h-12 rounded-full bg-blue-400"
              onClick={() => setInput(input + "1")}
            >
              1
            </button>
            <button
              className="w-12 h-12  rounded-full bg-blue-400"
              onClick={() => setInput(input + "2")}
            >
              2
            </button>
            <button
              className="w-12 h-12 rounded-full bg-slate-300"
              onClick={() => setInput(input + "3")}
            >
              3
            </button>
            <button
              className="w-12 h-12  rounded-full bg-slate-300"
              onClick={() => operator("+")}
            >
              +
            </button>
          </div>
          <div className="row1 h-10 text-red-500 font-bold flex  gap-4 text-xl mt-4 pl-2 pr-2 mb-3">
            <button
              className="w-20 h-12 rounded-full bg-blue-400"
              onClick={zero}
            >
              0
            </button>
            <button
              className="w-12 h-12  rounded-full bg-blue-400"
              onClick={() => operator(".")}
            >
              .
            </button>
            <button
              className="w-20 h-12 rounded-full bg-slate-300"
              onClick={equal}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cal;
