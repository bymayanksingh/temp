import React from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { ContactForm } from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="Have a project in mind? Let's talk about how we can work together to bring your ideas to life."
      />
      <Section>
        <ContactForm />
      </Section>
    </>
  );
}