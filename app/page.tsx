import { ReactNode } from 'react';
import clsx from 'clsx';
import { MantineProvider } from '@mantine/core';
import Demo from '../components/Carousel/Demo';

import styles from './page.module.scss';

export default function HomePage(): ReactNode {
  return (
    <div className={clsx(styles.root, 'Homepage-root')}>
      <MantineProvider>
        <Demo></Demo>
      </MantineProvider>
      <div className={styles.separator}>Partite da giocare</div>
      <div>Placeholder List</div>
    </div>
  );
}
