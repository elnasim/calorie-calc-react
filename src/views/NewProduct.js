import React, { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [proteins, setProteins] = useState("");
  const [fats, setFats] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [calories, setСalories] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!title || !proteins || !fats || !carbohydrates || !calories) return;
    let products;
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    } else {
      products = [];
    }
    products.push({
      title,
      proteins,
      fats,
      carbohydrates,
      calories,
    });
    localStorage.setItem("products", JSON.stringify(products));
    setTitle("");
    setProteins("");
    setFats("");
    setCarbohydrates("");
    setСalories("");
    console.log("added!");
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
