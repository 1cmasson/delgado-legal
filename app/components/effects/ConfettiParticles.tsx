const CONFETTI_COUNT = 30;
const COLOR_CLASSES = ['confetti-gold', 'confetti-red', 'confetti-teal', 'confetti-blue', 'confetti-green', 'confetti-pink', 'confetti-sky'];

export function ConfettiParticles() {
  return (
    <div className="particles-container" aria-hidden="true">
      {Array.from({ length: CONFETTI_COUNT }, (_, i) => (
        <div
          key={i}
          className={`confetti-particle confetti-${i} ${COLOR_CLASSES[i % COLOR_CLASSES.length]}`}
        />
      ))}
    </div>
  );
}
