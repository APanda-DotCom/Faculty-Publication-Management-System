import React from "react";


const Home = () => {
 

    return (
        <>
            <div className="banner-area content-top-heading less-paragraph text-normal">
                <div id="bootcarousel" className="carousel slide animate_text carousel-fade" data-ride="carousel">
                    <div className="carousel-inner text-light carousel-zoom">
                        <div className="item active">
                            <div className="slider-thumb bg-fixed" style={{backgroundImage: "url(assets/img/banner/soa_banner_1.jpg)"}}></div>
                            <div className="box-table shadow dark">
                                <div className="box-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="content">
                                                    <h3 data-animation="animated slideInLeft">Welcome to Faculty Publications</h3>
                                                    <h1 data-animation="animated slideInUp">Share Publications and News Letters</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-thumb bg-fixed" style={{backgroundImage: "url(assets/img/banner/soa_banner_2.jpg)"}}></div>
                            <div className="box-table shadow dark">
                                <div className="box-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="content">
                                                    <h3 data-animation="animated slideInLeft">We're glade to see you</h3>
                                                    <h1 data-animation="animated slideInUp">Know more about other faculties</h1>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-thumb bg-fixed" style={{backgroundImage: "url(assets/img/banner/soa_banner_3.jpg)"}}></div>
                            <div className="box-table shadow dark">
                                <div className="box-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="content">
                                                    <h3 data-animation="animated slideInLeft">Check out today's update</h3>
                                                    <h1 data-animation="animated slideInUp">Read publications, news-letters</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#bootcarousel" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#bootcarousel" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>

            <div className="about-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="about-info">
                            <div className="col-md-6 thumb">
                                <img src="assets/img/facultypic.jpg" alt="Thumb" />
                            </div>
                            <div className="col-md-6 info">
                                <h5>Introduction</h5>
                                <h2>Welcome to Faculty Management System</h2>
                                <p>
                                    The Faculty Profile Web Development Project aims to create a
                                    comprehensive online platform to showcase the profiles of faculty members within an
                                    academic institution. The project seeks to provide an easily accessible and organized
                                    repository of information about faculty members, including their academic
                                    background, research interests, publications, teaching experience, and contact details
                                    & a dynamic web application using HTML, CSS, Node.js, React.js and JavaScript to
                                    showcase profiles of faculty members within an academic institution.
                                </p>
                                <p>
                                    The project aims
                                    to create a website that is accessible, standards-compliant, and usable by all faculty
                                    members including those with diverse abilities and technologies. An end-to-end that
                                    automates every step of the faculty lifecycle from on-boarding recruitment to workload
                                    management and performance tracking for greater institutional insights. It can be
                                    entered using a username and password. It is accessible by an administrator.
                                    Administrator only they can add data in to the database. The data can be retrieved
                                    easily. The data are well protected for personal use and makes the data processing very
                                    fast. Basically, this project describes how to manage for good performance and service
                                    for the client/organizations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <section id="advisor" className="advisor-area bg-gray carousel-shadow default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="site-heading text-center">
                            <div className="col-md-8 col-md-offset-2">
                                <h2>Top Faculties</h2>
                                <p>
                                    SOA University boasts a cadre of distinguished faculty members renowned for their expertise, passion, and dedication to nurturing scholarly excellence. Comprising accomplished educators, researchers, and industry practitioners, the top faculties at SOA University bring a wealth of knowledge and real-world insights into the classroom. Their unwavering commitment to academic rigor, coupled with a student-centric approach, fosters an environment where intellectual curiosity thrives and innovation flourishes. Through personalized mentorship, cutting-edge research endeavors, and interactive teaching methodologies, these esteemed professors empower students to realize their full potential and become leaders in their respective fields
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="advisor-items advisor-carousel-solid owl-carousel owl-theme text-center text-light">
                                <div className="advisor-item">
                                    <div className="info-box">
                                        <img src="/assets/img/teacher-1.jpeg" alt="Thumb" />
                                        <div className="info-title">
                                            <h4>Dr. Sarbeswara Hota</h4>
                                            <span>Associate Professor </span><br></br>
                                            <span>Department of Computer Application </span>
                                            {/* <div className="social">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="advisor-item">
                                    <div className="info-box">
                                        <img src="/assets/img/teacher-2.jpeg" alt="Thumb" />
                                        <div className="info-title">
                                            <h4>Dr. Kaberi Das</h4>
                                            <span>Head Of Department </span><br></br>
                                            <span>Department of Computer Application </span>
                                            {/* <div className="social">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="advisor-item">
                                    <div className="info-box">
                                        <img src="/assets/img/teacher-3.jpeg" alt="Thumb" />
                                        <div className="info-title">
                                            <h4>Dr. Bichitrananda Patra</h4>
                                            <span>Associate Professor </span><br></br>
                                            <span>Department of Computer Application </span>
                                            {/* <div className="social">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="advisor-item">
                                    <div className="info-box">
                                        <img src="assets/img/advisor/4.jpg" alt="Thumb" />
                                        <div className="info-title">
                                            <h4>Professon. John Doe</h4>
                                            <span>Senior Writter</span>
                                            <div className="social">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="advisor-item">
                                    <div className="info-box">
                                        <img src="assets/img/advisor/5.jpg" alt="Thumb" />
                                        <div className="info-title">
                                            <h4>Professon. John Doe</h4>
                                            <span>Senior Writter</span>
                                            <div className="social">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    </li>
                                                    <li className="twitter">
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                    </li>
                                                    <li className="pinterest">
                                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="testimonials-area carousel-shadow default-padding bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="site-heading text-center">
                            <div className="col-md-8 col-md-offset-2">
                                <h2>Students Review</h2>
                                <p>
                                    Contained within are a selection of top-tier student reviews, providing insightful perspectives on the exceptional educational journey at SOA University. These testimonials offer profound insights into the enriching academic environment, supportive faculty engagement, and the holistic learning experiences that characterize student life within the university's esteemed halls.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="clients-review-carousel owl-carousel owl-theme">

                                <div className="item">
                                    <div className="col-md-5 thumb">
                                        <img src="/assets/img/student-1.jpeg" alt="Thumb" />
                                    </div>
                                    <div className="col-md-7 info">
                                        <p>
                                            Hello everyone, currently, I am pursuing MCA. Approximately 85% of students were placed from our branch. Top recruiting companies for our course are based on cybersecurity like Microsoft, Facebook, Google, etc.
                                        </p>
                                        <h4>Rakesh Roshan Rout</h4>
                                        <span>MCA Student</span>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="col-md-5 thumb">
                                        <img src="/assets/img/student-2.jpeg" alt="Thumb" />
                                    </div>
                                    <div className="col-md-7 info">
                                        <p>
                                            Best placement, including some coding competitions by className. Nice and good events. Mass recruiters like TCS and Infosys are coming here. You could join them.
                                        </p>
                                        <h4>Asutosh panda</h4>
                                        <span>MCA Student</span>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="col-md-5 thumb">
                                        <img src="/assets/img/student-3.jpeg" alt="Thumb" />
                                    </div>
                                    <div className="col-md-7 info">
                                        <p>
                                            Exceptional academic environment fostering innovation and growth, supported by dedicated faculty at SOA University.
                                        </p>
                                        <h4>Sukesh Kumar Dalai</h4>
                                        <span>MCA Student</span>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="col-md-5 thumb">
                                        <img src="/assets/img/student-4.jpeg" alt="Thumb" />
                                    </div>
                                    <div className="col-md-7 info">
                                        <p>
                                            SOA University provides a holistic educational experience, integrating theory with practical skills, preparing students for real-world challenges.
                                        </p>
                                        <h4>SUMAN KUMAR PAL</h4>
                                        <span>MCA Student</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
