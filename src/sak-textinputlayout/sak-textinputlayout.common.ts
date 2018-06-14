import { SakTextInputLayout as SakTextInputLayoutDefinition } from "./sak-textinputlayout";
import { View, Property } from "tns-core-modules/ui/core/view";
import { Color } from "tns-core-modules/color";

export { Property, Color };
export const hintTextAppearanceProperty = new Property<SakTextInputLayoutBase, string>({ name: "hintTextAppearance" });

export abstract class SakTextInputLayoutBase extends View implements SakTextInputLayoutDefinition {

}

hintTextAppearanceProperty.register(SakTextInputLayoutBase);