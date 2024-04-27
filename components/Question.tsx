"use client";

import { useState } from "react";
import { askQuestion } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
        <Input
          disabled={loading}
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Ask AI about your moods.✨"
        />

        <Button disabled={loading} type="submit" className="px-6 mt-3">
          Ask
        </Button>
      </form>
      {loading && <div>Looking for answer...</div>}

      {response && <div>Answer: {response}</div>}
    </div>
  );
};

export default Question;
