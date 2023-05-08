const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.name = user.name;
    this.url = url;
    this.from = "Aves Air <" + process.env.EMAIL_USERNAME + ">";
  }
  newTransport() {
    return nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      port: 587,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendWelcome() {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: "Welcome to Aves Air",
      html: "<h1>Welcome to Aves Air</h1>",
    };
    await this.newTransport().sendMail(mailOptions);
  }

  async sendBookingConfirmation() {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: "Aves Air - Booking Confirmation",
      html: "<h1>Thank you for booking with us. Your booking is confirmed.</h1>",
    };
    await this.newTransport().sendMail(mailOptions);
  }

  async sendBookingCancellation() {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: "Aves Air - Booking Cancellation",
      html: "<h1>Your booking is cancelled.</h1>",
    };
    await this.newTransport().sendMail(mailOptions);
  }

  async sendFlightCancellation() {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: "Aves Air - Flight Cancellation",
      html: "<h1>Your flight is cancelled.</h1>",
    };
    await this.newTransport().sendMail(mailOptions);
  }

  async sendPasswordReset() {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: "Aves Air - Password Reset",
      html: `<h3>Click on the link to reset your password.</h3>
      <a href=" ${this.url}">Reset Password</a>
      `,
    };
    await this.newTransport().sendMail(mailOptions);
  }
};
