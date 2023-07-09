import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

import state from '../store'
import { CustomButton } from '../components'

const Home = () => {
    const snap = useSnapshot(state)

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.div className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img
                            src="./dragon.png"
                            alt="logo"
                            className="w-20 h-20 object-contain"
                        />
                    </motion.header>

                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LET&apos;S <br className="xl:block hidden" /> DO
                                IT.
                            </h1>
                        </motion.div>
                        <motion.div
                            className="flex flex-col gap-5"
                            {...headContainerAnimation}
                        >
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Crea tu camiseta única y exclusiva con nuestra
                                nueva herramienta de personalización en 3D.{' '}
                                <strong>
                                    Da rienda suelta a tu imaginación
                                </strong>{' '}
                                y define tu propio estilo.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Personalízalo"
                                handleClick={() => (state.intro = false)}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Home
