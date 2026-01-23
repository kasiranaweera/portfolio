import { Card } from "@/components/ui/card";

const CV = () => {
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
        </div>

        {/* CV Viewer Card */}
        <Card className="overflow-hidden shadow-2xl border-2 border-border/50">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-primary/20 flex items-center justify-center">
                📄
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
            className="bg-gray-200 space-y-4 p-4"
          >
            <div className="flex flex-col gap-4">
              <img
                src="/cv-page-0.png"
                alt="CV Page 1"
                className="w-full rounded-lg shadow-md border border-border/50"
              />
              <img
                src="/cv-page-1.png"
                alt="CV Page 2"
                className="w-full rounded-lg shadow-md border border-border/50"
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
