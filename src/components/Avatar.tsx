import styles from "./Avatar.module.css";

interface AvatarProps {
  inComment?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ inComment = false, src, alt }: AvatarProps) {
  return (
    <img
      className={inComment ? styles.avatarComment : styles.avatar}
      src={src}
      alt={alt}
    ></img>
  );
}

// export function Avatar({ src, icon: Icon, inComment }) {
//   return (
//     <div className={inComment ? styles.avatarComment : styles.avatar}>
//       {src ? <img src={src} alt="Avatar" /> : Icon ? <Icon size={32} /> : null}
//     </div>
//   );
// }
