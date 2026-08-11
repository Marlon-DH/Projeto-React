import Botao from "../components/Botao";

function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-amber-50">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-5xl font-bold text-[#663399]">Hello World!!!</h1>
        <p className="mt-3 text-cyan-600">
          Bem vindo ao meu React com TailWind CSS!!!
        </p>
        <div className="mt-5 flex justify-center gap-45">
          <Botao
            texto="Usar"
            cor="bg-emerald-700"
            hover="hover:bg-emerald-400"
          ></Botao>
          <Botao
            texto="Cancelar"
            cor="bg-emerald-700"
            hover="hover:bg-emerald-400"
          ></Botao>
        </div>
      </div>
    </main>
    )
  
}

export default Home;
