import React from "react";
import styled from "styled-components";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  background: lightyellow;
  opacity: 0.8;
  margin: 2rem auto;
`;

// const CardWrapper = styled.div`
//   width: 500px;

//   margin: 3rem auto;
//   background: blue;
// `;

const SWCard = props => {
  return (
    <div className="main">
      <BodyWrapper className="wrapper">
        <Card className="card-wrapper">
          {/* <CardImg top width="100%" src="Photo by Alex Kremer from Pexels" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle>
              <h2>{props.name}</h2>
            </CardTitle>
            <CardText>Gender:{props.gender}</CardText>
            <CardText>Height:{props.height}</CardText>
            <CardText>Weight:{props.mass}</CardText>
          </CardBody>
        </Card>
      </BodyWrapper>
    </div>
  );
};

export default SWCard;
