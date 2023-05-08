import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IoIosArrowBack } from 'react-icons/io';

function App() {
  const [isLose, setIsLose] = useState(false);

  const canvasRef = useRef(null);

  const snake = {
    width: 50,
    height: 50,
    headN: 5,
    headM: 3,
    direction: "right",
    long: 1,
  };

  let map = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 38 && !(snake.direction === "down")) {
        snake.direction = "up";
      } else if (event.keyCode === 40 && !(snake.direction === "up")) {
        snake.direction = "down";
      } else if (event.keyCode === 39 && !(snake.direction === "left")) {
        snake.direction = "right";
      } else if (event.keyCode === 37 && !(snake.direction === "right")) {
        snake.direction = "left";
      }
    });
  }

  let lose = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    let yemN,
      yemM,
      yem = 0;

    //? YEMI OLUSTURMA
    do {
      yemN = Math.floor(Math.random() * 10);
      yemM = Math.floor(Math.random() * 10);
    } while (map[yemN][yemM] !== -1);

    map[yemN][yemM] = 0;
    map[snake.headN][snake.headM] = 1;

    //? HARITAYI YAZDIRMA
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (map[i][j] === 0) {
          c.fillStyle = "green";
          c.fillRect(
            j * snake.width,
            i * snake.height,
            snake.width,
            snake.height
          );
        }
        if (map[i][j] > 0) {
          c.fillStyle = "blue";
          c.fillRect(
            j * snake.width,
            i * snake.height,
            snake.width,
            snake.height
          );
        }
        if (map[i][j] === 1) {
          c.fillStyle = "#144272";
          c.fillRect(
            j * snake.width,
            i * snake.height,
            snake.width,
            snake.height
          );
        }
      }
    }

    const interval = setInterval(() => {
      switch (snake.direction) {
        //? SAGA GİTME
        case "right":
          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              if (map[i][j] > 0) {
                map[i][j] += 1;
              }
              if (map[i][j] > snake.long) {
                map[i][j] = -1;
              }
            }
          }
          if (snake.headM + 1 > 9) {
            lose = true;
          }
          if (map[snake.headN][snake.headM + 1] === 0) {
            yem = 1;
          }
          if (map[snake.headN][snake.headM + 1] > 0) {
            lose = true;
          }
          map[snake.headN][snake.headM + 1] = 1;
          snake.headM += 1;
          break;

        //? YUKARI GİTME
        case "up":
          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              if (map[i][j] > 0) {
                map[i][j] += 1;
              }
              if (map[i][j] > snake.long) {
                map[i][j] = -1;
              }
            }
          }
          if (snake.headN === 0) {
            lose = true;
          } else if (map[snake.headN - 1][snake.headM] === 0) {
            yem = 1;
          } else if (map[snake.headN - 1][snake.headM] > 0) {
            lose = true;
          }

          if (!lose) {
            map[snake.headN - 1][snake.headM] = 1;
            snake.headN -= 1;
          }
          break;

        //? ASAGI GİTME
        case "down":
          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              if (map[i][j] > 0) {
                map[i][j] += 1;
              }
              if (map[i][j] > snake.long) {
                map[i][j] = -1;
              }
            }
          }
          if (snake.headN + 1 > 9) {
            lose = true;
          } else if (map[snake.headN + 1][snake.headM] === 0) {
            yem = 1;
          } else if (map[snake.headN + 1][snake.headM] > 0) {
            lose = true;
          }
          if (!lose) {
            map[snake.headN + 1][snake.headM] = 1;
            snake.headN += 1;
          }
          break;

        //? SOLA GİTME
        case "left":
          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              if (map[i][j] > 0) {
                map[i][j] += 1;
              }
              if (map[i][j] > snake.long) {
                map[i][j] = -1;
              }
            }
          }
          if (snake.headM - 1 < 0) {
            lose = true;
          }
          if (map[snake.headN][snake.headM - 1] === 0) {
            yem = 1;
          }
          if (map[snake.headN][snake.headM - 1] > 0) {
            lose = true;
          }
          map[snake.headN][snake.headM - 1] = 1;
          snake.headM -= 1;
          break;

        default:
          break;
      }

      //? DUVARA VEYA KUYRUGA CARPMA
      if (lose) {
        snake.direction = "none";
        setIsLose(true);
      }

      c.clearRect(0, 0, canvas.width, canvas.height);
      //? HARITAYI YAZDIRMA
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (map[i][j] === 0) {
            c.fillStyle = "green";
            c.fillRect(
              j * snake.width,
              i * snake.height,
              snake.width,
              snake.height
            );
          }
          if (map[i][j] > 0) {
            c.fillStyle = "blue";
            c.fillRect(
              j * snake.width,
              i * snake.height,
              snake.width,
              snake.height
            );
          }
          if (map[i][j] === 1) {
            c.fillStyle = "#144272";
            c.fillRect(
              j * snake.width,
              i * snake.height,
              snake.width,
              snake.height
            );
          }
        }
      }

      //? YEM YENIRSE
      if (yem) {
        snake.long += 1;
        yemN = Math.floor(Math.random() * 10);
        yemM = Math.floor(Math.random() * 10);
        while (map[yemN][yemM] !== -1) {
          yemN = Math.floor(Math.random() * 10);
          yemM = Math.floor(Math.random() * 10);
        }
        map[yemN][yemM] = 0;
      }
      yem = 0;
    }, 250);
    //! DÜZELTMEYİ UNUTMA
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col justify-around items-center h-screen overflow-hidden">
        <Link href="/games" className=" absolute top-5 left-5 z-20 text-5xl">
            <IoIosArrowBack/>
        </Link>
      <canvas
        className=" border-4 border-sky-400 h-[500px] w-[500px] scale-[0.6] sm:scale-75 md:scale-100 flex-none"
        ref={canvasRef}
      ></canvas>

      <div className=" absolute bg-emerald-700/20 w-32 h-32 rounded-full flex flex-col justify-between p-2">
        <div className=" w-full flex justify-center">
          <div className=" rotate-90 w-10 h-10 flex justify-center items-center" onClick={()=> snake.direction = "up"}>
            <IoIosArrowBack/>
          </div>
        </div>
        <div className=" w-full flex justify-between ">
          <div className="  w-10 h-10 flex justify-center items-center" onClick={()=> snake.direction = "left"}>
            <IoIosArrowBack/>
          </div>
          <div className=" rotate-180  w-10 h-10 flex justify-center items-center" onClick={()=> snake.direction = "right"}>
            <IoIosArrowBack/>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <div className=" -rotate-90  w-10 h-10 flex justify-center items-center" onClick={()=> snake.direction = "down"}>
            <IoIosArrowBack/>
          </div>
        </div>
      </div>

      {isLose === true && (
        <div className=" absolute top-0 left-0 flex flex-col justify-center items-center gap-3 w-screen h-screen bg-slate-600 z-10">
          <p className=" text-4xl bg-fuchsia-300 rounded-3xl p-10">Lose</p>
          <button
            className=" px-8 bg-fuchsia-900 py-3 rounded-lg text-white"
            onClick={()=> window.location.replace("https://asmeydan.com/games/snake-game")}
          >
            restart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
