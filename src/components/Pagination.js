import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div className="pagination-button">
            {gotoPrevPage && (
                <button
                    className="btn btn-primary"
                    onClick={gotoPrevPage}
                    style={{ margin: "5px" }}
                >
                    Previous Page
                </button>
            )}
            {gotoNextPage && (
                <button
                    className="btn btn-primary"
                    onClick={gotoNextPage}
                    style={{ margin: "5px" }}
                >
                    Next Page
                </button>
            )}
        </div>
    );
}
