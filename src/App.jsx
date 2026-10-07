import "./App.css";
import { profile, projects, skills } from "./data";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="container">
      <Header profile={profile} />
      <section>
        <h2>About</h2>
        <p>{profile.about}</p>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <Skills skills={skills} />
      </section>
      <footer>© 2026 Aisshwarya Gurav</footer>
    </main>
  );
}