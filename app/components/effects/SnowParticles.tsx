const SNOWFLAKE_COUNT = 25;

export function SnowParticles() {
  return (
    <div className="particles-container" aria-hidden="true">
      {Array.from({ length: SNOWFLAKE_COUNT }, (_, i) => (
        <div key={i} className={`snowflake snowflake-${i}`} />
      ))}
    </div>
  );
}
