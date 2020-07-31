import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import { openModal } from "../actions/modalActions";

const Navigation = props => {
    return (
        <nav className="nav__container">
            <Link to="/main" className="nav__logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="60px" viewBox="0 0 480 100">
                    <path id="Path"
                        fill="none" stroke="black" stroke-width="1"
                        d="M 13.00,15.84
                        C 13.00,15.84 66.16,15.84 66.16,15.84
                            66.16,15.84 66.16,23.70 66.16,23.70
                            66.16,23.70 20.86,23.70 20.86,23.70
                            20.86,23.70 20.86,47.84 20.86,47.84
                            20.86,47.84 60.25,47.84 60.25,47.84
                            60.25,47.84 60.25,55.70 60.25,55.70
                            60.25,55.70 20.86,55.70 20.86,55.70
                            20.86,55.70 20.86,81.84 20.86,81.84
                            20.86,81.84 66.16,81.84 66.16,81.84
                            66.16,81.84 66.16,89.70 66.16,89.70
                            66.16,89.70 13.00,89.70 13.00,89.70
                            13.00,89.70 13.00,15.84 13.00,15.84 Z
                        M 89.50,89.70
                        C 89.50,89.70 89.50,15.84 89.50,15.84
                            89.50,15.84 97.36,15.84 97.36,15.84
                            97.36,15.84 97.36,81.84 97.36,81.84
                            97.36,81.84 145.86,81.84 145.86,81.84
                            145.86,81.84 145.86,89.70 145.86,89.70
                            145.86,89.70 89.50,89.70 89.50,89.70 Z
                        M 202.03,18.08
                        C 205.51,19.86 208.20,22.32 210.09,25.45
                            212.00,28.59 212.95,32.09 212.95,35.94
                            212.95,39.61 212.00,42.98 210.11,46.08
                            208.21,49.17 207.00,50.86 206.48,51.14
                            207.41,51.45 209.17,53.40 211.77,56.97
                            214.36,60.53 215.66,64.48 215.66,68.80
                            215.66,72.64 214.69,76.20 212.77,79.47
                            210.84,82.73 208.27,85.25 205.08,87.03
                            203.43,87.94 201.62,88.61 199.66,89.05
                            197.70,89.48 195.14,89.70 191.98,89.70
                            191.98,89.70 160.70,89.70 160.70,89.70
                            160.70,89.70 160.70,15.84 160.70,15.84
                            160.70,15.84 190.58,15.84 190.58,15.84
                            195.30,15.84 199.12,16.59 202.03,18.08 Z
                        M 198.55,46.77
                        C 200.60,45.73 202.22,44.26 203.41,42.33
                            204.60,40.39 205.20,38.26 205.20,35.92
                            205.20,33.30 204.52,31.01 203.16,29.05
                            201.79,27.08 200.05,25.64 197.95,24.73
                            196.36,24.05 193.50,23.70 189.38,23.70
                            189.38,23.70 168.45,23.70 168.45,23.70
                            168.45,23.70 168.45,48.14 168.45,48.14
                            168.45,48.14 191.17,48.14 191.17,48.14
                            194.30,48.14 196.77,47.68 198.55,46.77 Z
                        M 200.94,80.47
                        C 203.05,79.40 204.74,77.81 206.00,75.72
                            207.27,73.62 207.91,71.34 207.91,68.88
                            207.91,66.29 207.24,63.96 205.92,61.88
                            204.61,59.78 202.84,58.23 200.61,57.20
                            198.89,56.40 196.48,56.00 193.38,56.00
                            193.38,56.00 168.45,56.00 168.45,56.00
                            168.45,56.00 168.45,81.84 168.45,81.84
                            168.45,81.84 192.08,81.84 192.08,81.84
                            194.48,81.84 196.34,81.73 197.66,81.50
                            198.97,81.26 200.06,80.92 200.94,80.47 Z
                        M 261.08,14.14
                        C 266.65,14.14 271.80,15.52 276.52,18.28
                            281.23,21.04 284.97,24.79 287.72,29.52
                            290.48,34.23 291.86,39.38 291.86,44.95
                            291.86,44.95 291.86,60.19 291.86,60.19
                            291.86,65.77 290.48,70.93 287.72,75.66
                            284.97,80.38 281.23,84.12 276.52,86.88
                            271.80,89.62 266.65,91.00 261.08,91.00
                            255.50,91.00 250.36,89.62 245.64,86.88
                            240.92,84.12 237.18,80.38 234.42,75.66
                            231.67,70.93 230.30,65.77 230.30,60.19
                            230.30,60.19 230.30,44.95 230.30,44.95
                            230.30,39.38 231.67,34.23 234.42,29.52
                            237.18,24.79 240.92,21.04 245.64,18.28
                            250.36,15.52 255.50,14.14 261.08,14.14 Z
                        M 238.16,60.19
                        C 238.16,64.34 239.18,68.19 241.22,71.72
                            243.27,75.24 246.05,78.03 249.56,80.08
                            253.08,82.12 256.92,83.14 261.08,83.14
                            265.23,83.14 269.07,82.12 272.58,80.08
                            276.10,78.03 278.88,75.24 280.92,71.72
                            282.97,68.19 284.00,64.34 284.00,60.19
                            284.00,60.19 284.00,44.95 284.00,44.95
                            284.00,40.80 282.97,36.96 280.92,33.44
                            278.88,29.91 276.10,27.12 272.58,25.08
                            269.07,23.03 265.23,22.00 261.08,22.00
                            256.92,22.00 253.08,23.03 249.56,25.08
                            246.05,27.12 243.27,29.91 241.22,33.44
                            239.18,36.96 238.16,40.80 238.16,44.95
                            238.16,44.95 238.16,60.19 238.16,60.19 Z
                        M 370.80,15.84
                        C 370.80,15.84 350.97,89.48 350.97,89.48
                            350.97,89.48 343.89,89.48 343.89,89.48
                            343.89,89.48 335.08,57.23 335.08,57.23
                            335.08,57.23 326.27,89.48 326.27,89.48
                            326.27,89.48 319.19,89.48 319.19,89.48
                            319.19,89.48 299.36,15.84 299.36,15.84
                            299.36,15.84 307.47,15.84 307.47,15.84
                            307.47,15.84 322.70,72.67 322.70,72.67
                            322.70,72.67 331.02,42.36 331.02,42.36
                            331.02,42.36 324.09,15.84 324.09,15.84
                            324.09,15.84 332.17,15.84 332.17,15.84
                            332.17,15.84 338.98,41.17 338.98,41.17
                            338.98,41.17 347.48,72.61 347.48,72.61
                            347.48,72.61 362.69,15.84 362.69,15.84
                            362.69,15.84 370.80,15.84 370.80,15.84 Z
                        M 410.17,56.05
                        C 404.39,54.89 399.60,53.59 395.81,52.14
                            392.03,50.70 388.98,48.62 386.67,45.94
                            384.36,43.25 383.20,39.79 383.20,35.56
                            383.20,31.27 384.33,27.50 386.59,24.23
                            388.86,20.96 392.01,18.46 396.03,16.73
                            400.05,15.01 404.63,14.14 409.78,14.14
                            414.78,14.14 419.38,15.21 423.59,17.34
                            427.81,19.48 431.16,22.48 433.64,26.36
                            436.12,30.23 437.36,35.33 437.36,41.67
                            437.36,41.67 429.50,41.67 429.50,41.67
                            429.50,36.79 428.64,33.02 426.92,30.38
                            425.21,27.73 422.85,25.67 419.83,24.20
                            416.80,22.73 413.42,22.00 409.67,22.00
                            406.32,22.00 403.22,22.52 400.38,23.55
                            397.53,24.57 395.27,26.08 393.58,28.08
                            391.90,30.07 391.06,32.57 391.06,35.58
                            391.06,38.20 391.83,40.30 393.38,41.88
                            394.93,43.45 397.10,44.70 399.91,45.62
                            402.72,46.55 406.78,47.58 412.09,48.70
                            417.64,49.84 422.05,50.96 425.30,52.08
                            428.55,53.18 431.38,55.10 433.77,57.83
                            436.16,60.56 437.36,64.34 437.36,69.17
                            437.36,73.98 436.07,78.03 433.50,81.33
                            430.94,84.62 427.61,87.06 423.52,88.64
                            419.42,90.21 415.01,91.00 410.28,91.00
                            404.43,91.00 399.23,89.89 394.70,87.66
                            390.17,85.42 386.69,82.23 384.25,78.11
                            381.81,73.98 380.59,68.60 380.59,61.95
                            380.59,61.95 388.45,61.95 388.45,61.95
                            388.45,67.20 389.30,71.24 391.00,74.09
                            392.70,76.94 395.18,79.16 398.45,80.75
                            401.72,82.34 405.66,83.14 410.28,83.14
                            415.97,83.14 420.59,81.85 424.16,79.27
                            427.72,76.67 429.50,73.20 429.50,68.86
                            429.50,65.95 428.79,63.73 427.36,62.20
                            425.94,60.67 424.02,59.53 421.59,58.77
                            419.18,58.01 415.37,57.10 410.17,56.05 Z" />
                </svg>
            </Link>
            <SearchIcon className="nav__search--icon" style={{ fontSize: 25 }} />
            <input className="nav__search" placeholder="Search"></input>
            <Link to="/main"><HomeOutlinedIcon className="nav__menu" style={{ fontSize: 30 }} /></Link>
            <Link to="/upload"><AddPhotoAlternateOutlinedIcon className="nav__menu" style={{ fontSize: 30 }} /></Link>
            <Link to="/explore"><ExploreOutlinedIcon className="nav__menu" style={{ fontSize: 30 }} /></Link>
            <button onClick={() => props.openModal("activity")}><FavoriteBorderOutlinedIcon className="nav__menu" style={{ fontSize: 30 }} /></button>
            <button onClick={() => props.openModal("account")} className="nav__account"><AccountCircleOutlinedIcon className="nav__menu" style={{ fontSize: 30 }} /></button>
        </nav>
    );
}



// const mapStateToProps = (state) => {
//     return {
//         token: state.session.token,
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        // logout: () => dispatch(logout()),
    };
};


export default connect(
    null,
    mapDispatchToProps
)(
    Navigation
);
// export default Navigation;