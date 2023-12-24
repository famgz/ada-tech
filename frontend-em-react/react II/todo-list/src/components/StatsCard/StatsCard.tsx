import styles from './styles.module.scss';

interface StatsCardProps {
  title: string;
  value: number;
  opcional?: string;
}

// export const StatsCard: React.FC<StatsCardProps> = (props) => {
export const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <article className={styles.stats_card}>
      {/* <h2>{props.title}</h2>
      <span>{props.value}</span> */}
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
};
