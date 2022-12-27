import {SidebarProps} from "./Sidebar.props";


export const SideBar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};