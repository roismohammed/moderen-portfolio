import { cn } from "@/lib/utils";
import {Marquee} from "@/components/magicui/marquee";
import { RiBootstrapFill, RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const reviews = [
  {
    name: "Javascript",
    img: RiJavascriptFill,
  },
  {
    name: "Typescript",
    img: SiTypescript,
  },
  {
    name: "React.js",
    img: RiReactjsFill,
  },
  {
    name: "Next.js",
    img: RiNextjsFill,
  },
  {
    name: "Tailwind",
    img: RiTailwindCssFill,
  },
  {
    name: "Bootstrap",
    img: RiBootstrapFill,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img: Icon, // rename img to Icon to clarify it's an icon component
  name,
  username = "",
  body = "",
}: {
  img: React.ComponentType;
  name: string;
  username?: string;
  body?: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-42 h-[60px] cursor-pointer overflow-hidden rounded-xl p-4 ",
        "bg-gray-950/[.01] hover:bg-gray-200 bg-gray-100",
        "dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <i className="text-2xl hover:text-primary">
          <Icon />
        </i>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative -mt-10 flex h-[300px] w-auto flex-col items-center justify-center overflow-hidden rounded-lg ">
      <Marquee pauseOnHover className="[--duration:8s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:6s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 top-8 bottom-8 left-0 w-4  bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0  right-0 w-4 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}