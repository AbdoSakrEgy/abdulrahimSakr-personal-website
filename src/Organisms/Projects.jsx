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

      <section className="flex flex-wrap justify-center md:justify-between gap-5 pt-10">
        {/* project */}
        <ProjectTemp
          name={"abdulrahimSakr-personal-website"}
          skillsUsed={["Javascript", "ReactJS"]}
          discription={"My portfolio."}
          demoLink={
            "https://abdosakregy.github.io/abdulrahimSakr-personal-website/"
          }
        />
        {/* project */}
        <ProjectTemp
          name={"ecommerce-app-clientside"}
          skillsUsed={["Javascript", "ReactJS"]}
          discription={"E-commerce App for browsing products."}
          demoLink={"https://abdosakregy.github.io/ecommerce-app-clientside/"}
        />
        {/* project */}
        <ProjectTemp
          name={"TodoList-App"}
          skillsUsed={["Javascript", "ReactJS"]}
          discription={
            "CRUD app to organize daily tasks by using ReduxToolkit."
          }
          demoLink={"https://abdosakregy.github.io/TodoList-App/"}
        />
        {/* project */}
        <ProjectTemp
          name={"specialize-clinic-system"}
          skillsUsed={["Javascript", "ReactJS"]}
          discription={
            "Booking APP that facilitates communication between the patient and the doctor."
          }
          demoLink={"https://abdosakregy.github.io/specialize-clinic-system/"}
        />
        {/* project */}
        <ProjectTemp
          name={"user-dashboard"}
          skillsUsed={["Javascript", "ReactJS"]}
          discription={
            "React responsive web page that allows the user to view and manage personal data, contact details and comments."
          }
          demoLink={"https://abdosakregy.github.io/user-dashboard/"}
        />
        {/* project */}
        <ProjectTemp
          name={"Market"}
          skillsUsed={["Angular", "TypeScript"]}
          discription={"E-commerce App for browsing products."}
          demoLink={"https://abdosakregy.github.io/Market/products"}
        />
        {/* project */}
        <ProjectTemp
          name={"market-admin"}
          skillsUsed={["Angular", "TypeScript"]}
          discription={"E-commerce admin App for control products."}
          demoLink={"https://abdosakregy.github.io/market-admin/products"}
        />
        {/* project */}
        <ProjectTemp
          name={"user-info"}
          skillsUsed={["Angular", "TypeScript"]}
          discription={
            "Angular responsive web page that allows the user to view and manage personal data, contact details and comments."
          }
          demoLink={"https://abdosakregy.github.io/user-info/users-info"}
        />
        {/* project */}
        <ProjectTemp
          name={"custom-paginator-angular"}
          skillsUsed={["Angular", "TypeScript"]}
          discription={
            "Angular code of how to paginate some data using custom styles."
          }
          demoLink={"https://abdosakregy.github.io/custom-paginator-angular/"}
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
