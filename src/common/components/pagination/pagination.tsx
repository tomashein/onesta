import ChevronLeft from '@/assets/icons/chevron-left.svg';
import ChevronRight from '@/assets/icons/chevron-right.svg';
import styles from './pagination.module.css';

type Props<T> = {
  page: number;
  setPage: (page: number) => void;
  hook: (page?: number) => {
    data:
      | {
          collection: T[];
          count: number;
        }
      | undefined;
    isLoading: boolean;
    isError: Error | undefined;
  };
};

type Model = {
  [key: string]: string | number | boolean | string[] | number[] | any[] | object;
};

const Pagination = <T extends Model>({ page, setPage, hook }: Props<T>) => {
  const { data } = hook(page);

  const pages = Array.from({ length: Math.ceil((data ? data.count : 0) / 10) }, (_, x) => x + 1);

  const handlePrevClick = () => setPage(page - 1);

  const handleNextClick = () => setPage(page + 1);

  const handlePageClick = (page: number) => setPage(page);

  const pageNumbers = pages.map((el) => {
    return (
      <button
        className={`${styles.button} ${styles.button_page}`}
        disabled={page === el}
        key={el}
        onClick={() => handlePageClick(el)}
        type="button"
      >
        {el}
      </button>
    );
  });

  return (
    <div className={styles.container}>
      <div>{data?.count} Entries</div>
      <div>
        <button className={`mr-2 ${styles.button}`} onClick={handlePrevClick} disabled={page === 1}>
          <ChevronLeft />
        </button>
        {pageNumbers}
        <button className={styles.button} onClick={handleNextClick} disabled={page === pages[pages.length - 1]}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
