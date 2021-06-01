import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthForm from "../components/auth/auth-form";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    async function getSess() {
      const session = await getSession();
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    }

    getSess();
  }, [router]);

  if (isLoading) {
    return <p>loading ... </p>;
  }
  return <AuthForm />;
}

export default AuthPage;
