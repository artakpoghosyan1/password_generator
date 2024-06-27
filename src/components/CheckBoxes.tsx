import {FC} from "react";
import {CheckBoxEnums} from "../enums/CheckBoxEnums.ts";

interface ICheckBoxes {
    label: string
    type: CheckBoxEnums
}

const checkboxes: ICheckBoxes[] = [
    {
        label: 'Include Lowercase',
        type: CheckBoxEnums.Lowercase
    },
    {
        label: 'Include Uppercase',
        type: CheckBoxEnums.Uppercase
    },
    {
        label: 'Include Numbers',
        type: CheckBoxEnums.Numbers
    },
    {
        label: 'Include Symbols',
        type: CheckBoxEnums.Symbols
    }
]

export const CheckBoxes: FC = () => {
    return <ul className='mb-20'>
        {checkboxes.map(({label, type}, index) => (
            <div className={`form-group form-group--flex ${index < checkboxes.length - 1 && 'mb-10'}`}>
                <input type="checkbox" key={type} id={type}/>
                <label htmlFor={type} className="form-label">{label}</label>
            </div>
        ))}
    </ul>
}
