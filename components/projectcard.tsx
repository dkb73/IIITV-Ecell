import React from 'react';
import Image from 'next/image';

interface Student {
  imgSrc: string;
  name: string;
  role: string;
}

interface ProjectCardProps {
  projectImgSrc: string;
  projectTitle: string;
  projectDescription: string;
  students: Student[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectImgSrc, projectTitle, projectDescription, students, onClick }) => {
  return (
    <div onClick={onClick} className="bg-background rounded-lg p-6 shadow-md flex flex-col md:flex-row items-start gap-4 cursor-pointer">
      <Image src={projectImgSrc} width={200} height={200} alt={projectTitle} className="rounded-lg object-cover" style={{ aspectRatio: "200/200", objectFit: "cover" }} />
      <div className="space-y-2">
        <h4 className="text-lg font-bold">{projectTitle}</h4>
        <p className="text-muted-foreground">{projectDescription}</p>
        {students.map((student, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image src={student.imgSrc} width={50} height={50} alt={student.name} className="rounded-full" style={{ aspectRatio: "50/50", objectFit: "cover" }} />
            <div>
              <p className="font-medium">{student.name}</p>
              <p className="text-muted-foreground text-sm">{student.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;