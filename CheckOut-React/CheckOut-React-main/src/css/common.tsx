import { CSSProperties } from "react";
import { colors } from "../data/colors"


export const fontFamily: CSSProperties = {
    fontFamily: "Aktiv Grotesk Extended,sans-serif"
}

export const fontLogo: CSSProperties = {
  fontFamily: "Poppins, sans-serif"
}

export const floatcontainer: CSSProperties = {
  display: "flex",
  marginBottom: "30px",
}

export const floatDiv: CSSProperties = {
  display: "flex",
  marginBottom: "30px",
  width: "60%",
  marginLeft: "auto",
  marginRight: "auto",
  justifyContent: "flex-start"
}


export const textStyle: CSSProperties = {
  fontSize: "12px",
  lineHeight: "1.5",
  color: colors.third
}

export const styleBtn: CSSProperties = {
    backgroundColor: colors.third, 
    color: colors.secondary,
    fontSize: "12px",
    display: "flex"
}


export const imgContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "3em",
    paddingTop: "1em",
    paddingBottom: "3em"
  }


  export const imgCategory: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1em",
    paddingBottom: "3em"
  }

  export const styleHeader: CSSProperties = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "flex-start", 
    fontSize: "18px",
    color: colors.third
}

export const smallImageStyle: CSSProperties = {
  padding: "10px", 
  maxWidth: "50px"
}