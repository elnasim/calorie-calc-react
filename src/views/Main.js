import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="day">
          <div className="day__change">
            <span className="material-icons">undo</span>
          </div>
          <div className="day__date">16.05.2020</div>
          <div className="day__change">
            <span className="material-icons">redo</span>
          </div>
        </div>

        <div className="product-main">
          <div className="product-main__title">Огурец</div>
          <div className="product-main__info">
            <div className="product-main__i">
              100
              <br />Б
            </div>
            <div className="product-main__i">
              100
              <br />Ж
            </div>
            <div className="product-main__i">
              100
              <br />У
            </div>
            <div className="product-main__i">
              100
              <br />
              Ккал
            </div>
            <div className="remove">
              <span className="material-icons">delete</span>
            </div>
          </div>
        </div>

        <div className="product-main">
          <div className="product-main__title">Всего</div>
          <div className="product-main__info">
            <div className="product-main__i">
              100
              <br />Б
            </div>
            <div className="product-main__i">
              100
              <br />Ж
            </div>
            <div className="product-main__i">
              100
              <br />У
            </div>
            <div className="product-main__i">
              100
              <br />
              Ккал
            </div>
          </div>
        </div>

        <Link to="/add-ration" className="button">
          Добавить
        </Link>
      </div>
    </div>
  );
}
