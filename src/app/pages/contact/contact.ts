import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  async onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      // Použijeme EmailJS - bezplatnú službu na odosielanie emailov
      // Najskôr si musíš zaregistrovať na https://www.emailjs.com/
      // a nahradiť tieto hodnoty:
      const serviceId = 'YOUR_SERVICE_ID'; // napr. 'service_abc123'
      const templateId = 'YOUR_TEMPLATE_ID'; // napr. 'template_xyz789'
      const publicKey = 'YOUR_PUBLIC_KEY'; // napr. 'user_ABC123XYZ'

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: this.formData.name,
            from_email: this.formData.email,
            message: this.formData.message,
            to_email: 'breaktime@example.com' // Tvôj email kam chceš dostávať správy
          }
        })
      });

      if (response.ok) {
        this.submitSuccess = true;
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => this.submitSuccess = false, 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      this.submitError = true;
      setTimeout(() => this.submitError = false, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
