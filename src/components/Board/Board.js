import React, { useState } from "react";
import { MyDialog } from "../Dialog/Dialog";
import { useParams } from "react-router-dom";
import { getLevelById } from "../../levels/levels";
import { isWin } from "../../modules/checkWin";
import { isValidCell } from "../../modules/checkValidCell";
import { Cell } from "../Cell/Cell";
import { move } from "../../modules/move";
import { checkMovies } from "../../modules/checkMovies";
import { Control } from "../Control/Control";
import './Board.css'

function Board() {

    let { id } = useParams();
    let level = getLevelById(Number(id));
    let { width, height, personPosition, cells, finalPosition, vipCells, winState } = level;
    let [state, setState] = useState({ cells: cells, personPosition: personPosition });
    let customStyle = {
        width: (width * 75) + 70,
        height: (height * 75) + 90,
    }
    let [win, setWin] = useState(false);
    let [lost, setLost] = useState(false);

    function moveRight() {
        if ((state.personPosition + 1) % (width) !== 0) {
            if (isValidCell(state.cells, state.personPosition + 1)) {
                const newState = move(state, vipCells, finalPosition, true, 1);
                setWin(isWin(newState, width, height, winState));
                setLost(checkMovies(newState, state.personPosition + 1, width, height));
                setState({ cells: newState, personPosition: state.personPosition + 1 });
            }
        }
    }

    function moveLeft() {
        if ((state.personPosition) % width !== 0) {
            if (isValidCell(state.cells, state.personPosition - 1)) {
                const newState = move(state, vipCells, finalPosition, false, 1);
                setWin(isWin(newState, width, height, winState));
                setLost(checkMovies(newState, state.personPosition - 1, width, height));
                setState({ cells: newState, personPosition: state.personPosition - 1 });
            }
        }
    }

    function moveDown() {
        if (state.personPosition + width < (width * height)) {
            if (isValidCell(state.cells, state.personPosition + width)) {
                const newState = move(state, vipCells, finalPosition, true, width);
                setWin(isWin(newState, width, height, winState));
                setLost(checkMovies(newState, state.personPosition + width, width, height));
                setState({ cells: newState, personPosition: state.personPosition + width });
            }
        }
    }

    function moveUp() {
        if ((state.personPosition - width + 1) > 0) {
            if (isValidCell(state.cells, state.personPosition - width)) {
                const newState = move(state, vipCells, finalPosition, false, width);
                setWin(isWin(newState, width, height, winState));
                setLost(checkMovies(newState, state.personPosition - width, width, height));
                setState({ cells: newState, personPosition: state.personPosition - width });
            }
        }
    }

    return (
        <div>
            <div className='container' style={customStyle}>
                {state.cells.map((cell, index) => {
                    return (
                        <Cell key={index} id={index} text={cell} />
                    )
                })}
            </div>
            <Control moveUp={moveUp} moveDown={moveDown} moveRight={moveRight} moveLeft={moveLeft} />
            {((win && lost) || (win && !lost)) && <MyDialog levelIndex={id} label="You Won 🥳" playerState="Next" openDialog={win ? true : false} />}
            {(lost && !win) && <MyDialog levelIndex={id} label="You Lost 😢" playerState="Retry" openDialog={lost ? true : false} />}
        </div>
    );
}

export default Board;