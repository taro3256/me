import type { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react'
import { AiFillTwitterSquare, AiFillInstagram, AiOutlineEnvironment } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

const tabs = [
    {
        text: '仕事一覧',
        id: 'tab_works',
    },
    {
        text: '趣味',
        id: 'tab_hobbies',
    },
    {
        text: 'イベント',
        id: 'tab_events',
    },
];

const Oshigoto: NextPage = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].id);
    const tabs_html = tabs.map((tab, index) => {
        return (
            <div key={ index } className={ selectedTab==tab.id ? 'tab selected_tab' : 'tab' } id={ tab.id } onClick={ () => setSelectedTab(tab.id) }>
                { tab.text }
                <style jsx>{`
                    .tab {
                        flex-grow: 1;
                        cursor: pointer;
                        text-align: center;
                    }
                    .tab:hover {
                        background: #444444;
                    }
                    .selected_tab {
                        border-bottom: solid 3px #44FFFF;
                    }
                `}</style>
            </div>
        )
    });

    return (
      <>
        <Head>
          <title>おしごと</title>
          <meta name="google-site-verification" content="FzxFzCFymJkcbBfAhEFwGzvhPkTpqD26WOSfHNZtW88" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@talo_cof" />
          <meta name="twitter:domain" content="shacre.net" />
          <meta name="twitter:title" content="おしごと" />
          <meta name="twitter:description" content="太朗のおしごと一覧です。" />
          <meta name="twitter:image" content="" />
        </Head>
        <div className='wrapper'>
            <div className='contents'>
                <div className='wrapper_content_title'>
                    <div className='content_title'>
                        OSHIGOTO（作成中）
                    </div>
                </div>
                <div className='wrapper_content_header_img'>
                    <img src="/imgs/prof_header_img.png" alt="ヘッダー画像" className='content_header_img'/>
                </div>
                <div>
                    <div className='content_icon'>
                        <img src="/imgs/prof_icon.png" alt="アイコン画像" className='content_icon_img'/>
                    </div>
                    <div className='content_sns_icons'>
                        <a href="https://twitter.com/talo_cof" className='sns_icon sns_icon_twitter' target='_blank'>
                            <AiFillTwitterSquare />
                        </a>
                        <a href="https://www.instagram.com/taroring56/" className='sns_icon sns_icon_instagram' target='_blank'>
                            <AiFillInstagram />
                        </a>
                    </div>
                </div>
                <div className='content_profile'>
                    <div className='profile_body'>
                        <div className='profile_name'>
                            中谷 太朗
                        </div>
                        <div className='profile_bio'>
                            神奈川県小田原市でWebのエンジニアをやっています。<br />
                            その他、広告運用、ボードゲームイベント開催、カフェ店員等いろんなことやっています。<br />
                        </div>
                    </div>
                    <div className='profile_footer'>
                        <div className='profile_location'>
                            <AiOutlineEnvironment />神奈川県 小田原市
                        </div>
                    </div>
                </div>
                <div className='content_tabs'>
                    { tabs_html }
                </div>
                {
                    selectedTab == 'tab_works'
                    &&
                    <div className='tab_contents'>
                        <div className='tab_content'>
                            <div className='tab_content_title'>Webサイト・アプリケーション開発</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    Webサイト・アプリケーションの相談・構築（サーバー、言語選定、コーディング）ができます。<br />
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="/imgs/work_webdev.jpg" alt="Webサイト・アプリケーション開発" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>自動化ツール作成</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    Web操作や、事務作業の自動化（RPA）の相談・コーディングができます。
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="/imgs/work_rpa.jpg" alt="自動化ツール作成" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>Webマーケティング・広告運用</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    アナリティクス分析や、SEOや広告運用などのWebマーケティングの基本的な相談や、リスティング広告やディスプレイ広告の運用代行も可能です。<br />
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="/imgs/work_marketing.jpg" alt="Webマーケティング・広告運用" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>ボードゲーム企画・イベント運営</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    ボードゲームを用いた知育、懇親会、コミュニティ構築等様々な目的に沿ったイベントの企画・運営ができます。
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="/imgs/work_bg.png" alt="ボードゲーム企画・イベント運営" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>飲食提供</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    スペシャルティコーヒー・イタリアン等のフードを提供できます。<br />
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="/imgs/work_coffee.jpg" alt="飲食提供" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    selectedTab == 'tab_hobbies'
                    &&
                    <div className='tab_contents'>
                        <div className='tab_content'>
                            <div className='tab_content_title'>珈琲</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    珈琲よく飲むよ！
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>ワイン</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    ワインよく飲むよ！
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>コース料理</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    コース料理よくいくよ！
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>ボードゲーム</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    ボードゲームよくやるよ！
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>カラオケ</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    カラオケよくいくよ！
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>旅行</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    旅行好きだよ！
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>ピアノ</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    教室通ってるよ！
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    selectedTab == 'tab_events'
                    &&
                    <div className='tab_contents'>
                        <div className='tab_content'>
                            <div className='tab_content_title'>小田急親子ワーケーション with ボードゲーム</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    企画内容
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>湘南ベルマーレホームゲーム ボドゲ体験会出店</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    企画内容
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>英会話ボードゲーム会</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    企画内容
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>eemoカーシェア0期アンバサダー</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    内容
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tab_content'>
                            <div className='tab_content_title'>ボードゲームカフェ SHA:CREオープン</div>
                            <div className='tab_content_body'>
                                <div className='tab_content_body_text'>
                                    内容
                                </div>
                                <div className='tab_content_body_img'>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>

        <style jsx>{`
            .wrapper {
                display: flex;
                justify-content: space-around;
                background: #333333;
                color: #FFFFFF
            }
            .contents {
                max-width: 600px;
                width: 100%;
                border-right: solid 1px #888888;
                border-left: solid 1px #888888;
            }
            .wrapper_content_title {
                position: sticky;
                top: 0px;
                z-index: 2;
                overflow: hidden;
            }
            .wrapper_content_title:before{
                content: '';
                background: rgba(51,51,51,0.9);
                -webkit-filter: blur(5px);
                -moz-filter: blur(5px);
                -o-filter: blur(5px);
                -ms-filter: blur(5px);
                filter: blur(5px);
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                z-index: -1;
            }
            .content_title {
                height: 56px;
                padding: 8px 0 0 40px;
                font-size: 24px;
            }
            .wrapper_content_header_img {
                height: 160px;
            }
            .content_header_img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .content_icon {
                position: relative;
                width: 100%;
	            height: 100%;
                max-width: 120px;
	            max-height: 120px;
                border-radius: 50%;
                border: solid 3px #333333;
                margin: -60px 20px 0;
                z-index: 1;
            }
            .content_icon_img {
                width: 100%;
                border-radius: 50%;
                object-fit: cover;
            }
            .content_sns_icons {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                margin-top: -60px;
                padding-right: 16px;
            }
            .sns_icon {
                font-size: 40px;
                color: #ffffff;
            }
            .content_profile {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 300px;
                margin: -60px 0px 0px;
                padding: 80px 16px 0px 16px;
            }
            .profile_name {
                font-size: 20px;
                margin-bottom: 16px;
            }
            .profile_bio {

            }
            .profile_footer {
                font-size: 12px;
                margin-bottom: 16px;
                color: #aaaaaa;
            }
            .content_tabs {
                display: flex;
                justify-content: space-around;
                height: 32px;
                border-bottom: solid 1px #888888;
            }
            .tab_content {
                border-bottom: solid 1px #888888;
                padding: 8px 16px;
            }
            .tab_content_body {
                font-size: 12px;
            }
            .tab_content_body_text {
                padding: 8px 0;
            }
            .tab_content_body_img {
                max-width: 300px;
                max-height: 300px;
            }
            .tab_content_body_img > img {
                width: 100%;
                height: 100%;
                border-radius: 5%;
                object-fit: cover;
            }
        `}</style>
      </>
    )
  }
  
  export default Oshigoto