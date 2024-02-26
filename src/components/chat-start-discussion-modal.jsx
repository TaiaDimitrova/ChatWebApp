export function ChatStartDiscussionModal() {
  return (
    <div>
      <button
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Show Modal
      </button>
    </div>
  );
}
