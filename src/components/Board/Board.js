import React, { useReducer } from "react";
import { MyDialog } from "../Dialog/Dialog";
import { useParams } from "react-router-dom";
import { getLevelById } from "../../levels/levels";
import { Cell } from "../Cell/Cell";
import { Control } from "../Control/Control";
import './Board.css'
import reducer from "./reducer";

function Board() {

    let { id } = useParams();
    let level = getLevelById(Number(id));
    let { width, height, personPosition, cells } = level;
    let customStyle = {
        width: (width * 75) + 70,
        height: (height * 75) + 90,
    }
    const [state, dispatch] = useReducer(reducer, { cells: cells, personPosition: personPosition, win: false, lost: false });
    const { win, lost } = state;
    
    return (
        <div>
            <div className='container' style={customStyle}>
                {state.cells.map((cell, index) => {
                    return (
                        <Cell key={index} id={index} text={cell} />
                    )
                })}
            </div>
            <Control dispatch={dispatch} level={level} />
            {((win && lost) || (win && !lost)) && <MyDialog levelIndex={id} label="You Won 🥳" playerState="Next" openDialog={win ? true : false} />}
            {(lost && !win) && <MyDialog levelIndex={id} label="You Lost 😢" playerState="Retry" openDialog={lost ? true : false} />}
        </div>
    );
}

export default Board;