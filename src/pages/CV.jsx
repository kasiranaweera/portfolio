import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import cvPage0 from "../../assets/cv-page-0.png";
import cvPage1 from "../../assets/cv-page-1.png";

const CV = () => {
  const cvContainerRef = useRef(null);

  useEffect(() => {
    // Apply protections to the entire document
    const applyProtections = () => {
      // Disable right-click context menu on the CV container
      const handleContextMenu = (e) => {
        if (cvContainerRef.current && cvContainerRef.current.contains(e.target)) {
          e.preventDefault();
          return false;
        }
      };

      // Disable copy
      const handleCopy = (e) => {
        e.preventDefault();
        return false;
      };

      // Disable cut
      const handleCut = (e) => {
        e.preventDefault();
        return false;
      };

      // Disable keyboard shortcuts (Ctrl+C, Ctrl+X, Ctrl+S, etc.)
      const handleKeyDown = (e) => {
        // Block common shortcuts
        if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "x" || e.key === "s" || e.key === "p")) {
          e.preventDefault();
          return false;
        }
        // Block Print Screen
        if (e.key === "PrintScreen") {
          e.preventDefault();
          return false;
        }
      };

      // Disable drag
      const handleDragStart = (e) => {
        e.preventDefault();
        return false;
      };

      document.addEventListener("contextmenu", handleContextMenu, true);
      document.addEventListener("copy", handleCopy, true);
      document.addEventListener("cut", handleCut, true);
      document.addEventListener("keydown", handleKeyDown, true);
      document.addEventListener("dragstart", handleDragStart, true);

      // Add CSS protections
      const style = document.createElement("style");
      style.innerHTML = `
        body, html {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.removeEventListener("contextmenu", handleContextMenu, true);
        document.removeEventListener("copy", handleCopy, true);
        document.removeEventListener("cut", handleCut, true);
        document.removeEventListener("keydown", handleKeyDown, true);
        document.removeEventListener("dragstart", handleDragStart, true);
        document.head.removeChild(style);
      };
    };

    const cleanup = applyProtections();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Resume
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            View my professional experience, education, and skills below.
          </p>

          {/* Protection Alert
          <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800">
            <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertDescription className="text-blue-800 dark:text-blue-200 ml-2">
              <span className="font-semibold">Protected View:</span> Downloading, copying, 
              and screenshots are disabled on this page.
            </AlertDescription>
          </Alert> */}
        </div>

        {/* CV Viewer Card */}
        <Card className="overflow-hidden shadow-2xl border-2 border-border/50">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-primary/20 flex items-center justify-center">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">CV Viewer</h3>
                <p className="text-sm text-muted-foreground">
                  KASI Ranaweera - CV (Protected Image View)
                </p>
              </div>
            </div>
          </div>

          {/* CV Images Gallery */}
          <div
            ref={cvContainerRef}
            className="bg-gray-200 space-y-4 p-4"
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4">
              <img
                src={cvPage0}
                alt="CV Page 1"
                className="w-full rounded-lg shadow-md border border-border/50"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                src={cvPage1}
                alt="CV Page 2"
                className="w-full rounded-lg shadow-md border border-border/50"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </Card>

        {/* Info Section */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border/50">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Need a copy of my CV?</span> 
            {" "}You can view it above, but to download or get a copy for your records, 
            please{" "}
            <a href="/contact" className="text-primary hover:underline font-medium">
              contact me
            </a>
            {" "}and I'll be happy to send it directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CV;
