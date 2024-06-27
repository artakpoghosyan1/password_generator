import {FC, memo} from "react";
import {CheckBoxTypesEnum} from "../enums/CheckBoxTypesEnum.ts";
import {TOptions} from "../types/IOptions.ts";

interface Props {
    onChange: (type: CheckBoxTypesEnum) => void
    options: TOptions
}

interface ICheckBoxes {
    label: string
    type: CheckBoxTypesEnum
}

const checkboxes: ICheckBoxes[] = [
    {
        label: 'Include Lowercase',
        type: CheckBoxTypesEnum.Lowercase
    },
    {
        label: 'Include Uppercase',
        type: CheckBoxTypesEnum.Uppercase
    },
    {
        label: 'Include Numbers',
        type: CheckBoxTypesEnum.Numbers
    },
    {
        label: 'Include Symbols',
        type: CheckBoxTypesEnum.Symbols
    }
]

export const Checkboxes: FC<Props> = memo(({onChange, options}) => (
    <ul className='mb-30'>
        {checkboxes.map(({label, type}, index) => (
            <div className={`form-group form-group--flex ${index < checkboxes.length - 1 && 'mb-10'}`} key={type}>
                <input
                    type="checkbox"
                    id={type}
                    onChange={() => onChange(type)}
                    checked={options[type]}
                />
                <label htmlFor={type} className="form-label">{label}</label>
            </div>
        ))}
    </ul>
))
