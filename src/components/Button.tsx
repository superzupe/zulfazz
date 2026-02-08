import socialButtons from "@/data/social-buttons";

const Button = () => {
  return (
    <div className="flex flex-row gap-1 md:gap-4 mt-4 ml-2 md:self-start">
      {socialButtons.map((b) => (
        <div
          key={b.id}
          //
          className="glass-btn3 py-1 px-1.5">
          <a href={b.url}>
            <img
              src={b.icon}
              alt="social icon"
              className="w-8 md:w-12"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Button;
