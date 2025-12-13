import nodemailer from 'nodemailer';

/**
 * API endpoint to send contact form emails via Gmail SMTP
 * POST /api/send-email
 * Body: { from_name, from_email, message }
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { from_name, from_email, message } = req.body;

  // Validate inputs
  if (!from_name || !from_email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(from_email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
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

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
    });
  }
}
