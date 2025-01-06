document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    const appointmentList = document.getElementById('appointment-list');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const description = document.getElementById('description').value;

        const appointment = {
            name,
            email,
            date,
            time,
            description
        };

        addAppointmentToList(appointment);
        form.reset();
    });

    function addAppointmentToList(appointment) {
        const li = document.createElement('li');
        li.textContent = `${appointment.name} - ${appointment.email} - ${appointment.date} ${appointment.time} - ${appointment.description}`;
        appointmentList.appendChild(li);
    }
});