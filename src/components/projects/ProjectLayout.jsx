import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, status, demoLink }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-base md:text-lg w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <h2 className="text-foreground mb-1">{name}</h2>
      <div className="flex items-center">
        <p className="text-muted text-sm md:text-base">{description}</p>
        <div className="flex-1 mx-2 mt-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted sm:text-foreground text-sm md:text-base">
          {status}
        </p>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;