type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="mt-4 w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
