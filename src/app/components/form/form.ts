import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService, ContactFormData } from '../../services/contact.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form implements OnInit {
  contactForm!: FormGroup;
  submitting = signal<boolean>(false);
  submitted = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid || this.submitting()) {
      return;
    }

    this.submitting.set(true);
    this.error.set(null);
    this.submitted.set(false);

    const formData: ContactFormData = {
      name: this.contactForm.get('name')?.value.trim(),
      email: this.contactForm.get('email')?.value.trim(),
      subject: this.contactForm.get('subject')?.value.trim(),
      message: this.contactForm.get('message')?.value.trim(),
    };

    this.contactService
      .sendEmail(formData)
      .then(() => {
        this.submitted.set(true);
        this.contactForm.reset();
        setTimeout(() => {
          this.submitted.set(false);
        }, 5000);
      })
      .catch((error) => {
        this.error.set('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
        console.error('Erro:', error);
      })
      .finally(() => {
        this.submitting.set(false);
      });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required')) {
      return `${this.getFieldLabel(fieldName)} é obrigatório`;
    }
    if (field?.hasError('email')) {
      return 'Email inválido';
    }
    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength']?.requiredLength;
      return `${this.getFieldLabel(fieldName)} deve ter pelo menos ${minLength} caracteres`;
    }
    return '';
  }

  getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
    };
    return labels[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }
}
