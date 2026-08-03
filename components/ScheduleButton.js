'use client';

export default function ScheduleButton() {
  return (
    <a
      href="#contact"
      className="btn btn-primary"
      onClick={() => window.dispatchEvent(new CustomEvent('prefill-service'))}
    >
      Schedule Now →
    </a>
  );
}
