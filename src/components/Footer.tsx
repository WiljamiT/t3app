export const Footer = () => {
    return (
        <footer className="relative bg-primary pt-8 pb-6">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold text-primary-content">T3 App</h4>
                <h5 className="text-lg mt-0 mb-2 text-primary-content">
                Lorem ipsum.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i></i></button><button className="bg-white text-primary-content shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i></i></button><button className="bg-white text-primary-content shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i></i></button><button className="bg-white text-primary-content shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    
                </button>
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto"> 
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-primary-content text-sm font-semibold mb-2">Header</span>
                    <ul className="list-unstyled">
                    <li>
                        <p className="text-primary-content hover:text-blueGray-800 font-semibold block pb-2 text-sm">text</p>
                    </li>
                    <li>
                        <p className="text-primary-content hover:text-blueGray-800 font-semibold block pb-2 text-sm">Text</p>
                    </li>
                    <li>
                        <p className="text-primary-content hover:text-blueGray-800 font-semibold block pb-2 text-sm">Text</p>
                    </li>
                    <li>
                        <p className="text-primary-content hover:text-blueGray-800 font-semibold block pb-2 text-sm">Text</p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-primary-content font-semibold py-1">
                WT | 2023
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
}