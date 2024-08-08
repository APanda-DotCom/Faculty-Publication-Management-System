import React, { useEffect, useState } from 'react';
import UserService from '../../services/user.service';
import Datagrid from '../ui/Datagrid';
import Switch from '@mui/material/Switch';
import { toast } from 'react-toastify';

const UserManagement = () => {
    const [tableData, setTableData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [paginationInfo, setPaginationInfo] = useState({
        limit: 10,
        offset: 0,
    });
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'asc',
    });

    const getUsers = (reqPayload) => {
        UserService.getUsersDetails(reqPayload).then(
            (res) => {
                if (res?.data?.data?.rows && res?.data?.success) {
                    const tData = res?.data?.data?.rows;
                    const tCount = res?.data?.data?.count;
                    setTotalCount(tCount);
                    setTableData(tData);
                }
                console.log('user list: ', res?.data?.data);
            },
            (error) => {
                console.log('error>>', error);
            }
        );
    };

    useEffect(() => {
        getUsers(paginationInfo);
    }, [paginationInfo]);

    const userData = localStorage.getItem('userData');
    const userDetails = JSON.parse(userData)

    useEffect(() => {


        const token = localStorage.getItem("token")
        const isToken = JSON.parse(token)
        if (isToken && userDetails?.role === 'admin') {
            getUsers(paginationInfo)
        }
        else {
            window.location.replace("/admin")
        }
    }, [])

    const onChangeRowsPerPage = (numberOfRows) => {
        setPaginationInfo({
            ...paginationInfo,
            limit: numberOfRows,
            offset: paginationInfo.offset <= numberOfRows ? 0 : paginationInfo.offset,
        });

    };

    const changePage = (page) => {
        console.log('page: ', page);
        setPaginationInfo({
            ...paginationInfo,
            offset: paginationInfo?.limit * page,
        });
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
        const sortedData = [...tableData].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setTableData(sortedData);
    };

    const toggleStatus = (id, currentStatus) => {

        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
        let reqPayload = { status: newStatus }
        UserService.changeUserStatus(id, reqPayload).then(
            (res) => {
                if (res?.data?.success) {
                    const updatedData = tableData.map((item) =>
                        item.id === id ? { ...item, status: newStatus } : item
                    );

                    toast?.success(res?.data?.message)
                    setTableData(updatedData);
                }
            },
            (error) => {
                console.log('error>>', error);
            }
        );
    };

    const columns = [
        { name: 'id', label: 'ID', options: { display: false } },
        { name: 'userName', label: 'User Name', options: { filter: true, sort: true } },
        { name: 'facultyName', label: 'Faculty Name', options: { filter: true, sort: true } },
        { name: 'email', label: 'Email', options: { filter: true, sort: true } },
        { name: 'designation', label: 'Designation', options: { filter: true, sort: true } },
        { name: 'department', label: 'Department', options: { filter: true, sort: true } },
        { name: 'academicQualification', label: 'Academic Qualification', options: { filter: true, sort: true } },
        { name: 'jobNature', label: 'Job Nature', options: { filter: true, sort: true } },
        { name: 'mobileNumber', label: 'Mobile Number', options: { filter: true, sort: true } },
        { name: 'gender', label: 'Gender', options: { filter: true, sort: true } },
        {
            name: 'status',
            label: 'Status',
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value, tableMeta) => {
                    const rowId = tableMeta.rowData[0];
                    return (
                        <Switch
                            checked={value === 'active'}
                            onChange={() => toggleStatus(rowId, value)}
                            color="primary"
                        />
                    );
                },
            },
        },
    ];

    const options = {
        selectableRows: 'none',
        fixedHeader: false,
        serverSide: false,
        align: 'center',
        search: false,
        filter: false,
        sort: true,
        count: totalCount,
        downloadOptions: { filename: 'UserList.csv', separator: ',' },
        onChangeRowsPerPage: (numberOfRows) => {
            onChangeRowsPerPage(numberOfRows);
        },
        onTableChange: (tableAction, tableState) => {
            if (tableAction === 'changePage') {
                changePage(tableState.page);
            }
        },
    };

    return (
        <>
            <div className="breadcrumb-area shadow dark text-center bg-fixed text-light" style={{ backgroundImage: "url(assets/img/banner/admin-2.jpg)" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Admin</h1>
                        </div>
                    </div>
                </div>
            </div>

            {tableData?.length === 0 ? (
                <div className="se-pre-con"></div>
            ) : (
                <div style={{ marginTop: '10px' }}>
                    <Datagrid
                        title="User Details"
                        columns={columns}
                        data={tableData}
                        customOptions={options}
                        onSort={handleSort}
                        sortConfig={sortConfig}
                    />
                </div>

            )}
        </>
    );
};

export default UserManagement;
