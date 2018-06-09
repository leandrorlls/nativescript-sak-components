import { SakTextField as SakTextFieldDefinition } from "./sak-textfield";
import { View, Property } from "tns-core-modules/ui/core/view";
export declare const placeholderTextProperty: Property<SakTextFieldBase, string>;
export declare const placeholderTextColourProperty: Property<SakTextFieldBase, string>;
export declare const isPlaceholderAnimatedProperty: Property<SakTextFieldBase, string>;
export declare const maxlengthProperty: Property<SakTextFieldBase, string>;
export declare const ellipsizeProperty: Property<SakTextFieldBase, boolean>;
export declare const regexProperty: Property<SakTextFieldBase, string>;
export declare const letterColourProperty: Property<SakTextFieldBase, string>;
export declare abstract class SakTextFieldBase extends View implements SakTextFieldDefinition {
    placeholderText: string;
    maxlength: string;
    ellipsize: boolean;
    specialChars: string;
}
