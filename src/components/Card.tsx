import { githubIcon, globeIcon } from "@/assets";
import projects from "@/data/projects";

const Card = () => {
  return (
    // grid
    <div className="flex flex-col gap-8 md:gap-20 md:grid md:grid-cols-3 max-w-xs md:max-w-6xl">
      {/* card */}
      {projects.map((p) => (
        <div className="flex flex-col glass-btn3 py-4 px-5 rounded-lg w-full max-w-xs">
          <img
            src={p.thumbnail}
            alt={p.title}
            className="w-70 rounded-lg"
          />
          <div className="flex flex-col justify-between mt-3 gap-2 text-white/80">
            {/* button live demo n github */}
            <div className="flex flex-row gap-2 self-end">
              {p.liveDemoUrl && (
                <a href={p.liveDemoUrl || "#"}>
                  <img
                    src={globeIcon}
                    alt="live demo"
                    className="w-6 h-6 inline object-contain"
                  />
                </a>
              )}

              <a href={p.githubUrl}>
                <img
                  src={githubIcon}
                  alt="github repo"
                  className="w-6 h-6 inline"
                />
              </a>
            </div>
            {/* title and desc */}
            <div className="flex flex-col justify-start gap-0">
              <h2 className="text-lg font-semibold text-white/90">{p.title}</h2>
              <p className="text-sm text-white/50">{p.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
