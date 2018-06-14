import { SakTextInputLayout as SakTextInputLayoutDefinition } from "./sak-textinputlayout";
import { View, Property } from "tns-core-modules/ui/core/view";
import { Color } from "tns-core-modules/color";
export { Property, Color };
export declare const hintTextAppearanceProperty: Property<SakTextInputLayoutBase, string>;
export declare abstract class SakTextInputLayoutBase extends View implements SakTextInputLayoutDefinition {
}
