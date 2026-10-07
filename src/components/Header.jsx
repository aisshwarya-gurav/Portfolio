export default function Header({ profile }) {
  return (
    <header className="header">
      <h1>{profile.name}</h1>
      <p className="tagline">{profile.tagline}</p>
      <nav>
        {profile.links.map((l) => (
          <a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
        ))}
      </nav>
    </header>
  );
}