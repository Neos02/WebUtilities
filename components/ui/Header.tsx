interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => {
  return (
    <header className="w-full py-12">
      <div className="flex flex-col items-center text-center container">
        <h1 className="text-primary text-3xl font-bold tracking-tighter md:text-4xl">
          {title}
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
          {description}
        </p>
      </div>
    </header>
  );
};

export default Header;
