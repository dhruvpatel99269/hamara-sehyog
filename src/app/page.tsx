import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";



export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
    </div>
  );
}
