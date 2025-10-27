"use server";

import nodemailer from "nodemailer";

export async function sendEmail(_, formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return {
        success: false,
        message: "All fields are required.",
      };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: "kaanpmete@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #666;">
            <p><strong>Sent from:</strong> Portfolio Contact Form</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Message
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        Sent from Portfolio Contact Form at ${new Date().toLocaleString()}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    if (error.errors && error.errors.length > 0) {
      const firstError = error.errors[0];
      const fieldName = firstError.path[0];


      const { [fieldName]: _, ...inputsWithoutErrorField } = rawData;

      return {
        success: false,
        message: firstError.message,
        inputs: inputsWithoutErrorField,
      };
    }

    return {
      success: false,
      message: "Unexpected error happened.",
      inputs: rawData,
    };
  }
}
