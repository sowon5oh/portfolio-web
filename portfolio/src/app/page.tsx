'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black pixel-dots py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <pre className="text-[0.7rem] md:text-[1rem] lg:text-[1.2rem] leading-[0.8] md:leading-[1] lg:leading-[1.1] font-mono text-[#00e3b2] whitespace-pre">
{` 
 _____                                  _____  _     
/  ___|                                |  _  || |    
\\ \`--.   ___  __      __  ___   _ __   | | | || |__  
 \`--. \\ / _ \\ \\ \\ /\\ / / / _ \\ | '_ \\  | | | || '_ \\ 
/\\__/ /| (_) | \\ V  V / | (_) || | | | \\ \\_/ /| | | |
\\____/  \\___/   \\_/\\_/   \\___/ |_| |_|  \\___/ |_| |_|
`}
            </pre>
            <pre className="text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] leading-[0.7] md:leading-[0.9] lg:leading-[1.1] font-mono text-white whitespace-pre">
{`
 _____ ___ ____  __  ____    ___    ____  _____ 
|  ___|_ _|  _ \\|  \\/  \\ \\  / / \\  |  _ \\| ____|
| |_   | || |_) | |\\/| |\\ \\/ / _ \\ | |_) |  _|  
|  _|  | ||  _ <| |  | | >  < ___ \\|  _ <| |___ 
|_|   |___|_| \\_\\_|  |_|/_/\\_\\_____|_| \\_\\_____|
                                                
 _____ _   _  ____ ___ _   _ _____ _____ ____  
| ____| \\ | |/ ___|_ _| \\ | | ____| ____|  _ \\ 
|  _| |  \\| | |  _ | ||  \\| |  _| |  _| | |_) |
| |___| |\\  | |_| || || |\\  | |___| |___|  _ < 
|_____|_| \\_|\\____|___|_| \\_|_____|_____|_| \\_\\
`}
            </pre>
            <pre className="text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.7rem] leading-[0.5] sm:leading-[0.6] md:leading-[0.7] lg:leading-[0.8] font-mono text-white whitespace-pre mx-auto max-w-full">
{`
  
 ____________________________________________________
T ================================================= |T
| ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|[L
| __________________________________________________[|
|I __==___________  ___________     .  ,. _ .   __  T|
||[_j  L_I_I_I_I_j  L_I_I_I_I_j    /|/V||(g/|   ==  l|
lI _______________________________  _____  _________I]
|[__I_I_I_I_I_I_I_I_I_I_I_I_I_I_] [__I__] [_I_I_I_]|
|[___I_I_I_I_I_I_I_I_I_I_I_I_L  I   ___   [_I_I_I_]|
|[__I_I_I_I_I_I_I_I_I_I_I_I_I_L_I __I_]_  [_I_I_T ||
|[___I_I_I_I_I_I_I_I_I_I_I_I____] [_I_I_] [___I_I_j|
| [__I__I_________________I__L_]                   |
|                                                  |
 l__________________________________________________j 

`}
            </pre>
          </div>
          
        </motion.div>
      </div>
    </div>
  )
}

