import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.body.lastName}`);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;
