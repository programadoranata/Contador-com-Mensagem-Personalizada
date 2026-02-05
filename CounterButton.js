export default function CounterButton({ label, aoClicar }) {
  return (
    <button onClick={aoClicar}>
      {label}
    </button>
  );
}
