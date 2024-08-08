import React, { useEffect, useState } from 'react'
import Datagrid from '../ui/Datagrid'
import UserService from '../../services/user.service';
import AddPublication from './AddPublication';
import { Box, IconButton, Modal, Tooltip } from '@material-ui/core';
import DragAndDrop from '../ui/DragAndDrop';
import { toast } from "react-toastify";
import SearchPublications from './SearchPublications';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 30,
    p: 4,
};

const Publications = () => {
    const [tableData, setTableData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [paginationInfo, setPaginationInfo] = useState({
        limit: 10,
        offset: 0
    })
    const [openAddForm, setOpenAddForm] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const userData = localStorage.getItem('userData');
    const userDetails = JSON.parse(userData)

    const getPublications = (id, reqPayload) => {
        UserService.getPublicationByUser(id, reqPayload).then((res) => {
            const tData = res?.data?.data?.rows;
            const tCount = res?.data?.data?.count;
            setTotalCount(tCount);
            setTableData(tData);
        },
            (error) => {
                console.log("error>>", error);
            }
        )
    }

    useEffect(() => {
        getPublications(userDetails?.id, paginationInfo);
    }, [paginationInfo])

    const onChangeRowsPerPage = (numberOfRows) => {
        setPaginationInfo({
            ...paginationInfo,
            limit: numberOfRows,
            offset: paginationInfo.offset <= numberOfRows ? 0 : paginationInfo.offset
        })
        console.log('number of rows: ', numberOfRows);
    }

    const changePage = (page) => {
        console.log("page: ", page);
        setPaginationInfo({
            ...paginationInfo,
            offset: paginationInfo?.limit * page
        })
    }

    const columns = [
        {
            name: "author",
            label: "Name of the Author/s",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "journal",
            label: "Name of the Journal",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "title",
            label: "Title of paper",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "visibility",
            label: "Visibility",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "volume",
            label: "Volume",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "number",
            label: "No.",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "issue",
            label: "Issue",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "pageNumber",
            label: "Page No (pp)",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "year",
            label: "Year",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "issnNumber",
            label: "ISSN No.",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "indexing",
            label: "Indexing",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "impactFactor",
            label: "Impact Factor",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "doi",
            label: "DOI",
            options: {
                filter: true,
                sort: false
            }
        }
    ]

    const onBulkUpload = (files) => {
        console.log(files)
        const formData = new FormData();
        formData.append(
            "file",
            files,
            files.name
        );
        UserService.uploadBulkPublications(formData).then((res) => {
            toast?.success(res?.data?.message)
            setOpen(false);
            getPublications(userDetails?.id, paginationInfo);
        });
    }

    const HeaderElements = () => (
        <>
            <IconButton aria-label="add-publication" onClick={(e) => setOpenAddForm(true)} disabled={openAddForm}>
                <Tooltip id="button-add-publications" title="Add Publication">
                    <i className="fa fa-plus"></i>
                </Tooltip>
            </IconButton>
            <IconButton aria-label="import-publication-file" onClick={handleOpen}>
                <Tooltip id="button-import-excel" title="Import Publication Excel">
                    <i className="fas fa-file-import"></i>
                </Tooltip>
            </IconButton>
        </>
    );


    const options = {
        selectableRows: "none",
        fixedHeader: false,
        serverSide: true,
        align: "center",
        search: false,
        filter: false,
        count: totalCount,
        downloadOptions: { filename: "PublicationsList.csv", separator: "," },
        onChangeRowsPerPage: (numberOfRows) => {
            onChangeRowsPerPage(numberOfRows);
        },
        onTableChange: (tableAction, tableState) => {
            if (tableAction === "changePage") {
                changePage(tableState.page)
            }
        },
        customToolbar: () => (<HeaderElements />)
    }

    return (
        <>

            <div >
                <div className="row">
                    <SearchPublications getPublications={getPublications} userId={userDetails?.id} paginationInfo={paginationInfo} />
                </div> 
                {openAddForm ?
                    <div className="row">
                        <AddPublication userId={userDetails?.id} setOpenAddForm={setOpenAddForm} getPublications={getPublications} paginationInfo={paginationInfo} />
                    </div> : null
                }
                <div className='row'>
                    <Datagrid
                        title="Publications"
                        columns={columns}
                        data={tableData}
                        customOptions={options}
                    />
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-upload-publications"
                aria-describedby="modal-upload-description"
            >
                <Box sx={style}>
                    <h2>Upload Publication Excel File</h2>
                    <DragAndDrop onFilesSelected={onBulkUpload} />
                </Box>
            </Modal>
        </>

    )
}

export default Publications
