import type { ReactNode } from "preact/compat"
import { useState } from "preact/hooks"

export const GlitchContainer = ({children}:{children:ReactNode})=>{
    const [hover,onHover] = useState(false)
    return <div class={`${hover ? 'glitch layers' : ''}`} onMouseEnter={()=>{onHover(true)}} onMouseLeave={()=>{onHover(false)}}>
        {children}
    </div>
}