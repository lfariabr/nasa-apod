import { APOD } from "../hooks/useApod";

export default function APODViewer({ apod }: { apod: APOD }) {
  return (
    <div>
        <h2>{apod.title}</h2>
        {apod.media_type === "image" ? (
          <img src={apod.url} alt={apod.title} style={{ maxWidth: "100%", margin: "1rem 0" }} />
        ) : (
          <iframe
            src={apod.url}
            title={apod.title}
            style={{ width: "100%", height: "200px", margin: "1rem 0" }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>{apod.explanation}</p>
    </div>
  );
}