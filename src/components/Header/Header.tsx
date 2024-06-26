import React from "react";
import Button from "../UI/Button/Button";
import UserTab from "../UserTab/UserTab";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";
import Link from "next/link";
const Header = () => {
  return (
    <header className="py-6">
      <div className="container flex justify-between items-center">
        <div className="">
          <Link href="/">
            <img className="max-w-[135px] md:max-w-full" src="aspirity-logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Button className="hidden md:block">Создать счет</Button>
          <Button className="hidden md:block">Корзина</Button>
          <UserTab />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
