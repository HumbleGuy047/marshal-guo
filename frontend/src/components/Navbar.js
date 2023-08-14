import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import {useAuthContext} from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const {state: {user}}= useAuthContext();
    const handleClick = (id) => {
        switch(id) {
            case 'logout':
                logout();
                break;
            case 'main_drop':
                const navbar = document.getElementById('navbar-default');
                navbar.classList.toggle('hidden');
                break;
            case 'second_drop':
                const subnav = document.getElementById('doubleDropdown');
                subnav.classList.toggle('hidden');
                break;
            default:
                break;
        }
    }


    return (
        <header>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Marshal Guo</span>
                </Link>
                <button id='main_drop' onClick={() => handleClick('main_drop')} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <Link to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                    </li>
                    <li>
                    <Link to="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</Link>
                    </li>
                    <li>
                    <Link to="/blogs" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blogs</Link>
                    </li>
                    <li>
                    <Link to="/hmu" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hit Me Up</Link>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                        <span id='second_drop'onClick={() => handleClick('second_drop')} data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" class="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Owner?<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </span>
                        <div id="doubleDropdown" class="z-10 hidden">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                            <li>
                                <Link to="/login" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Login</Link>
                            </li>
                            </ul>
                        </div>
                    </li>
                    { user && 
                        (<div>
                            <span>WELCOME: {user.email}</span>
                            {' '}
                            <button id='logout' onClick={() => handleClick('logout')}>Log out</button>
                        </div>)
                    }
                    {/* { !user &&
                        (<div>
                            Are you the owner of this website? 
                            <Link to="/Login">
                                Log In
                            </Link>
                            { <Link to="/signup">
                                Sign Up
                            </Link> }
                        </div>)
                    } */}
                </ul>
                </div>
            </div>
            </nav>
        </header>
    )
}

export default Navbar;