import React from 'react'
import EditorJS from '@editorjs/editorjs';
import CodeTool from '@editorjs/code';
import Table from '@editorjs/table'
import { AgeOptions } from './Editor/Plugins/AgeOptions/AgeOptions';
import { MentionOptions } from './Editor/Plugins/MentionOptions/MentionOptions';

function Editor() {
    const editor = new EditorJS({
        holder:'editorjs',
        autofocus:true,
        tools:{
            "Code Snippet":{
                class: CodeTool,
                "data" : {
                    "code": "body {\n font-size: 14px;\n line-height: 16px;\n}",
                }
            },
            image: {
                class:AgeOptions,
            },
            mentions: {
                class:MentionOptions,
            },

            table: {
                class: Table,
                inlineToolbar: false,
                config:{
                    rows: 3,
                    cols: 3,
                    withHeadings:true,
                },
                data:{
                    withHeadings:true,
                    "content" : [ [ "Kine", "Pigs", "Chicken" ], [ "1 pcs", "3 pcs", "12 pcs" ], [ "100$", "200$", "150$" ] ]
                }
              },
        }
    });
    editor.isReady
    .then(() => {
      console.log('Editor.js is ready to work!')
      /** Do anything you need after editor initialization */
    })
    .catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`)
    });
  
  

  return (
      <div id='editorjs' style={{border:'1px solid black'}}></div>
  )
}

export default Editor
