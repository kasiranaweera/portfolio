import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

/**
 * API endpoint to send contact form emails via Gmail SMTP
 * POST /api/send-email
 * Body: { from_name, from_email, message }
 */

export async function POST(req) {
  try {
    const body = await req.json();
    const { from_name, from_email, message } = body;

    // Validate inputs
    if (!from_name || !from_email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Gmail App Password (16 chars)
      },
    });

    // Email content to send to you
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your Gmail
      subject: `New Portfolio Message from ${from_name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Reply to: ${from_email}</small></p>
      `,
      replyTo: from_email, // Easy reply to visitor
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send confirmation to visitor (optional)
    const confirmationMail = {
      from: process.env.GMAIL_USER,
      to: from_email,
      subject: 'Message Received - Portfolio Contact',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${from_name},</p>
        <p>I've received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Kasi Ranaweera</p>
      `,
    };

    await transporter.sendMail(confirmationMail);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
