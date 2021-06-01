import { useRef } from "react";
import styles from "./profile-form.module.css";

function ProfileForm({ onChangePassword }) {
  const enteredNewPassword = useRef();
  const enteredOldPassword = useRef();

  async function sumbmitHandler(e) {
    e.preventDefault();

    const oldPassword = enteredOldPassword.current.value;
    const newPassword = enteredNewPassword.current.value;

    onChangePassword({ oldPassword, newPassword });
  }
  return (
    <form className={styles.form} onSubmit={sumbmitHandler}>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={enteredNewPassword} />
      </div>
      <div className={styles.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={enteredOldPassword} />
      </div>
      <div className={styles.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
