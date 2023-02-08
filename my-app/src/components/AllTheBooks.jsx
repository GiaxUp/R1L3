import { Component } from "react";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

// class Allthebook extends Component {
//   render() {
//     return (
//       <main>
//         <Accordion>
//           <Card>
//             <Card.Header>
//               <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                 Fantasy
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey="0">
//               <Row>
//                 {fantasy.map((book) => (
//                   <Col xs={6} md={4} lg={3}>
//                     <Card style={{ width: "18rem" }}>
//                       <Card.Img variant="top" src={book.img} style={{ width: "286px" }} />
//                       <Card.Body>
//                         <Card.Title>{book.title}</Card.Title>
//                         <p>{book.price}€</p>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion>
//         <Accordion>
//           <Card>
//             <Card.Header>
//               <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                 History
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey="0">
//               <Row>
//                 {history.map((book) => (
//                   <Col xs={6} md={4} lg={3}>
//                     <Card style={{ width: "18rem" }}>
//                       <Card.Img variant="top" src={book.img} style={{ width: "286px" }} />
//                       <Card.Body>
//                         <Card.Title>{book.title}</Card.Title>
//                         <p>{book.price}€</p>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion>
//         <Accordion>
//           <Card>
//             <Card.Header>
//               <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                 Horror
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey="0">
//               <Row>
//                 {horror.map((book) => (
//                   <Col xs={6} md={4} lg={3}>
//                     <Card style={{ width: "18rem" }}>
//                       <Card.Img variant="top" src={book.img} style={{ width: "286px" }} />
//                       <Card.Body>
//                         <Card.Title>{book.title}</Card.Title>
//                         <p>{book.price}€</p>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion>
//         <Accordion>
//           <Card>
//             <Card.Header>
//               <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                 Romance
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey="0">
//               <Row>
//                 {romance.map((book) => (
//                   <Col xs={6} md={4} lg={3}>
//                     <Card style={{ width: "18rem" }}>
//                       <Card.Img variant="top" src={book.img} style={{ width: "286px" }} />
//                       <Card.Body>
//                         <Card.Title>{book.title}</Card.Title>
//                         <p>{book.price}€</p>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion>
//         <Accordion>
//           <Card>
//             <Card.Header>
//               <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                 Scifi
//               </Accordion.Toggle>
//             </Card.Header>
//             <Accordion.Collapse eventKey="0">
//               <Row>
//                 {scifi.map((book) => (
//                   <Col xs={6} md={4} lg={3}>
//                     <Card style={{ width: "18rem" }}>
//                       <Card.Img variant="top" src={book.img} style={{ width: "286px" }} />
//                       <Card.Body>
//                         <Card.Title>{book.title}</Card.Title>
//                         <p>{book.price}€</p>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion>
//       </main>
//     );
//   }
// }

const AllTheBooks = () => {
  console.log(fantasy);

  return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
