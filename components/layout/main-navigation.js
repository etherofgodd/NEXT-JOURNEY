import Link from "next/link";
import { signOut, useSession } from "next-auth/client";

import styles from "./main-navigation.module.css";

function MainNavigation() {
  const [session, loading] = useSession();

  async function logoutHandler() {
    await signOut();
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>{!session && !loading && <Link href="/auth">Login</Link>}</li>
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
