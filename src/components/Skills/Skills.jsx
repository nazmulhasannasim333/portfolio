// import content
import { content } from "../../Content";


const Skills = () => {
  const { skills } = content;
  console.log(skills);

  return (
    <section className="min-h-fit mt-16 max-w-7xl mx-auto" id="skills">
      <div className="text-center">
      <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
      </div>
      <div className="md:container px-5  py-6">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, i) => (
            <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 300}
            className="bg-slate-900 sm:cursor-pointer 
             relative group w-full flex items-center
              gap-5 px-5 py-3 max-w-sm rounded-md border-2 border-slate-800"
          >
            <div className="w-1/5">
              <img
                src={skill.logo}
                alt="..."
                className=" group-hover:scale-125 duration-200"
              />
            </div>
            <div className="w-4/5">
              <h6 className="text-2xl">{skill.name}</h6>
              <p className="italic">{skill.para}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
