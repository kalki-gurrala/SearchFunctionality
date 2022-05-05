import axios from "axios";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CardPage() {
  //   const [details, setDetails] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        axios
          .get(
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
          )
          .then((response) => {
            <div className="container-fluid mt-5">
              <div className="row text-center">
                {response.data.map((val) => {
                  console.log(val.Brand);
                  return (
                    //   <li >
                    <div key={val.Country} className="col-10 col-md-4 mt-5">
                      <Card style={{ width: "18rem" }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                          <Card.Title>{val.Brand}</Card.Title>
                          <Card.Text>{val.Variety}</Card.Text>
                          <Card.Text>{val.Style}</Card.Text>
                          <Card.Text>{val.Country}</Card.Text>
                          <Card.Text>{val.Stars}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    //   </li>
                  );
                })}
              </div>
            </div>;
          });
      } catch (error) {
        console.log("Error");
      }
    };

    fetchDetails();
  }, []);

  return <div></div>;
}

export default CardPage;
