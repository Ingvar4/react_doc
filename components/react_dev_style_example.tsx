"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

type ExampleFile = {
  tab: string;
  label?: string;
  filename?: string;
  lang: string;
  code: string;
};

type ReactDevStyleExampleProps = {
  title?: string;
  previewTitle?: string;
  files: ExampleFile[];
  children: ReactNode;
  initialTab?: string;
  iframeHeight?: number;
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy code"
      className="rde-copy"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function TabButton({
  active,
  label,
  filename,
  onClick,
}: {
  active: boolean;
  label: string;
  filename?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={active ? "rde-tab rde-tab-active" : "rde-tab"}
    >
      <span className="rde-tab-label">{label}</span>
      {filename ? <span className="rde-tab-filename">{filename}</span> : null}
    </button>
  );
}

function IframePreview({
  title,
  height,
  children,
}: {
  title: string;
  height: number;
  children: ReactNode;
}) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  const srcDoc = useMemo(() => {
    return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              min-height: 100%;
              background: transparent;
              font-family: Inter, Arial, sans-serif;
            }
            body {
              box-sizing: border-box;
              padding: 16px;
            }
            *, *::before, *::after {
              box-sizing: border-box;
            }
          </style>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `;
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const updateMountNode = () => {
      const doc = iframe.contentDocument;
      const root = doc?.getElementById("root") as HTMLElement | null;
      setMountNode(root);
    };

    updateMountNode();
    iframe.addEventListener("load", updateMountNode);

    return () => {
      iframe.removeEventListener("load", updateMountNode);
    };
  }, []);

  return (
    <div className="rde-preview">
      <div className="rde-preview-header">
        <div className="rde-preview-title">{title}</div>
      </div>

      <iframe
        ref={iframeRef}
        title={title}
        srcDoc={srcDoc}
        className="rde-preview-frame"
        style={{ height }}
      />

      {mountNode ? createPortal(children, mountNode) : null}
    </div>
  );
}

export function ReactDevStyleExample({
  title,
  previewTitle = "Preview",
  files,
  children,
  initialTab,
  iframeHeight = 260,
}: ReactDevStyleExampleProps) {
  const defaultTab = initialTab ?? files[0]?.tab ?? "tsx";
  const [activeTab, setActiveTab] = useState(defaultTab);

  const activeFile = files.find((file) => file.tab === activeTab) ?? files[0];
  const code = activeFile?.code ?? "";

  return (
    <section className="rde">
      {title ? <div className="rde-title">{title}</div> : null}

      <div className="rde-grid">
        <div className="rde-code-panel">
          <div className="rde-toolbar">
            <div className="rde-tabs">
              {files.map((file) => (
                <TabButton
                  key={file.tab}
                  active={activeTab === file.tab}
                  label={file.label ?? file.tab}
                  filename={file.filename}
                  onClick={() => setActiveTab(file.tab)}
                />
              ))}
            </div>

            <CopyButton text={code} />
          </div>

          <div className="rde-code">
            <DynamicCodeBlock
              lang={activeFile?.lang ?? "tsx"}
              code={code}
              options={{
                themes: {
                  light: "github-light",
                  dark: "github-dark",
                },
              }}
            />
          </div>
        </div>

        <IframePreview title={previewTitle} height={iframeHeight}>
          {children}
        </IframePreview>
      </div>

      <style jsx global>{`
        .rde {
          --rde-border: #e5e7eb;
          --rde-surface: #ffffff;
          --rde-surface-2: #fafafa;
          --rde-text: #111827;
          --rde-muted: #6b7280;
          --rde-faint: #9ca3af;
          --rde-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          --rde-tab-active-border: #d1d5db;
          --rde-tab-active-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          --rde-tab-active-bg: #ffffff;
          --rde-copy-bg: #ffffff;
          --rde-copy-hover: #f9fafb;
          --rde-copy-text: #111827;
          margin: 24px 0;
          border: 1px solid var(--rde-border);
          border-radius: 18px;
          overflow: hidden;
          background: var(--rde-surface);
          box-shadow: var(--rde-shadow);
          color-scheme: light;
        }

        :global(html.dark) .rde,
        :global(html[data-theme="dark"]) .rde,
        :global(body.dark) .rde,
        :global(body[data-theme="dark"]) .rde {
          --rde-border: #292929;
          --rde-surface: #ffffff;
          --rde-surface-2: #2e2e2e;
          --rde-text: #e5e7eb;
          --rde-muted: #94a3b8;
          --rde-faint: #B8B8B8;
          --rde-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);
          --rde-tab-active-border: #292929;
          --rde-tab-active-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
          --rde-tab-active-bg: #121212;
          --rde-copy-bg: #121212;
          --rde-copy-hover: #292929;
          --rde-copy-text: #b8b8b8;
          color-scheme: dark;
        }

        .rde-title {
          padding: 12px 16px;
          border-bottom: 1px solid var(--rde-border);
          font-size: 15px;
          font-weight: 600;
          color: var(--rde-text);
          background: var(--rde-surface);
        }

        .rde-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
          gap: 0;
          background: var(--rde-surface);
        }

        .rde-code-panel {
          min-width: 0;
          border-right: 1px solid var(--rde-border);
          background: var(--rde-surface);
        }

        .rde-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 12px;
          border-bottom: 1px solid var(--rde-border);
          background: var(--rde-surface-2);
        }

        .rde-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: stretch;
          min-width: 0;
        }

        .rde-tab {
          border: 1px solid transparent;
          background: transparent;
          padding: 8px 12px;
          margin: 0;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          color: var(--rde-muted);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          min-width: 0;
          transition:
            background-color 0.15s ease,
            border-color 0.15s ease,
            color 0.15s ease,
            box-shadow 0.15s ease;
        }

        .rde-tab:hover {
          background: var(--rde-copy-hover);
          color: var(--rde-text);
        }

        .rde-tab-active {
          background: var(--rde-tab-active-bg);
          color: var(--rde-text);
          border-color: var(--rde-tab-active-border);
          box-shadow: var(--rde-tab-active-shadow);
          font-weight: 600;
        }

        .rde-tab-label {
          line-height: 1.1;
        }

        .rde-tab-filename {
          font-size: 11px;
          line-height: 1.1;
          color: var(--rde-faint);
          font-weight: 500;
        }

        .rde-copy {
          border: 1px solid var(--rde-border);
          border-radius: 10px;
          padding: 8px 10px;
          font-size: 13px;
          line-height: 1;
          background: var(--rde-copy-bg);
          cursor: pointer;
          color: var(--rde-copy-text);
          white-space: nowrap;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03);
          transition:
            background-color 0.15s ease,
            border-color 0.15s ease,
            color 0.15s ease;
        }

        .rde-copy:hover {
          background: var(--rde-copy-hover);
        }

        .rde-code {
          min-width: 0;
        }

        .rde-preview {
          min-width: 0;
          background: var(--rde-surface);
        }

        .rde-preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 12px;
          border-bottom: 1px solid var(--rde-border);
          background: var(--rde-surface-2);
        }

        .rde-preview-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--rde-text);
        }

        .rde-preview-frame {
          display: block;
          width: 100%;
          border: 0;
          background: transparent;
        }

        @media (max-width: 900px) {
          .rde-grid {
            grid-template-columns: 1fr;
          }

          .rde-code-panel {
            border-right: none;
            border-bottom: 1px solid var(--rde-border);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rde-tab,
          .rde-copy {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
