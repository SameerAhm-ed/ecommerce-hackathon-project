import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

export async function GET(request: NextRequest, res: NextResponse) {
    try {
        let data = await client.fetch(`*[_type=="product"][0]{
            name,
            price,
            'image': image.asset->url,
            category,
            tagline,
            _id
        }`)
        return NextResponse.json({
            data: data
        });
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}