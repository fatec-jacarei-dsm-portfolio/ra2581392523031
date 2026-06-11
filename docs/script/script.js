
const works = [
	{
		thumbnail: "./assets/images/Thumbnail_Analise_Eleitorado.png",
		title: "Programoid",
		description: "Dashboard para visualização de dados eleitorais utilizando pandas",
		contribution: "Fullstack",
		category: "Academico",
		semestre: "1",
        tipo: "ABP",
		tags: ["python", "pandas", "html", "css", "javascript", "abp"],
		link: "https://github.com/jvrb/Analise-Eleitorado",
	},
	{
		thumbnail: "./assets/images/Thumbnail_Datlas.png",
		title: "Datlas",
		description: "Site com mapa interativo para mostrar dados de satelites de uma determinada região",
		contribution: "Fullstack",
		category: "Academico",
		semestre: "3",
        tipo: "ABP",
		tags: ["react", "typescript", "css", "abp", "nodejs"],
		link: "https://github.com/jvrb/Analise-Eleitorado",
	},
	{
		thumbnail: "./assets/images/Thumbnail_MedAlarm.png",
		title: "MedAlarm",
		description: "Aplicaão de IOT para controle de horarios para ministrar medicamentos",
		contribution: "Backend",
		category: "Academico",
		semestre: "4",
        tipo: "ABP",
		tags: ["react", "typescript", "css", "Iot", "esp32", "abp"],
		link: "",
	},
	{
		thumbnail: "../assets/images/Thumbnail_MedAlarm.png",
		title: "Scholar",
		description: "Aplicação para gerenciamento de secretaria universitaria",
		contribution: "Fullstack",
		category: "Academico",
		semestre: "4",
        tipo: "Projeto Disciplinar",
		tags: ["react", "typescript", "css", "expo", "postgresql"],
		link: "https://github.com/jvrb/FATEC-JCR-4DSM-PDMI-2026-1-JOAO-VITOR-RODRIGUES/tree/main/Projeto/scholar",
	},
];

const iconsList = [
    {
        icon: "api-rest",
        imgageLink: "../assets/icons/api-rest.svg"
    },
    {
        icon: "react",
        imgageLink: "../assets/icons/React.svg"
    },
    {
        icon: "css",
        imgageLink: "../assets/icons/CSS.svg"
    },
    {
        icon: "devops",
        imgageLink: "../assets/icons/devops.svg"
    },
    {
        icon: "html",
        imgageLink: "../assets/icons/HTML.svg"
    },
    {
        icon: "javascript",
        imgageLink: "../assets/icons/JavaScript.svg"
    },
    {
        icon: "mysql",
        imgageLink: "../assets/icons/mysql.svg"
    },
    {
        icon: "nodejs",
        imgageLink: "../assets/icons/Node.js.svg"
    },
    {
        icon: "typescript",
        imgageLink: "../assets/icons/typescript.svg"
    },
    {
        icon: "python",
        imgageLink: "../assets/icons/python.svg"
    },
    {
        icon: "arduino",
        imgageLink: "../assets/icons/arduino.svg"
    },
    {
        icon: "esp32",
        imgageLink: "../assets/icons/arduino.svg"
    },
    {
        icon: "Iot",
        imgageLink: "../assets/icons/iot.svg"
    },
    {
        icon: "pandas",
        imgageLink: "../assets/icons/pandas.svg"
    },
    {
        icon: "expo",
        imgageLink: "../assets/icons/expo.svg"
    },
    {
        icon: "postgresql",
        imgageLink: "../assets/icons/postgresql.svg"
    },
]

const projects = document.getElementById("projects");
console.log(projects);

works.map((work) => {
	const figure = document.createElement("figure");
	const img = document.createElement("img");
	img.src = work.thumbnail;
    figure.appendChild(img)

	// FIGCAPTION
	const figcaption = document.createElement("figcaption");
	const title = document.createElement("p");
	title.innerText = work.title;

	const description = document.createElement("span");
	description.innerText = work.description;

	figcaption.append(title, description);

    // CONTRIBUIÇÃO
    const contributionTag = document.createElement("strong")
    contributionTag.className = "funcao"
    contributionTag.innerText = "Função: "
    const contributionDesc = document.createElement("span")
    contributionDesc.innerText = work.contribution
    contributionTag.appendChild(contributionDesc)

    figcaption.appendChild(contributionTag)

    // CATEGORY
    const categoryTag = document.createElement("strong")
    categoryTag.className = "category"
    categoryTag.innerText = "Categoria: "
    const categoryDesc = document.createElement("span")

    if(work.category === "Academico"){
        categoryDesc.innerText = `${work.category} - ${work.semestre}° Semestre`
    }else{
        categoryDesc.innerText = work.category
    }

    categoryTag.appendChild(categoryDesc)
    figcaption.appendChild(categoryTag)

    // CATEGORY
    const tipoTag = document.createElement("strong")
    const tipoDesc = document.createElement("span")
    tipoDesc.innerText = work.tipo
    tipoTag.className = "tipo"
    tipoTag.innerText = "Tipo: "
    tipoTag.appendChild(tipoDesc)
    figcaption.appendChild(tipoTag)

    // TECNOLOGIAS
    const tecnology = document.createElement("strong")
    tecnology.className = "tecnology"
    tecnology.innerText = "Tecnologias utilizadas:"

    const divTags = document.createElement("div")
    divTags.className = "tags"


    work.tags.map((tag) => {
        
        const imgUrl = iconsList.find((tagFilter) => tagFilter.icon === tag)
        console.log(imgUrl)
        if(imgUrl){
            const imgTag = document.createElement("img")
            imgTag.src = imgUrl.imgageLink
            imgTag.title = imgUrl.icon
            divTags.appendChild(imgTag)
        }
        // iconsList.map((icon) => {
        //     const imgUrl = iconsList.find((tagFilter) => tagFilter.icon === icon)
        //     console.log(icon)
        //     // if()
        //     // console.log(iconsList.includes(tag))
            
        //     // console.log(imgUrl)

        //     // const imgTag = document.createElement("img")
        //     // imgTag.src = imgUrl.imgageLink
        //     // imgTag.title = imgUrl.icon

        //     // divTags.appendChild(imgTag)
        // })
    })

    figcaption.append(tecnology, divTags)

	// BUTTONS
	const btns = document.createElement("div");
	btns.className = "buttons-projects";
	const btnLink = document.createElement("a");
    if(work.link !== "") {
        btnLink.href = work.link
        btnLink.target = "_blank"
    }else{
        btns.className += " disable"
    }

	const button = document.createElement("button");
	const gitImage = document.createElement("img");
	gitImage.src = "./assets/icons/GitHub.svg";
    const spanGithub = document.createElement("span")
	spanGithub.innerText = "Github";

	button.append(gitImage, spanGithub);
	btnLink.appendChild(button);
	btns.appendChild(btnLink);

	// MONTANDO O ELEMENTO
	figure.append(img, figcaption, btns);

	projects.append(figure);
});
