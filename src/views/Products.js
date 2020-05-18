import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { read, save } from "../core/api";
import Product from "../components/products-page/Product";

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const data = read("products");
    setProducts(data);
  }, []);

  useEffect(() => {
    save("products", products);
  }, [products]);

  function removeHandler(id) {
    const res = window.confirm("Вы уверены, что хотите удалить?");
    if (res) {
      const data = products.filter((item) => {
        return item.id !== id;
      });

      setProducts(data);
    }
  }

  const prods =
    products &&
    products.map((item) => {
      return (
        <Product
          title={item.title}
          proteins={item.proteins}
          fats={item.fats}
          carbohydrates={item.carbohydrates}
          calories={item.calories}
          id={item.id}
          remove={removeHandler}
          key={item.id}
        />
      );
    });

  return (
    <div className="products">
      <div className="container">
        {prods}
        <Link to="/new-product" className="button">
          Добавить
        </Link>
      </div>
    </div>
  );
}
