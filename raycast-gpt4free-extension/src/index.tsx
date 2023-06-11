import { Form, ActionPanel, Action, showToast } from "@raycast/api";
import fetch from "node-fetch";
import { useState } from "react";

type Values = {
  question: string;
};

const askQuestion = async (input: string, model = "you") => {
  const params = new URLSearchParams({
    prompt: input,
    model,
  });

  const request = await fetch(`http://127.0.0.1:13000/ask?${params}`, {
    method: "GET",
  });

  const response = await request.text();
  return response;
};

export default function Command() {
  const [histories, setHistory] = useState<{ question: string; answer: string; createdAt: string }[]>([]);

  async function handleSubmit(values: Values) {
    showToast({ title: "Submitting", message: "Please wait..." });
    const response = await askQuestion(values.question);
    showToast({ title: "Success", message: response });
    setHistory([...histories, { question: values.question, answer: response, createdAt: new Date().toISOString() }]);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="question"
        title="Question"
        placeholder="Write your question and get answers from AI"
        defaultValue=""
      />

      {histories.map(({ question, answer }, index) => (
        <>
          <Form.Description title={`Question #${index + 1}`} text={question} />
          <Form.Description text={answer} />
          <Form.Description text={new Date().toISOString()} />
          <Form.Separator />
        </>
      ))}

      <Form.Separator />
    </Form>
  );
}
