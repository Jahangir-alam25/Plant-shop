import React from 'react';
import "./SubNavbar.css"
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";

const SubNavbar = () => {
    return (
        <div>
            <nav className="bg-base-300">
                <ul
                    className="menu menu-horizontal justify-center w-full rounded-box gap-5"
                >
                    <li>
                        <a className="btn rounded-full gap-3 my-nav"
                        ><FaHome />
                            <span class="my-nav-text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a className="btn rounded-full gap-3 my-nav"
                        ><FaShoppingBag />
                            <span className="my-nav-text">Shop</span>
                        </a>
                    </li>
                    <li>
                        <a className="btn rounded-full gap-3 my-nav"
                        ><BiCategoryAlt />
                            <span className="my-nav-text">Categories</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SubNavbar;