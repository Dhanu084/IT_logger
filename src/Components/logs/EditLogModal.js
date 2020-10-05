import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { editLog } from "../../actions/logActions";

const EditLogModal = ({ current, techs, editLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      let editedLog = { message, tech, attention, date: new Date() };
      if (current) {
        editedLog = {
          ...editedLog,
          id: current.id,
        };
      }
      editLog(editedLog);
    }
    setMessage("");
    setTech("");
    setAttention(false);
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalsStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option
                value="disabled"
                defaultValue={current != null ? current.tech : ""}
              >
                {current != null ? current.tech : ""}
              </option>
              {techs.map((tech) => (
                <option
                  value={`${tech.firstName}${tech.lastName}`}
                  key={tech.id}
                >{`${tech.firstName} ${tech.lastName}`}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalsStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = (state) => ({
  current: state.log.current,
  techs: state.tech.techs,
});
export default connect(mapStateToProps, { editLog })(EditLogModal);
