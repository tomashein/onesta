import { useEffect, useState } from 'react';
import styles from './table.module.css';

type Column<T> = {
  title: string;
  key: string;
  cell?: (row: T) => React.ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  page: number;
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

const Table = <T extends Model>({ columns, page, hook }: Props<T>) => {
  const [list, setList] = useState<T[]>([]);
  const { data } = hook(page);

  useEffect(() => {
    if (data && data.collection.length > 0) {
      setList(data.collection);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {list.map((row) => (
            <tr key={row.id as string}>
              {columns.map((col) => {
                const value = row[col.key];
                if (!value) return null;
                return (
                  <td key={col.key}>
                    {col.cell
                      ? col.cell(row)
                      : typeof row[col.key] === 'object'
                      ? ''
                      : (row[col.key] as React.ReactNode)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
