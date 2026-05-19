import SectionHeading from '../components/SectionHeading.jsx';
import SkillCard from '../components/SkillCard.jsx';
import skills from '../data/skillsData.js';
import PageTransition from '../components/PageTransition.jsx';

function Skills() {
  return (
    <PageTransition>
      <section className="space-y-12">
        <SectionHeading title="Skills" subtitle="What I do" />

        <div className="grid gap-6 xl:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard key={skill.category} category={skill.category} items={skill.items} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

export default Skills;
