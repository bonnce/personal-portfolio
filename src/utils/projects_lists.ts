export const projects = [
	{
		id:'PORTFOLIO',
		tools:['TS','PREACT','ASTRO','TAILWIND','VERCEL','GITHUB'],
		description:"This project, serving as my portfolio, is built using the JS framework Astro.",
		descriptionExtended:`The portfolio design was inspired by old green screen interfaces, reminiscent of IBM machines, 
		and evokes the atmosphere of The Matrix movie. The project was created using the Astro framework with TypeScript, 
		incorporating innovative and engaging features such as Astro View Transition for smooth page transitions and faster 
		loading. Additionally, it offers the flexibility to utilize integrations like Tailwind for styling and Preact for 
		reactive animations, which require state management and only load the necessary JavaScript when needed.`,
		title:'My portfolio',
		img:'/assets/img/screenshot-portfolio.png',
		alt:'portfolio screenshot',
		web:'https://david-portfolio-edd.vercel.app/',
		github:'https://github.com/bonnce/personal-portfolio'
	},
	{
		id:'INVESTMENT',
		tools:['TS','REACT','PWA','NODEJS','MONGODB','NGINX','DOCKER','KUBERNETES','GCP'],
		description:"An app to track your investments developed with Node.js, MongoDB, React.js, and workers using TypeScript.",
		descriptionExtended:`The objective of this app is to facilitate the management of your investment data, 
		making decisions on whether to hold or sell your currency easier. 
		The development flow consists of a REST API based on Node.js with Express and MongoDB for CRUD operations. 
		The front-end is developed with React.js to provide a dynamic user interface in constant communication with the API. 
		Additionally, both the app and the API are dockerized and deployed on Google Cloud (GCP), orchestrated with Kubernetes. 
		The web app's build is exposed with NGINX.`,
		title:'INVESTMENT MANAGER APP',
		img:'/assets/img/screenshot-investment.png',
		alt:'investment app screenshot',
		web:'https://bonnce.github.io/investment-manager-app/',
		github:'https://github.com/bonnce/investment-manager-app'
	},
	{
		id:'SHOPPING LIST',
		tools:['TS','HTML','CSS','REACT','PWA','GITHUB'],
		description:"An app to create and manage your shopping list to keep track of your household stock.",
		descriptionExtended:` The main goal of this project is to provide a tool for tracking and managing household stock, 
		assisting with your shopping needs. The web app is a complete front-end application, meaning it does not require a database or backend. 
		In fact, the data for your items is stored in the browser, and there is also an option to load data massively with a CSV file. 
		The entire app is built with React.js and service workers, transforming the web app into a Progressive Web App (PWA). 
		This gives it the capability of being installed as a mobile app and also allows it to run offline for convenience.`,
		title:'SHOPPING LIST APP',
		img:'/assets/img/shopping-list-screenshot.png',
		alt:'shopping list app screenshot',
		web:'https://bonnce.github.io/shopping-list/',
		github:'https://github.com/bonnce/shopping-list'
	},
	{
		id:'ARGO TEKTON',
		tools:['ARGOCD','TEKTON','LINUX','DOCKER','KUBERNETES','BITBUCKET','OPENSHIFT'],
		description:"CI/CD pipeline to enhance development efficiency using ArgoCD and Tekton.",
		descriptionExtended:"The primary goal of this project was to improve efficiency and the development experience, making it easy to maintain and scale. The project was divided into two parts. The first part involves continuous integration (CI) using Tekton, where the goal is to initiate with a trigger for an approval pull request to merge into the master branch. Subsequently, it builds and uploads a Docker image to an image repository, concluding the flow by modifying the necessary Kustomize resources for redeploying the application. The second part uses ArgoCD synchronized with resources, listening and redeploying when changes occur. This setup facilitates monitoring and scaling.",
		title:'CICD WITH ARGOCD AND TEKTON',
		img:'/assets/img/argotekton.webp',
		alt:'argo and tekton'
	},
	{
		id:'py scripts',
		tools:['PYTHON','3SCALE','JSON','OPENSHIFT','BITBUCKET'],
		description:"Scripts for automating tasks in 3Scale, developed using Python.",
		descriptionExtended:"These scripts, developed in Python utilizing the Requests library, interact with the 3Scale API. The first script, 3Scale-export, aims to create a dump of all data loaded in the 3Scale tenant through the API, exporting the data in a specific format to JSON files. Its purpose is to serve as a backup for future recovery. The second script, 3Scale-import, utilizes the data recovered by 3Scale-export to upload data massively. Its primary goal is to restore a specific tenant. These scripts play a crucial role in restoring the entire 3Scale environment (API Gateway) after the cluster goes down, reducing the configuration time of a tenant and minimizing human errors.",
		title:'py scripts for 3scale',
		img:'/assets/img/3scale.jpg',
		alt:'3scale'
	},
	{
		id:'api services',
		tools:['NODEJS','EXPRESS','PYTHON','FASTAPI','JMETER','DOCKER','KUBERNETES','OPENSHIFT'],
		description:"Service factory built with Node.js (Express) and Python (FastAPI) to communicate with an Oracle database.",
		descriptionExtended:"The objective of this project was to replicate an old service, comparing the performance between Python and Javascript. This service acts as an API to interact with an Oracle database, capable of taking parameters from the environment and generating an endpoint that requests a specific query, also taken from the environment. The service can generate multiple endpoints as parameters are passed. Both implementations are dockerized and kustomized following Kubernetes' kustomize concept for fast and easy deployment. The Node.js implementation uses Express for routing and the node-oracledb driver for database connection, while the Python implementation uses FastAPI for routing and python-oracledb for the connection. Performance testing with JMeter was conducted, and the results were documented to determine the better-performing solution.",
		title:'Service factory',
		img:'/assets/img/nodepython.jpg',
		alt:'nodejs and python'
	},
	{
		id:'lading page',
		tools:['TS','HTML','CSS','REACT','NGINX','DOCKER'],
		description:"Design and development from scratch using React.js with dynamic animations.",
		descriptionExtended:" I was involved in designing with Figma and developing the web app using React.js and Typescript. The main goal was to create a static web page with engaging elements and dynamic animations, showcasing the company's offerings to attract potential clients.",
		title:'Landing page',
		img:'/assets/img/reactjs.png',
		alt:'reactjs'
	},
	{
		id:'e-billing',
		tools:['JS','HTML','CSS','REACT','REDUX'],
		description:"Refactoring and maintaining a deployed web application built with React Redux.",
		descriptionExtended:"In this project, my responsibilities included refactoring the codebase to enhance the user and development experience and adding new functionalities. The primary goal of the app is to create digitally signed electronic billing valid for the respective tax authority. The web app, developed with React.js and Redux in Javascript, underwent changes such as API calls to improve response time, merging and abstracting common components for improved readability and scalability. Additionally, I contributed to making the web app responsive, transforming it into a PWA with offline support that synchronizes when back online, and enabling it to generate PDFs on the client-side. Other features included expanding e-billing options, such as e-tickets.",
		title:'e-billing page',
		img:'/assets/img/reactjs.png',
		alt:'reactjs'
	},
]