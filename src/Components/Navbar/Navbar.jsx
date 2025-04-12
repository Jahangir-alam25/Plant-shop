import ShowCart from "../ShowCart/ShowCart";


const Navbar = ({ carts, subTotal,removeCartFromShowCart }) => {


    return (
        <div>
            <nav className="sticky top-0 z-10 glass">
                <div className="navbar shadow-sm px-10">
                    <div className="flex-1">
                        <a className="text-xl flex items-center">
                            <img
                                className="w-8"
                                src="https://img.icons8.com/?size=96&id=qIF4XIx-ZSGt&format=png"
                                alt=""
                            />
                            <span
                                className="bg-gradient-to-tr text-transparent bg-clip-text from-green-600 to-lime-300">
                                Plant-Shop</span></a>
                    </div>
                    <div className="flex-none space-x-3">
                        <div className="dropdown dropdown-end">
                            <div
                                tabindex="0"
                                role="button"
                                className="btn btn-base-300 btn-circle avatar">
                                <div className="w-7 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.icons8.com/?size=48&id=ABBSjQJK83zf&format=png" />
                                </div>
                            </div>
                            <ul
                                tabindex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span id="cart-total" className="badge badge-sm indicator-item">{carts.length}</span>
                                </div>
                            </div>
                            <div
                                tabindex="0"
                                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">
                                        <span>{carts.length}</span> Items</span>
                                    <span className="text-info">Subtotal: $ {subTotal}</span>
                                    <div className="card-actions">
                                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-success text-white btn-block">
                                            View cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="space-y-3">
                    {
                        carts.map(cart=><ShowCart key={cart.id} removeCartFromShowCart={removeCartFromShowCart} cart={cart}></ShowCart>)
                    }
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Navbar;