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
    <div className="bg-black">
      <div className="row mt-4 ms-sm-3 align-items-center">
        <h1 className="col-sm-3 text-white text-3xl">Block-Drive</h1>
        <h1 className="col-sm-3 text-white text-xl">History</h1>
        {/* <div className={"col-sm-3"}>{currentUser.name?.split(" ")[0]}</div> */}
        <Image
          className="rounded-full col-3"
          src={avatar}
          width={40}
          height={40}
        />
        {currentAccount ? (
          <div className="col-3 text-white">
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className="col-3">
            {/* <BsPerson /> */}
            <a href="/login" className={"text-xl text-white"}>
              Log in
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
