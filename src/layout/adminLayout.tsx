import type { AppProps } from "next/app";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import Login from "@/pages/login";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ Component, pageProps }: AppProps) {
  const state = useSelector((state: any) => state.user);
  const router = useRouter();
  const { user } = state;
  const { islogin, isAdmin } = user;

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  });

  return (
    <>
      {islogin ? (
        <>
          <Header />
          <div className="main-content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
