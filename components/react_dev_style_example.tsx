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
      style={{
        border: "1px solid #d1d5db",
        borderRadius: 10,
        padding: "8px 10px",
        fontSize: 13,
        lineHeight: 1,
        background: "#fff",
        cursor: "pointer",
        color: "#111827",
        whiteSpace: "nowrap",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.03)",
      }}
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
      style={{
        border: "1px solid transparent",
        background: active ? "#fff" : "transparent",
        padding: "8px 12px",
        margin: 0,
        cursor: "pointer",
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        color: active ? "#111827" : "#6b7280",
        borderRadius: 10,
        boxShadow: active ? "0 1px 2px rgba(0, 0, 0, 0.05)" : "none",
        borderColor: active ? "#d1d5db" : "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        minWidth: 0,
      }}
    >
      <span style={{ lineHeight: 1.1 }}>{label}</span>
      {filename ? (
        <span
          style={{
            fontSize: 11,
            lineHeight: 1.1,
            color: active ? "#6b7280" : "#bcbcbc",
            fontWeight: 500,
          }}
        >
          {filename}
        </span>
      ) : null}
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
    <div style={{ minWidth: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: "10px 12px",
          borderBottom: "1px solid #e5e7eb",
          background: "#fafafa",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#111827",
          }}
        >
          {title}
        </div>
      </div>

      <iframe
        ref={iframeRef}
        title={title}
        srcDoc={srcDoc}
        style={{
          display: "block",
          width: "100%",
          height,
          border: 0,
          background: "transparent",
        }}
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
    <section
      style={{
        margin: "24px 0",
        border: "1px solid #e5e7eb",
        borderRadius: 18,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
      }}
      
    >
      {title ? (
        <div
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid #e5e7eb",
            fontSize: 15,
            fontWeight: 600,
            color: "#111827",
          }}
        >
          {title}
        </div>
      ) : null}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
          gap: 0,
        }}
      >
        <div
          style={{
            minWidth: 0,
            borderRight: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "10px 12px",
              borderBottom: "1px solid #e5e7eb",
              background: "#fafafa",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                alignItems: "stretch",
              }}
            >
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

          <div style={{ minWidth: 0 }}>
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

      <style jsx>{`
        @media (max-width: 900px) {
          section > div {
            grid-template-columns: 1fr !important;
          }

          section > div > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid #e5e7eb;
          }
        }
      `}</style>
    </section>
  );
}
