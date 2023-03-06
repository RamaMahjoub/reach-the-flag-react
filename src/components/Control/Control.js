import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import './Control.css';

export const Control = ({moveLeft, moveRight, moveUp, moveDown}) => {
    return (
        <div className="control">
            <div className="control-column">
                <IconButton className="left" onClick={() => {
                    moveLeft();
                }}>
                    <ArrowBackIcon className="override" />
                </IconButton>
                <IconButton className="right" onClick={() => {
                    moveRight();
                }}>
                    <ArrowForwardIcon className="override" />
                </IconButton>
            </div>
            <IconButton className="up" onClick={() => {
                moveUp();
            }}>
                <ArrowUpwardIcon className="override" />
            </IconButton>
            <IconButton className="down" onClick={() => {
                moveDown();
            }}>
                <ArrowDownwardIcon className="override" />
            </IconButton>
        </div>
    );
}