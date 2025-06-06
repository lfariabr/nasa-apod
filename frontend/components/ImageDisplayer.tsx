import { APOD } from "../hooks/useApod";
import OpenAi from "./OpenAi";
import SocialShare from "./SocialShare";

export default function ImageDisplayer({ apod }: { apod: APOD }) {
  return (
    <div>
        <h2>{apod.title}</h2>
        {apod.media_type === "image" ? (
          <img src={apod.url} alt={apod.title} style={{ width: 700, height: 700, borderRadius: "6px", marginBottom: "1rem" }} />
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
        <OpenAi apod={apod} />
        <SocialShare apod={apod} />
    </div>
  );
}