import {FC} from "react";
import copyIcon from '../assets/copy_icon.svg';
import {CheckBoxes} from "./CheckBoxes.tsx";

export const Generator: FC = () => {
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

        <CheckBoxes/>

        <button className="btn primary-btn generator__btn">Generate</button>
    </section>
}