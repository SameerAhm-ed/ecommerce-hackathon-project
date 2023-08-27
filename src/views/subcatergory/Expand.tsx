
import { FC, useState } from "react";
import { NavbarType } from "@/utils/NavbarTypes";
import Link from "next/link";
import { PanelTopOpen } from "lucide-react";

const Expand: FC<{ eachItem: NavbarType }> = ({ eachItem }) => {

    const [expended, setExpended] = useState<boolean>(false);
    const [openDuration, setOpenDuration] = useState<boolean>(false);

    function handleDuration() {
        setExpended(!expended)
        setTimeout(() => {
            setOpenDuration(!openDuration)
        }, 100);
    }

    return (
        <li className={`${expended ? "h-48" : "h-12"} list-none`}>
            <div className="flex justify-between items-center rounded-md duration-300 py-2 px-3 hover:bg-gray-600" onClick={handleDuration}>
                <Link href={eachItem.href}>
                    {eachItem.label}
                </Link>
                {eachItem.isDropDown ? <PanelTopOpen className='w-4 h-4 -rotate-180 group-hover:rotate-0 duration-300' /> : ""}
            </div>
            <div className="flex flex-col space-y-1 mt-2">
                {openDuration && eachItem.dropDownData?.map((subItem: NavbarType, index: number) => (
                    <Link key={index} href={subItem.href} className="hover:bg-gray-100 rounded-md py-1 px-5 duration-300">
                        {subItem.label}
                    </Link>
                ))}

            </div>
        </li>
        // <div className="flex flex-col space-y-1 mt-2">
        //     {expended && subItem?.map((subItem: NavbarType, index: number) => (
        //         <Link key={index} href={subItem.href} className="hover:bg-gray-100 rounded-md py-1 px-5 duration-300">
        //             {subItem.label}
        //         </Link>
        //     ))}

        // </div>
    )
}

export default Expand;