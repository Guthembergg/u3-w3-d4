import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  interface Empty {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: Date;
    updatedAt: Date;
    featured: boolean;
    launches: any[];
    events: any[];
  }
  const param = useParams();

  const url = "https://api.spaceflightnewsapi.net/v3/articles/";

  const [article, setArticle] = useState<Empty>();

  const getArticles = async () => {
    try {
      const response = await fetch(url + param.id);
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
      <div className="d-flex flex-column justify-content-center">
        <Container>
          <Row>
            {article && (
              <Col>
                <div className="d-flex flex-column align-items-center detaildiv justify-content-center">
                  <p className="fw-bold fs-4">{article.newsSite}</p>
                  <img alt="img" width="50%" src={article.imageUrl} />

                  <h2 className="mt-3 mb-2">{article.title}</h2>
                  <p className="w-75 ">{article.summary}</p>
                  <p className="fw-bold ">
                    {article.publishedAt.toString().slice(0, 10)}
                  </p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Detail;
