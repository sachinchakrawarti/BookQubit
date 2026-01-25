import BookCard from "../components/BookCard";

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Homo Deus", author: "Yuval Noah Harari" },
  { id: 3, title: "The Prince", author: "Niccolò Machiavelli" },
];

export default function Home() {
  return (
    <div className="space-y-2">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
