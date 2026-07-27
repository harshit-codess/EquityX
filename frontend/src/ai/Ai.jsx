

import React, { useState } from "react";

import "./Ai.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

function Ai() {
  const [content, setContent] = useState("");
  const [query, setQuery] = useState({ command: "" });

  const { command } = query;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setQuery({
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(query.command);
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization:
        "Bearer process.env.AI_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "cohere/north-mini-code:free",
        messages: [
          {
            role: "user",
            content: query.command,
          },
        ],
        reasoning: { enabled: true },
        stream: true,
      }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value);

      const lines = chunk.split("\n");

      for (const line of lines) {
        if (!line.startsWith("data:")) continue;

        const json = line.replace("data:", "").trim();

        if (json === "[DONE]") return;

        try {
          const parsed = JSON.parse(json);

          const text = parsed.choices?.[0]?.delta?.content;

          if (text) {
            setContent((prev) => prev + text);
          }
        } catch (err) {
          console.log(err);
        }
      }

      // setQuery({command: ""});
    }

  };

  return (
    <div className="form-container">
      <div className="content-box">{content}</div>

      <form className="chat-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask anything"
          name="command"
          className="chat-input"
          onChange={handleOnChange}
          value={command}
        />

        <button className="send-btn" type="submit">
          <ArrowUpwardRoundedIcon size={18} />
        </button>
      </form>
    </div>
  );
}

export default Ai;
