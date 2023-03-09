import { FC, PropsWithChildren } from "react"

export const LightLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: '10px',
        borderRadius: '5px'
    }}>
        <h3>Light Layout</h3>
        <div>
            { children }
        </div>

    </div>
  )
}
