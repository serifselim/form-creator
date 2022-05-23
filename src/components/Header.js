import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <a className="navbar-brand" href="/#">Form <strong>Creator</strong></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Ana Sayfa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Form</a>
                        </li>
                    </ul> */}
                    <button className='btn btn-success mr-3 ml-auto'>
                        Yeni Form Oluştur
                    </button>
                    <form className="">
                        <input className="ml-auto form-inline my-2 my-lg-0 form-control mr-sm-2" type="search" placeholder="Form ara" />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;