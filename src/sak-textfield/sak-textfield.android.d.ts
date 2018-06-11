import { SakTextFieldBase } from "./sak-textfield.common";
import { View } from "tns-core-modules/ui/core/view";

export declare class SakTextField extends SakTextFieldBase {
    nativeView: TextField;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
