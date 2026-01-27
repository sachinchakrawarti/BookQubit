import React from "react";
import { useParams, Link } from "react-router-dom";
import authors from "./data/AuthorData";
import type { Author } from "./data/AuthorData";
import { theme } from "../../../config/theme";

const AuthorDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const author = authors.find((a) => a.slug === slug);

  if (!author) {
    return <div className="text-center py-20">Author not found</div>;
  }

  return (
    <div className={`${theme.background.section} min-h-screen py-16`}>
      <div className={`${theme.layout.containerWidth} mx-auto px-4`}>
        <Link to="/authors" className="text-sm text-blue-600 mb-6 inline-block">
          ← Back to Authors
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img
            src={author.image}
            alt={author.name}
            className="w-full rounded-lg shadow-lg"
          />

          <div>
            <h1 className={`text-4xl font-bold ${theme.textColors.primary}`}>
              {author.name}
            </h1>

            <p className={`text-sm ${theme.textColors.secondary} mt-2`}>
              {author.country} {author.birthYear && `• Born ${author.birthYear}`}
            </p>

            <p className={`mt-6 ${theme.textColors.secondary}`}>
              {author.bio}
            </p>

            <div className="mt-6">
              <strong>Genres:</strong>{" "}
              {author.genres.join(", ")}
            </div>

            <div className="mt-6">
              <strong>Most Famous Work:</strong>{" "}
              {author.mostFamousWork}
            </div>

            {author.socials?.wikipedia && (
              <a
                href={author.socials.wikipedia}
                target="_blank"
                className="inline-block mt-6 text-blue-600"
              >
                Read on Wikipedia →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
