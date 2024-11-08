import React from 'react';
import { Section } from '../components/shared/Section';
import { ContactForm } from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <Section className="pt-24">
      <ContactForm />
    </Section>
  );
}