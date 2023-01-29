
fetch('http://127.0.0.1:5000/report/')
    .then(response => response.json())
    .then(report => {
        
        let table = $("#clients tbody");
        let rows = report.most_valuable_clients.map(element => createTemplate(element,'#report-clients-template'));
        let div = $('#ingredient-month-report');
        let ingredientReport = createTemplate(report.most_requested_ingredient, '#report-ingredient-template');
        let monthReport = createTemplate(report.month_with_most_revenue, '#report-month-template');
        table.append(rows);
        div.append(ingredientReport)
        div.append(monthReport)
    });


function createTemplate(report, templateName) {
    let template = $(templateName)[0].innerHTML;
    return Mustache.render(template, report);
}
