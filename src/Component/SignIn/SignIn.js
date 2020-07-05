import React, { useState } from "react";
import { Toast, ToastBody, ToastHeader, Spinner } from "reactstrap";
import Auth from "../../Auth";
import { useHistory } from "react-router-dom";
import "./SignIn.css";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const signIn = async () => {
    const data = await Auth.logIn({ email, password });
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
              placeholder="Email"
              className="joinInput"
              type="text"
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              className="joinInput mt-20"
              type="password"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <button
            className="button mt-20"
            type="submit"
            onClick={() => {
              setIsLoading(true);
              signIn();
            }}
          >
            SignIn
          </button>
        </div>
        {isError && (
          <Toast>
            <ToastHeader icon="danger">Error</ToastHeader>
            <ToastBody>{errorMessage}</ToastBody>
          </Toast>
        )}
      </div>
      {isLoading && (
        <Modal
          center
          showCloseIcon={false}
          closeOnEsc={false}
          closeOnOverlayClick={false}
          open={isLoading}
          styles={{
            modal: {
              "box-shadow":"none",
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
export default SignIn;
