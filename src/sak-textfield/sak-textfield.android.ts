import {
    SakTextFieldBase,
    classProperty,
    hintProperty, 
    hintColorProperty,     
    maxlengthProperty,
    ellipsizeProperty,
    regexProperty,
    colorProperty
} from "./sak-textfield.common";

export class SakTextField extends SakTextFieldBase {
    nativeView: android.widget.EditText;

    /**
     * Creates new native text field.
     */
    public createNativeView(): Object {
        let textField = new android.widget.EditText(this._context);
        textField.setMaxLines(1);

        return textField;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }

    [classProperty.setNative](value: string) {
        this.className = value;
    }

    [hintProperty.setNative](value: string) {
        this.nativeView.setHint(value);
    }

    [hintColorProperty.setNative](value: string) {
        if (value) {
            this.nativeView.setHintTextColor(android.graphics.Color.parseColor(`#${value}`));
        }
    }

    [maxlengthProperty.setNative](value: string) {
        if (value) {
            let fArray = [];
            fArray[0] = new android.text.InputFilter.LengthFilter(Number(value));
            this.nativeView.setFilters(fArray);
        }
    }

    [ellipsizeProperty.setNative](value: boolean) {
        if (value) {
            this.nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
        }
    }

    [colorProperty.setNative](value: string) {
        if (value) {
            this.nativeView.setTextColor(android.graphics.Color.parseColor(`#${value}`));
        }
    }

    [regexProperty.setNative](regex: string) {

        this.nativeView.addTextChangedListener(new android.text.TextWatcher({

            beforeTextChanged(s: string, index: number, toBeReplaced: number, addedCount: number): void {

            },
            onTextChanged(s: string, index: number, replacedCount: number, addedCount: number): void {

            },
            afterTextChanged(s: android.text.Editable): void {
                if (regex && regex != "") {
                    let text = s.toString();
                    let length = s.length();
    
                    if (length > 0 && !java.util.regex.Pattern.matches(regex, text)) {
                        s.delete(length - 1, length);
                    }
                }
            }
        }));
    }
}