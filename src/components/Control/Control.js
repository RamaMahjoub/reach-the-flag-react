import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import './Control.css';

export const Control = ({ dispatch, level }) => {
    let { width, height, finalPosition, vipCells, winState } = level;
    return (
        <div className="control">
            <div className="control-column">
                <IconButton className="left" onClick={() => {
                    dispatch({ type: 'moveLeft', payload: { width, height, vipCells, finalPosition, winState } });
                }}>
                    <ArrowBackIcon className="override" />
                </IconButton>
                <IconButton className="right" onClick={() => {
                    dispatch({ type: 'moveRight', payload: { width, height, vipCells, finalPosition, winState } });
                }}>
                    <ArrowForwardIcon className="override" />
                </IconButton>
            </div>
            <IconButton className="up" onClick={() => {
                dispatch({ type: 'moveUp', payload: { width, height, vipCells, finalPosition, winState } });
            }}>
                <ArrowUpwardIcon className="override" />
            </IconButton>
            <IconButton className="down" onClick={() => {
                dispatch({ type: 'moveDown', payload: { width, height, vipCells, finalPosition, winState } });
            }}>
                <ArrowDownwardIcon className="override" />
            </IconButton>
        </div>
    );
}