import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import {
  TextField,
  DialogTitle
} from "@material-ui/core";

import {
  Fade
} from "shards-react";

const CustomToggle = ({ openOut, handler, toggle, text, title, optionInput, inputToggle, inputMessageVisible, inputMessage }) => {
  const [input, setInput] = useState({ value: '', });

  function onChangeInput(e) {
    var _input = e.target.value;
    setInput((prevState) => ({ ...prevState, value: _input }))

  }

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

        {
          optionInput ?
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-description">
                Ingresa el correo del paciente a notificar
              </DialogContentText>
              <DialogActions>
                <TextField
                  autoFocus
                  margin="dense"
                  id="mail"
                  label="Ingresa su correo ..."
                  type="email"
                  variant="standard"
                  onChange={onChangeInput}
                  value={input.value}
                />
                <Button onClick={() => { inputToggle({ input: input }); }} color="secondary" autoFocus>
                  Enviar
                </Button>
              </DialogActions>
              
              <DialogContentText>
                <Fade in={inputMessageVisible}>
                  {inputMessage}
                </Fade>
              </DialogContentText>
              </DialogContent>
            : null
        }
        <DialogActions>
          <Button onClick={toggle} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomToggle;
