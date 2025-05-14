interface OrderFormProps {
  onSubmit: (value: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    onSubmit(username);
  };
  return (
    <form action={handleSubmit}>
      <input
        type="text"
        name="username"
        defaultValue="Billi Bons enter something"
      />
      <button type="submit">Plase order</button>
    </form>
  );
}
