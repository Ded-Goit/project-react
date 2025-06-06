import type { Article } from "../../types/article";

interface ArticleListProps {
  items: Article[];
}

export default function ArticleList({ items }: ArticleListProps) {
  return (
    <ul>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
