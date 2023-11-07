import React, { FormEvent } from "react";
import userInput from "./UserInput";
import "./StudyFormStyling.scss";

const StudyFormTemplate = () => {
  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangedHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = userInput((value: string) => value.trim() !== "");

  const {
    value: enteredAuthorName,
    isValid: enteredAuthorNameIsValid,
    hasError: authorNameInputHasError,
    valueChangeHandler: authorNameChangedHandler,
    inputBlurHandler: authorNameBlurHandler,
    reset: resetAuthorNameInput,
  } = userInput((value: string) => value.trim() !== "");

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangedHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = userInput((value: string) => value.trim() !== "");

  const {
    value: enteredStudyType,
    isValid: enteredStudyTypeIsValid,
    hasError: studyTypeInputHasError,
    valueChangeHandler: studyTypeChangedHandler,
    inputBlurHandler: studyTypeBlurHandler,
    reset: resetStudyTypeInput,
  } = userInput((value: string) => value.trim() !== "");

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = userInput((value: string) => value.trim() !== "");

  let formIsValid =
    enteredTitleIsValid &&
    enteredAuthorNameIsValid &&
    enteredDescriptionIsValid &&
    enteredDateIsValid &&
    enteredStudyTypeIsValid;

  if (
    enteredTitleIsValid &&
    enteredAuthorNameIsValid &&
    enteredDescriptionIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetTitleInput();
    resetAuthorNameInput();
    resetDescriptionInput();
    resetDateInput();
    resetStudyTypeInput();
  };

  const formCancelHandler = () => {
    resetTitleInput();
    resetAuthorNameInput();
    resetDescriptionInput();
    resetDateInput();
    resetStudyTypeInput();
  };

  return (
    <form className="container mt-4" onSubmit={formSubmissionHandler}>
      <h1 className="text-center">Post a New Study</h1>
      <div className="form-template">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Title"
            onChange={titleChangedHandler}
            value={enteredTitle}
            onBlur={titleBlurHandler}
          />
          {titleInputHasError && (
            <p className="error-text">Title must not be empty.</p>
          )}
        </div>

        <div className="form-group">
          <label>Author Name:</label>
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Author Name"
            onChange={authorNameChangedHandler}
            value={enteredAuthorName}
            onBlur={authorNameBlurHandler}
          />
          {authorNameInputHasError && (
            <p className="error-text">Author name must not be empty.</p>
          )}
        </div>

        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className={`form-control ${dateInputHasError ? "invalid" : ""}`}
            value={enteredDate}
            onChange={dateChangedHandler}
            onBlur={dateBlurHandler}
          />
          {dateInputHasError && (
            <p className="error-text">Please enter a valid date.</p>
          )}
        </div>

        <div className="form-group">
          <label>Study Type:</label>
          <select
            id="studyType"
            name="studyType"
            className={`form-control ${
              studyTypeInputHasError ? "invalid" : ""
            }`}
            value={enteredStudyType}
            onChange={studyTypeChangedHandler}
            onBlur={studyTypeBlurHandler}
          >
            <option value="">Select a study type</option>
            <option value="Experimental">Experimental</option>
            <option value="Observational">Observational</option>
          </select>
          {studyTypeInputHasError && (
            <p className="error-text">Please select a study type.</p>
          )}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            id="floatingInput"
            placeholder="Description"
            onChange={descriptionChangeHandler}
            value={enteredDescription}
            onBlur={descriptionBlurHandler}
          />
          {descriptionInputHasError && (
            <p className="error-text">Description must not be empty.</p>
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            style={{ marginRight: "20px" }}
            type="button"
            onClick={formCancelHandler}
            className="btn btn-outline-dark"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-outline-dark"
            disabled={!formIsValid}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default StudyFormTemplate;
