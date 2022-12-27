import {LayoutProps} from "./Layout.props";
import {Header} from "./Header/Header";
import {SideBar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {FunctionComponent} from "react";


export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <SideBar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};