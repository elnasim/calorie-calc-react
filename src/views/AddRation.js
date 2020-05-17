import React, { useState, useEffect } from "react";

export default function AddRation() {
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState("");
  const [weight, setWeight] = useState("");

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

  function submitHandler(e) {
    e.preventDefault();

    if (!product || !weight) return;

    let ration;
    if (localStorage.getItem("ration")) {
      ration = JSON.parse(localStorage.getItem("ration"));
    } else {
      ration = [];
    }
    const productItem = products.find((item) => item.title === product);
    productItem.weight = weight;
    ration.push(productItem);

    localStorage.setItem("ration", JSON.stringify(ration));
  }

  return (
    <div className="add-ration">
      <div className="container">
        <div className="title">Добавить рацион</div>

        {products && (
          <form className="add-ration-form" onSubmit={submitHandler}>
            <select
              className="input"
              onChange={(e) => setProduct(e.target.value)}
            >
              {prods}
            </select>

            <input
              type="text"
              className="input"
              placeholder="Вес (г)"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />

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
