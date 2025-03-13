import {classNames} from "shared/lib/classNames/classNames";
import * as s from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={s.switcher}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;