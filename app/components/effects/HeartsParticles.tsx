const HEART_COUNT = 25;

export function HeartsParticles() {
  return (
    <div className="particles-container" aria-hidden="true">
      {Array.from({ length: HEART_COUNT }, (_, i) => (
        <div key={i} className={`heart-particle heart-${i}`}>
          ❤
        </div>
      ))}
    </div>
  );
}
