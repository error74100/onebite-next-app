import ClientComponent from '../../components/client-components';
import styles from './page.module.css';
import ServerComponent from '../../components/server-components';

export default function Home() {
  return (
    <div className={styles.page}>
      index page..
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
