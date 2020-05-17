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
      <div className="product-main__title">
        {title} ({weight} г)
      </div>
      <div className="product-main__info">
        <div className="product-main__i">
          {(proteins * weight) / 100}
          <br />Б
        </div>
        <div className="product-main__i">
          {(fats * weight) / 100}
          <br />Ж
        </div>
        <div className="product-main__i">
          {(carbohydrates * weight) / 100}
          <br />У
        </div>
        <div className="product-main__i">
          {(calories * weight) / 100}
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
