import { useState } from "react";

export interface CategoriesInterface {}

const Categories: React.FC<CategoriesInterface> = () => {
  const [category, setCategory] = useState<number>(1);

  const handleChange = (n: number) => {
    setCategory(n);
  };

  return (
    <div className="layout__container">
      {/* CATEGORIAS */}

      <div className="layout__categories">
        <span
          className={`${
            category === 1 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(1)}
        >
          Todas
        </span>
        <span
          className={`${
            category === 2 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(2)}
        >
          Política
        </span>
        <span
          className={`${
            category === 3 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(3)}
        >
          Economía
        </span>
        <span
          className={`${
            category === 4 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(4)}
        >
          Entretenimiento
        </span>
        <span
          className={`${
            category === 5 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(5)}
        >
          Educación
        </span>
      </div>

      {/* NOTICIAS */}
    </div>
  );
};

export default Categories;
