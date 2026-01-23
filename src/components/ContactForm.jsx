'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSubmitStatus({
            type: "success",
            message:
              "✅ Your message has been sent successfully! I'll get back to you soon.",
          });
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setSubmitStatus({
            type: "error",
            message:
              "❌ Failed to send message. Please try again or contact me directly.",
          });
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label
            htmlFor="from_name"
            className="text-foreground font-semibold mb-2 block"
          >
            Your Name
          </Label>
          <Input
            id="from_name"
            name="from_name"
            placeholder="Enter your full name"
            required
            className="bg-secondary/50 border-border/50 focus:border-primary/50 placeholder-muted-foreground/50"
          />
        </div>

        <div>
          <Label
            htmlFor="from_email"
            className="text-foreground font-semibold mb-2 block"
          >
            Email Address
          </Label>
          <Input
            id="from_email"
            name="from_email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="bg-secondary/50 border-border/50 focus:border-primary/50 placeholder-muted-foreground/50"
          />
        </div>
      </div>

      <div>
        <Label
          htmlFor="subject"
          className="text-foreground font-semibold mb-2 block"
        >
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What is this about?"
          required
          className="bg-secondary/50 border-border/50 focus:border-primary/50 placeholder-muted-foreground/50"
        />
      </div>

      <div>
        <Label
          htmlFor="message"
          className="text-foreground font-semibold mb-2 block"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Share your thoughts, questions, or collaboration ideas..."
          rows={7}
          required
          className="bg-secondary/50 border-border/50 focus:border-primary/50 placeholder-muted-foreground/50 resize-none"
        />
      </div>

      {submitStatus && (
        <div
          className={`p-4 rounded-lg border ${
            submitStatus.type === "success"
              ? "bg-green-50/10 border-green-200/50 text-green-600 dark:text-green-400"
              : "bg-red-50/10 border-red-200/50 text-red-600 dark:text-red-400"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105 py-3"
      >
        <Send className="w-5 h-5 mr-2" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
