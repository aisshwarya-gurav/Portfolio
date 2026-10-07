export default function Skills({ skills }) {
  return (
    <div className="skills">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group}>
          <h4>{group}</h4>
          <div className="chips">
            {items.map((s) => <span key={s} className="chip">{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}