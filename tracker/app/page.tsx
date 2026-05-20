import Header from "./header";
import Features from "./features";

export default function Home() {
  return (
    <div className="flex flex-row lg:gap-20 md:gap-20 sm:10 gap-2 w-full h-full bg-blue-600">
      <title>DAILY ROUTINE</title>
      <Header />
      <div className="bg-blue-600 w-full h-full">
        <Features />
      </div>
    </div>
  );
}
