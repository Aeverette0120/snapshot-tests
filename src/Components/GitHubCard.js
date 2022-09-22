import React from "react"
import Card from "react-bootstrap/Card";


function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Aaron Everette</Card.Title>
                    <Card.Text>
                        I am a Software Development Student from New Jersey!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard