import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  icon: JSX.Element;
  routeUrl: string;
};

const Card = ({ title, description, icon, routeUrl }: Props) => {
  const router = useRouter();
  return (
    <div
      className="h-24 w-auto border rounded-lg border-neutral-500 hover:shadow-[0px_0px_10px_2px_rgb(55,65,81)] text-white transition-all cursor-pointer pl-4 pr-4 pt-2 pb-2 flex flex-row justify-between items-center"
      onClick={() => {
        router.push(routeUrl);
      }}
    >
      <div className="flex flex-col">
        <h1 className="text-bold text-white text-montserrat">{title}</h1>
        <span className="text-neutral-500">{description}</span>
      </div>
      {icon}
    </div>
  );
};

export default Card;
