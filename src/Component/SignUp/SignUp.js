import React, { useState } from "react";
import { Toast, ToastBody, ToastHeader, Spinner } from "reactstrap";
import Auth from "../../Auth";
import { useHistory, Link } from "react-router-dom";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const signUp = async () => {
    const data = await Auth.signUp({ name, dob, email, password });
    console.log(data);
    setIsLoading(false);
    if (data.error) {
      let m = "";
      if (typeof data.message === "string") {
        m = `${data.message}`;
      } else {
        data.message.forEach(e => {
          m += `${e.message}\n`;
        });
      }
      setIsError(true);
      setErrorMessage(m);
      setTimeout(() => {
        setIsError(false);
        setErrorMessage("");
      }, 4000);
    } else history.push("/");
  };
  return (
    <React.Fragment>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">SignIn</h1>
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              className="joinInput"
              type="text"
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              className="joinInput"
              type="password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Date Of Birth"
              className="joinInput"
              type="text"
              onChange={event => setDob(event.target.value)}
            />
          </div>
          <button
            className="button mt-20"
            type="submit"
            onClick={() => {
              setIsLoading(true);
              signUp();
            }}
          >
            SignUP
          </button>
          <div style={{ color: "white" }}>
            Already User? <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
      {isError && (
        <Toast>
          <ToastHeader icon="danger">Error</ToastHeader>
          <ToastBody>{errorMessage}</ToastBody>
        </Toast>
      )}
      {isLoading && (
        <Modal
          center
          showCloseIcon={false}
          closeOnEsc={false}
          closeOnOverlayClick={false}
          open={isLoading}
          styles={{
            modal: {
              "box-shadow": "none",
              background: "none",
            },
          }}
        >
          <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
        </Modal>
      )}
    </React.Fragment>
  );
};
export default SignUp;
