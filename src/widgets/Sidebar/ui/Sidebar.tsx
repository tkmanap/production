import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import * as s from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    const {t} = useTranslation('translate')
    return (
        <div
            data-testid='sidebar'
            className={classNames(s.sidebar, {[s.collapsed]: collapsed}, [className])}
        >
            <Button
                data-testid={'sidebar-toggle'}
                theme={ThemeButton.CLEAR} onClick={onToggle}
            >
                {t('toggle')}
            </Button>
            <div className={s.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;