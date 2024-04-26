"use client";

import { useState } from "react";
import { askQuestion } from "@/utils/api";

const Question = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  function onChange(e) {
    setValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const answer = await askQuestion(value);
    setResponse(answer);

    setValue("");
    setLoading(false);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          disabled={loading}
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Ask a question"
          className="border border-black/20 px-4 py-2 text-lg rounded-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-1 rounded-lg text-lg"
        >
          Ask
        </button>
      </form>
      {loading && <div>Looking for answer...</div>}

      {response && <div>Answer: {response}</div>}
    </div>
  );
};

export default Question;
