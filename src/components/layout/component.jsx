import Header from "../header/component";
import Footer from "../footer/component";
import PageScroller from "../pageScroller/component";
import Cart from "../cart/component";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <PageScroller />
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
}

export default Layout;
