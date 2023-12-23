import React from "react";
import "../../assets/styles/components/StatisticTable";

export const StatisticTable = ({ title, columnNames, dataRows }) => {
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
