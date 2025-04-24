export default function APODError({ message }: { message: string }) {
    return <p style={{ color: "red", fontWeight: "bold" }}>Error: {message}</p>;
  }