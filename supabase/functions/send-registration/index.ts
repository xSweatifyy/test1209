import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Email příjemce - lze snadno změnit
const RECIPIENT_EMAIL = "developing.andilek@gmail.com"; // Změňte po ověření domény v Resend

interface RegistrationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courseType: string;
  street: string;
  city: string;
  postalCode: string;
  birthDate: string;
  nationality: string;
}

const getCourseTypeName = (type: string): string => {
  switch (type) {
    case 'B':
      return 'Skupina B';
    case 'kondice':
      return 'Kondiční jízdy';
    case 'navraceni':
      return 'Navrácení ŘP';
    default:
      return type;
  }
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: RegistrationRequest = await req.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return new Response(
        JSON.stringify({ error: "Chybí povinné údaje" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const courseTypeName = getCourseTypeName(data.courseType);

    // Email pro autoškolu
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Autoškola Müllerka <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        subject: `Nová online přihláška - ${data.firstName} ${data.lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
              Nová online přihláška do autoškoly
            </h1>
            
            <h2 style="color: #1E3A8A;">Osobní údaje</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">Jméno:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.firstName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">Příjmení:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">E-mail:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">Telefon:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">Datum narození:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.birthDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">Státní občanství:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.nationality}</td>
              </tr>
            </table>

            <h2 style="color: #1E3A8A; margin-top: 20px;">Adresa</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">Ulice a č.p.:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.street}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">Město:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.city}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB; font-weight: bold;">PSČ:</td>
                <td style="padding: 8px; border-bottom: 1px solid #E5E7EB;">${data.postalCode}</td>
              </tr>
            </table>

            <h2 style="color: #1E3A8A; margin-top: 20px;">Žádost o oprávnění</h2>
            <p style="font-size: 18px; background: #EFF6FF; padding: 15px; border-radius: 8px;">
              <strong>${courseTypeName}</strong>
            </p>

            <hr style="margin-top: 30px; border: none; border-top: 1px solid #E5E7EB;" />
            <p style="color: #6B7280; font-size: 12px;">
              Odesláno z webové stránky Autoškola Müllerka
            </p>
          </div>
        `,
      }),
    });

    if (!adminEmailRes.ok) {
      const errorData = await adminEmailRes.text();
      console.error("Admin email error:", errorData);
      throw new Error("Failed to send admin email");
    }

    // Potvrzovací email pro žadatele
    const confirmationEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Autoškola Müllerka <onboarding@resend.dev>",
        to: [data.email],
        subject: "Potvrzení přihlášky - Autoškola Müllerka",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #3B82F6;">Děkujeme za Vaši přihlášku!</h1>
            
            <p>Vážený/á ${data.firstName} ${data.lastName},</p>
            
            <p>děkujeme za Vaši přihlášku do Autoškoly Müllerka. Vaši přihlášku jsme přijali a budeme Vás brzy kontaktovat s dalšími informacemi.</p>
            
            <h2 style="color: #1E3A8A;">Shrnutí Vaší přihlášky</h2>
            <ul style="line-height: 1.8;">
              <li><strong>Kurz:</strong> ${courseTypeName}</li>
              <li><strong>Jméno:</strong> ${data.firstName} ${data.lastName}</li>
              <li><strong>Telefon:</strong> ${data.phone}</li>
            </ul>

            <p style="margin-top: 20px;">V případě dotazů nás neváhejte kontaktovat:</p>
            <ul style="line-height: 1.8;">
              <li>📞 <a href="tel:+420608534709">+420 608 534 709</a></li>
              <li>📧 <a href="mailto:${RECIPIENT_EMAIL}">${RECIPIENT_EMAIL}</a></li>
            </ul>

            <p style="margin-top: 30px;">S pozdravem,<br/><strong>Autoškola Müllerka</strong></p>

            <hr style="margin-top: 30px; border: none; border-top: 1px solid #E5E7EB;" />
            <p style="color: #6B7280; font-size: 12px;">
              Tento email byl odeslán automaticky z webové stránky Autoškola Müllerka.
            </p>
          </div>
        `,
      }),
    });

    if (!confirmationEmailRes.ok) {
      console.warn("Confirmation email failed, but admin email was sent");
    }

    console.log("Emails sent successfully");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Přihláška byla úspěšně odeslána" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-registration function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
