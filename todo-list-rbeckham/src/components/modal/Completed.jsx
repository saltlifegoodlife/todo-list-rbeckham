import "./Completed.css";

const Completed = ({ complete, onClose }) => {
  let closeHandler = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="card">
        <h2>Completed Tasks</h2>
        {complete.map((task) => {
          return (
            <div className="task" key={task.id}>
              <input
                id={`checkbox-${task.id}`}
                type="checkbox"
                value=""
                checked
                readOnly
                disabled
              />
              <label htmlFor={`checkbox-${task.id}`}>{task.task}</label>
            </div>
          );
        })}
        <button className="close-btn" onClick={closeHandler}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Completed;
