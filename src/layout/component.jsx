import Header from "../header/component";
import Footer from "../footer/component";
import PageScroller from "../pageScroller/component";

function Layout({children}) {
    return (  
        <div>
            <PageScroller />
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;