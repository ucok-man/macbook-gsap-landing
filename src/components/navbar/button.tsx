type Props = {
  img: string;
  alt: string;
};

export default function Button({ img, alt }: Props) {
  return (
    <button className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
      <img
        className="bg-transparent border-none outline-none cursor-pointer"
        src={img}
        alt={alt}
      />
    </button>
  );
}
