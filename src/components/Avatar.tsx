import { ImgHTMLAttributes } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  inComment?: boolean;
}

export function Avatar({ inComment = false, ...props }: AvatarProps) {
  return (
    <img
      className={inComment ? styles.avatarComment : styles.avatar}
      {...props}
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
