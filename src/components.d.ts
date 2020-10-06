/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcGocamViz {
        "gocamId": string;
        "graphFold": string;
        "showActivity": boolean;
        "showHasInput": boolean;
        "showHasOutput": boolean;
    }
}
declare global {
    interface HTMLWcGocamVizElement extends Components.WcGocamViz, HTMLStencilElement {
    }
    var HTMLWcGocamVizElement: {
        prototype: HTMLWcGocamVizElement;
        new (): HTMLWcGocamVizElement;
    };
    interface HTMLElementTagNameMap {
        "wc-gocam-viz": HTMLWcGocamVizElement;
    }
}
declare namespace LocalJSX {
    interface WcGocamViz {
        "gocamId"?: string;
        "graphFold"?: string;
        "showActivity"?: boolean;
        "showHasInput"?: boolean;
        "showHasOutput"?: boolean;
    }
    interface IntrinsicElements {
        "wc-gocam-viz": WcGocamViz;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-gocam-viz": LocalJSX.WcGocamViz & JSXBase.HTMLAttributes<HTMLWcGocamVizElement>;
        }
    }
}
