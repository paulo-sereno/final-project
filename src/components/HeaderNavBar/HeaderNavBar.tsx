import MenuIcon from "../../icons/MenuIcon";
import styles from "./headernavbar.module.css";

function HeaderNavBar() {
  return (
    <>
      <div className={styles.welcomeUser}>
        <div>
          <img
            className={styles.userAvatar}
            src="/src/assets/AymenAvatar.png"
            alt="User profile avatar"
          />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.welcomeText}>Welcome back</span>
          <span className={styles.username}>Aymen Missaoui</span>
        </div>
      </div>
      <div className="menuIcon">
        <MenuIcon />
      </div>
    </>
  );
}

export default HeaderNavBar;
