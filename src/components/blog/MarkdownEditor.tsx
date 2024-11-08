import React from 'react';
import MarkdownIt from 'markdown-it';
import { Eye, Edit } from 'lucide-react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const [isPreview, setIsPreview] = React.useState(false);
  const md = React.useMemo(() => new MarkdownIt(), []);

  const renderedMarkdown = React.useMemo(() => {
    return md.render(value);
  }, [value, md]);

  return (
    <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
        <h3 className="font-medium">Content</h3>
        <button
          onClick={() => setIsPreview(!isPreview)}
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-white dark:bg-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          {isPreview ? (
            <>
              <Edit className="w-4 h-4" />
              Edit
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Preview
            </>
          )}
        </button>
      </div>

      {isPreview ? (
        <div 
          className="prose dark:prose-invert max-w-none p-4"
          dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[500px] p-4 bg-white dark:bg-gray-900 focus:outline-none"
          placeholder="Write your content in Markdown..."
        />
      )}
    </div>
  );
}