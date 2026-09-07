const portalForm = document.querySelector('#portal-form');
const portalDashboard = document.querySelector('#portal-dashboard');

const renderDashboard = (staffId) => {
    portalDashboard.replaceChildren();

    const title = document.createElement('h3');
    title.textContent = `Welcome, ${staffId || 'faculty member'}!`;

    const memo = document.createElement('p');
    const memoLabel = document.createElement('strong');
    memoLabel.textContent = 'Daily Memo:';
    memo.append(memoLabel, ' Grade reports are due by 3:00 PM. Please submit technology lab requests two days in advance.');

    const tools = document.createElement('ul');
    tools.className = 'tool-list';

    [
        ['Duty Schedule', '#calendar'],
        ['Post Homework', '#homework'],
        ['Office Forms', 'mailto:office@lincoln.example'],
        ['Field Trip Roster', '#activities'],
    ].forEach(([label, href]) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        item.append(link);
        tools.append(item);
    });

    portalDashboard.append(title, memo, tools);
};

portalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const staffId = document.querySelector('#staff-id').value.trim();
    renderDashboard(staffId);
});
