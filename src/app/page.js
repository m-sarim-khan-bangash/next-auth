import { auth } from "@/auth";
import SignInButton from "@/components/SignInButton";
import Image from "next/image";
import styles from "./page.module.css";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await auth();
  console.log("Session:", session);

  if (session?.user) {
    return (
      <div className={styles.container}>
        <p className={styles.welcome}>Welcome, {session.user.name}!</p>
        <p className={styles.email}>Email: {session.user.email}</p>
        {session?.user?.image && (
          <Image
            className={styles.avatar}
            src={session.user.image}
            alt="User Avatar"
            width={50}
            height={50}
          />
        )}
        <SignOutButton />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.notSignedIn}>You are Not Signed In</p>
      <SignInButton />
    </div>
  );
}
