import { Nav } from "@/components/header";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import "./Detail.scss";
import tomi from "../../assets/tomi__img.jpg";

const Detail = () => {
  return (
    <>
      <Nav />
      <section className="post__header">
        <div className="header__content post__comtainer">
          <Link className="back__home" to="/">
            Volver{" "}
          </Link>

          {/* title */}

          <h1 className="header__title">
            How to create Best UX Design with adobe
          </h1>
          <img src={tomi} alt="" />
        </div>
      </section>
      <section className="post__container post__content">
        <h2 className="sub__heading">Create UX Design </h2>
        <p className="post__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus animi distinctio quidem. Dolore neque tenetur
          distinctio dicta doloribus dolor saepe. Sapiente dolores accusamus
          autem incidunt voluptate exercitationem quae molestias fuga quis harum
          natus quod nam aspernatur nobis voluptas in delectus, cum laboriosam
          cumque consequatur a.
        </p>
        <p className="post__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus animi distinctio quidem. Dolore neque tenetur
          distinctio dicta doloribus dolor saepe. Sapiente dolores accusamus
          autem incidunt voluptate exercitationem quae molestias fuga quis harum
          natus quod nam aspernatur nobis voluptas in delectus, cum laboriosam
          cumque consequatur a.
        </p>
        <h2 className="sub__heading">Create UX Design </h2>
        <p className="post__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus animi distinctio quidem. Dolore neque tenetur
          distinctio dicta doloribus dolor saepe. Sapiente dolores accusamus
          autem incidunt voluptate exercitationem quae molestias fuga quis harum
          natus quod nam aspernatur nobis voluptas in delectus, cum laboriosam
          cumque consequatur a.
        </p>
        <p className="post__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus animi distinctio quidem. Dolore neque tenetur
          distinctio dicta doloribus dolor saepe. Sapiente dolores accusamus
          autem incidunt voluptate exercitationem quae molestias fuga quis harum
          natus quod nam aspernatur nobis voluptas in delectus, cum laboriosam
          cumque consequatur a.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus animi distinctio quidem. Dolore neque tenetur
          distinctio dicta doloribus dolor saepe. Sapiente dolores accusamus
          autem incidunt voluptate exercitationem quae molestias fuga quis harum
          natus quod nam aspernatur nobis voluptas in delectus, cum laboriosam
          cumque consequatur a.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Detail;
