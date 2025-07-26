import { useEffect, useState } from "react";
import "./Owncloud.css";
import noauth from "../assets/no-auth.png";
const Owncloud = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    // Try to fetch the target URL to check if it's reachable
    fetch("http://home-server", { mode: "no-cors" })
      .then(() => {
        console.log("Successfully connected to home-server");
        // Redirect to the home-server URL
        window.location.replace("http://home-server");
      })
      .catch(() => {
        console.error("Failed to connect to home-server");
        setError(true);
      });

    // Fallback: if fetch doesn't error but redirect fails, show error after timeout
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
      </div>
    );
  }

  return null;
};

export default Owncloud;
