import { dummyNews } from "../data";

function NewsList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {dummyNews.map((news, index) => (
        <a
          key={index}
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded shadow hover:shadow-lg transition p-4 flex flex-col"
        >
          <img
            src={news.urlToImage}
            alt="news thumbnail"
            className="rounded mb-2 w-full h-40 object-cover"
          />
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {news.title}
          </h2>
          <p className="text-sm text-gray-600">{news.description}</p>
        </a>
      ))}
    </div>
  );
}

export default NewsList;
