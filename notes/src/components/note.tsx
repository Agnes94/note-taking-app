import React from "react";
import styled from "styled-components";
import { DeleteIcon } from "../assets/svg/deleteIcon";
import { Button } from "./button";

export interface INoteProps {
  title?: string;
  text: string;
  date?: Date;
  idx: number;
  remove: (idx: number) => void;
  onChange: (idx: number, text: string) => void;
}

export const Note = (props: INoteProps) => {
  const { title, text, date, onChange, remove, idx } = props;

  return (
    <Container>
      <h1>{title}</h1>
      <StyledTextArea
        onChange={(event) => onChange(idx, event.target.value)}
        placeholder="Type here"
        value={text}
        rows={6}
      />
      <Button variant='icon' onClick={() => remove(idx)}>
        <DeleteIcon width='1.6rem' height='1.6rem'/>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  :last-child {
    margin-bottom: 1rem;
  }
`;

const StyledTextArea = styled.textarea`
  border: none;
  resize: none;
  padding: 1rem 1rem;
  background: hsl(55 100% 90.9%);
  border-radius: 1rem;
  width: 30rem;
  margin-bottom: 1rem;
`
