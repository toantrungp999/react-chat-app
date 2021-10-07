import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./RoomModal.scss";

function RoomModal({ open, onClose, onSubmit }) {
  const [room, setRoom] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!room || !onSubmit) return;

    onSubmit(room);
    setRoom("");
    onClose();
  };

  const handleOnChange = (e) => {
    setRoom(e.target.value);
  };

  return (
    <Modal open={open} onClose={onClose} className="room-modal">
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleOnSubmit}
        className="room-modal__form"
      >
        <TextField
          label="Room"
          variant="standard"
          onChange={handleOnChange}
          value={room}
        />
        <Button
          variant="contained"
          className="room-modal__form__btn"
          type="submit"
        >
          Create
        </Button>
      </Box>
    </Modal>
  );
}

RoomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RoomModal;
