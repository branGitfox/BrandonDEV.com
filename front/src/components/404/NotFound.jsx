import React from 'react'
import { Link } from 'react-router-dom'
const styles={
  title:{
    color:'red'
  },
  p:{
    color:'orange'
  },

  img:{
    width:'400px',
    height:'400px'
  },
  div:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:'10px',
    textAlign:'left',
    margin:'auto'
    
  }
}
function NotFound() {
  return (
    <div style={styles.div}>
        <h1 style={styles.title}>404 Not Found</h1>
        <p style={styles.p}>*la page que vous essayer d'acceder n'existe pas </p>
        <p style={styles.p}>*The page which you're trying to access doesn't exist </p>
        <p style={styles.p}>*Tsy miexista ilay pejy tiano ho jerena</p>
        <img src="" alt="" />
        <Link to={'/'}>Return to a valid page</Link>
    </div>
  )
}

export default NotFound