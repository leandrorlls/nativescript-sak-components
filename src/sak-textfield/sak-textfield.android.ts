import {
    SakTextFieldBase,
    ellipsizeProperty,
    regexProperty
} from "./sak-textfield.common";

export class SakTextField extends SakTextFieldBase {
    [ellipsizeProperty.setNative](value: boolean) {
        if (value) {
            this.nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
        }
    }

    [regexProperty.setNative](regex: string) {

        this.nativeView.addTextChangedListener(new android.text.TextWatcher({

            beforeTextChanged(s: string, index: number, toBeReplaced: number, addedCount: number): void {

            },
            onTextChanged(s: string, index: number, replacedCount: number, addedCount: number): void {

            },
            afterTextChanged(s: android.text.Editable): void {
                if (regex && regex !== "") {
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