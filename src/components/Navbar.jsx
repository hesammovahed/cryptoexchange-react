import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar container " dir="rtl" >
      <div className="register">
        <button className="register__sing-in btn">ورود</button>
        <button className="register__sing-up btn">ثبت نام</button>
      </div>
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="transaction">خرید \ فروش</Link>
          </li>
          <li className="menu__item">
            <Link to="growth">رشد</Link>
          </li>
          <li className="menu__item">
            <Link to="market">مارکت</Link>
          </li>
          <li className="menu__item">
            <Link to="aboutUs">ارتباط با ما</Link>
          </li>
        </ul>
      </div>
      <Link to="/" className="logo" style={{"color":'black' ,"textDecoration":"none"}}>
        <h4 className="logo__name">Hesam Exchange</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
