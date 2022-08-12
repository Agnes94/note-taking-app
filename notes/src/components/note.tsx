import React from "react";
import styled from "styled-components";
import { DeleteIcon } from "../assets/svg/deleteIcon";
import { colors } from "../colors";
import { Button } from "./button";

export interface INoteProps {
  title?: string;
  text: string;
  date?: string;
  idx: number;
  remove: (idx: number) => void;
  onChange: (idx: number, text: string) => void;
}

const MIN_TEXTAREA_HEIGHT = 32;

export const Note = (props: INoteProps) => {
  const { text, date, onChange, remove, idx } = props;
  const textareaRef = React.useRef(null);

  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [text]);

  return (
    <Container>
      <TextareWrapper>
        <DateContainer>
          <Date>{date}</Date>
        </DateContainer>
        <StyledTextArea
          onChange={(event) => onChange(idx, event.target.value)}
          placeholder="Type here"
          ref={textareaRef}
          value={text}
          rows={4}
        />
      </TextareWrapper>
      <Button variant="icon" onClick={() => remove(idx)}>
        <DeleteIcon width="1.6rem" height="1.6rem" />
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

const DateContainer = styled.div`
  padding-right: 0.5rem;
  display: flex;
  justify-content: flex-end;
`;

const Date = styled.p`
  align-self: flex-end;
`;

const TextareWrapper = styled.div`
  display: "flex";
  flex-direction: column;
  align-items: flex-end;
`;

const StyledTextArea = styled.textarea`
  border: none;
  resize: none;
  margin-right: 0.5rem;
  padding: 1rem 1rem;
  background: ${colors.cyan2};
  border-radius: 1rem;
  width: 30rem;
  height: auto;
  margin-bottom: 1rem;
  outline: none;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;
