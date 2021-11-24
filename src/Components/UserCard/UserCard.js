import React from 'react';
import {Card} from 'react-bootstrap';

const UserCard = ({user}) => {
  return (
    <div>
    <Card
    style={{ width: '15rem', backgroundColor: 'black', color: 'yellow' }}
    className="mb-2"
  >
    <Card.Header>{user.name}</Card.Header>
    <Card.Body>
      <Card.Title> {user.username} </Card.Title>
      <Card.Text>
        {user.email}
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  );
}

export default UserCard;
