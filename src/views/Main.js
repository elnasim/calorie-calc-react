import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/main-page/Product";

export default function Main() {
  const [ration, setRation] = useState(null);
  const [summary, setSummary] = useState({
    proteins: 0,
    calories: 0,
    carbohydrates: 0,
    fats: 0,
  });

  useEffect(() => {
    const rations = JSON.parse(localStorage.getItem("ration"));
    setRation(rations);
  }, []);

  useEffect(() => {
    if (ration) {
      rationInfoCalc();
    }
  }, [ration]);

  function rationInfoCalc() {
    let proteins = 0,
      carbohydrates = 0,
      calories = 0,
      fats = 0;
    for (let item of ration) {
      proteins += +item.proteins;
      calories += +item.calories;
      carbohydrates += +item.carbohydrates;
      fats += +item.fats;
    }

    const data = {
      proteins,
      calories,
      carbohydrates,
      fats,
    };

    setSummary(data);
  }

  function removeHandler(id) {
    const data = ration.filter((item) => {
      return item.id !== id;
    });

    setRation(data);
    localStorage.setItem("ration", JSON.stringify(data));
  }

  const products =
    ration &&
    ration.map((item) => {
      return (
        <Product
          title={item.title}
          proteins={item.proteins}
          fats={item.fats}
          carbohydrates={item.carbohydrates}
          calories={item.calories}
          id={item.id}
          weight={item.weight}
          remove={removeHandler}
          key={item.id}
        />
      );
    });

  return (
    <div className="main">
      <div className="container">
        <div className="day">
          <div className="day__change">
            <span className="material-icons">undo</span>
          </div>
          <div className="day__date">16.05.2020</div>
          <div className="day__change">
            <span className="material-icons">redo</span>
          </div>
        </div>

        {products}

        <div className="product-main">
          <div className="product-main__title">Всего</div>
          <div className="product-main__info">
            <div className="product-main__i">
              {summary.proteins}
              <br />Б
            </div>
            <div className="product-main__i">
              {summary.fats}
              <br />Ж
            </div>
            <div className="product-main__i">
              {summary.carbohydrates}
              <br />У
            </div>
            <div className="product-main__i">
              {summary.calories}
              <br />
              Ккал
            </div>
          </div>
        </div>

        <Link to="/add-ration" className="button">
          Добавить
        </Link>
      </div>
    </div>
  );
}
