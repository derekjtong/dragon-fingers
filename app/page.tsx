import Logo from "./components/Logo";
import TypeBox from "./components/TypeBox";

export default function Home() {
  return (
    <div className="bg-zinc-700 w-full min-h-screen flex flex-col">
      <div className="flex justify-center pt-10">
        <Logo />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <TypeBox />
      </div>
    </div>
  );
}
