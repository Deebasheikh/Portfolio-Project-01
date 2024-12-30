<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
</style>
const About = () => {
    return (
      <div className="max-w-3xl mx-auto bg-gray-100 font-[open-sans] p-[15px] sm:p-[14.5px] md:p-[15px]  rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-3xl text-center mb-1 sm:mb-3 font-bold ">About Me</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-4">
          Hello! I&apos;m Areeba Inam Rasool, a front-end developer passionate about building fast, scalable, and user-friendly
          web applications. With a strong foundation in HTML, CSS, JavaScript, React, and Next.js, I&apos;m excited to bring my
          skills to innovative projects.
        </p>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-3">Skills</h3>
        <ul className="list-none space-y-1 sm:space-y-3">
          {[
            { skill: "HTML", desc: "Structuring and organizing content for the web." },
            { skill: "CSS", desc: "Styling and designing visually appealing interfaces." },
            { skill: "JavaScript", desc: "Adding interactivity and dynamic effects to  web pages." },
            { skill: "React", desc: "Building reusable UI components and managing state changes." },
            { skill: "Next.js", desc: "Creating server-side rendered and statically generated websites." },
          ].map((item, id) => (
            <li key={id} className="flex flex-col">
              <h4 className="font-bold text-gray-900 hover:text-blue-600 transition">
                {item.skill}
                </h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default About;
  


