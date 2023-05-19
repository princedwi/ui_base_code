import type { AppProps } from "next/app";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import Login from "@/pages/login";
import Alert from "@/components/alert";

export default function Layout({ Component, pageProps }: AppProps) {
  const state = useSelector((state: any) => state.user);
  const alert = useSelector((state: any) => state.alert);
  const { user } = state;
  const { islogin } = user;

  return (
    <>
      {islogin ? (
        <>
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
            <div className="col-12">
              <Alert />
              <div
                className={
                  alert.show ? "alert-top main-content" : "main-content"
                }
              >
                <Component {...pageProps} />
              </div>
            </div>
            <div className="col-12">
              <Footer />
            </div>
          </div>
          {/* <Header />
          <Alert />
          
          <Footer /> */}
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
