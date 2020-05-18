import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { save, read } from "../core/api";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [proteins, setProteins] = useState("");
  const [fats, setFats] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [calories, setСalories] = useState("");

  let history = useHistory();

  function submitHandler(e) {
    e.preventDefault();
    if (!title || !proteins || !fats || !carbohydrates || !calories) return;
    let products;
    const id = Date.now();
    if (read("products")) {
      products = read("products");
    } else {
      products = [];
    }
    products.push({
      id,
      title,
      proteins,
      fats,
      carbohydrates,
      calories,
    });

    save("products", products);
    history.push("/products");
  }

  return (
    <div className="new-product">
      <div className="container">
        <div className="title">Новый продукт</div>
        <form className="form-new-product">
          <input
            type="text"
            className="input"
            placeholder="Название продукта"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            className="input"
            placeholder="Белки"
            onChange={(e) => setProteins(e.target.value)}
            value={proteins}
          />
          <input
            type="text"
            className="input"
            placeholder="Жиры"
            onChange={(e) => setFats(e.target.value)}
            value={fats}
          />
          <input
            type="text"
            className="input"
            placeholder="Углеводы"
            onChange={(e) => setCarbohydrates(e.target.value)}
            value={carbohydrates}
          />
          <input
            type="text"
            className="input"
            placeholder="Ккал"
            onChange={(e) => setСalories(e.target.value)}
            value={calories}
          />
          <button type="submit" className="button" onClick={submitHandler}>
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}
