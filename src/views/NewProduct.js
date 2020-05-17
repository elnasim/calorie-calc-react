import React from "react";

export default function NewProduct() {
  return (
    <div className="new-product">
      <div className="container">
        <div className="title">Новый продукт</div>
        <form className="form-new-product">
          <input
            type="text"
            className="input"
            placeholder="Название продукта"
          />
          <input type="text" className="input" placeholder="Белки" />
          <input type="text" className="input" placeholder="Жиры" />
          <input type="text" className="input" placeholder="Углеводы" />
          <input type="text" className="input" placeholder="Ккал" />
          <button type="submit" className="button">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}
