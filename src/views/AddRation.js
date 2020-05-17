import React from "react";

export default function AddRation() {
  return (
    <div className="add-ration">
      <div className="container">
        <form className="add-ration-form">
          <select className="input">
            <option value="Огурец">Огурец</option>
          </select>

          <input type="text" className="input" placeholder="Вес" />

          <button className="button">Добавить</button>
        </form>
      </div>
    </div>
  );
}
