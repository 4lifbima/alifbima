import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    // Get API key from runtime config (works in Vercel production)
    const config = useRuntimeConfig()
    const resend = new Resend(config.resendApiKey)

    const body = await readBody(event)

    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Name, email, dan message harus diisi.',
        })
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Format email tidak valid.',
        })
    }

    try {
        // Send email to your inbox
        await resend.emails.send({
            from: 'KONTAK MASUK <onboarding@resend.dev>', // You can change this after verifying domain
            to: 'alifbima.dev@gmail.com', // Your email address
            replyTo: email,
            subject: `www.alifbima.my.id Pesan dari ${name}`,
            html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px;">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 30px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✉️ Pesan Baru dari Portfolio</h1>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #6366f1;">👤 Nama:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #6366f1;">📧 Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">
                  <a href="mailto:${email}" style="color: #6366f1;">${email}</a>
                </td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <strong style="color: #6366f1;">💬 Pesan:</strong>
              <div style="margin-top: 12px; padding: 16px; background-color: #f3f4f6; border-radius: 8px; color: #374151; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
              Dikirim dari portfolio website contact form
            </div>
          </div>
        </div>
      `,
        })


        return {
            success: true,
            message: 'Pesan berhasil dikirim!',
        }
    } catch (error: any) {
        console.error('Resend Error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Gagal mengirim email. Silakan coba lagi.',
        })
    }
})
