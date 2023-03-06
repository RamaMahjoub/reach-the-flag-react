import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Link } from "react-router-dom";
import { getLevelById } from "../../levels/levels";

export const MyDialog = ({ levelIndex, label, playerState, openDialog }) => {
    const [open, setOpen] = useState(openDialog);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "500px",
                        },
                    },
                }}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" textAlign={"center"} fontSize="90px">
                        {label}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {playerState === 'Retry' ?
                        <Link reloadDocument={true} to={`/level/${Number(levelIndex)}`} className="link">
                            <Button onClick={handleClose}>
                                {playerState}
                            </Button>
                        </Link> :
                        (getLevelById(Number(levelIndex) + 1) !== undefined ?
                            <Link reloadDocument={true} to={`/level/${Number(levelIndex) + 1}`} className="link">
                                <Button onClick={handleClose}>
                                    {playerState}
                                </Button>
                            </Link> :
                            <Link to="Not Found" className="link">
                                <Button onClick={handleClose}>
                                    {playerState}
                                </Button>
                            </Link>)}
                </DialogActions>
            </Dialog>
        </>
    );
}
