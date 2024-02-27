export function ChatControls({ isModalVisible, setIsModalVisible }) {
  return (
    <div className="chat-controls">
      <button
        className={`chat-controls-button ${isModalVisible ? "is-active" : ""}`}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Show Modal
      </button>

      <button
        className={`chat-controls-button ${!isModalVisible ? "is-active" : ""}`}
        onClick={() => {
          setIsModalVisible(false);
        }}
      >
        Hide Modal
      </button>

      <button
        className="chat-controls-button"
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Toggle Modal
      </button>
    </div>
  );
}
