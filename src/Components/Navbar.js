const Navbar = () => {
  return (
    <nav>
      <a href="/" className="nav-logo">
        MKGWAR
      </a>
      <div className="nav-links">
        <a className="nav-styled-links" href="/#about">
          About
        </a>
        <a className="nav-styled-links" href="/#work">
          Work
        </a>
        <a className="nav-styled-links" href="/#contact">
          Contact
        </a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/image-uploader-mkgwar.appspot.com/o/Resume.pdf?alt=media&token=eec1781c-5f50-4817-9c28-ff99768648ea"
          target="_blank"
        >
          <div className="nav-button-resume">Resume</div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
