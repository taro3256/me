import type { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react'
import { CgCoffee, CgDice6 } from "react-icons/cg"
import { CSSTransition } from "react-transition-group";

const Shacre: NextPage = () => {
  const [tab, setTab] = useState('')

  const tabChange = (e: any) => {
    setTab(() => e.target.value)
  }

  return (
    <>
      <Head>
        <title>シャ：クレ</title>
        <meta name="google-site-verification" content="FzxFzCFymJkcbBfAhEFwGzvhPkTpqD26WOSfHNZtW88" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sha_cre_cafe" />
        <meta name="twitter:domain" content="shacre.net" />
        <meta name="twitter:title" content="シャ：クレ - 公式ページ" />
        <meta name="twitter:description" content="「シャ：クレ」はお客様がコーヒーを飲みに来て、お店で初めて会った人と気軽にボードゲームで遊んでいく。そんな雰囲気を目指しております。もちろん、ご家族やカップル、学校の同級生等でのご来店も大歓迎です。まずはコーヒーだけでもいかがでしょうか？" />
        <meta name="twitter:image" content="/imgs/ogp.png" />
      </Head>
      <div className='wrapper'>
        <div className='title'>
          <img className='logo' src='/imgs/logo.png' alt='SHA:CRE（シャ：クレ）' width='250' height='60'/>
        </div>

        <div className='introduction'>
          「シャ：クレ」はお客様がコーヒーを飲みに来て、お店で初めて会った人と気軽にボードゲームで遊んでいく。
          そんな雰囲気を目指しております。
          もちろん、ご家族やカップル、学校の同級生等でのご来店も大歓迎です。
          まずはコーヒーだけでもいかがでしょうか？
        </div>

        <div className='tabs'>
          <input type='radio' id='tab-cafe' className='tab_cafe' name='tab' value='cafe' onChange={tabChange}/>
          <label htmlFor="tab-cafe" className='tab_label'>
            <div className='tab_icon'>
              <CgCoffee/>
            </div>
            <div className='tab_text'>カフェ</div>
          </label>
          <input type='radio' id='tab-boardgame' className='tab_boardgame' name='tab' value='boardgame' onChange={tabChange}/>
          <label htmlFor="tab-boardgame" className='tab_label'>
            <div className='tab_icon'>
              <CgDice6/>
            </div>
            <div className='tab_text'>ボードゲーム</div>
          </label>

          {/* カフェのコンテンツ */}
          <CSSTransition
            classNames="contents"
            in={tab === 'cafe'}
            timeout={700}
            unmountOnExit
          >
            <div className='contents' id='cafe-content'>
              <div className='contents_title'>メニュー</div>
                <div className='menu_list'>
                  <dl className='menu'>
                    FOODS
                    <div>
                      <dt>月替わり生パスタ</dt>
                      <dd>&yen;900</dd>
                    </div>
                    <div>
                      <dt>バニラアイス</dt>
                      <dd>&yen;200</dd>
                    </div>
                    <div>
                      <dt>コーヒーゼリー</dt>
                      <dd>&yen;200</dd>
                    </div>
                    <div>
                      <dt>トッピング（黒蜜きなこ）</dt>
                      <dd>&yen;100</dd>
                    </div>
                    <div>
                      <dt>トッピング（あんこ）</dt>
                      <dd>&yen;200</dd>
                    </div>
                  </dl>
                  <dl className='menu'>
                    DRINKS
                    <div>
                      <dt>ドリップコーヒー（フルーティ）</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>ドリップコーヒー（バランス）</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>ドリップコーヒー（ビター）</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>フレーバーティー（Hot）</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>紅茶（Hot）</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>普通のアイスコーヒー</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>普通のアイスティー</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>ウーロン茶</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>カルピス</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>カルピスソーダ</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>コーヒーソーダ</dt>
                      <dd>&yen;400</dd>
                    </div>
                  </dl>
                </div>
                ※値段は全て税込価格です。<br />
            </div>
          </CSSTransition>

          {/* ボードゲームのコンテンツ */}
          <CSSTransition
            classNames="contents"
            in={tab === 'boardgame'}
            timeout={700}
            unmountOnExit
          >
            <div className='contents' id='boardgame-content'>
              {/* 利用状況 */}
              <div>
                <div className='contents_title'>利用状況</div>
                <div className='seat_status'>
                  <div className='card'>
                    <div className='card_title'>空席</div>
                    <div className='card_contents'>準備中</div>
                  </div>
                  <div className='card'>
                    <div className='card_title'>利用中</div>
                    <div className='card_contents'>準備中</div>
                  </div>
                  <div className='card'>
                    <div className='card_title'>相席中</div>
                    <div className='card_contents'>準備中</div>
                  </div>
                </div>
                <div>
                  リアルタイム更新ではありません！（できるだけ頑張ります！）<br />
                  LINEやInstagramで連絡していただければ、正確な席状況をお伝えできます。<br />
                  また、席数が少ないので、ご来店前にLINEやInstagram等で予約していただけると確実です。<br />
                </div>
                <div>
                  LINEもSNSも利用していないという方はこちらからご予約ください（7日前から予約可能）<br />
                  <a href="https://select-type.com/rsv/?id=WTH-IygCuFs&c_id=239085" target="_blank" style="display:inline-block; padding:11px 50px; line-height:1.4; border-radius:4px; background-color:#0073d9; font-family:Meiryo,'Hiragino Kaku Gothic Pro','MS PGothic'; font-size:16px; text-align:center; color:#ffffff; text-decoration:none;">予約する</a>
                </div>
                <div>
                  相席の参加・募集は以下のLINEオープンチャットにて行えます！<br />
                  <br />
                  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓<br />
                  <br />
                  <img className="open_chat_qr" src="/imgs/open_chat.JPG" alt="LINE OPENチャット QRコード" /><br />
                  <br />
                  オープンチャット「【シャ：クレ】ボドゲ相席・イベント募集用」<br />
                  <a className="link" href="https://line.me/ti/g2/Pj3Tb6VoO_JH3di0Z6H-z9FES1OwFSM0eZ6aMA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">https://line.me/ti/g2/Pj3Tb6VoO_JH3di0Z6H-z9FES1OwFSM0eZ6aMA</a>
                </div>
              </div>

              {/* 料金 */}
              <div>
                <div className='contents_title'>料金</div>
                <div className='use_pricing_table'>
                  <div className='card'>
                    <div className='card_title'>基本</div>
                    <div className='card_contents'>
                      場所代　: ¥300<br />
                      １０分毎: ¥100
                    </div>
                    <div className='card_sub'>
                      
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card_title'>パック(1人)</div>
                    <div className='card_contents'>
                      ３時間まで: ¥1,200<br />
                      12時間まで: ¥2,500<br />
                    </div>
                    <div className='card_sub'>
                      ※自動で適用されます。
                    </div>
                  </div>
                </div>
                <div>
                  ※LINE会員の方は場所代0円<br />
                  ※カフェで1000円以上利用で30分無料追加<br />
                  ※フリードリンク料金込み<br />
                </div>
              </div>

              {/* 取り扱いボードゲーム一覧 */}
              <div>
                <div className='contents_title'>取り扱いボードゲーム一覧</div>
                <div className='board_game_list_wrapper'>
                  <iframe className='board_game_list' src="https://bodoge.hoobby.net/spaces/sha_cre_cafe/embedded/games?q[order_type]=created_desc&image_size=normal&font_size=normal&icon_recommend=show&icon_new=show&name_en=show&myboardgame=show&staff_text=show&user_id=54976">
                  </iframe>
                  <a href="https://bodoge.hoobby.net/spaces/sha_cre_cafe/games" target="_blank">ボドゲーマで見る</a>
                </div>
                  <div>
                  ※ボードゲームは毎回頑張って運んでいるので、希望のゲーム等あれば予約時にお伝えください！<br />
                </div>
              </div>

              {/* レーティング */}
              <div>
                <div className='contents_title'>レーティング</div>
                <br />
                coming soon...
              </div>
            </div>
          </CSSTransition>
        </div>

        <div className='footer'>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.295127607355!2d139.17670011524777!3d35.27378788029131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a5085dba5525%3A0xeb1bee4a8c4057cf!2z6aKo6Iqx!5e0!3m2!1sja!2sjp!4v1651862497161!5m2!1sja!2sjp" width="500" height="450"loading="lazy"></iframe>
          </div>
          <div className='shop_info'>
            <div className='shop_info_block'>
              <div className='shop_info_title'>所在地</div>
              <div className='shop_info_contents'>
                <div className='left_text'>
                  神奈川県 小田原市 南鴨宮3-9-17<br />
                  「風花」を間借りして営業しています。<br />
                  駐車場2台まで。
                </div>
              </div>
            </div>

            <div className='shop_info_block'>
              <div className='shop_info_title'>駐車場</div>
              <div className='shop_info_contents'>
                <a href="/imgs/parking.png">
                  <img className='parking' src='/imgs/parking.png' alt='駐車場' width='100%'/>
                </a>
              </div>
            </div>

            <div className='shop_info_block'>
              <div className='shop_info_title'>営業時間</div>
              <div className='shop_info_contents'>
                <div className='left_text'>
                  カフェ　　　：11:00~21:00（L.O. 20:00）<br />
                  ボードゲーム：11:00~22:00
                </div>
              </div>
            </div>

            <div className='shop_info_block'>
              <div className='shop_info_title'>SNS・LINE</div>
              <div className='shop_info_contents'>
                <div className='left_text'>
                  【Twitter】<br />
                  <a className='link' href="https://twitter.com/sha_cre_cafe">https://twitter.com/sha_cre_cafe</a><br />
                  【Instagram】<br />
                  <a className='link' href="https://www.instagram.com/sha_cre_cafe/">https://www.instagram.com/sha_cre_cafe/</a><br />
                  【LINE】<br />
                  <a className='link' href="https://lin.ee/ejQph0V">https://lin.ee/ejQph0V</a><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          height: 100%;
          text-align: center;
          background-color: #666;
          color: #fff;
        }
        .logo {
          margin: 30px 0;
        }
        .title {
          padding: 20px 0;
        }
        .introduction {
          max-width: 500px;
          margin: 0 auto;
          text-align: left;
        }
        .tabs {
          min-height: 320px;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 2%;
        }
        /* タブのスタイル */
        .tab_label {
          width: calc(80%/2);
          margin: 5%;
          padding: 2%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          float: left;
          text-align: center;
          transition: all 0.2s ease;
        }
        .tab_label:hover {
          opacity: 0.75;
          background-color: #bbb;
          cursor: pointer;
        }
        .tabs input:checked + .tab_label {
          background-color: #E6B8AF;
          color: #000;
          box-shadow: 0 2px #000;
        }
        input[name="tab"] {
          display: none;
        }
        .contents-enter {
          opacity: 0;
          transform: scale(0.9);
        }
        .contents-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.5s, transform 0.5s;
        }
        .contents-exit {
          display: none;
        }
        /* 選択されているタブのスタイルを変える */
        .tabs input:checked + .tab_item {
          background-color: #E6B8AF;
        }
        .tab_icon {
          font-size: 80px;
        }
        .tab_text {
          font-size: 20px;
          font-weight: bold;
        }
        .menu_list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .menu {
          padding: 5%;
          font-size: 1rem;
        }
        .menu div {
          position: relative;
          display: flex;
          justify-content: space-between;
          margin: 5px 0;
          padding: 5px 0;
        }
        .menu div::after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          z-index: 1;
          width: 100%;
          border-bottom: dotted 1px #fff;
        }
        .menu dt{
          margin:0;
          padding: 0 5px 0 0;
          z-index: 2;
          text-align: left;
          background-color: #666;
          }
        .menu dd{
          margin:0;
          padding: 0 0 0 5px;
          z-index: 2;
          text-align: right;
          background-color: #666;
        }
        .open_chat_qr {
          width: 50%;
        }
        .seat_status {
          display: flex;
          justify-content: center;
        }
        .use_pricing_table {
          display: flex;
        }
        .board_game_list_wrapper {
          padding: 20px;
        }
        .board_game_list {
          height: 50vh;
          width: 100%;
          min-width: 100%;
          background: #fff;
          padding: 20px 10px 10px 10px;
          border: none;
          margin: 20px auto;
          -webkit-overflow-scrolling: touch;
          box-sizing: border-box;
        }
        .footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
          background-color: #333;
          color: #fff;
          padding: 20px 10%;
        }
        .shop_info {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        .shop_info_block {
          margin-top: 20px;
        }
        .shop_info_title {
          background-color: #666;
        }
        .left_text {
          text-align: left;
          padding-left: 3%;
        }
        .link {
          color: skyblue;
        }
        .contents_title {
          font-size: 25px;
          margin-top: 50px;
          box-shadow: 0 1px #fff;
        }
        .card {
          width: 100%;
          padding: 10px;
          margin: 20px 10px;
          background-color: #E6B8AF;
          box-shadow: 0px 2px #000;
          color: #000;
          font-size: 20px;
        }
        .card_title {
          margin-bottom: 12px;
        }
        .card_contents {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 64px;
          font-size: 24px;
          font-weight: bold;
          background-color: #E6D8CF;
        }
        .card_sub {
          min-height: 56px;
          text-align: left;
          padding: 8px 8px 0 24px;
        }
        .parking {
          padding: 5px;
        }
        @media screen and (max-width:480px) {
          .introduction {
            max-width: 300px;
            font-size: 14px;
          }
          .contents_title {
            font-size: 20px;
          }
          .card {
            font-size: 14px;
          }
          .card_contents {
            min-height: 32px;
            font-size: 14px;
            background-color: #E6D8CF;
          }
          .card_sub {
            min-height: initial;
            padding: initial;
          }
          .footer {
            flex-direction: column;
            align-items: center;
          }
          .map iframe {
            height: 100%;
            width: 100%;
          }
        }
      `}
      </style>
    </>
  )
}

export default Shacre