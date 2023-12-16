import React from "react";
import Alert from "./components/common/Alerts";

function App() {
  return (
    <>
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
