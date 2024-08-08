import React, { useEffect, useState } from 'react'
import Datagrid from '../ui/Datagrid'
import UserService from '../../services/user.service';

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

const PublicationsDetails = ({ userId }) => {
    const [tableData, setTableData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [paginationInfo, setPaginationInfo] = useState({
        limit: 10,
        offset: 0
    })

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
        getPublications(userId, paginationInfo);
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
        },
        {
            name: "journal",
            label: "Name of the Journal",
        },
        {
            name: "title",
            label: "Title of paper",
        },
        {
            name: "visibility",
            label: "Visibility",
        },
        {
            name: "volume",
            label: "Volume",
        },
        {
            name: "number",
            label: "No.",
        },
        {
            name: "issue",
            label: "Issue",
        },
        {
            name: "year",
            label: "Year",
        },
        {
            name: "issnNumber",
            label: "ISSN No.",
        },
        {
            name: "indexing",
            label: "Indexing",
        },
        {
            name: "impactFactor",
            label: "Impact Factor",
        },
        {
            name: "doi",
            label: "DOI",
        }
    ]

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
        }
    }

    return (
        <>

            <div className='row'>
                <Datagrid
                    title="Publications"
                    columns={columns}
                    data={tableData}
                    customOptions={options}
                />
            </div>
        </>


    )
}

export default PublicationsDetails
