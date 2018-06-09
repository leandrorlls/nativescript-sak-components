import { SakTextInputLayoutBase } from "./sak-textinputlayout.common";

export class SakTextInputLayout extends SakTextInputLayoutBase {

    nativeView: android.widget.EditText;

    public createNativeView(): Object {
        let textField = new android.widget.EditText(this._context);

        textField.setMaxLines(1);

        return textField;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
}