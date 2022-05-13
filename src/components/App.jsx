import React from "react";
import Form from "./Form";

function App() {

  const userIsRegistered = true;

  return (
    <div className="container">

      <Form isRegistered={userIsRegistered}/>

    </div>
  );
}

export default App;