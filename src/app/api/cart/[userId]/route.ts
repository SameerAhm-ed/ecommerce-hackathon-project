import { Cart, cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest, { params: { userId } }: { params: { userId: string } }) => {
    try {
        if (!userId) {
            throw new Error("User id does not exit");
        } else {
            const res = await db.select().from(cartTable).where(eq(cartTable.user_id, userId));

            const cartItems = res.map((item) => ({
                _id: item.product_id,
                name: item.product_name,
                price: item.price,
                totalPrice: item.total_price,
                subcat: item.subcat,
                image: item.image,
                userId: item.user_id,
                quantity: item.quantity
            }));

            const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
            const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);


            return NextResponse.json({ cartItems, totalQuantity, totalPrice }, { status: 200 });
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 505 });
    }

}