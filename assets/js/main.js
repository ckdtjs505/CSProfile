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
            <a class="button-view" href="${project.url}"> 
                <div class="tooltip"> View
                    <span class="tooltiptext"> 실행하는데 시간이 <br> 걸릴 수 있습니다 </span>
                </div>
            </a>

           
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