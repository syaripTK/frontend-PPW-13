import "./Footer.css";

function Footer({ nama }) {
  return (
    <footer className="footer">
      <h3>
        Copyright &copy; {new Date().getFullYear()} Developed by {nama ? nama : " Ahmad Syangkan Syarip"}
      </h3>
      <span>Make with &#10084;</span>
    </footer>
  );
}

export default Footer;
