import React from "react";

const StatisticTable = ({ title, columnNames, dataRows }) => {
  return (
    <div className="table-box">
      <p6>{title}</p6>
      <div className="table">
        <div className="columns-title-box">
          <p6 className="column-title">#</p6>
          {columnNames.map((col, index) => {
            <p6 className="column-title" key={index}>
              {col}
            </p6>;
          })}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2"
          viewBox="0 0 320 2"
          fill="none"
          className="line"
        >
          <path
            d="M0.5 1L319.218 0.778839"
            stroke="#4B5563"
            stroke-linecap="square"
          />
        </svg>

        <div className="rows">
          {dataRows.map((item, index) => {
            <small className="row-item" key={index}>
              {item}
            </small>;
          })}
        </div>
      </div>
    </div>
  );
};

export default StatisticTable;
