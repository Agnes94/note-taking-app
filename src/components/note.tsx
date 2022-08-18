import React from "react";
import styled from "styled-components";
import { DeleteIcon } from "../assets/svg/deleteIcon";
import { colors } from "../colors";
import { Button } from "./button";

export interface INoteProps {
  title?: string;
  text: string;
  created_at?: string;
  idx: number;
  remove: (idx: number) => void;
  onChange: (idx: number, text: string) => void;
}

const MIN_TEXTAREA_HEIGHT = 32;

export const Note = (props: INoteProps) => {
  const { text, created_at, onChange, remove, idx } = props;
  const textareaRef: React.MutableRefObject<HTMLTextAreaElement | null> = React.useRef<HTMLTextAreaElement | null>(null);

  React.useLayoutEffect(() => {
    if(!(textareaRef && textareaRef.current)) return;  
    textareaRef.current.style.height = "inherit";
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [text]);

  return (
    <Container>
      <TextareaWrapper>
        <StyledTextArea
          onChange={(event) => onChange(idx, event.target.value)}
          style={{
            minHeight: MIN_TEXTAREA_HEIGHT,
            resize: "none"
          }}
          placeholder="Type here"
          ref={textareaRef}
          value={text}
          rows={4}
        />
          <Date>{created_at}</Date>
      </TextareaWrapper>
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

const Date = styled.p`
  align-self: flex-end;
  position: absolute;
  right: 6rem;
  padding-bottom: 1.5rem;
`;

const TextareaWrapper = styled.div`
  display: flex;
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
