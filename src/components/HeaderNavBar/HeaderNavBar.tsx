import { useNavigate } from "react-router-dom";
import MenuIcon from "../../icons/MenuIcon";
import styles from "./headernavbar.module.css";

function HeaderNavBar() {
  const navigate = useNavigate();

  return (
    <header className={styles.appHeader}>
      <div className={styles.welcomeUser}>
        <div onClick={() => navigate(`/`)}>
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
    </header>
  );
}

export default HeaderNavBar;
