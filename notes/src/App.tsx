import React from "react";
import styled from "styled-components";
import { Button } from "./components/button";
import { Note } from "./components/note";
import { Input } from "./components/input";
import { SidePanel } from "./components/sidePanel";
import { GlobalStyle } from "./globalStyles";
import { debounce, useClickOutside } from "./util";

const LOCAL_STORAGE_KEY = "react-notes-app-data";

export const App = () => {
  const [showSidePanel, setShowSidePanel] = React.useState<boolean>(false);
  const toggleSidePanel = React.useCallback(
    () => setShowSidePanel(!showSidePanel),
    [showSidePanel]
  );
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, () => setShowSidePanel(false));
  const [notesList, setNotesList] = React.useState<string[]>([]);
  const [query, setQuery] = React.useState<string>("");

  const addNote = (): void => {
    setNotesList([...notesList, ""]);
  };

  // UseCallback is used to prevent all notes from rerendering when the list changes
  const deleteNote = React.useCallback(
    (idx: number): void => {
      const newList = [...notesList];
      newList.splice(idx, 1);
      setNotesList(newList);
    },
    [notesList]
  );

  // never change react state directly, always change the setter
  const updateNote = React.useCallback(
    (idx: number, text: string): void => {
      const newList = [...notesList];
      newList.splice(idx, 1, text);
      setNotesList(newList);
    },
    [notesList]
  );

  React.useEffect(() => {
    const storage_string = sessionStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storage_string) return;

    // wrap this in try
    try {
      const savedNotes = JSON.parse(storage_string) as string[];

      if (savedNotes) setNotesList(savedNotes);
    } catch (err) {
      // do something with the error
      console.log("error");
    }
  }, []);

  React.useEffect(() => {
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesList));
  }, [notesList]);

  const getFilteredNotes = (notes: string[], query: string) => {
    console.log("in getFilteredItems");
    if (!query) {
      return notes;
    }
    return notes.filter((note) => note.includes(query));
  };

  const filteredNotes = getFilteredNotes(notesList, query);
  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);
  const handleSearch = debounce(updateQuery, 500);

  return (
    <div ref={wrapperRef}>
      <GlobalStyle />
      <SidePanel showSidePanel={showSidePanel}>
        <Input type="text" onChange={handleSearch} />
        <Button onClick={addNote}>Add note</Button>
        {filteredNotes.map((note: string, idx: number) => (
          <Note
            onChange={updateNote}
            remove={deleteNote}
            idx={idx}
            text={note}
            key={idx}
          />
        ))}
      </SidePanel>
      {showSidePanel ? (
        ""
      ) : (
        <ToggleButton onClick={toggleSidePanel}>Open</ToggleButton>
      )}
    </div>
  );
};

const ToggleButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
`;
