const DJANGO_BASE_URL = "http://127.0.0.1:8000";

const actionButtons = document.querySelectorAll('.action-btn');
const forms = document.querySelectorAll('.card');

actionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    actionButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    forms.forEach((form) => {
      form.classList.toggle('active', form.dataset.form === target);
    });
  });
});

forms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const feedback = form.querySelector('.feedback');
    feedback.textContent = 'Enviando...';
    feedback.style.color = '#1f2937';

    const endpoint = form.dataset.endpoint;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`${DJANGO_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      feedback.textContent = 'Formulario enviado correctamente.';
      feedback.style.color = '#166534';
      form.reset();
    } catch (error) {
      feedback.textContent = 'Error al enviar. Verifica tu backend Django y vuelve a intentar.';
      feedback.style.color = '#b91c1c';
    }
  });
});
