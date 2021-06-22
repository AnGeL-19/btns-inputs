import React from 'react';
import './input.css';

export const Input = ({error=false,
                       disabled=false,
                       helperText,
                       startIcon,
                       endIcon,
                       value,
                       size,
                       fullWith,
                       multiline=false,
                       row="4",
                       demo=''}) => {


    return (
        <div className={`${error && 'error-container'}
                         `}>
            <label for="in"
                   className={`title-input ${error && 'error-lbl'}`}>
                Label
            </label>
        
            {
                !multiline 
                ?
                (<div className={`${endIcon || startIcon ? 'input-i': ''}`}>
                
                    {startIcon && (<i className={`material-icons md-24
                                                start`}>{startIcon}</i>)} 
                    <input id="in"
                        type="text"
                        placeholder="Placeholder" 
                        className={`${demo}
                                    ${error && 'error-inp'}
                                    ${startIcon && 'startIcon'}
                                    ${endIcon && 'endIcon'}
                                    ${size+'-input'}
                                    ${fullWith && 'fullWith'}`
                                }
                        disabled={disabled} 
                        value={value}/>
                    {endIcon && (<i className={`material-icons md-24
                                                end`}>{endIcon}</i>)} 
                    
                </div>)
                :
                (
                <textarea className="txt-area" 
                          rows={row}
                          placeholder="Placerholder">

                </textarea>
                )
            }
            {helperText && (<span className={`helper ${error && 'error-lbl'}`}>{helperText}</span>)}
        </div>
    )
}
