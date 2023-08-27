import { NavbarType } from "@/utils/NavbarTypes";
import Link from "next/link";
import { FC } from "react";

const DropdownMenu: FC<{ item: NavbarType }> = ({ item }) => {
    return (
        <ul>
            {item.dropDownData?.map((eachItem: NavbarType, index: number) => (
                <li key={index} className="hover:ml-2 group-hover:duration-300 -translate-y-7 group-hover:translate-y-0">
                    <Link href={eachItem.href}>
                        {eachItem.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default DropdownMenu;