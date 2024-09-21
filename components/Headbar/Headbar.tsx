'use client';

import React, { ReactElement, useState } from 'react';
import Link from 'next/link';
import { PiList, PiBell, PiMagnifyingGlass } from 'react-icons/pi';
import Image from 'next/image';
import logo1 from '/public/FC25.png';
import logo2 from '/public/PML.png';
import clsx from 'clsx';
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text, MantineProvider } from '@mantine/core';
import styles from './headbar.module.scss';

export default function Headbar(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <header className={clsx(styles.root, 'Headbar-root')}>
        <div className={styles.leftSection}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <PiList />
          </button>
          <Link href="/" className={styles.logo}>
            <Image src={logo1} alt="Logo1" height={74} width={120} />
          </Link>
          <Link href="/" className={styles.logo}>
            <Image src={logo2} alt="Logo2" height={44} width={44} />
          </Link>
        </div>
        <div className={styles.centerSection}>
          <MantineProvider>
            <Group justify="center">
              <Button
                onClick={toggle}
                className={styles.searchButton}
                //Ross, purtroppo è l'unico modo (Per ora) che mi consente di
                // bypassare delle mod di mantine che si attivano e sovrascrivono
                // il mio css
              >
                <PiMagnifyingGlass />
              </Button>
            </Group>

            <Dialog
              opened={opened}
              withCloseButton
              onClose={close}
              size="lg"
              radius="md"
              style={{
                top: '4.9375rem',
                position: 'fixed',
                left: '0',
                width: '100%',
                backgroundColor: '#182b34',
              }}
            >
              <Text size="sm" mb="xs" fw={500}>
                Cerca Giocatore
              </Text>

              <Group>
                <TextInput placeholder="Search here..." style={{ flex: 1 }} />
                <Button onClick={close} style={{ backgroundColor: 'transparent' }}>
                  Search
                </Button>
              </Group>
            </Dialog>
          </MantineProvider>
        </div>
        <div className={styles.rightSection}>
          <button className={styles.notificationsButton}>
            <PiBell />
          </button>
        </div>
        {isMenuOpen && (
          <div className={styles.menuOverlay} onClick={closeMenu}>
            <nav className={styles.menu}>
              <ul>
                <li>
                  <Link href="/home" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/squadra" onClick={closeMenu}>
                    Squadra
                  </Link>
                </li>
                <li>
                  <Link href="/mercato" onClick={closeMenu}>
                    Mercato
                  </Link>
                </li>
                <li>
                  <Link href="/classifica" onClick={closeMenu}>
                    Classifica
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
