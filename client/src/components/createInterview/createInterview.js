import React from "react";
import { Form } from "react-bootstrap";
const CreateInterview = () => {
  return (
    <div>
      <h1>jghhkgbdwk</h1>
      <Form>
        {["checkbox"].map(type => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />

            <Form.Check
              disabled
              type={type}
              label={`disabled ${type}`}
              id={`disabled-default-${type}`}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};

export default CreateInterview;
