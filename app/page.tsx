import Logo from "./components/Logo";
import TypeBox from "./components/TypeBox";

export default function Home() {
  return (
    <div className="bg-zinc-700 w-full min-h-screen flex flex-col px-40">
      <div className="flex justify-between pt-10">
        <Logo />
        <div className="text-xl text-gray-400 hover:text-gray-200 hover:cursor-pointer">
          Login
        </div>
      </div>
      <div className="flex flex-grow items-center justify-center">
        <TypeBox />
      </div>
    </div>
  );
}
