import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from '/public/heroImage.webp'
import Image from "next/image";


function Hero() {
    return (
        <section className="flex flex-col py-6 lg:flex-row gap-y-10">
            {/* left side  */}
            <div className="flex-1 mt-28">
                <Badge className="px-6 py-3 text-blue-700 bg-blue-200 rounded-lg hover:bg-none">
                    Sale 70%
                </Badge>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
                An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Once upon a time, in a far-off land, there was a very lazy king who
                    spent all day lounging on his throne. One day, his advisors came to him
                    with a problem: the kingdom was running out of money.
                </p>
                <Button className="h-12 px-8 mt-4 bg-black">
                    Start Shopping
                </Button>
                <div>
                    {/* <Image src={"/public/featured1.jpg"} alt="Featured One" width={200} height={200} />
                    <Image src={"/public/featured2.jpg"} alt="Featured Two" width={150} height={150} />
                    <Image src={"/public/featured3.jpg"} alt="Featured Three" width={150} height={150} />
                    <Image src={"/public/featured4.jpg"} alt="Featured Four" width={150} height={150} /> */}
                </div>

            </div>
            {/* Right side  */}
            <div className="flex-1 hidden md:flex">
                <div className="w-auto h-auto rounded-full bg-[#ffece3]">
                    <Image src={heroImage} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero;