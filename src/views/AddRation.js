import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { read, save } from "../core/api";

export default function AddRation() {
  const [products, setProducts] = useState([]);
  const [ration, setRation] = useState([]);
  const [product, setProduct] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    const prods = read("products");
    const rations = read("ration");
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

    const productItem = products.find((item) => item.title === product);
    const isExist = ration.find((item) => item.title === product);

    if (isExist) {
      isExist.weight += +weight;
      save("ration", ration);
      history.push("/");
    } else {
      productItem.weight = +weight;
      ration.push(productItem);
      save("ration", ration);
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
              onChange={(e) => setWeight(e.target.value.trim())}
              value={weight}
            />

            <button className="button">
              Добавить
            </button>
          </form>
        )}

        {!products && (
          <div className="title">Необходимо добавить хотя бы один продукт</div>
        )}
      </div>
    </div>
  );
}
