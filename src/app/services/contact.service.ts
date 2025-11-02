import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly SERVICE_ID = 'example';
  private readonly TEMPLATE_ID = 'example';
  private readonly PUBLIC_KEY = 'example';

  constructor() {}
  async sendEmail(formData: ContactFormData): Promise<EmailJSResponseStatus> {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'seu-email@exemplo.com',
      };

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY
      );

      return response;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      throw error;
    }
  }
}
