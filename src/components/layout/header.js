import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({ brand }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
            <div className="container-md">
                <a href="/" className="navbar-brand">
                    {brand}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a 
                                href="https://github.com/michuyim"
                                className="nav-link">
                                GitHub Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

HeaderComponent.defaultProps = {
    brand: 'Reminder'
};

HeaderComponent.propTypes = {
    brand: PropTypes.string
};

export default HeaderComponent;