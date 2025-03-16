import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import * as s from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/Button";

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
            <Button theme={ThemeButton.CLEAR} onClick={onToggle}>toggle</Button>
            <div className={s.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;