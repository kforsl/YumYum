
import { useState } from 'react';
import Button from './../components/Button';

function EtaPage() {

    const [isDone, setIsDone] = useState(true)

    return (
        isDone ?
            <main className="bg-mint-dark min-h-svh text-white font-fira">
                <header className="p-4">
                    <img src="../src/assets/logo.svg" alt="" />
                </header>
                <section>
                    <img src="../src/assets/boxtop.png" alt="" />
                    <h1 className="text-3xl px-20 text-center mb-14 font-bold"> DINA WONTONS ÄR KLARA! </h1>
                    <p className="text-center ">
                        #4kjwsdf234k
                    </p>
                </section>
                <footer className='fixed top-auto bottom-0 p-4 flex flex-col gap-4 w-full'>
                    <Button text={'BESTÄLL MER'} fill={true} />
                    <Button text={'SE KVITTO'} fill={false} />
                </footer>
            </main>
            :
            <main className="bg-gray min-h-svh text-white font-fira">
                <header className="p-4">
                    <img src="../src/assets/logo.svg" alt="" />
                </header>
                <section>
                    <img src="../src/assets/boxtop.png" alt="" />
                    <h1 className="text-3xl px-12 text-center mb-4"> DINA WONTONS TILLAGAS! </h1>
                    <h2 className="text-2xl text-center font-medium pb-2">
                        ETA 5 MIN
                    </h2>
                    <p className="text-center ">
                        #4kjwsdf234k
                    </p>
                </section>
                <footer className='fixed top-auto bottom-0 p-4 flex flex-col gap-4 w-full'>
                    <Button text={'BESTÄLL MER'} fill={true} />
                    <Button text={'SE KVITTO'} fill={false} />
                </footer>
            </main>
    )
}

export default EtaPage