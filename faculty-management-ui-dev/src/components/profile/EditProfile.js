import React from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const EditProfile = (props) => {
    const formData = props?.formData;

    const futureDate = new Date().toJSON().slice(0, 10);

    const handleFocus = (e) => {
        e.target.type = 'date';
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            e.target.type = 'text';
        }
    };

    return (
        <div className="info title">
            <div className="row">
                <Form id="profile-form" className="contact-form">
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="userName"
                                placeholder="Username"
                                value={formData?.userName}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="collegeName"
                                placeholder="College Name"
                                value={formData?.collegeName}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="facultyName"
                                placeholder="Faculty Name"
                                value={formData?.facultyName}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="gender"
                                placeholder="Gender"
                                value={formData?.gender}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email Address"
                                value={formData?.email}
                                readOnly
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="mobileNumber"
                                placeholder="Mobile Number"
                                value={formData?.mobileNumber}
                                onChange={props?.onFormValueChange}
                                maxLength={10}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="designation"
                                placeholder="Designation"
                                value={formData?.designation}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="department"
                                placeholder="Department"
                                value={formData?.department}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="jobNature"
                                placeholder="Job Nature"
                                value={formData?.jobNature}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"  
                                name="dateOfJoining"
                                placeholder="Date Of Joining"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                value={formData?.dateOfJoining}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                                max={futureDate}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="academicQualification"
                                placeholder="Academic Qualification"
                                value={formData.academicQualification}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="publicationHistory"
                                placeholder="Publication History"
                                value={formData?.publicationHistory}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <Input
                                type="textarea"
                                className="form-control"
                                name="bio"
                                placeholder="About Yourself..."
                                value={formData?.bio}
                                onChange={props?.onFormValueChange}
                                style={{ fontSize: '1.5rem' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button onClick={(e) => {
                            props?.handleUpdate(e)
                        }}>
                            Update
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default EditProfile
