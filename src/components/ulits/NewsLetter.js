import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { addNewsLetter, clearNewsLetter } from "../../store/actions";
import { showToast } from "./tools";

const NewsLetter = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;

    dispatch(addNewsLetter({ email: value }));
  };

  useEffect(() => {
    if (userData.newsletter) {
      if (userData.newsletter === "added") {
        showToast("SUCCESS", "Thank you for subscribing !!!");
        textInput.current.value = "";
      } else {
        showToast("ERROR", "You're already on our list");
      }
    }
  }, [userData]);

  useEffect(() => {
    return () => {
      dispatch(clearNewsLetter());
    };
  }, [dispatch]);

  return (
    <>
      <div className="newsletter_container">
        <h1>Join our newsletter</h1>
        <div className="form">
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group>
              <Form.Control
                type="text"
                plaeholder="Example: youremail@gmail.com"
                name="email"
                ref={textInput}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add me to the list
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
