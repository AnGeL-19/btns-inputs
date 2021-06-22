import React from 'react';
import {Input} from '../input/Input';
import './style.css';

export const Inputs = () => {
    return (
        <div>
            <h1 className="title">Inputs</h1>

            <div className="grid-components">
                
                {/* Deafult */}

                <div className="character-input" >
                    <p>{'<Input />'}</p>
                    <Input />
                </div>

                <div className="character-input" >
                    <p>{'&:hover'}</p>
                    <Input demo="default-demo-hover" />
                </div>

                <div className="character-input" >
                    <p>{'&:focus'}</p>
                    <Input demo="default-demo-focus" />
                </div>

                {/* Error */}

                <div className="character-input grid2" >
                    <p>{'<Input error />'}</p>
                    <Input error />
                </div>

                <div className="character-input grid3" >
                    <p>{'&:hover'}</p>
                    <Input  />
                </div>

                <div className="character-input grid3-2" >
                    <p>{'&:focus'}</p>
                    <Input error />
                </div>

                <div className="character-input grid4" >
                    <p>{'<Input disabled />'}</p>
                    <Input disabled />
                </div>

                <div className="grid-three-spaces">
                    <div className="character-input grid6 " >
                        <p>{'<Input helperText=”Some interesting text” />'}</p>
                        <Input helperText="Some interesting text" />
                    </div>

                    <div className="character-input grid2-4" >
                        <p>{'<Input helperText=”Some interesting text” error />'}</p>
                        <Input helperText="Some interesting text" error />
                    </div>
                </div>

                <div className="grid-three-spaces">
                    <div className="character-input grid6 " >
                        <p>{'<Input startIcon />'}</p>
                        <Input startIcon="call" />
                    </div>

                    <div className="character-input grid2-4" >
                        <p>{'<Input endIcon />'}</p>
                        <Input endIcon="lock" />
                    </div>
                </div>

                <div className="character-input grid9" >
                        <p>{'<Input value=”text” />'}</p>
                        <Input value="text" />
                </div>

                <div className="grid-three-spaces">
                    <div className="character-input grid11 " >
                        <p>{'<Input size=”sm” />'}</p>
                        <Input size="sm" />
                    </div>

                    <div className="character-input grid12" >
                        <p>{'<Input size=”md” />'}</p>
                        <Input size="md" />
                    </div>
                </div>

                <div className="character-input  grid-full" >
                        <p>{'<Input fullWidth />'}</p>
                        <Input fullWith />
                </div>

                <div className="character-input" >
                        <p>{'<Input multiline row=”4” />'}</p>
                        <Input multiline row="4" />
                </div>

            </div>            
            <p className="link-material-icon">Icons: https://material.io/resources/icons/?style=round</p>

            <footer><p>created by <b>Angel MR</b> - devChallenges.io</p></footer>
        </div>
    )
}
