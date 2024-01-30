
import { AgeOptions } from '../Plugins/AgeOptions/AgeOptions';
import { CodeSnippet } from '../Plugins/CodeSnippet/CodeSnippet';
import { MentionOptions } from '../Plugins/MentionOptions/MentionOptions';
import MentionTool from '../Plugins/MentionTool';
import { Table } from '../Plugins/UserTable/Table';
 import Header from "@editorjs/header";
import { UsersList } from './Contants';


export   const EDITOR_JS_TOOLS= {
    autoFocus: true,
    Header:Header,
    "Code Snippet": {
      class: CodeSnippet,
    },
    image: {
      class: AgeOptions,
    },
    table: {
      class: Table,
      withHeadings: true,
      config: {
        rows: 3,
        cols: 4,
        heading: ["Title", "Name", "Age", "City"],
      },
    },
    mentionOption:{
      class:MentionOptions,
      allUsers:UsersList
    }
  };