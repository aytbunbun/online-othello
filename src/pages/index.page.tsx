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
  const turnColor = 1;
  const colors: string[] = ['', '黒のターン', '白のターン'];
  const [user] = useAtom(userAtom);
  const [board, setBoard] = useState<number[][]>();
  const fetchBorad = async () => {
    const res = await apiClient.board.$get().catch(returnNull);
    if (res !== null) {
      setBoard(res);
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
  if (!board || !user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <div
          style={{
            color: turnColor === 1 ? '#000' : '#fff',
            backgroundColor: 'green',
            fontSize: 60,
          }}
        >
          {colors[turnColor]}
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
