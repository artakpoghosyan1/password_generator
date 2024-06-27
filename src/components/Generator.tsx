import {FC, useCallback, useState} from "react";
import copyIcon from '../assets/copy_icon.svg';
import {Checkboxes} from "./Checkboxes.tsx";
import {CheckBoxTypesEnum} from "../enums/CheckBoxTypesEnum.ts";
import {TCheckboxTypes} from "../types/ICheckboxTypes.ts";
import {checkIsSelectedCount} from "../utilities.ts";

const checkboxTypesInitialValue = {
    [CheckBoxTypesEnum.Lowercase]: true,
    [CheckBoxTypesEnum.Uppercase]: false,
    [CheckBoxTypesEnum.Numbers]: false,
    [CheckBoxTypesEnum.Symbols]: false,
}

export const Generator: FC = () => {
    const [checkboxTypes, setCheckboxTypes] = useState<TCheckboxTypes>(checkboxTypesInitialValue)

    const handleCheckboxChange = useCallback((type: CheckBoxTypesEnum) => {
        setCheckboxTypes(types => {
            const value = !types[type]
            const checkedCount = checkIsSelectedCount(types)

            return {
                ...types,
                [type]: !value && checkedCount === 1 ? types[type] : !types[type]
            }
        })
    }, [])

    return <section className='generator'>
        <div className="form-group form-group-action mb-15">
            <button className='btn form-group-action__btn'>
                <img src={`${copyIcon}`} alt="Copy button"/>
            </button>
            <input type="text" className="form-field form-group-action__field generator__input"/>
        </div>

        <div className='mb-15 form-group'>
            <label className='form-label form-label--block'>Character length</label>
            <input type="range" className='generator__range'/>
        </div>

        <Checkboxes onChange={handleCheckboxChange} checkboxTypes={checkboxTypes}/>

        <button className="btn primary-btn generator__btn">Generate</button>
    </section>
}