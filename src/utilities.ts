import {TOptions} from "./types/IOptions.ts";
import {CheckBoxTypesEnum} from "./enums/CheckBoxTypesEnum.ts";

export function getSelectedCount(types: TOptions): number {
    return Object.values(types).filter(type => type).length
}

export function generatePassword(size: number, options: TOptions): string {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=\\'

    let characters = ''
    let result = ''

    if(options[CheckBoxTypesEnum.Lowercase]) {
        characters += lowercase
    }

    if(options[CheckBoxTypesEnum.Uppercase]) {
        characters += uppercase
    }

    if(options[CheckBoxTypesEnum.Numbers]) {
        characters += numbers
    }

    if(options[CheckBoxTypesEnum.Symbols]) {
        characters += symbols
    }

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
    }

    return result
}