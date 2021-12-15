import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import {
  Div,
  Text,
  Row,
  Col,
  Container,
  Image as AtomImage,
  Anchor,
} from "atomize";
import * as React from "react";

const Meta: React.FC<{}> = () => {
  return (
    <NextSeo
      title="Stackle"
      description="Fill holes, cracks, and other defects in your cloud provider's developer experience"
      canonical="https://stackle.io"
      openGraph={{
        url: "https://stackle.io",
        title: "Stackle",
        description:
          "Fill holes, cracks, and other defects in your cloud provider's developer experience",
      }}
    />
  );
};

const HeaderSection: React.FC<{
  flexGrow?: number;
  flexDir?: "row" | "column";
  display?: "flex" | "block";
  flexAlign?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
}> = ({
  children,
  flexGrow = 0,
  flexDir = "row",
  display = "flex",
  flexAlign = "center",
}) => {
  return (
    <Div
      p={{ xs: "0.5rem", md: "1rem" }}
      d={display}
      flexDir={flexDir}
      align={flexAlign}
      flexGrow={{ flexGrow }}
    >
      {children}
    </Div>
  );
};

const HeaderTitle: React.FC<{}> = (props) => {
  return (
    <Text
      tag="h1"
      d={{ xs: "none", sm: "block" }}
      textAlign={{ xs: "right" }}
      flexGrow={{ xs: 1 }}
    >
      {props.children}
    </Text>
  );
};

const HeaderLogo: React.FC<{}> = (props) => {
  return <AtomImage as={Image} src="/skull.svg" />;
};

const Header: React.FC<{}> = () => {
  return (
    <Row tag="header" d={{ xs: "block", sm: "flex" }}>
      <Meta />
      <Col d={{ xs: "none", sm: "flex" }}>
        <HeaderSection>
          <HeaderLogo />
          <HeaderTitle>Stackle</HeaderTitle>
        </HeaderSection>
      </Col>
      <Col d={{ xs: "none", md: "flex" }}></Col>
      <Col d={{ xs: "flex", md: "none" }}></Col>
    </Row>
  );
};

const Body: React.FC<{}> = () => {
  return (
    <Row
      tag="main"
      d="flex"
      flexGrow={{ xs: "1", sm: "2" }}
      p={{ xs: "3rem 0 0 0 " }}
    >
      <Col size={{ xs: 12, sm: 9, md: 6 }} style={{ margin: "0 auto" }}>
        <AtomImage
          as={Image}
          src="/skull.svg"
          alt="Stackle Logo"
          d={{ xs: "block", sm: "none" }}
        />
        <Text
          tag="h1"
          d={{ xs: "block", sm: "none" }}
          textAlign="center"
          textSize={{ xs: "display3" }}
        >
          Stackle
        </Text>
        <Text tag="p" textAlign="center" textSize="heading">
          Fill holes, cracks, and other defects in your cloud provider&apos;s
          developer experience.
        </Text>
      </Col>
    </Row>
  );
};

const Footer: React.FC<{}> = () => {
  return (
    <Row
      tag="footer"
      d="flex"
      flexDir="column"
      justify="center"
      align="center"
      flexGrow="2"
      style={{ marginTop: "4rem" }}
    >
      <Col size={{ xs: 12 }}>
        {/* <Anchor
          href="https://twitter.com/stacklelabs"
          style={{ marginRight: "5px" }}
        >
          @stacklelabs
        </Anchor> */}
        <Anchor textSize="title" href="mailto:hello@stackle.io">
          hello@stackle.io
        </Anchor>
      </Col>
    </Row>
  );
};

const Page: React.FC<{}> = (props) => {
  return (
    <Container d={{ xs: "block" }} p="0" h="100vh">
      {props.children}
    </Container>
  );
};

export default function Home() {
  return (
    <Page>
      <Header />
      <Body />
      <Footer />
    </Page>
  );
}
