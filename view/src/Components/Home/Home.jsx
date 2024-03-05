import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import SignIn from "../SignIn/SignIn";
import { Link } from "react-router-dom";

import SignUp from "../SignUp/SignUp";
import { userProvider } from "../../Context/UserProvider";

function Home() {
  const [user, setUser] = useContext(userProvider);
  const [showSignIn, setSignIn] = useState(true);
  function toggleForm() {
    setSignIn((prevState) => !prevState);
  }
  useEffect(() => {
    if (user.userName) {
      setUser({});
      localStorage.setItem("token", "");
      console.log("delted user");
    }
  }, []);
  return (
    <div className="home ">
      <div className="container">
        <div className=" con row">
          {showSignIn ? (
            <SignIn key="signIn" toggleForm={toggleForm} />
          ) : (
            <SignUp key="signUp" toggleForm={toggleForm} />
          )}

          <div className="info col col-md pb-sm-5">
            <Link className="about">About</Link>
            <h1 className="network pb-3">Evangadi Networks</h1>
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.
            </p>

            <p className="pl">
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
            <button className="works ">HOW IT WORKS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
