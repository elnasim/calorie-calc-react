import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AddRation() {
  const [products, setProducts] = useState(null);
  const [ration, setRation] = useState(null);
  const [product, setProduct] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    const prods = JSON.parse(localStorage.getItem("products"));
    const rations = JSON.parse(localStorage.getItem("ration"));
    setProducts(prods);
    setRation(rations);
  }, []);

  let history = useHistory();

  const prods =
    products &&
    products.map((item) => {
      return (
        <option value={item.title} key={item.id}>
          {item.title}
        </option>
      );
    });

  function submitHandler(e) {
    e.preventDefault();

    if (!product || product === "Не выбрано" || !weight) return;

    let ration;
    if (localStorage.getItem("ration")) {
      ration = JSON.parse(localStorage.getItem("ration"));
    } else {
      ration = [];
    }
    const productItem = products.find((item) => item.title === product);
    const isExist = ration.find((item) => item.title === product);
    if (isExist) {
      isExist.weight += +weight;
      localStorage.setItem("ration", JSON.stringify(ration));
      history.push("/");
    } else {
      productItem.weight = +weight;
      ration.push(productItem);
      localStorage.setItem("ration", JSON.stringify(ration));
      history.push("/");
    }
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
              <option value="Не выбрано" defaultValue="Не выбрано">
                Не выбрано
              </option>
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
