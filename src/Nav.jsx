import searchIcon from "./Images/NavIcons/search.svg";
import sampleBrandIcon from "./Images/NavIcons/pottery-man.svg";
import cartIcon from "./Images/NavIcons/basket.svg";

const Nav = () => {
  return (
    <section
      id="NavBar"
      className="w-screen h-20 flex justify-around items-center bg-orange-100"
    >
      <div
        id="brand-section"
        className="flex flex-row justify-center items-center"
      >
        <img
          src={sampleBrandIcon}
          alt=""
          id="brand-logo"
          className="w-12 h-12"
        />
        <span id="brand-name" className="text-3xl text-orange-700">
          Kalakriti
        </span>
      </div>

      <div id="search-bar" className="flex flex-row">
        <input type="search" className="block" />
        <a href="Search">
          <img
            src={searchIcon}
            alt="search"
            className="w-8 h-full bg-white p-2 hover:bg-orange-400"
          />
        </a>
      </div>

      <div id="nav-links" className="basis-1/5 flex flex-row justify-around">
        <div id="login">
          <a href="" className="font-bold text-orange-700">
            Login
          </a>
        </div>
        <div id="become-seller">
          <a href="" className="font-bold text-orange-700">
            Join as Seller
          </a>
        </div>
        <div id="cart" className="bg-white rounded-full">
          <a href="" className="w-12 h-12 ">
            <img src={cartIcon} alt="cart-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Nav;
