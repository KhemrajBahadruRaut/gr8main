import { button } from "framer-motion/client";

const Menu = () => {
  return (
    <div>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <p className="button-text flex justify-center items-center">Menu</p>
      </button>
    </div>
  )
}

export default Menu;