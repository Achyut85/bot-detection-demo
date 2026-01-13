import { useState, useEffect } from "react";

export default function App() {
  const [startTime, setStartTime] = useState(Date.now());
  const [requireCaptcha, setRequireCaptcha] = useState(false);
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [message, setMessage] = useState("");
  const [botMode, setBotMode] = useState(false);



  const submitRequest = async () => {
    const timeTaken = Date.now() - startTime;

    const headers = {
      "Content-Type": "application/json",
      "x-interaction-time": timeTaken
    };

    if (captchaSolved) {
      headers["x-captcha-token"] = "verified";
    }

    const res = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers
    });

    const data = await res.json();
    setMessage(data.message);

    if (data.requireCaptcha) {
      setRequireCaptcha(true);
    }
  };

  useEffect(() => {
    if (!botMode) return;

    const botStartTime = Date.now();
    setStartTime(botStartTime);

    const timer = setTimeout(() => {
      submitRequest(botStartTime);
      setBotMode(false); // reset
    }, 200);

    return () => clearTimeout(timer);
  }, [botMode]);


  return (
    <div style={{ padding: "20px" }}>


      {requireCaptcha ?
        <div style={{ marginTop: "20px" }}>
          <p>⚠️ Please verify you are human</p>
          <label>
            <input
              type="checkbox"
              onChange={() => setCaptchaSolved(true)}
            />{" "}
            I am not a robot
          </label>
        </div>
        : <><h2>Bot Detection Demo</h2>

          <button onClick={submitRequest}>Submit</button>  <button onClick={() => setBotMode(true)}>
            🤖 Simulate Bot
          </button></>}

      {message && <p>{message}</p>}
    </div>
  );
}
