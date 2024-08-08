import React from "react";
import MUIDataTable from "mui-datatables";

const Datagrid = (props) => {
    if (!props.columns?.length) {
        return null;
    }

    const defaultOptions = {
        fixedHeader: true,
        selectableRows: "none",
        downloadOptions: { filename: "publications.csv", separator: "," },
    };

    return (
        <div>
            <MUIDataTable
                className="table-responsive"
                title={props?.title}
                data={props?.data}
                columns={props?.columns}
                options={{ ...defaultOptions, ...props?.customOptions }}
                elevation={3}
            />
        </div>
    );
};

export default Datagrid;
