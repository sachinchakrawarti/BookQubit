import React from "react";
import { Link } from "react-router-dom";
import authors from "./data/AuthorData";
import type { Author } from "./data/AuthorData";
import { theme } from "../../../config/theme";

const Authors: React.FC = () => {
  return (
    <div className={`${theme.background.section} min-h-screen py-16`}>
      <div className={`${theme.layout.containerWidth} mx-auto px-4`}>
        <h1 className={`text-4xl font-bold ${theme.textColors.primary} mb-12 text-center`}>
          Featured Authors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author: Author) => (
            <div
              key={author.id}
              className={`${theme.background.bookCoverSide} ${theme.border.default} ${theme.shadow.book} overflow-hidden hover:scale-[1.02] transition-transform`}
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className={`text-2xl font-bold ${theme.textColors.primary}`}>
                  {author.name}
                </h2>

                <p className={`text-sm ${theme.textColors.secondary} mb-2`}>
                  {author.country} • {author.bookCount} books
                </p>

                <p className={`text-sm ${theme.textColors.secondary} mb-4 line-clamp-3`}>
                  {author.bio}
                </p>

                <div className="flex gap-3">
                  <Link
                    to={`/authors/${author.slug}`}
                    className={`${theme.buttonColors.secondaryButton.background} px-4 py-2 text-sm flex-1 text-center`}
                  >
                    Know More
                  </Link>
                  <Link
                    to={`/books?author=${encodeURIComponent(author.name)}`}
                    className={`${theme.buttonColors.primaryButton.background} px-4 py-2 text-sm flex-1 text-center`}
                  >
                    View Books
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;
