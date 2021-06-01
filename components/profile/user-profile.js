import { getSession, useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import ProfileForm from "./profile-form";
import styles from "./user-profile.module.css";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   async function getsess() {
  //     const session = await getSession();

  //     if (!session) {
  //       window.location.href = "/auth ";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   }

  //   getsess();
  // }, []);

  // if (isLoading) {
  //   return <p className={styles.profile}>Loading...</p>;
  // }

  async function onChangePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      toast.info(data.message || "Password Changed Successfully");
    } else {
      toast.error(data.message || "Error changing password");
    }
  }

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={onChangePasswordHandler} />
    </section>
  );
}

export default UserProfile;
