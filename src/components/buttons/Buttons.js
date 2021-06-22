import React from 'react';
import {Button} from '../btn/Button';

import './style.css';

export const Buttons = () => {
    return (
        <div>
            <h1 className="title">Buttons</h1>

            <div className="grid-components">

                <div className="character-btn">
                    <p>{'<Button />'}</p>
                    <Button />
                </div>

                <div className="character-btn ">
                    <p className="demostration">{'&:hover, &:focus'}</p>
                    <Button demo="default-demo"/>
                </div>

                <div className="character-btn grid2">
                    <p>{'<Button variant=”outline” />'}</p>
                    <Button variant="outline" />
                </div>

                <div className="character-btn grid3">
                    <p className="demostration">{'&:hover, &:focus'}</p>
                    <Button demo="outline-demo"/>
                </div>

                <div className="character-btn grid4">
                    <p>{'<Button variant=”text” />'}</p>
                    <Button variant="text" />
                </div>

                <div className="character-btn grid5">
                    <p className="demostration">{'&:hover, &:focus'}</p>
                    <Button demo="text-demo"/>
                </div>

                <div className="character-btn grid6">
                    <p>{'<Button disableShadow />'}</p>
                    <Button disableShadow color="primary" />
                </div>

                <div className="character-btn grid7">
                    <p>{'<Button variant=”text” />'}</p>
                    <Button disabled={true} />
                </div>

                <div className="character-btn grid8">
                    <p>{'<Button variant=”text” disabled />'}</p>
                    <Button variant="text" disabled={true} />
                </div>

                <div className="grid-three-spaces .grid-row-6">
                    <div className="character-btn grid9">
                        <p>{'<Button startIcon=”local_grocery_store” />'}</p>
                        <Button startIcon = "local_grocery_store" color="primary" />
                    </div>

                    <div className="character-btn grid10">
                        <p>{'<Button endIcon=”local_grocery_store” />'}</p>
                        <Button endIcon = "local_grocery_store" color="primary" />
                    </div>
                </div>
                
                <div className="character-btn grid11">
                    <p>{'<Button size=”sm” />'}</p>
                    <Button size="sm" color="primary" />
                </div>

                <div className="character-btn grid12">
                    <p>{'<Button size=”md” />'}</p>
                    <Button size="md" color="primary" />
                </div>

                <div className="character-btn grid13">
                    <p>{'<Button size=”lg” />'}</p>
                    <Button size="lg"  color="primary" />
                </div>

                <div className="character-btn grid14">
                    <p>{'<Button color=”default” />'}</p>
                    <Button size="sm" color="default"/>
                </div>

                <div className="character-btn grid15">
                    <p>{'<Button color=”primary” />'}</p>
                    <Button size="md"  color="primary" />
                </div>

                <div className="character-btn grid16">
                    <p>{'<Button color=”secondary” />'}</p>
                    <Button size="lg"  color="secondary"/>
                </div>

                <div className="character-btn grid17">
                    <p>{'<Button color=”danger” />'}</p>
                    <Button size="lg"  color="danger"/>
                </div>

                <div className="character-btn grid18">
                    <p>{'&:hover, &:focus'}</p>
                    <Button size="sm" demo="default-demo" />
                </div>

                <div className="character-btn grid19">
                    <p>{'&:hover, &:focus'}</p>
                    <Button size="md" demo="primary-demo" />
                </div>

                <div className="character-btn grid20">
                    <p>{'&:hover, &:focus'}</p>
                    <Button size="lg"  demo="secondary-demo" />
                </div>

                <div className="character-btn grid21">
                    <p>{'&:hover, &:focus'}</p>
                    <Button size="lg" demo="danger-demo" />
                </div>

            </div>

            <p className="link-material-icon">Icons: https://material.io/resources/icons/?style=round</p>

            <footer><p>created by <b>Angel MR</b> - devChallenges.io</p></footer>
        </div>
    )
}
