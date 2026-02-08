import Header from "@/features/Header";
import Skills from "@/features/Skills";
import Experience from "@/features/Experience";
import Button from "@/components/Button";
import Images from "@/components/Images";
import Title from "@/components/Title";
import Card from "@/components/Card";

const Home = () => {
  return (
    <div className="relative min-h-screen pb-20 bg-space flex flex-col justify-center items-center min-w-sm md:min-w-5xl">
      <Header />
      <div className="flex flex-col justify-center items-center mt-40 mb-10 md:mt-60">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          <Title type="about" />
          <Images />
        </div>
        <Button />
      </div>
      <Experience />
      <Skills />
      <div className="flex flex-col gap-10 mb-10 mt-5">
        <Title type="project" />
        <Card />
      </div>
    </div>
  );
};

export default Home;
