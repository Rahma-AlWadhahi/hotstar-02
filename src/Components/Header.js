import React from "react";
import styled from "styled-components";
import { Input } from "@material-ui/core";

function Header() {
  return (
    <Container>
      <Logo src="/assets/starlogo.jpg" />
      <Menu>
        <span>TV</span>
        <span>Movies</span>
        <span>Sports</span>
        <span>News</span>
        <span>Premium</span>
        <span>Disney+</span>
        <Righthead>
          <Input className="search" placeholder="search" />
          <i class="fas fa-search"></i>
          <button>SUBCRIBE</button>
          <span>LOGIN</span>
        </Righthead>
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: #121926;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const Menu = styled.div`
  display: flex;
  padding: 0 30px;
  cursor: pointer;

  span {
    font-size: 15px;
    padding: 0 30px;
    letter-spacing: 1.43px;
    position: relative;
    color: white;
  }
`;

const Righthead = styled.div`
  input {
    padding: 10 100px;
    bordr: none;
  }

  button {
    padding: 5px 10px 15px;
    background-color: #1f80e0;
    outline-width: 0;
    border: none;
    height: 25px;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 40px;
    font-size: 12px;
    color: #fff;
  }

  span {
    cursor: pointer;
    backgroung-color: #1f80e0;
    height: 24px;
    border-radius: 4px;
    margin-left: 200px;
    font-size: 12px;
    color: white;
  }
`;
