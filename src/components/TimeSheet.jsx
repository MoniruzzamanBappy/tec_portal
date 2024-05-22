import React from "react";

function TimeSheet() {
  return (
    <div>
      <h1>TimeSheet</h1>
      <p>TimeSheet component is working!</p>
    </div>
  );
}

export default TimeSheet;

/* 

import React, { useEffect, useRef, useState } from "react";
import List from "../shared/List";
import { get, isEqual } from "lodash";
import ApiKit from "../utilities/helper/ApiKit";
import { FiEdit } from "react-icons/fi";
import { getFormattedDate } from "../utilities/dateHelper";
import { LIST_DATA_DATETIME_FORMAT } from "../common/constant";
//https://backend.tec.ampectech.com/api/user/jobs

const DISPLAY = {
  title: () => "Current Jobs",
  content: {
    properties: [
      "job_no",
      "location",
      "total_hours",
      "start_date",
      "completion_date",
      "attachment",
      "status",
    ],
    headerClass: {},
    bodyClass: {},
    style: {
      columnWidth: "md:grid-cols-[0.5fr_0.5fr_1fr_1fr_1fr_1fr_2fr_1fr]", // 1st 1fr for "SL" (if autoSerialNumber true)
      printColumnWidth: "print:grid-cols-[0.5fr_0.5fr_1fr_1fr_1fr_1fr_2fr_1fr]", // 1st 1fr for "SL" (if autoSerialNumber true)
    },
    header: () => {
      return {
        job_no: "Job No",
        location: "Location",
        total_hours: "Total Hours",
        start_date: "Start Date",
        completion_date: "Completion Date",
        attachment: "Attachment",
        status: "Status",
      };
    },
    body: ({ row, column }) => {
      if (column === "job_no") {
        const jobNo = get(row, "job_no", "");
        return jobNo ? jobNo : "-";
      }
      if (column === "location") {
        const location = get(row, "location", "");
        return location ? location : "-";
      }
      if (column === "total_hours") {
        const totalHours = get(row, "total_hours", "");
        return totalHours ? totalHours : "-";
      }
      if (column === "start_date") {
        const startDate = get(row, "created_at", "");
        return startDate
          ? getFormattedDate(startDate, LIST_DATA_DATETIME_FORMAT)
          : "-";
      }
      const typeOfData = typeof row[column];
      return typeOfData === "string"
        ? row[column]
          ? row[column]
          : "-"
        : typeOfData === "number"
        ? row[column]
        : "-";
    },
    contextMenu: ({ row }) => {
      return [
        {
          icon: <FiEdit size={18} />,
          name: "Edit",
          function: () => console.log("clicked on edit"),
        },
      ];
    },
  },
};
function CurrentJobs() {
  const [isLoading, setIsLoading] = useState(true);
  const [productFormData, setProductFormData] = useState({});
  const printFunctionRef = useRef(null);
  const currentParamsOfApiCallRef = useRef(null);

  const title = DISPLAY.title();
  const productFormResults = get(productFormData, "results", []);
  const hasListItems =
    Array.isArray(productFormResults) && productFormResults.length > 0;

  const onChangePharmacy = (data) => {
    setProductFormData(data);
    setIsLoading(false);
  };

  const callPharmacyApi = (params = "", search = false) => {
    if (params.key) {
      params = { ...params, keyword: params.key };
      delete params.key;
    }
    currentParamsOfApiCallRef.current = params;

    const onSuccess = (response) => {
      const data = get(response, "data", "");
      const responseParams = get(response, "config.params", {});
      if (isEqual(responseParams, currentParamsOfApiCallRef.current)) {
        onChangePharmacy(data);
      }
    };

    const onError = (error) => {
      console.warn(error);
    };

    const onFinally = () => {
      setIsLoading(false);
    };

    let url = ApiKit.userJob.getJobs(params);

    url.then(onSuccess).catch(onError).finally(onFinally);
  };

  const init = () => {
    setIsLoading(true);
    callPharmacyApi();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <List
        printFunctionRef={printFunctionRef}
        title={title}
        loading={isLoading}
        data={productFormData}
        renderDropdownItem={true}
        contextMenuData={({ row }) => DISPLAY.content.contextMenu({ row })}
        onChangeData={onChangePharmacy}
        properties={DISPLAY.content.properties}
        header={DISPLAY.content.header()}
        body={({ row, column }) => DISPLAY.content.body({ row, column })}
        style={DISPLAY.content.style}
        callApi={init}
      />
    </div>
  );
}

export default CurrentJobs;


*/
