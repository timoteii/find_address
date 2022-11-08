import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const btnOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setOpen((prev) => !prev);
    open ? e.currentTarget.classList.add("active") : e.currentTarget.classList.remove("active")
  };

  return (
    <div className="navbar">
      <nav className="navbar__menu  menu">
        <h2 className="menu__title">Меню</h2>
        <div className="menu__item item">
            <img src="ic_главная.svg" alt="" className="item__img" />
          <Link to="/" className="item__text">
            Главная
          </Link>
        </div>
        <div className="menu__item item">
          <img src="Vectorsearch.svg" alt="" className="item__img" />
          <Link to="/address" className="item__text">
            Поиск адресов
          </Link>
        </div>
        <div className="menu__item item">
          <img src="vs_tablestabs.svg" alt="" className="item__img" />
          <Link to="/" className="item__text">
            Таблицы
          </Link>
        </div>
        <div className="menu__item item">
          <img src="Group 697.svg" alt="" className="item__img" />
          <Link to="/" className="item__text">
            Календарь
          </Link>
        </div>
        <div className="menu__item item">
          <img src="Vectormaps.svg" alt="" className="item__img" />
          <Link to="/" className="item__text">
            Карты
          </Link>
        </div>
        <div className="menu__item item">
          <img src="Vectorvid.svg" alt="" className="item__img" />
          <Link to="/" className="item__text">
            Виджеты
          </Link>
        </div>
        <div className="menu__item item">
          <img src="Vectorsettings.svg" alt="" className="item__img" />
          <Link to="/" className="item__text">
            Настройки
          </Link>
          <button onClick={btnOnClick} className="item__button">
            <img src="Polygon 8.svg" alt="" />
          </button>
        </div>
        {open && (
          <div className="active">
            <div className="active__i i">
              <img src="Group.svg" alt="" className="i__img" />
              <Link to="/" className="i__text">
                Настройки профиля
              </Link>
            </div>
            <div className="active__i i">
              <img src="Vectortel.svg" alt="" className="i__img" />
              <Link to="/" className="i__text ">
                Управление финансами
              </Link>
            </div>
          </div>
        )}
        <div className="menu__item item">
          <img src="Vectorexit.svg" alt="" className="item__img" />
          <Link to="/" className="item__text">
            Выход
          </Link>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };
