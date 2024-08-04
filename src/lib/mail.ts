import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `https://oath-auth.vercel.app/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `
            <p>Hi there!</p>
            <p>Click the link below to confirm your email address:</p>
            <a href="${confirmLink}">Confirm your email</a>
        `
    })
}
