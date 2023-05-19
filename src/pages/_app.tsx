// import "@/styles/globals.css";
import "@/styles/main.scss";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/layout";
import AdminLayout from "@/layout/adminLayout";

import Alert from "@/components/alert";

//import store
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps, router }: AppProps) {
  const path = usePathname();

  return (
    <>
      <Provider store={store}>
        {path.includes("/admin/") ? (
          <AdminLayout
            pageProps={pageProps}
            Component={Component}
            router={router}
          />
        ) : (
          <Layout pageProps={pageProps} Component={Component} router={router} />
        )}
      </Provider>
    </>
  );
}
