import {TCheckboxTypes} from "./types/ICheckboxTypes.ts";

export function checkIsSelectedCount(types: TCheckboxTypes) {
    return Object.values(types).filter(type => type).length
}