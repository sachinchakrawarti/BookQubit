type Book = {
  id: number;
  title: string;
  author: string;
};

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="border rounded p-2 hover:shadow cursor-pointer">
      <h2 className="font-semibold">{book.title}</h2>
      <p className="text-sm text-gray-500">{book.author}</p>
    </div>
  );
}
