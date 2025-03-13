declare module "*.module.css"
declare module "*.scss" {
    interface iClassNames {
        [className: string]: string
    }

    const classNames: iClassNames;
    export = classNames;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg" {
    import React from "react";
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default SVG;
}

declare const __IS_DEV__ : boolean
