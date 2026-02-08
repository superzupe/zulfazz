import skills from "@/data/skills";

const Skills = () => {
  return (
    <section className="flex flex-col my-3 gap-2 w-full max-w-xs md:max-w-6xl">
      <h3 className="text-white font-bold text-xl">Skills</h3>

      <div className="flex flex-wrap justify-center items-center gap-2 w-full">
        {skills.map((s) => (
          <div
            key={s.id}
            className="flex justify-center items-center gap-1 py-1 px-1.5 glass-btn2">
            <img
              src={s.icon}
              alt={s.name}
              className="w-5"
            />
            <p className="text-gray-100 text-xs">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
