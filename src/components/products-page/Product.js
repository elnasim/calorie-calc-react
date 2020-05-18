import React from "react";

export default function Product({
  title,
  proteins,
  fats,
  carbohydrates,
  calories,
  weight,
  id,
  remove,
}) {
  return (
    <div className="product-main">
      <div className="product-main__title">{title}</div>
      <div className="product-main__info">
        <div className="product-main__i">
          {proteins}
          <br />Б
        </div>
        <div className="product-main__i">
          {fats}
          <br />Ж
        </div>
        <div className="product-main__i">
          {carbohydrates}
          <br />У
        </div>
        <div className="product-main__i">
          {calories}
          <br />
          Ккал
        </div>
        <div className="remove" onClick={() => remove(id)}>
          <span className="material-icons">delete</span>
        </div>
      </div>
    </div>
  );
}
