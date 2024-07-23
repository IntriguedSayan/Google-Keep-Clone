import React, { useEffect } from "react";
import { SingleNote } from "./SingleNote";
import "./NotesContainer.css";
import { NotesState } from "../redux/notes-reducer/reducer";
import { getNotes } from "../redux/notes-reducer/action";
import { useDispatch, useSelector } from "../redux/notes-reducer/hooks";

export const notes = [
  {
    id: 1,
    title: "batch -> 18 , NEM201",
    isPinned: false,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum fugit impedit nostrum distinctio optio magni",
  },
  {
    id: 2,
    title: "REACT_APP_UPLOAD_PRESET_NAME image_bucket",
    isPinned: false,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim suscipit quasi magni animi quae sunt, blanditiis rem ipsam eos rerum itaque nobis saepe hic magnam officia labore beatae debitis!',
  },
  {
    id: 3,
    title: "Chakratemplates",
    isPinned: false,
    content: "Empty note",
  },
  {
    id: 4,
    title: "Human Readable Time Ended Description",
    isPinned: false,
    content:
      "Given number of minutes, convert it into human readable form.\nExample:\n130 becomes 2hrs 10minutes\n110 becomes 1hr 50minutes\n120 becomes 2hrs 00minutes\nNote the exact format of output...",
  },
  {
    id: 5,
    title:
      "405727860421-a03ua7p4eop80sgk91r56s69v4ccleqn.apps.googleusercontent.com",
    isPinned: false,
    content:
      'Lorem ipsum nihil dolorem fugiat autem odit. Corporis molestiae quia voluptatum minus, et dolores qui labore cumque reprehenderit numquam!',
  },
  {
    id: 6,
    title: "Office hour:",
    isPinned: true,
    content:
      "Step 1: Student will fill this form if the student shows up. It should be filled in presence of 3: E/C will send the feedback form to student after the office hour conduction\nStep 4: IA will share the Adhoc request form with...",
  },
  {
    id: 7,
    title: "Office hour:",
    isPinned: true,
    content:
      "Step 1: Student will fill this form if the student shows up. It should be filled in presence of",
  },
  {
    id: 8,
    title: "Office hour:",
    isPinned: true,
    content:
      "Step 1: Student will fill this form if the student shows up. It should be filled in presence of IA",
  },
];

const NoteContainer: React.FC = () => {
  const dispatch = useDispatch();
  const notesFromRedux = useSelector((state: NotesState) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);


  return (
    <>
      <div className="pinned">
        {
          notesFromRedux?.filter((note)=>(
              note.isPinned === true
          )).map((note)=>(
              <SingleNote
                key={note.id}
                id={note.id}
                title={note.title ? note.title : ""}
                content={note.content}
                isPinned={note.isPinned}
              />
          ))
        }
      </div>

      <div className="notes_container">
        {notesFromRedux?.filter((note)=>(
            note.isPinned === false
        )).map((elem) => (
          <SingleNote
            key={elem.id}
            id={elem.id}
            title={elem.title ? elem.title : ""}
            content={elem.content}
            isPinned={elem.isPinned}
          />
        ))}
      </div>
    </>
  );
};

export { NoteContainer };
