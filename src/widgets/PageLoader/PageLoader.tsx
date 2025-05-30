import {classNames} from "shared/lib/classNames/classNames";
import * as s from './PageLoader.module.scss'
import Loader from "shared/ui/Loader/Loader";

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(s.page_loader, {}, [className])}>
            <Loader/>
        </div>
    );
};

export default PageLoader;