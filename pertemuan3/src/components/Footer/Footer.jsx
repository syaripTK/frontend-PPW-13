function Footer({ nama }) {
  return (
    <div>
      <h3>
        Copyright &copy; {new Date().getFullYear()} Developed by
        {nama ? nama : " Ahmad Syangkan Syarip"}
      </h3>
      <span>Make with &#10084;</span>
    </div>
  );
}

export default Footer;
