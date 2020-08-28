const fullStackContainer = document.querySelector('.full-stack-project');


function createFullStackProject(ele){
    const project = document.createElement("section");
    project.innerHTML = createProject(ele);

    fullStackContainer.appendChild(project)
}

function createProject(project){
    return `
    <section class="project">
        <div class="project-each">
        <h2>${project.title}</h2>
        <p> ${project.description} </p>
        <div class="button">
            <a class="button-icon" href="${project.github}"><i class="fab fa-github"></i></a>
            <a class="button-view" href="${project.url}"> View</a>
        </div>
        </div>
    </section>
    `
}

function init(){
    fullStackData.forEach( ele => {
        createFullStackProject(ele);
    })
}

init();