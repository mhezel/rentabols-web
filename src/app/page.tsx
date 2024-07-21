import MaxWContainer from "@/_components/max-w-container";
import BentoBoxGrid from "@/features/bento-box-grid";
import BrowseItems from "@/features/browse-items";
import Footer from "@/features/footer";
import Header from "@/features/header";
import Hero from "@/features/hero";
import HowItWorks from "@/features/how-it-works";
import Link from "next/link";

export default function Home(){
  return(
    <div className="flex flex-col min-h-screen">

    {/*header*/}
    <Header/>
    {/*hero*/}
    <Hero/>
    <BentoBoxGrid/>
    <MaxWContainer>
      {/*how it works*/}
      <HowItWorks/>
      <div className="py-4">
        <h3 className="text-center text-xl sm:text-4xl px-2 py-4 sm:py-8 bg-primary">
          Why buy when you can rent! Choose from thousand of items available to rent.
        </h3>
      </div>
      {/*item catalog*/}
      <BrowseItems/>
      <div className="py-4">
        <h3 className="text-center text-xl sm:text-4xl px-2 py-4 sm:py-8 bg-primary">
          Ready to make money? <Link className="font-bold" href="#">Start now &rarr;</Link>
        </h3>
      </div>
    </MaxWContainer>
    {/*footer*/}
    <Footer/>
    </div>
  );
}