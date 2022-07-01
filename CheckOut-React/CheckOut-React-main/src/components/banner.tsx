import { CSSProperties, FC } from 'react'
import { colors } from '../data/colors'
import { fontFamily } from "../css/common"

const Banner: FC = () => {
    return (
    <>
    <div className='visibility'>
        <div style={{...bannerStyle, ...fontFamily}}>
            <p style={bannerItem}>Fri frakt på beställningar över 500kr</p>
            <p style={bannerItem}>Snabb leverans 2-3 vardagar </p>
            <p style={bannerItem}>Fri retur 90 dagar</p>
        </div>
    </div>
    </>
    );
}

const bannerStyle: CSSProperties = {
    height: '30px',
    display: 'flex',
    justifyContent: "space-around",
    background: colors.primary,
    color: colors.third,
    width: '100&',
    boxSizing: "border-box",
    margin: "0",
    padding: "0"

}

const bannerItem: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontSize: "12px",
    fontWeight: "bold"
}


export default Banner