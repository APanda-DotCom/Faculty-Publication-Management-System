import Input from "react-validation/build/input";
import React, { useState } from 'react'
import Form from "react-validation/build/form";
import UserService from "../../services/user.service";
import { toast } from "react-toastify";

const AddPublication = (props) => {
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        journal: '',
        visibility: '',
        volume: '',
        number: '',
        issue: '',
        pageNumber: '',
        year: '',
        issnNumber: '',
        indexing: '',
        impactFactor: '',
        doi: ''
    })


    const onFormValueChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onAddPublication = () => {
        let reqPayload = formData;
		reqPayload.userId = props?.userId;
		UserService.savePublication(reqPayload).then(
			(res) => {
				toast?.success(res?.data?.message)
                props?.setOpenAddForm(false);
                props?.getPublications(props?.userId, props.paginationInfo);
			},
			(error) => {
				console.log("error>>", error);
			}
		);
    }

    return (
        <>
            <div className="edit-profile adviros-details-area border" style={{ padding: "20px", marginBottom: "16px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 update-info" style={{ border: 'none' }}>
                            <h4>Add Publications</h4>
                            <div className="row">
                                <Form id="profile-form" className="contact-form">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="author"
                                                placeholder="Author"
                                                value={formData?.author}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="title"
                                                placeholder="Publication Title"
                                                value={formData?.title}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="journal"
                                                placeholder="Journal"
                                                value={formData?.journal}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="visibility"
                                                placeholder="Visibility"
                                                value={formData?.visibility}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="volume"
                                                placeholder="Volume"
                                                value={formData?.volume}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="number"
                                                placeholder="Number"
                                                value={formData?.number}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="issue"
                                                placeholder="Issue"
                                                value={formData?.issue}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="pageNumber"
                                                placeholder="Page Number"
                                                value={formData?.pageNumber}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="year"
                                                placeholder="Year"
                                                value={formData?.year}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="issnNumber"
                                                placeholder="ISSN No"
                                                value={formData?.issnNumber}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="indexing"
                                                placeholder="Indexing"
                                                value={formData?.indexing}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="impactFactor"
                                                placeholder="Impact Factor"
                                                value={formData?.impactFactor}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <Input
                                                type="text"
                                                className="form-control"
                                                name="doi"
                                                placeholder="DOI"
                                                value={formData?.doi}
                                                onChange={onFormValueChange}
                                                style={{ fontSize: '1.5rem' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button type='submit' onClick={(e) => {
                                            e.preventDefault();
                                            onAddPublication();
                                        }}>
                                            Save
                                        </button>
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            props?.setOpenAddForm(false)
                                        }}>
                                            Cancel
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPublication
