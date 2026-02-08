interface TitleProps {
  type: string;
}

const Title = ({ type }: TitleProps) => {
  const isProject = type === "project";

  return (
    <section className="min-w-xs md:min-w-5xl">
      <div className={`flex flex-col ${isProject ? "gap-2" : "gap-6"}`}>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white/90">
          {isProject ? "My Projects." : "Alifya Zulfa Zahro☘️"}
        </h1>
        {isProject ? (
          <div className="max-w-xs md:max-w-2xl">
            <p className="text-lg font-medium text-white/70">
              Projects I've built since starting in September 2025. I'm still
              learning and improving along the way.
            </p>
          </div>
        ) : (
          <div className="max-w-xs md:max-w-4xl text-lg font-medium text-white/70">
            <p>
              Hi, I’m Zulfa—though most people just call me Jup. I build things
              for the web.
              <br />
              <br />
              I’m a Full-stack developer at heart and a perpetual learner by
              choice. Whether it's polishing a UI or figuring out backend logic,
              I’m all in. I started my journey as a self-taught developer in
              September 2025, but I’ve since leveled up through a professional
              bootcamp to master building scalable, industry-standard apps with
              a more structured approach.
              <br />
              <br />
              <p className="hidden md:flex">
              I don’t stick to one "safe" stack—I’m constantly evolving to keep
              up with the modern web. I’m big on clean code, fresh ideas, and
              the kind of collaboration that turns a project from "okay" to
              "wow."
              <br />
              <br />
              </p>
              Take a look at my work, and if you have a vision that needs some
              code, let’s make it happen.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Title;
