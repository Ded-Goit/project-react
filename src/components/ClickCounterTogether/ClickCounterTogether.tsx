interface ClickCounterTogetherProps {
  value: number;
  onUpdate: () => void;
}

export default function ClickCounterTogether({
  value,
  onUpdate,
}: ClickCounterTogetherProps) {
  return <button onClick={onUpdate}>Clicked: {value}</button>;
}
