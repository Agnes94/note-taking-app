import React from "react";
import styled from "styled-components";

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
      <textarea
        onChange={(event) => onChange(idx, event.target.value)}
        placeholder="Type here"
        value={text}
      />
      <button onClick={() => remove(idx)}>delete note</button>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 1rem;
`;
