import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ExternalLink } from 'react-external-link';

const About = () => (
  <Container className="center" fluid>
    <Row className="mx-5 my-5">
      <h1 className="mb-5">About</h1>
      <p className="mb-3">
        This is a simple recipe app that allows you to search for a delightful recipe by name,
        and choose one based in their poularity and ratings.
      </p>
      <p className="mb-3">
        This app was built using React, Redux, and Bootstrap.
      </p>
      <p className="mb-3">
        The data is provided by Api Dojo.
        You can find the documentation for the API
        <ExternalLink className="link" href="https://rapidapi.com/apidojo/api/tasty"> here.</ExternalLink>
      </p>
      <p className="mb-3">
        The source code for this app can be found here:
        Github:&nbsp;
        <ExternalLink className="link" href="https://github.com/Camilovelag/awesome-recipes">
          https://github.com/Camilovelag/awesome-recipes.
        </ExternalLink>
      </p>
      <p className="mb-5">
        If you enjoyed this app, please consider giving it a star on Github. And if you have
        any questions or suggestions, please feel free to contact me.
      </p>
      <p className="center">
        Thank you for visiting!
      </p>
    </Row>
  </Container>
);

export default About;
