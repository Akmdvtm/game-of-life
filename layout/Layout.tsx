import {LayoutProps} from "./Layout.props";
import {Header} from "./Header/Header";
import {SideBar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {FunctionComponent} from "react";
import styles from './Layout.module.css';


export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <SideBar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
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