import { APOD } from "../hooks/useApod";
import styles from "../styles/SocialShare.module.css";
import { useThemeContext } from "../context/ThemeContext";

interface SocialShareProps {
  apod: APOD;
}

export default function SocialShare({ apod }: SocialShareProps) {
  const { theme } = useThemeContext();
  if (!apod) return null;
  const funFact = apod.explanation.split(".")[0] + ".";
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${apod.title}: ${funFact} ${apod.url}`
  )}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    apod.url
  )}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    apod.url
  )}`;
  const whatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${apod.title}: ${funFact} ${apod.url}`
  )}`;

  return (
    <div className={`${styles.card} ${theme === "dark" ? styles.dark : styles.light}`}>
      <h3>Like it? Share now!</h3>
      <div style={{ padding: "0.2rem" }}></div>
      <img
        src={apod.url}
        alt={apod.title}
        className={styles.image}
      />
      <p>
        <strong>Fun Fact:</strong> {funFact}
      </p>
      <div className={styles.buttons}>
        {/* add a small border around the buttons */}
        <a className={styles.button} href={twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a className={styles.button} href={facebook} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a className={styles.button} href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className={styles.button} href={whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}