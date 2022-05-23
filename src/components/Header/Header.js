import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <a className="navbar-brand" href="/#">Form <strong>Creator</strong></a>
                <div className="d-flex">
                    <button type="button" className="btn btn-success mr-2" data-bs-toggle="modal" data-bs-target="#addForm">
                        Yeni Form Oluştur
                    </button>
                    <form className='form-inline'>
                        <input className="ml-auto form-inline my-2 my-lg-0 form-control mr-sm-2" type="search" placeholder="Form ara" />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;