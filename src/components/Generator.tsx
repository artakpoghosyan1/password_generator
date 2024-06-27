import {ChangeEvent, FC, useCallback, useState} from "react";
import copyIcon from '../assets/copy_icon.svg';
import {Checkboxes} from "./Checkboxes.tsx";
import {CheckBoxTypesEnum} from "../enums/CheckBoxTypesEnum.ts";
import {TOptions} from "../types/IOptions.ts";
import {getSelectedCount, generatePassword} from "../utilities.ts";

const optionsInitialValue = {
    [CheckBoxTypesEnum.Lowercase]: true,
    [CheckBoxTypesEnum.Uppercase]: false,
    [CheckBoxTypesEnum.Numbers]: false,
    [CheckBoxTypesEnum.Symbols]: false,
}

const PASSWORD_MIN_LENGTH = 5
const PASSWORD_MAX_LENGTH = 30

export const Generator: FC = () => {
    const [options, setOptions] = useState<TOptions>(optionsInitialValue)
    const [passwordLength, setPasswordLength] = useState<number>(PASSWORD_MIN_LENGTH)
    const [password, setPassword] = useState<string>('')

    const handleCheckboxChange = useCallback((type: CheckBoxTypesEnum) => {
        setOptions(types => {
            const value = !types[type]
            const checkedCount = getSelectedCount(types)

            return {
                ...types,
                [type]: !value && checkedCount === 1 ? types[type] : !types[type]
            }
        })
    }, [])

    const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPasswordLength(+event.target.value)
    }

    const handleGeneratePassword = () => {
        setPassword(generatePassword(passwordLength, options))
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
    };

    return <div className='generator'>
        <div className="form-group form-group-action mb-20">
            <button className='btn form-group-action__btn' onClick={copyToClipboard}>
                <img src={`${copyIcon}`} alt="Copy button"/>
            </button>
            <input
                type="text"
                className="form-field form-group-action__field generator__input"
                value={password}
            />
        </div>

        <div className='form-group mb-20'>
            <label className='form-label form-label--block'>Character length {passwordLength}</label>
            <input
                type='range'
                value={passwordLength}
                className='generator__range'
                onChange={handleRangeChange}
                min={PASSWORD_MIN_LENGTH}
                max={PASSWORD_MAX_LENGTH}
            />
        </div>

        <Checkboxes onChange={handleCheckboxChange} options={options}/>

        <button className="btn primary-btn generator__btn" onClick={handleGeneratePassword}>
            Generate
        </button>
    </div>
}