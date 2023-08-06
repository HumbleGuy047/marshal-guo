import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1 className=''>Marshal Guo</h1>
                </Link>
                <nav>
                    <Link to="/createBlog">
                       Create Blog
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;