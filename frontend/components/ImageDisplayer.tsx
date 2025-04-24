import Image from "next/image";
import { APOD } from "../hooks/useApod";
import OpenAi from "./OpenAi";

export default function APODViewer({ apod }: { apod: APOD }) {
  return (
    <div>
        <h2>{apod.title}</h2>
        {apod.media_type === "image" ? (
          <Image 
            src={apod.url} 
            alt={apod.title} 
            style={{ margin: "1rem 0" }} 
            width={700}
            height={700}
            sizes="100vw,100vh"
          />
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
    </div>
  );
}