import { SakTextFieldBase } from "./sak-textfield.common";
export declare class SakTextField extends SakTextFieldBase {
    nativeView: android.widget.EditText;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
