import { MdOutlineClearAll } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { FaPastafarianism } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { GiWheat } from "react-icons/gi";

 const categories=[
  {
    id:1,
    name:"All",
    icon:<MdOutlineClearAll className="w-[60px] h-[60px] text-green-600 "/>
  },
  {
    id:2,
    name:"breakfast",
    icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-600  "/>
  },
  {
    id:3,
    name:"soups",
    icon:<TbSoup className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id:4,
    name:"pasta",
    icon:<FaPastafarianism className="w-[60px] h-[60px] text-green-600" />
  },
  {
    id:5,
    name:"pizza",
    icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:6,
    name:"burger",
    icon:<FaHamburger className="w-[60px] h-[60px] text-green-600"/>
  },
  {
    id:7,
    name:"Wheat",
    icon:<GiWheat className="w-[60px] h-[60px] text-green-600"/>
  }
]

export default categories;