'use server';

// Server Actions para a landing page
// Exemplo: formulário de contato

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // TODO: Implementar lógica de envio (e-mail, banco, etc.)
  console.log('Formulário recebido:', { name, email, message });

  return { success: true, message: 'Mensagem enviada com sucesso!' };
}
