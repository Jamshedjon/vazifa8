import { Link } from "react-router-dom";

function ArticleList({ articles }) {
    return (
        <ul className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {articles.map((article) => {
                const { id, title, author, image } = article;
                return (
                    <li
                        key={id}
                        className="card max-w-full md:max-w-full glass"
                    >
                        <figure>
                            <img src={image} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <Link
                                    to={`/article/${id}`}
                                    className="btn btn-primary"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default ArticleList;
