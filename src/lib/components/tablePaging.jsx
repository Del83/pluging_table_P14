/** TOOLS */
import propTypes from "prop-types";

/**
 * React component : table paging
 * @param {number} currentPage the current page
 * @param {array} pageNumbers the page numbers
 * @param {func} itemsTotal the total of the items
 * @param {func} goPreviousPage function to go to the previous page
 * @param {func} goNextPage function to go to the next page
 * @component
 */
export default function Paging({
  currentPage,
  pageNumbers,
  itemsTotal,
  goPreviousPage,
  goNextPage,
}) {
  return (
    <section className="table-layout-ctn">
      <p className="table-showing-page">
        {" "}
        Showing <b className="enhancementFrame">{currentPage}</b> to <b className="enhancementFrame">{pageNumbers.length}</b> of{" "}
        <b className="enhancementFrame">{itemsTotal()}</b> entries
      </p>
      <div className="table-pagination">
        <span
          className={currentPage === 1 ? "table-page-inactive" : "pointer"}
          onClick={goPreviousPage}
        >
          Previous
        </span>{" "}
        <b className="enhancementFrame">{currentPage}</b>{" "}
        <span
          className={
            currentPage === pageNumbers.length ? "table-page-inactive" : "pointer"
          }
          onClick={goNextPage}
        >
          Next
        </span>
      </div>
    </section>
  );
}

Paging.propTypes = {
  currentPage: propTypes.number,
  pageNumbers: propTypes.array,
  itemsTotal: propTypes.func,
  goPreviousPage: propTypes.func,
  goNextPage: propTypes.func,
};
