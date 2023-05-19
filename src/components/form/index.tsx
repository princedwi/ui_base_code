"use client";

import { useState } from "react";

export default function Form() {
  const [step, setStep] = useState(1);

  const handleStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  return (
    <>
      <form action="" method="post" id="registration" className="stepForm">
        <nav>
          <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">
            <a
              className={`nav-link  ${step == 1 ? "active" : ""}`}
              id="step1-tab"
              data-bs-toggle="tab"
              onClick={() => handleStep(1)}
            >
              Step 1
            </a>
            <a
              className={`nav-link  ${step == 2 ? "active" : ""}`}
              id="step2-tab"
              data-bs-toggle="tab"
              onClick={() => handleStep(2)}
            >
              Step 2
            </a>
            <a
              className={`nav-link  ${step == 3 ? "active" : ""}`}
              id="step3-tab"
              data-bs-toggle="tab"
              onClick={() => handleStep(3)}
            >
              Step 3
            </a>
          </div>
        </nav>
        <div className="tab-content py-4">
          <div
            className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
            id="step1"
          >
            <h4>Personal data</h4>
            <div className="mb-3">
              <label htmlFor="field1">Required text field 1</label>
              <input
                type="text"
                name="field1"
                className="form-control"
                id="field1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="field2">Required email field 2</label>
              <input
                type="email"
                name="field2"
                className="form-control"
                id="field2"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="field3">Optional field</label>
              <input
                type="text"
                name="field3"
                className="form-control"
                id="field3"
              />
            </div>
          </div>
          <div
            className={`tab-pane fade ${step == 2 ? "show active" : ""}`}
            id="step2"
          >
            <h4>Contact information</h4>
            <div className="mb-3">
              <label htmlFor="field4">Required field 1</label>
              <input
                type="text"
                name="field4"
                className="form-control"
                id="field4"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="field5">Optional field</label>
              <input
                type="text"
                name="field5"
                className="form-control"
                id="field5"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textarea1">Required field 2</label>
              <textarea
                name="textarea1"
                rows={5}
                className="form-control"
                id="textarea1"
                required
              />
            </div>
          </div>
          <div
            className={`tab-pane fade ${step == 3 ? "show active" : ""}`}
            id="step3"
          >
            <h4>Review your information</h4>
            <div className="mb-3">
              <label htmlFor="first_name">Required field 1</label>
              <input
                type="text"
                className="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="first_name">Optional field</label>
              <input
                type="text"
                className="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="first_name">Required field 2</label>
              <input
                type="text"
                className="form-control-plaintext"
                value="Lorem ipsum dolor sit amet"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary"
              data-enchanter="previous"
              onClick={() => handleStep(step - 1)}
              disabled={step == 1 ? true : false}
            >
              Previous
            </button>
          </div>
          <div className="col-auto ">
            <button
              type="button"
              className="btn btn-primary me-2"
              data-enchanter="next"
              onClick={() => handleStep(step + 1)}
              disabled={step == 3 ? true : false}
            >
              Next
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              data-enchanter="finish"
            >
              Finish
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
