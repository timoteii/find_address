import { Blog } from "../../components/Blog/Blog";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import "./NewsPage.scss";

const NewsPage = () => {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Blog/>
    </div>
  );
};

export { NewsPage };
