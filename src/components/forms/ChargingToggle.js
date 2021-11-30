import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    CircularProgress
} from "@material-ui/core";

const ChargingToggle = ({ openOut, handler, toggle, text, title }) => {

    return (
        <div>
            <Dialog
                open={openOut}
                onClose={toggle}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogContentText className="text-center">
                    <CircularProgress />
                </DialogContentText>
            </Dialog>
        </div>
    );
}

export default ChargingToggle;
