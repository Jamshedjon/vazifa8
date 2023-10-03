import { useFetch } from "../hooks/useFetch";
import ArticleList from "../components/ArticleList";

function Home() {
    const {
        data: articles,
        isPanding,
        error,
    } = useFetch("http://localhost:3000/articles");
    return <div>{articles && <ArticleList articles={articles} />}</div>;
}

export default Home;
