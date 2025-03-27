import ProjectTemp from "../Molecules/ProjectTemp";

const Projects = () => {
  return (
    <main
      className="mt-[15vh] scroll-mt-20 lg:w-[1000px] mx-5"
      id="projectsSection"
    >
      <header className="text-center text-3xl font-bold text-gray-500">
        Projects
      </header>

      <section className="flex flex-wrap justify-center md:justify-start gap-5 pt-10">
        {/* project */}
        <ProjectTemp
          name={"My-Portfolio"}
          skillsUsed={["Angular", "TailwindCSS"]}
          discription={"My portfolio."}
          demoLink={"https://abdulrahim01.netlify.app/"}
        />
        {/* project */}
        <ProjectTemp
          name={"ECommerce-user"}
          skillsUsed={["Javascript", "ReactJS"]}
          discription={"E-commerce App for browsing products."}
          demoLink={"https://abdosakregy.github.io/ECommerce-user/"}
        />
        {/* project */}
        <ProjectTemp
          name={"TodoList"}
          skillsUsed={["Javascript", "ReactJS"]}
          discription={
            "CRUD app to organize daily tasks by using ReduxToolkit."
          }
          demoLink={"https://abdosakregy.github.io/TodoList/"}
        />
        {/* project */}
        <ProjectTemp
          name={"specialized-clinic-system"}
          skillsUsed={["Javascript", "ReactJS"]}
          discription={
            "Booking APP that facilitates communication between the patient and the doctor."
          }
          demoLink={"https://specialized-clinic-system.netlify.app/"}
        />
        {/* project */}
        <ProjectTemp
          name={"InfoViewer"}
          skillsUsed={[
            "React",
            "ReactRouterDdom",
            "Tailwindcss",
            "React Suite",
          ]}
          discription={
            "React responsive web page that allows the user to view and manage personal data, contact details and comments."
          }
          demoLink={"https://abdosakregy.github.io/InfoViewer/"}
        />
        {/* project */}
        <ProjectTemp
          name={"Market-user"}
          skillsUsed={["Angular", "TypeScript"]}
          discription={"E-commerce App for browsing products."}
          demoLink={"https://market-user.netlify.app/"}
        />
        {/* project */}
        <ProjectTemp
          name={"Market-admin"}
          skillsUsed={["Angular", "TypeScript"]}
          discription={"E-commerce admin App for control products."}
          demoLink={"https://market-admin-abdosakr.netlify.app/"}
        />
        {/* project */}
        <ProjectTemp
          name={"InfoViewer-2"}
          skillsUsed={["Angular", "TypeScript"]}
          discription={
            "Angular responsive web page that allows the user to view and manage personal data, contact details and comments."
          }
          demoLink={"https://infoviewer-2.netlify.app/InfoViewer-2"}
        />
        {/* project */}
        <ProjectTemp
          name={"TaskManager-admin"}
          skillsUsed={["Angular", "AngularMaterial", "Tailwindcss", "NgRx"]}
          discription={"Angular CRUD app for admin side."}
          demoLink={"https://taskmanager-admin.netlify.app/"}
        />
        {/* project */}
        <ProjectTemp
          name={"TaskManager-user"}
          skillsUsed={["Angular", "AngularMaterial", "Tailwindcss", "NgRx"]}
          discription={"Angular CRUD app for user side."}
          demoLink={"https://taskmanager-user.netlify.app/"}
        />
        {/* project */}
        <ProjectTemp
          name={"Diwan-nurse"}
          skillsUsed={["React", "Tailwindcss"]}
          discription={
            "A healthcare web app for managing appointments and patient records."
          }
          demoLink={"https://diwan-nurse.netlify.app/"}
        />

        {/* spam project if needed */}
        {/* <main className="projectBody1 lg:invisible lg:block hidden">
          <a href="" target="_blank" className="w-full h-full">
            <div className="projectBody2">
              <section className="flex items-center">
                <span>icon</span>
                <span className="font-semibold ml-2">name</span>
              </section>
              <section className="flex flex-wrap gap-1">
                <div className="badge badge-neutral bg-[#e1e3e7] border-[#e1e3e7] text-gray-400">
                  #tool
                </div>
              </section>
              <section>discription</section>
            </div>
          </a>
        </main> */}
        {/* spam project if needed */}
      </section>
    </main>
  );
};

export default Projects;
