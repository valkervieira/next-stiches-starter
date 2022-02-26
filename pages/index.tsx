import { styled } from "@/stiches.config";
import type { NextPage } from "next";

const H1 = styled("h1", {
  color: "blue",
});

const Home: NextPage = () => {
  return <H1>hey</H1>;
};

export default Home;
