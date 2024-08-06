import Image from "next/image";

interface SkillBlockProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const SkillBlock: React.FC<SkillBlockProps> = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-start">
      <Image
        src={imgSrc}
        width="400"
        height="300"
        alt={imgAlt}
        className="rounded-lg object-cover"
        style={{ aspectRatio: "400/300", objectFit: "cover" }}
      />
      <div className="mt-4 text-center">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default SkillBlock;