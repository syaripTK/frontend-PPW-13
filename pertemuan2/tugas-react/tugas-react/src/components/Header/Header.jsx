import styles from "./Header.module.css"

export const Header = () => {
  return (
    <nav
      className={styles.nav}
    >
      <div
        className={styles.head}
      >
        <a
          href="#"
          style={{ textDecoration: "none", color: "white", fontSize: "2em" }}
        >
          Navbar
        </a>
        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Home
            </a>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              About
            </a>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Features
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
