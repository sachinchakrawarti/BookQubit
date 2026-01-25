export default function Quote() {
  const quote = "Reading is resistance.";
  const author = "BookQubit";

  return (
    <div className="p-2 text-center">
      <p className="italic text-gray-700">"{quote}"</p>
      <p className="mt-2 text-gray-500 text-sm">— {author}</p>
    </div>
  );
}
