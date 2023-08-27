export interface NavbarType {
    id: number,
    label: string,
    href: string,
    isDropDown: boolean,
    dropDownData?: any,
};

export const navBarArray: Array<NavbarType> = [
    {
        id: 1,
        label: "Female",
        href: "/category/female",
        isDropDown: true,
        dropDownData: [
            {
                label: "Dresses",
                href: "/category/female/dresses"
            },
            {
                label: "t-Shirts",
                href: "/category/female/t-shirts"
            },
            {
                label: "Jacket",
                href: "/category/female/jacket"
            },
        ]
    },
    {
        id: 2,
        label: "Male",
        href: "/category/male",
        isDropDown: true,
        dropDownData: [
            {
                label: "Jeans",
                href: "/category/male/jeans"
            },
            {
                label: "Shoes",
                href: "/category/male/shoes"
            },
            {
                label: "Jacket",
                href: "/category/male/jacket"
            },
        ]
    },
    {
        id: 3,
        label: "Kids",
        href: "/category/kids",
        isDropDown: false,
    },
    {
        id: 4,
        label: "All Products",
        href: "/products",
        isDropDown: false,
    },
]



