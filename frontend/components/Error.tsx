export default function Error({ message }: { message: string }) {
    return <p style={{ color: "red", fontWeight: "bold" }}>Error: {message}</p>;
  }