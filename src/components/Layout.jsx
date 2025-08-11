import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ThemeProvider } from "next-themes";
import Footer from "./Footer";

const Layout = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
