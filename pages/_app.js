import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('i m app.js') // jb bhi koi page hit hoga tb yeh chlega
  return <Component {...pageProps} />
}

export default MyApp
