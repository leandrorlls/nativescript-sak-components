import { SakTextFieldBase } from "./sak-textfield.common";
export declare class SakTextField extends SakTextFieldBase {
    private _delegate;
    regex: string;
    ellipsize: boolean;
    constructor();
}
export declare class SakTextFieldDelegate extends NSObject implements UITextFieldDelegate {
    private _owner;
    private _defaultImplementation;
    static initWithOwnerAndDefaultImplementation(owner: WeakRef<SakTextField>, defaultImplementation: UITextFieldDelegate): SakTextFieldDelegate;
    textFieldShouldBeginEditing(textField: UITextField): boolean;
    textFieldDidBeginEditing(textField: UITextField): void;
    textFieldDidEndEditing(textField: UITextField): void;
    textFieldShouldClear(textField: UITextField): boolean;
    textFieldShouldReturn(textField: UITextField): boolean;
    textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, replacementString: string): boolean;
}
