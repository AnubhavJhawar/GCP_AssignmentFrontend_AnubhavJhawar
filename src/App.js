import React from "react";
import "./App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(
      "https://asia-south1-anubhav-jhawar-gcp-assignment.cloudfunctions.net/function-1",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {})
      .catch((error) => {});
  };
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "10%" }}>
        GCP assignment by- Anubhav Jhawar
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Upload your files by clicking on upload button
      </h2>
      <form style={{ textAlign: "center" }}>
        <input style={{ alignSelf: "flex-start" }} type="file" name="file" />
        <br />
        <br />
        <button className="inp" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
