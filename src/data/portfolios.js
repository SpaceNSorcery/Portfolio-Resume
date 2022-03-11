import css2 from '../img/portImages/css2.jpg';
import Blog from '../img/portImages/Blog.jpg';
import diary from '../img/portImages/diary.jpg';

const portfolios = [
    {
        id: 3, 
        category: 'React JS',
        image: Blog,
        link1: 'https://github.com/SpaceNSorcery/space-n-sorcery_blog', // git link
        link2: 'https://space-n-sorcery-blog.vercel.app/', // project link if available
        title: 'Space n Sorcery',
        text: 'A creative content and academic interest developer blog made using Next.JS, Tailwind.CSS, and the GraphCMS dataquery utility language, GraphQL',
    },
    {
        id: 1,
        category: 'Javascript',
        image: diary,
        link1: 'https://github.com/SpaceNSorcery/Web-Diary',
        link2: 'https://spacensorcery.github.io/Web-Diary/', 
        title: 'Web Journal',
        text: 'A web diary made with HTML/CSS and Javascript. Some components were added from codepen.io'
    },
    {
        id: 2,
        category: 'Javascript', 
        image: css2,
        link1: 'https://github.com/SpaceNSorcery/Finance-Expense-Tracker', 
        title: 'Financial Expense Tracker',
        text: 'A CRUD financial expense tracker. Made with Javascript, HTML & CSS',
    },
]

export default portfolios;