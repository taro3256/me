// import type { NextPage } from 'next'
// import Head from 'next/head';
// import { useState, useRef } from 'react'
// import { CgSearch } from "react-icons/cg"

// const BodoSearch: NextPage = () => {
//     const [showWindow, setShowWindow] = useState('')
//     const search_text = useRef(null)

//     const search = (event: any) => {
//         event.preventDefault()
//         setShowWindow(search_text.current.value ? search_text.current.value : '')
//     }

//     return (
//       <>
//         <Head>
//           <title>ボドサーチ</title>
//           <meta name="google-site-verification" content="FzxFzCFymJkcbBfAhEFwGzvhPkTpqD26WOSfHNZtW88" />
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:site" content="@talo_cof" />
//           <meta name="twitter:domain" content="shacre.net" />
//           <meta name="twitter:title" content="ボドサーチ" />
//           <meta name="twitter:description" content="ボードゲームを複数のショップで一括検索できるページです。" />
//           <meta name="twitter:image" content="" />
//         </Head>

//         <div className="wrapper">
//             <div className="search">
//                 <div className="search_title">
//                     ボドサーチ
//                 </div>
//                 <div className="search_description">
//                     ボードゲームを複数のショップで一括検索できるページです。
//                 </div><br />
//                 <form className='search_bar' onSubmit={search}>
//                     <CgSearch />
//                     <input
//                         className="search_bar_input"
//                         placeholder="Search"
//                         ref={ search_text }
//                     />
//                 </form>
//             </div>
//             <div className='contents'>
//                 {
//                     showWindow &&
//                     <div>
//                         test
//                     </div>
//                 }
//             </div>
//         </div>

//         <style jsx>{`
//             .wrapper {
//                 padding: 5%;
//             }
//             .search {
//                 display: flex;
//                 justify-content: center;
//                 flex-direction: column;
//                 padding: 5% 25%;
//             }
//             .search_title {
//                 font-size: 32px;
//                 text-align: center;
//             }
//             .search_bar {
//                 display: flex;
//                 padding: 10px;
//                 border: 1px solid lightgray;
//                 border-radius: 999px;
//                 background-color: #f0f2f5;
//                 width: 100%;
//             }
//             .search_bar > input {
//                 border: none !important;
//                 background-color: #f0f2f5;
//             }
//             .search_bar > input:focus {
//                 outline-width: 0;
//             }
//             .contents {
//                 display: flex;
//                 flex-wrap: wrap;
//             }
//             @media screen and (max-width:480px) {
//                 .search {
//                 display: flex;
//                 justify-content: center;
//                 flex-direction: column;
//                 padding: 5%;
//             }
//             }
//         `}</style>
//       </>
//     )
//   }
  
//   export default BodoSearch