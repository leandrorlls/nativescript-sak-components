import { TextField } from "tns-core-modules/ui/text-field/text-field";
import { SakTextField as SakTextFieldDefinition } from "./sak-textfield";
import { Property } from "tns-core-modules/ui/core/view";

export const ellipsizeProperty = new Property<SakTextFieldBase, boolean>({ name: "ellipsize", defaultValue: false });
export const regexProperty = new Property<SakTextFieldBase, string>({ name: "regex" });

export abstract class SakTextFieldBase extends TextField implements SakTextFieldDefinition {

}

ellipsizeProperty.register(SakTextFieldBase);
regexProperty.register(SakTextFieldBase);