import { motion } from "framer-motion";


function Landing(onFinish) {
  return (
    <div className="landing">
      <img src="/logo3.png" alt="Logo Casa Perelos" className="logo3" />

      <motion.h1 className="title">
        {"Bienvenido a Casa Perelos".split("").map((char, index) => (
          <motion.span
            key={index}
            className="title-char"
            style={{ "--char-index": index }} // variable para el delay en SCSS
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p className="subtitle">
        Tu alojamiento rural en el corazón de Galicia
      </motion.p>

      <button onClick={onFinish}>Entrar</button>
    </div>
  );
}
export default Landing;