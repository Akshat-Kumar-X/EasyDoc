import React, { useState } from "react";
import Auth from "../components/Auth";
import { account } from "../helper/appwrite";
import { useNavigate } from "react-router-dom";

const Loginbtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary bg-blue-400 text-white border-none hover:bg-blue-500">
      Login now
    </button>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginAccount = async () => {
    const promise = account.createEmailSession(email, password);
    promise
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Auth
      title={"Login now"}
      description={
        "Thanks for coming back, Continue your journey again with EasyDoc"
      }
      button={<Loginbtn onClick={loginAccount} />}
      bottomquestion={"Don't have an account!"}
      bottomtext={"Create an account"}
      bottomlink={"/signup"}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default Login;
