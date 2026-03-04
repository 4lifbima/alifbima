import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    const { name, email, message } = body

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Semua field wajib diisi.',
        })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Format email tidak valid.',
        })
    }

    if (!config.resendApiKey) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Email service belum dikonfigurasi.',
        })
    }

    const resend = new Resend(config.resendApiKey)

    const { error } = await resend.emails.send({
        from: 'www.alifbima.my.id <onboarding@resend.dev>',
        to: ['alifbima.dev@gmail.com'],
        replyTo: email,
        subject: `Alif Bima Pradana - Pesan baru dari ${name}`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
        <h2 style="color: #6366f1; margin-bottom: 4px;">📩 Pesan Baru dari Portfolio</h2>
        <p style="color: #64748b; font-size: 14px; margin-top: 0;">Seseorang menghubungi Anda melalui form kontak.</p>

        <div style="background: #ffffff; border-radius: 8px; padding: 20px; margin: 20px 0; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 80px;">Nama</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
              <td style="padding: 8px 0; color: #6366f1;">${email}</td>
            </tr>
          </table>
        </div>

        <div style="background: #ffffff; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 13px; margin: 0 0 8px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Pesan</p>
          <p style="color: #0f172a; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>

        <p style="color: #94a3b8; font-size: 12px; margin-top: 20px; text-align: center;">
          Dikirim dari Portfolio Alif Bima Pradana &bull; ${new Date().toLocaleString('id-ID')}
        </p>
      </div>
    `,
    })

    if (error) {
        console.error('Resend error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Gagal mengirim email. Silakan coba lagi.',
        })
    }

    return {
        success: true,
        message: 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda.',
    }
})
