import img from "../../assests/logo/logo.png";

export default function createHeader() {
  
  const header = document.createElement("header");
  header.className = "header mx-auto px-4 sm:px-6 ";
  header.className += "flex items-center justify-between border-b-2 border-gray-400 py-6 ";

  
  //logo wrapper
  const logo = document.createElement("figure");
  logo.className = "logo flex-none h-32 w-[150px] relative cursor-pointer";
  //logo image
  const logoImg = document.createElement("img");
  logoImg.className = "logo__img  relative top-0";
  logoImg.src = img;
  //logo text
  const logoLabel = document.createElement("label");
  logoLabel.className = "logo__label absolute bottom-[7px] left-[22%] font-semibold text-xl	cursor-pointer tracking-wide text-[#e16259] [text-shadow: 1px 1px 2px]";
  logoLabel.innerText = "sound quiz";

  logo.append(logoImg);
  logo.append(logoLabel);

  header.append(logo);
  //end logo

  //menu
  const menu = document.createElement("menu");
  menu.classList = "menu flex items-center justify-between gap-8";

  let menuItem = document.createElement("li");
  menuItem.classList = "menu__item font-semibold text-2xl [text-shadow: 10px 10px 20px black] "+
                       "cursor-pointer hover:text-[#e16259] transition ease-in duration-150";

  let menuLink = document.createElement("a");
  menuLink.classList = "menu__link";
  menuLink.innerText = "Welcome";
  menuItem.append(menuLink);
  menuItem.childNodes[0].href = "./"
  menu.append(menuItem);
  
  menuItem = menuItem.cloneNode(true);
  menuItem.childNodes[0].innerText = "Play quiz";
  menu.append(menuItem);

  menuItem = menuItem.cloneNode(true);
  menuItem.childNodes[0].innerText = "Results";
  menu.append(menuItem);

  menuItem = menuItem.cloneNode(true);
  menuItem.childNodes[0].innerText = "Blog";
  menu.append(menuItem);

  header.append(menu);
  //end menu

  //button for play
  const button = document.createElement("button");
  button.className = "button ml-8 inline-flex items-center justify-center justify-self-end " +
                    "whitespace-nowrap rounded-md border border-transparent bg-[#e16259] " +
                    "px-8 py-2 text-2xl font-medium text-white shadow-sm hover:bg-[#bd514a] transition ease-in duration-150";
  button.innerText = "Lets play";

  header.append(button);


  return header;
}