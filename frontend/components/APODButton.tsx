export default function APODButton({ onClick, loading }: { onClick: () => void; loading: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      style={{
        backgroundColor: "#1e40af",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "1rem",
      }}
    >
      {loading ? "Loading..." : "LOAD IMAGE"}
    </button>
  );
}