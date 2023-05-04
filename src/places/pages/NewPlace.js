import React, { useCallback } from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import "./NewPlace.css";

const NewPlace = () => {
  // useCallback was used here to stop an infinite loop from rerendering this page and then forcing input useEffect to rerender
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
