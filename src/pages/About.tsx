import Header from "@/features/Header";
import Title from "@/components/Title";
import Images from "@/components/Images";
import Button from "@/components/Button";

const About = () => {
  return (
    <div className="relative min-h-screen pb-20 bg-space3 flex flex-col justify-center items-center">
      <Header />

      <div className="flex flex-col justify-center items-center mt-40 mb-10 md:mt-32">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          <Title type="about" />
          <Images />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default About;
