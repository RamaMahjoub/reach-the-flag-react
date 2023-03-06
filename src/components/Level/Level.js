import React from "react";
import { levels } from "../../levels/levels";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './Level.css'

export const Level = () => {
    return (
        <Stack direction="row" spacing={2} className="stack">
            {
                levels.map((level, index) => {
                    return (
                        <Link key={index + 1} to={`/level/${index + 1}`} className="link">
                            <Button key={index + 1} variant="outlined" color="secondary">
                                {index + 1}
                            </Button>
                        </Link>
                    )
                })
            }
        </Stack>
    )

}

