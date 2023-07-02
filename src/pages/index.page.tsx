import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Cell } from 'src/components/Cell';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const colors: string[] = ['', 'あなたは黒です', 'あなたは白です'];
  const turns: string[] = ['', '黒の番です', '白の番です'];
  const [user] = useAtom(userAtom);
  const [board, setBoard] = useState<number[][]>();
  const [yourColor, setYourColor] = useState<number>();
  const [turn, setTurn] = useState<number>();
  const fetchBorad = async () => {
    const res = await apiClient.board.$get().catch(returnNull);
    if (res !== null) {
      setBoard(res.board);
      setYourColor(res.yourColor);
      setTurn(res.turnColor);
    }
  };
  const onClick = async (x: number, y: number) => {
    await apiClient.board.$post({ body: { x, y } });
    await fetchBorad();
  };
  useEffect(() => {
    const cancelId = setInterval(fetchBorad, 500);
    return () => {
      clearInterval(cancelId);
    };
  }, []);
  if (!board || !user || !yourColor || !turn) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <div
          style={{
            color: yourColor === 1 ? '#000' : '#fff',
            backgroundColor: 'green',
            fontSize: 30,
          }}
        >
          {`${colors[yourColor]}-${turns[turn]}`}
        </div>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <Cell key={`${x}-${y}`} color={color} onClick={() => onClick(x, y)} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
