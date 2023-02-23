import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import Col from "react-bootstrap/esm/Col";

import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import { Empty } from "../interfaces/list";

const Home = () => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles";

  const [article, setArticle] = useState<Empty[]>([]);

  const getArticles = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
        console.log(article);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="w-100 ">
        <h1 className="mt-5 mb-3">Articles</h1>
        <div className="wrapp mb-5 p-4 w-100">
          <Row
            xs={1}
            md={3}
            lg={4}
            className="d-flex align-items-center g-4 w-100"
          >
            {article &&
              article.map((article, i) => (
                <Col key={i}>
                  <Card>
                    <Card.Img
                      variant="top"
                      className="cardimg"
                      src={article.imageUrl}
                    />
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Link
                        to={`/article/${article.id}`}
                        className="btn btn-secondary"
                      >
                        Read
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </>
  );
};
export default Home;
