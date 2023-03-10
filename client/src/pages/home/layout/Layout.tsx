import React, { useState } from "react";
import { Categories } from "./Categories";
import "./Layout.scss";
import { Link } from "react-router-dom";

const Layout = () => {
  const [category, setCategory] = useState<number>(1);

  const handleChange = (n: number) => {
    setCategory(n);
  };

  return (
    <>
      <Categories />

      <section className="post post__container">
        {/* BOX 1 */}

        <Link to="/detail" className="nav__link">
          <div className="post__box">
            <img
              src="https://assets.soyhenry.com/logoOG.png"
              alt=""
              className="post__img"
            />
            <h2 className="category__title">Educación</h2>
            <a href="" className="post__title">
              ¿Por que elegir Henry?
            </a>
            <span className="post__date">19 MAR 2023</span>
            <p className="post__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              ullam odio animi aperiam magni ipsa, adipisci nemo. Qui
              consequatur quaerat, ex velit sapiente impedit possimus!
            </p>

            <div className="profile__container">
              <img src={nico} alt="" className="profile__img" />
              <span className="profile__name">Nicolás Luna</span>
            </div>
          </div>
        </Link>

        {/* BOX 2 */}

        <Link to="detail" className="nav__link">
          <div className="post__box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdu-FdeRLqXQgLwkzmrTy75bUp9JFqmXIOxx6GsNH2PNRdI6JvgVHKC57dbe2gYDUQqI&usqp=CAU"
              alt=""
              className="post__img"
            />
            <h2 className="category__title">Educación</h2>
            <a href="" className="post__title">
              Como ser un creatine boy versión basado
            </a>
            <span className="post__date">15 MAR 2023</span>
            <p className="post__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              ullam odio animi aperiam magni ipsa, adipisci nemo. Qui
              consequatur quaerat, ex velit sapiente impedit possimus!
            </p>

            <div className="profile__container">
              <img src={tomi} alt="" className="profile__img" />
              <span className="profile__name">Tomás Mazza</span>
            </div>
          </div>
        </Link>

        {/* BOX 3 */}

        <Link to="detail" className="nav__link">
          <div className="post__box">
            <img src={post__img} alt="" className="post__img" />
            <h2 className="category__title">Educación</h2>
            <a href="" className="post__title">
              Cursos gratis de frontend
            </a>
            <span className="post__date">10 MAR 2023</span>
            <p className="post__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              ullam odio animi aperiam magni ipsa, adipisci nemo. Qui
              consequatur quaerat, ex velit sapiente impedit possimus!
            </p>

            <div className="profile__container">
              <img src={jose} alt="" className="profile__img" />
              <span className="profile__name">Jose Soria</span>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Layout;
