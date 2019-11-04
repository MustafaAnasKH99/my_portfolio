const form_image = require('../assets/form_image.jpg');
const sheetjs_img = require('../assets/sheetjs.jpg');
const portfolio_image = require('../assets/CSS Portfolio-2.webp');
const graphql_image = require('../assets/graphql_image.jpeg');
const chatapp_image = require('../assets/chatapp.png');

const projects = [
    {
        code_link: 'https://github.com/MustafaAnasKH99/GraphQL-Chat-App', 
        image: chatapp_image, 
        online_link: 'https://thirsty-pasteur-500b29.netlify.com/',
        title: 'Realtime Chatapp built with React and GraphQL Subscriptions.'
    },
    {
        code_link: 'https://github.com/MustafaAnasKH99/Pure-JS-Form', 
        image: form_image, 
        online_link: 'https://mustafaanaskh99.gitlab.io/javascript-form/',
        title: 'Data collecting form developed with HTML, CSS, and JS with a table displaying a summary of the collected data.'
    },
    {
        code_link: 'https://github.com/MustafaAnasKH99/CRUD-Application-and-A-GraphQL-API/blob/master/README.md', 
        image: graphql_image, 
        online_link: 'https://jolly-swirles-f29573.netlify.com/',
        title: `
        GraphQL API and Client developed with React and Nodejs. The user is able to CRUD new categories 
        and products linking each product to a certain category.
        `
    },
    {
        code_link: 'https://github.com/MustafaAnasKH99/Sheets-DOM-Manipulation', 
        image: sheetjs_img, 
        online_link: 'https://mustafaanaskh99.gitlab.io/sheetjs-dom/',
        title: `
        1 Page Javascript Web Application. In this web page, the user is able to
        add data by filling few input fields,
        upload and excel sheet and add its data,
        view the added data in an HTML table,
        delete table fields by clicking on them,
        and exporting the html table with all its content as an excel sheet.
        `
    },
    {
        code_link: 'https://github.com/MustafaAnasKH99/Responsive-HTML-CSS-template', 
        image: portfolio_image, 
        online_link: 'https://mustafaanaskh99.gitlab.io/respon/',
        title: 'Responsive one page portfolio written with HTML and designed with pure CSS'
    },
]

export default projects