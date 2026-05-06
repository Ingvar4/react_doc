import { Sandpack } from '@codesandbox/sandpack-react';
import { gruvboxDark } from "@codesandbox/sandpack-themes";

interface SandpackEmbedProps {
  code: string;
  template?: 'react' | 'vanilla' | 'vue';
}

export function SandpackEmbed({ code, template = 'react' }: SandpackEmbedProps) {
  return (
    <div className="my-6 rounded-lg border overflow-hidden shadow-sm">
      <Sandpack
        template={template}
        theme={gruvboxDark}
        options={{
          showLineNumbers: true,
          showInlineErrors: true,
          editorHeight: '200px',
        }}
        files={{
          // Имя файла по умолчанию зависит от шаблона
          [template === 'react' ? '/App.js' : '/index.js']: code,
        }}
      />
    </div>
  );
}