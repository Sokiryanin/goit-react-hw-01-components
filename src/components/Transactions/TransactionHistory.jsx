import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.thead_tr}>
          <th className={css.table_th}>Type</th>
          <th className={css.table_th}>Amount</th>
          <th className={css.table_th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.table_tr} key={id}>
              <td className={css.table_td}>{type}</td>
              <td className={css.table_td}>{amount}</td>
              <td className={css.table_td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
