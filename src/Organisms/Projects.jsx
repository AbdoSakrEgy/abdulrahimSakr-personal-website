import React from "react";
import ProjectTemp from "../Molecules/ProjectTemp";

const Projects = () => {
  return (
    <>
      <main className="mt-[15vh] scroll-mt-20" id="">
        <header className="text-center text-3xl font-bold text-gray-500">
          Projects
        </header>

        <section className="flex flex-wrap justify-between pt-10">
          <ProjectTemp
            name={"abdulrahimSakr-personal-website"}
            skillsUsed={["Javascript", "ReactJS"]}
            discription={"My portfolio."}
            demoLink={
              "https://abdosakregy.github.io/abdulrahimSakr-personal-website/"
            }
          />
          <ProjectTemp
            name={"ecommerce-app-clientside"}
            skillsUsed={["Javascript", "ReactJS"]}
            discription={"E-commerce App for browsing products."}
            demoLink={"https://abdosakregy.github.io/ecommerce-app-clientside/"}
          />
          <ProjectTemp
            name={"TodoList-App"}
            skillsUsed={["Javascript", "ReactJS"]}
            discription={
              "CRUD app to organize daily tasks by using ReduxToolkit."
            }
            demoLink={"https://abdosakregy.github.io/TodoList-App/"}
          />
          <ProjectTemp
            name={"specialize-clinic-system"}
            skillsUsed={["Javascript", "ReactJS"]}
            discription={
              "Booking APP that facilitates communication between the patient and the doctor."
            }
            demoLink={"https://abdosakregy.github.io/specialize-clinic-system/"}
          />
        </section>
      </main>
    </>
  );
};

export default Projects;
