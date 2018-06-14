import {
    SakTextFieldBase,
    ellipsizeProperty,
    regexProperty
} from "./sak-textfield.common";

export class SakTextField extends SakTextFieldBase {
    private _delegate: any;
    regex: string;
    ellipsize: boolean = true;

    constructor() {
        super();
        this._delegate = SakTextFieldDelegate.initWithOwnerAndDefaultImplementation(new WeakRef(this), this._delegate);
    }

    [ellipsizeProperty.setNative](value: boolean) {
        this.ellipsize = value;
    }

    [regexProperty.setNative](value: string) {
        this.regex = value;
    }
}

@ObjCClass(UITextFieldDelegate)
export class SakTextFieldDelegate extends NSObject implements UITextFieldDelegate {
    private _owner: WeakRef<SakTextField>;
    private _defaultImplementation: UITextFieldDelegate;

    public static initWithOwnerAndDefaultImplementation(owner: WeakRef<SakTextField>, defaultImplementation: UITextFieldDelegate): SakTextFieldDelegate {
        const delegate = SakTextFieldDelegate.new() as SakTextFieldDelegate;
        delegate._owner = owner;
        delegate._defaultImplementation = defaultImplementation;
        return delegate;
    }

    public textFieldShouldBeginEditing(textField: UITextField): boolean {
        return this._defaultImplementation.textFieldShouldBeginEditing(textField);
    }

    public textFieldDidBeginEditing(textField: UITextField) {
        textField.selectedTextRange = textField.textRangeFromPositionToPosition(textField.beginningOfDocument, textField.beginningOfDocument);
    }

    public textFieldDidEndEditing(textField: UITextField) {
        this._defaultImplementation.textFieldDidEndEditing(textField);
    }

    public textFieldShouldClear(textField: UITextField): boolean {
        return this._defaultImplementation.textFieldShouldClear(textField);
    }

    public textFieldShouldReturn(textField: UITextField): boolean {
        return this._defaultImplementation.textFieldShouldReturn(textField);
    }

    public textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, replacementString: string): boolean {
        if (replacementString && replacementString.length > 0) {
            const owner = this._owner.get();
            let pattern = new RegExp(owner.regex);

            return pattern.test(replacementString);
        } else {
            return true;
        }
    }
}