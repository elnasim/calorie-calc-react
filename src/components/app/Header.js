import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header__link">
        Главная
      </Link>
      <Link to="/products" className="header__link">
        Продукты
      </Link>
    </nav>
  );
}
