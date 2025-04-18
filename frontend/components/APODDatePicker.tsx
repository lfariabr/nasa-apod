import { useState } from "react";

interface APODDatePickerProps {
  onSelectDate: (date: string) => void;
  loading: boolean;
}

export default function APODDatePicker({ onSelectDate, loading }: APODDatePickerProps) {
  const [date, setDate] = useState("");
  
  // Calculate max date (today) and min date (NASA APOD started in 1995-06-16)
  const today = new Date().toISOString().split("T")[0];
  const minDate = "1995-06-16";

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="date"
        value={date}
        min={minDate}
        max={today}
        onChange={(e) => setDate(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginRight: "10px"
        }}
        disabled={loading}
      />
      <button
        onClick={() => date && onSelectDate(date)}
        disabled={!date || loading}
        style={{
          backgroundColor: "#1e88e5",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: date && !loading ? "pointer" : "not-allowed",
          opacity: date && !loading ? 1 : 0.7,
        }}
      >
        LOAD IMAGE OF SPECIFIC DAY
      </button>
    </div>
  );
}