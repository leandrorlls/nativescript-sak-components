import { SakTextFieldBase } from "./sak-textfield.common";
export declare class SakTextField extends SakTextFieldBase {
    nativeView: android.widget.EditText;
    initialText: string;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
