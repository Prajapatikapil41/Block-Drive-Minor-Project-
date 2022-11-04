import Image from "next/image";
import avatar from "../temp/avatar.jpg";
import { BsPerson } from "react-icons/bs";
import { useContext } from "react";
import { UberContext } from "../context/uberContext";

const style = {
  // wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
};

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser } =
    useContext(UberContext);

  return (
    <div className="row bg-black">
      <div className="col-sm-3 text-center text-white text-3xl">
        Block-Drive
      </div>

      <div className="text-center text-white text-xl">History</div>
      <div className={style.rightMenu}>
        {/* <div className={style.menuItem}>{currentUser.name?.split(" ")[0]}</div> */}
        <div
          className="row justify-content-center"
          style={{ marginLeft: "45%" }}
        >
          <Image
            className="rounded-full "
            src={avatar}
            width={40}
            height={40}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton}>
            <BsPerson />
            <a href="/login" className={style.loginText}>
              Log in
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
