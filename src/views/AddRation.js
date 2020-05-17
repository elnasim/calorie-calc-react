import React, { useState, useEffect } from "react";

export default function AddRation() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const prods = JSON.parse(localStorage.getItem("products"));
    setProducts(prods);
  }, []);

  const prods =
    products &&
    products.map((item) => {
      return (
        <option value={item.title} key={item.title}>
          {item.title}
        </option>
      );
    });

  return (
    <div className="add-ration">
      <div className="container">
        <div className="title">Добавить рацион</div>

        {products && (
          <form className="add-ration-form">
            <select className="input">{prods}</select>

            <input type="text" className="input" placeholder="Вес" />

            <button className="button">Добавить</button>
          </form>
        )}

        {!products && (
          <div className="title">Необходимо добавить хотя бы один продукт</div>
        )}
      </div>
    </div>
  );
}
