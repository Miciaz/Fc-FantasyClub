'use client';

/* eslint-disable react/jsx-indent-props */
import React, { ReactElement, useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { PiList, PiBell, PiMagnifyingGlass } from 'react-icons/pi';
import { Button } from '@mantine/core';
import Image from 'next/image';
import logo1 from '@/public/FC25.png';
import logo2 from '@/public/PML.png';

import styles from './headbar.module.scss';

export default function Headbar(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  // Riferimento per la barra di ricerca
  const searchBarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Chiudi la barra di ricerca quando clicchi fuori da essa
  // PS: Ross, quando vedrai questo useEffect, sappi che ci ho litigato 2 ore.
  //    Funziona ma non riesco a trovare un modo per scriverlo diversamente :(
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setSearchVisible(false); // Nasconde la barra di ricerca di
      }
    };

    if (isSearchVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchVisible]);

  return (
    <>
      <nav className={clsx(styles.root, 'Headbar-root')}>
        <div className={styles.leftSection}>
          <Button className={styles.menuButton} onClick={toggleMenu}>
            <PiList />
          </Button>
          <Link href="/" className={styles.logo}>
            <Image src={logo1} alt="Logo1" height={74} width={120} />
          </Link>
          <Link href="/" className={styles.logo}>
            <Image src={logo2} alt="Logo2" height={44} width={44} />
          </Link>
        </div>
        <div className={styles.centerSection}>
          <Button className={styles.searchButton} onClick={() => setSearchVisible(true)}>
            <PiMagnifyingGlass />
          </Button>
        </div>
        <div className={styles.rightSection}>
          <Button className={styles.notificationsButton}>
            <PiBell />
          </Button>
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
      </nav>

      {/* La barra di ricerca visibile sotto la headbar */}
      {isSearchVisible && (
        <div className={styles.searchBar} ref={searchBarRef}>
          <input
            type="text"
            placeholder="Cerca..."
            className={styles.searchInput}
            onBlur={() => setSearchVisible(false)}
            // Nasconde la barra di ricerca al perdere del focus
          />
        </div>
      )}
    </>
  );
}
