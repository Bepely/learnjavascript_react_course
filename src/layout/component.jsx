import Header from "../header/component";
import Footer from "../footer/component";

function Layout({children}) {
    return (  
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;