import Header from "../header/component";
import Footer from "../footer/component";
import PageScroller from "../pageScroller/component";
import { Outlet } from "react-router-dom";
import CartWrapper from "../cartWrapper/component";

function Layout() {
  return (
    <div>
      <PageScroller />
      <Header />
      <Outlet />
      <CartWrapper />
      <Footer />
    </div>
  );
}

export default Layout;
