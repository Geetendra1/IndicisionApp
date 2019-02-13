import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                onClick={props.handlleDeleteOtions}
                className="button button--link"
            >
                remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">please add options</p>}
        {
            props.options.map((option, index) => (
                <Option 
                count={index + 1}
                key={option}
                optionText={option}
                handlleDeleteOption={props.handlleDeleteOption}
                />
            ))
        }
    </div>
)

export default Options;
