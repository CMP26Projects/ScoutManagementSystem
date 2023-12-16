import React from "react";
import Alert from "./components/common/Alerts";

// Global Style (includes normalize.css)
import "./assets/styles/global/global.scss";

function App() {
  return (
    <>
      <h1>HI there test normalize</h1>
      <Alert
        title="عنوان"
        info="نص الرسالة"
        buttontext="تمت المعاينة"
        showRightBox={false}
        Onclick={() => console.log("clicked")}
        color="yellow"
      />
    </>
  );
}

export default App;
