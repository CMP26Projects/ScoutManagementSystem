-- ADD CAPTAINS
INSERT INTO
  "Captain"(
    "firstName",
    "middleName",
    "lastName",
    "phoneNumber",
    "email",
    "password",
    "gender",
    "type"
  )
VALUES
  (
    "أمير",
    "أنور",
    "بخيت",
    "01221461992",
    "amir.kedis@gmail.com",
    "$2a$10$82orQ3yruIoakCWUg/29KuXBwJlZiezJzxUW.8Ek.Jvc/MPLagDYS",
    "male",
    "general"
  ) RETURNING *;