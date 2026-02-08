import Header from "@/features/Header";
import Title from "@/components/Title";
import Card from "@/components/Card";

const Project = () => {
  return (
    <div className="relative min-h-screen pb-20 bg-space2 flex flex-col justify-center items-center md:min-w-5xl">
      <Header />
      <div className="flex flex-col gap-10 mt-40 mb-10 md:mt-50">
        <Title type="project" />
        <Card />
      </div>
    </div>
  );
};

export default Project;
