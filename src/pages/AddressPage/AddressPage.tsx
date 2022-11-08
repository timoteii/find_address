import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import { SearchAddress } from "../../components/SearchAddress/SearchAddress";
import "./AddressPage.scss"

const AddressPage = () => {
    return (
      <div>
        <div className="container">
          <Header />
          {window.screen.width >= 768 && <NavBar />}
          <SearchAddress/>
        </div>
      </div>
    );
}
 
export {AddressPage};