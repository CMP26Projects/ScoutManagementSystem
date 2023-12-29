import { useState } from "react";
import Button from "../common/Button";
import TextInput from "../common/Inputs";
import "./EditPassword.scss";
import PageTitle from "../common/PageTitle";

export default function EditPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ oldPassword, newPassword });
  };

  return (
    <form onSubmit={submitHandler} className="edit-password container">
      <PageTitle title="تغيير كلمة السر" />
      <TextInput
        label="الرمز السري القديم"
        type="password"
        name="oldPassword"
        value={oldPassword}
        placeholder="********"
        onChange={(e) => setOldPassword(e.target.value)}
        required={true}
      />
      <TextInput
        label="الرمز السري الجديد"
        type="password"
        name="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="********"
        required={true}
      />
      <Button
        className="edit-password__btn Button--medium Button--primary-darker"
        type="submit"
      >
        تغيير كلمة السر
      </Button>
    </form>
  );
}
