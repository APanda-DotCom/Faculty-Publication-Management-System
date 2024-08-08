import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './facultyCard.css';
import UserService from '../../services/user.service';
import { useNavigate } from "react-router-dom";
import SearchUser from './SearchUser';

const Faculty = () => {

  const [facultyData, setFacultyData] = useState([]);

  const navigate = useNavigate();

  const getFacultyData = (reqPayload) => {
    UserService.getFacultyDetails(reqPayload).then((res) => {
   
      if (res?.data?.data?.rows && res?.data?.success) {
        setFacultyData(res?.data?.data?.rows);
      }
    },
      (error) => {
        console.log("error>>", error);
      }
    )
  }

  useEffect(() => {
    getFacultyData({});
    // const userData = localStorage.getItem('userData');
    // const userDetails = JSON.parse(userData)
    const token = localStorage.getItem("token")

    const isToken = JSON.parse(token)


    if (isToken) {
     return true;
    }
    else {
      window.location.replace("/login")
    }
  }, [])

  return (
    <Container>
      {/* <div className='mt-5'> <center><h1>All Faculties</h1></center></div> */}
      <div className="breadcrumb-area shadow dark text-center bg-fixed text-light" style={{ backgroundImage: "url(assets/img/faculty_2.jpeg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Faculties</h1>
                        </div>
                    </div>
                </div>
            </div>
      <Row>
        <div>
          <SearchUser getFacultyData={getFacultyData} />
        </div>
        {facultyData.length > 0 ? ( facultyData?.map((faculty, index) => (
          <Col key={index} sm={12} md={6} lg={6} className="mb-4 mt-4">
            <Card className="h-100" onClick={(e) => { navigate('/facultyProfile', { state: {
              id: faculty?.id
            }}) }}>
              <Card.Body className="d-flex align-items-center">
                <img src={faculty?.profileImageURL||"assets/img/defaultUser.jpg"} alt='faculty' className="rounded-circle mr-3" width="80" height="80" />
                <div>
                  <Card.Title>{faculty?.userName}</Card.Title>
                  <Card.Text>
                    <a href={`mailto:${faculty?.email}`} className="text-decoration-none">{faculty?.email}</a>
                  </Card.Text>
                  {/* <div className="d-flex align-items-center">
                    {faculty.linkedin && (
                      <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {faculty.twitter && (
                      <a href={faculty.twitter} target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {faculty.facebook && (
                      <a href={faculty.facebook} target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                        <i className="fab fa-facebook"></i>
                      </a>
                    )}
                    {faculty.instagram && (
                      <a href={faculty.instagram} target="_blank" rel="noopener noreferrer" className="text-dark">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                  </div> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))) : (
          <div className='text-center default-padding'>
            <h3>No Faculties!</h3>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Faculty;
