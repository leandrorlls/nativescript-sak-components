import { SakTextField as SakTextFieldDefinition } from "./sak-textfield";
import { View, Property } from "tns-core-modules/ui/core/view";
export { View } from "tns-core-modules/ui/core/view";
export declare const classProperty: Property<SakTextFieldBase, string>;
export declare const hintProperty: Property<SakTextFieldBase, string>;
export declare const hintColorProperty: Property<SakTextFieldBase, string>;
export declare const maxlengthProperty: Property<SakTextFieldBase, string>;
export declare const ellipsizeProperty: Property<SakTextFieldBase, boolean>;
export declare const regexProperty: Property<SakTextFieldBase, string>;
export declare const colorProperty: Property<SakTextFieldBase, string>;
export declare const backgroundColorProperty: Property<SakTextFieldBase, string>;
export declare const fontProperty: Property<SakTextFieldBase, string>;
export declare const textSizeProperty: Property<SakTextFieldBase, string>;
export declare abstract class SakTextFieldBase extends View implements SakTextFieldDefinition {
}
