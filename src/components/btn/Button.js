import React, { memo } from 'react';
import './btn.css';

export const Button = memo(({variant='default', 
                        disableShadow, 
                        disabled=false,
                        startIcon,
                        endIcon,
                        size,
                        color,
                        demo
                    }) => {

    return (


        <button disabled={disabled}
                className={`btn 
                        ${demo ? '': variant} 
                        ${demo} 
                        ${disableShadow && 'disbaleShadow'}
                        ${disabled && 'disabled'}
                        ${size}
                        ${color}`} 
                
                >
            {startIcon && (<i class="material-icons md-18">{startIcon}</i>)} 
             <span>Defaul</span>  
            {endIcon && (<i class="material-icons md-18">{endIcon}</i>)} 
        </button>


    )
})
