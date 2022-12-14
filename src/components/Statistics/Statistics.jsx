import css from "../Statistics/Statistics.module.css";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={css.statList}>
            <li className={css.item}>
                <span className={css.label}>Good:</span>
                <span className={css.value}>{good}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Neutral:</span>
                <span className={css.value}>{neutral}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Bad:</span>
                <span className={css.value}>{bad}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Total:</span>
                <span className={css.value}>{total}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Positive feedback:</span>
                <span className={css.value}>{positivePercentage}%</span>
            </li>
          </ul>
  );
  
  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  
  export default Statistics;