import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header__link">Главная</Link>
      <Link to="/new-product" className="header__link">Добавить продукт</Link>
    </nav>
  );
}
