import { useEffect, useState } from "react";
import "./Owncloud.css";
import noauth from "../assets/no-auth.png";
const Owncloud = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("http://home-server", { mode: "no-cors" })
      .then((response) => {
        // Note: with 'no-cors', you can't access response status or body
        window.location.replace("http://home-server");
      })
      .catch((err) => {
        setErrorMsg(err.message || "Unknown error");
        setError(true);
      });

    const timer = setTimeout(() => setError(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <div className="owncloud-no-connection">
        <img
          src={noauth}
          className="owncloud-no-auth-image"
          alt="Antonio Marangi Engineer ROS2 Robot Autonomous IoT"
        />
        <h2>Restricted Area</h2>
        <p>
          You need to be logged inside Mrmara Virtual Private Network in order
          to access this section, sorry!
        </p>
        {errorMsg && (
          <div style={{ color: "red", marginTop: "1em", fontSize: "0.9em" }}>
            Server error: {errorMsg}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default Owncloud;
