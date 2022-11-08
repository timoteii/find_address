import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="navmain">
        <span>   
            <img src="Vectorlogo.png" alt="" className="header__img" />
          <h3 className="header__title">Wrench CRM</h3>
        </span>
        <span>
          <img src="ic_personuser.svg" alt="" className="header__img" />
          <div className="header__name">Timofey</div>
          <div className="header__surname">Batsuev</div>
        </span>
      </nav>
    </header>
  );
};

export { Header };
