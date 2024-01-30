import React, { useEffect } from "react";
import { createReactEditorJS } from "react-editor-js";
import MentionTool from "editorjs-mention-tool";
import "./Editor.css";

import { UsersList } from "./Editor/Helper/Contants";
import {EDITOR_JS_TOOLS} from "./Editor/Helper/EDITOR_JS_TOOLS";

const ReactEditor = () => {

  const editorCore = React.useRef(null);

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);
  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.dangerouslyLowLevelInstance?.save();
    console.log(savedData)
  }, [])

  const ReactEditorJS = createReactEditorJS();

  useEffect(() => {
    new MentionTool({
      holder: "editorHolder",
      accessKey: "@",
      allUsers: UsersList,
    });
  }, []);

  return (
    <>
    <div className="editor-container">
      <ReactEditorJS
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        placeholder={`Write something here...`}
        holder="editorHolder"
        defaultValue={{"time":1706597677049,"blocks":[{"id":"oH8HWEbyfU","type":"Header","data":{"text":"Rich Text Editor","level":2}},],"version":"2.29.0"}}
        >
        <div id="editorHolder" style={{paddingTop:100}} />
      </ReactEditorJS>
    </div>
        </>
  );
};

export default ReactEditor;
