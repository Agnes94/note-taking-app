import React from "react";
import styled from "styled-components";
import { Button } from "./components/button";
import { Note } from "./components/note";
import { SidePanel } from "./components/sidePanel";
import { GlobalStyle } from "./globalStyles";
import { debounce, useClickOutside } from "./util";
import { AddIcon } from "./assets/svg/addIcon";
import { SearchInput } from "./components/searchInput";
import { NoteIcon } from "./assets/svg/noteIcon";
import { colors } from "./colors";

const LOCAL_STORAGE_KEY = "react-notes-app-data";
export interface INote {
  text: string;
  date: Date;
}

export const App = () => {
  const [showSidePanel, setShowSidePanel] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");
  const [notesList, setNotesList] = React.useState<Array<INote>>([
    { text: "", date: new Date()},
  ]);

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, () => setShowSidePanel(false));
  
  const toggleSidePanel = React.useCallback(
    () => setShowSidePanel(!showSidePanel),
    [showSidePanel]
  );
  
  const addNote = (): void => {
    const newNotesList = {
      text: "",
      date: new Date(),
    };
    setNotesList([...notesList, newNotesList]);
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

  const updateNote = React.useCallback(
    (idx: number, text: string) => {
      const newList = [...notesList];
      newList[idx].text = text;
      setNotesList(newList);
    },
    [notesList]
  );

  React.useEffect(() => {
    const storage_string = sessionStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storage_string) return;
    try {
      const savedNotes = JSON.parse(storage_string);
      if (savedNotes) setNotesList(savedNotes);
    } catch (err) {
      console.log("error");
    }
  }, []);

  React.useEffect(() => {
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesList));
  }, [notesList]);

  const getFilteredNotes = (notes: INote[], search: string) => {
    if (!search) {
      return notes;
    }
    return notes.filter((note) => note.text.includes(search));
  };

  const filteredNotes = getFilteredNotes(notesList, search);
  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);
  const handleSearch = debounce(updateQuery, 500);

  return (
    <div ref={wrapperRef}>
      <GlobalStyle />
      <SidePanel close={() => setShowSidePanel(false)} showSidePanel={showSidePanel}>
        <HeaderContainer>
          <SearchInput
            placeholder="Search notes"
            type="text"
            onChange={handleSearch}
          />
          <Button variant="icon" onClick={addNote}>
            <AddIcon />
          </Button>
        </HeaderContainer>
        {notesList.length > 0 &&
          (filteredNotes && filteredNotes.length > 0 ? (
            filteredNotes.map((note: INote, idx: number) => (
              <>
                <Note
                  onChange={updateNote}
                  remove={deleteNote}
                  idx={idx}
                  created_at={note.date.toLocaleString()}
                  text={note.text}
                  key={idx}
                />
              </>
            ))
          ) : (
            <Text>No results found</Text>
          ))}
      </SidePanel>
      {showSidePanel ? (
        ""
      ) : (
        <ToggleButton variant="primary" onClick={toggleSidePanel}>
          <NoteIcon width="2rem" height="2rem" />
          Notes
        </ToggleButton>
      )}
    </div>
  );
};

const ToggleButton = styled(Button)`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30rem;
  background: ${colors.slate3};
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;
/* by layering multiple shadows, we create a bit of the subtlety present in real-life shadows */

const Text = styled.h5`
  font-size: 16px;
`;
