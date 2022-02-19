import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';
import Blog from '../img/portImages/Blog.jpg';
import diary from '../img/portImages/diary.jpg';

const portfolios = [
    {
        id: 3, 
        category: 'React JS',
        image: Blog,
        link1: 'https://github.com/SpaceNSorcery/space-n-sorcery_blog', // git link
        link2: 'https://space-n-sorcery-blog.vercel.app/', // project link if available
        title: 'spacensorcery.blog',
        text: 'Geek culture web dev blog made using Next JS, Tailwind CSS, and GraphQL Query API',
    },
    {
        id: 1,
        category: 'Javascript',
        image: diary,
        link1: 'https://github.com/SpaceNSorcery/Web-Diary',
        link2: 'https://spacensorcery.github.io/Web-Diary/', 
        title: 'Web Journal',
        text: 'A web diary made with HTML/CSS and Javascript'
    },
    {
        id: 2,
        category: 'Javascript', 
        image: css2,
        link1: '', // git link 
        link2: '', 
        title: 'Financial Expense Tracker',
        text: '| JavaScript | HTML/CSS |',
    },
]

export default portfolios;