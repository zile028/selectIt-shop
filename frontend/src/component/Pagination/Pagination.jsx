import React from "react";

const Pagination = ({ setSearchParams, limit, page, count }) => {
  const handlePreviousPage = () => {
    if (page > 1) {
      setSearchParams({ limit, page: page - 1 });
    }
  };

  const handleNextPage = () => {
    if (page < Math.ceil(count / limit)) {
      setSearchParams({ limit, page: page + 1 });
    }
  };

  const changePage = (e) => {
    setSearchParams({ limit, page: e.target.name });
    
  };

  const renderPageBtn = () => {
    let numberPage = Math.ceil(count / limit);
    
    return Array(numberPage)
      .fill(1)
      .map((el, index) => {
        
        return (
          <li key={index} className="pagination__item">
            <button
              className="pagination__btn"
              name={el + index}
              onClick={changePage}
            >
              {el + index}
            </button>
          </li>
        );
      });
  };

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        
        <li className="pagination__item">
          <button className="pagination__btn pagination__btn-control" aria-label="Previous" onClick={handlePreviousPage}>
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {count && renderPageBtn()}

        <li className="pagination__item">

          <button className="pagination__btn pagination__btn-control" aria-label="Next" onClick={handleNextPage}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>

      </ul>
    </nav>
  );
};

export default Pagination;
