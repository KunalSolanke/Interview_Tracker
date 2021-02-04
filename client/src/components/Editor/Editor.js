import React, { useEffect } from "react";
import { Editor as IEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  editorClass: {
    backgroundColor: "white",
    minHeight: "400px",
    borderRadius: "5px",
    padding: "1rem",
  },
});
function Editor({ editorData, seteditorData }) {
  const classes = useStyles();
  useEffect(() => {}, [editorData]);

  const handleEditorDataChange = (state) => {
    seteditorData(state);
  };
  return (
    <>
      <IEditor
        editorState={editorData}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName={classes.editorClass}
        onEditorStateChange={handleEditorDataChange}
      />
    </>
  );
}

export default Editor;
