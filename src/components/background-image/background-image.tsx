export type BackgroundImage = {
  src: string;
  style: object;
};
import styles from "./background-image.module.css";
export default function BackgroundImage({ src, style }: BackgroundImage) {
  return (
    <>
      <img
        src={src}
        className={styles.bg}
        style={{
          ...style,
        }}
      ></img>
    </>
  );
}
