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
          href="https://firebasestorage.googleapis.com/v0/b/image-uploader-mkgwar.appspot.com/o/Mohit_Gangwar_August.pdf?alt=media&token=dffb02bd-2d3f-4db2-878e-dc1f8a19042f"
          target="_blank"
        >
          <div className="nav-button-resume">Resume</div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
