
const jobs = [];


const showMenu = () => {
    let menu = prompt(`
        Menu
        \n
        Choose the option:
        1 - List available jobs
        2 - Create new jobs
        3 - Show job
        4 - Add a new candidate to a job
        5 - Delete a job
        6 - Exit
    `);
    return menu; 
};

const listAvailableJobs = () => {
    const vacancyText = jobs.reduce( function (finalText, jobs, index) {
        finalText += index + '. '
        finalText += jobs.name  + ' ('
        finalText += jobs.candidates.length + ' candidates)\n'
        return finalText
    }, '');

    alert(vacancyText);
};

const createJob = () => {
    const name = prompt('Write the job name: ');
    const description = prompt('Write the job description: ');
    const limitDate = prompt('Write the limit date: (MM/dd/yyyy)');

    const confirmation = confirm(
        'Are you sure to create this job? ' +
        '\nName: ' + name +
        '\nDescription: ' + description +
        '\nLimit date: ' + limitDate     
        );
    
        if (confirmation) {
            const newJob = {name, description, limitDate, candidates: []};
            jobs.push(newJob);
            alert('A new job has been created! ');
        };
};

const showJob = () => {
    let index = prompt('Write the number of the job: ');
    const job = jobs[index];

    const candidatesText = job.candidates.reduce(function (finalText, candidate) {
        return finalText + '\n - ' + candidate
    }, '');

    alert(
        "Number " + index +
        "\nName: " + job.name +
        "\nDescription: " + job.description +
        "\nLimit date: " + job.limitDate +
        "\nAmount of candidates: " + job.candidates.length +
        "\nCandidates:" + candidatesText
    );
};

const addCandidate = () => {
    const candidate = prompt('Write the candidate name: ');
    const index = prompt('Write the number in which the cadidate is assigned: ');
    const job = jobs[index];

    const confirmation = confirm(
        'Are you sure to add this candidate? ' +
        '\nCandidate: ' + candidate +
        '\nJob: ' + index + ' ?' 
    );

    if (confirmation) {
        job.candidates.push(candidate);
        alert('A new candidate has been added! ');
    };
};

const deleteJob = () => {
    const index = prompt('Write the job number: ');
    const job = jobs[index];

    const confirmation = confirm(
        'Are you sure to delete this job? ' +
        '\nJob number: ' + index +
        '\nName: ' + job.name +
        '\nDescription: ' + job.description +
        '\nLimit date: ' + job.limitDate     
    );

    if (confirmation) {
        jobs.splice(index, 1);
        alert('The job was deleted! ');
    };

};


function execute() {
    let menu = "";
    do {
        menu = showMenu();
        
        switch (menu) {
            case '1':
                listAvailableJobs();
                break;
            case '2':
                createJob();
                break;
            case '3':   
                showJob();
                break;
            case '4':
                addCandidate();
                break;
            case '5':
                deleteJob();
                break;
            case '6':
                alert('Closing menu...');
                break;
            default: 
                alert('Invalid option')
        }
    } while (menu !== '6');
};

execute();


