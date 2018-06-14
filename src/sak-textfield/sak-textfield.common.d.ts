import { TextField } from "tns-core-modules/ui/text-field/text-field";
import { SakTextField as SakTextFieldDefinition } from "./sak-textfield";
import { Property } from "tns-core-modules/ui/core/view";
export declare const ellipsizeProperty: Property<SakTextFieldBase, boolean>;
export declare const regexProperty: Property<SakTextFieldBase, string>;
export declare abstract class SakTextFieldBase extends TextField implements SakTextFieldDefinition {
}
